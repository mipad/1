import re
import sys


def patch_spvasm(input_path, output_path):
    with open(input_path, 'r') as f:
        lines = f.readlines()

    # 找最大纯数字 ID
    max_id = 0
    for line in lines:
        for m in re.finditer(r'%(\d+)', line):
            max_id = max(max_id, int(m.group(1)))

    # 找 int32 类型
    int_type_id = None
    for line in lines:
        s = line.strip()
        m = re.match(r'^(%[A-Za-z0-9_]+)\s*=\s*OpTypeInt\s+32\s+1\s*$', s)
        if m:
            int_type_id = m.group(1)
            break
    if not int_type_id:
        print("ERROR: no int32")
        return False

    # 找 bool 类型
    bool_type_id = None
    for line in lines:
        s = line.strip()
        m = re.match(r'^(%[A-Za-z0-9_]+)\s*=\s*OpTypeBool\s*$', s)
        if m:
            bool_type_id = m.group(1)
            break
    if not bool_type_id:
        print("ERROR: no bool")
        return False

    # 找 int32 的 0
    int_zero_id = None
    for line in lines:
        s = line.strip()
        m = re.match(r'^(%[A-Za-z0-9_]+)\s*=\s*OpConstant\s+' + re.escape(int_type_id) + r'\s+0\s*$', s)
        if m:
            int_zero_id = m.group(1)
            break
    if not int_zero_id:
        print("ERROR: no int 0")
        return False

    print(f"int_type={int_type_id}, int_zero={int_zero_id}, bool_type={bool_type_id}, max_id={max_id}")

    id_pat = r'%[A-Za-z0-9_]+'
    new_lines = []
    image_fetch_count = 0
    access_chain_count = 0

    for line in lines:
        s = line.strip()
        leading = line[:len(line) - len(line.lstrip())]
        nl = '\n' if line.endswith('\n') else ''

        # OpImageFetch
        m = re.match(
            r'^(' + id_pat + r')\s*=\s*OpImageFetch\s+(' + id_pat + r')\s+(' + id_pat + r')\s+(' + id_pat + r')(\s.*)?$',
            s
        )
        if m:
            result, img_type, sampler, coord, rest = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5) or ''
            max_id += 1
            lt_id = f'%{max_id}'
            max_id += 1
            sel_id = f'%{max_id}'
            new_lines.append(f'{leading}{lt_id} = OpSLessThan {bool_type_id} {coord} {int_zero_id}{nl}')
            new_lines.append(f'{leading}{sel_id} = OpSelect {int_type_id} {lt_id} {int_zero_id} {coord}{nl}')
            new_lines.append(f'{leading}{result} = OpImageFetch {img_type} {sampler} {sel_id}{rest}{nl}')
            image_fetch_count += 1
            continue

        # OpAccessChain (仅 StorageBuffer)
        m = re.match(
            r'^(' + id_pat + r')\s*=\s*OpAccessChain\s+(' + id_pat + r')\s+(' + id_pat + r')\s+((?:' + id_pat + r'\s*)+)$',
            s
        )
        if m:
            result, ptr_type, base, indices_str = m.group(1), m.group(2), m.group(3), m.group(4)
            if 'StorageBuffer' not in ptr_type:
                new_lines.append(line)
                continue
            indices = indices_str.split()
            last_idx = indices[-1]
            max_id += 1
            lt_id = f'%{max_id}'
            max_id += 1
            sel_id = f'%{max_id}'
            new_lines.append(f'{leading}{lt_id} = OpSLessThan {bool_type_id} {last_idx} {int_zero_id}{nl}')
            new_lines.append(f'{leading}{sel_id} = OpSelect {int_type_id} {lt_id} {int_zero_id} {last_idx}{nl}')
            new_indices = ' '.join(indices[:-1] + [sel_id])
            new_lines.append(f'{leading}{result} = OpAccessChain {ptr_type} {base} {new_indices}{nl}')
            access_chain_count += 1
            continue

        new_lines.append(line)

    print(f"Patched: {image_fetch_count} OpImageFetch, {access_chain_count} OpAccessChain")

    with open(output_path, 'w') as f:
        f.writelines(new_lines)
    return True


if __name__ == '__main__':
    if not patch_spvasm('original.spvasm', 'fixed.spvasm'):
        sys.exit(1)
