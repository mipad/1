import re
import sys


def patch_spvasm(input_path, output_path):
    with open(input_path, 'r') as f:
        lines = f.readlines()

    # 找最大纯数字 ID，用于生成新 ID
    max_id = 0
    for line in lines:
        for m in re.finditer(r'%(\d+)', line):
            max_id = max(max_id, int(m.group(1)))

    # 找 int32 类型（signed 32-bit）
    int_type_id = None
    for line in lines:
        s = line.strip()
        m = re.match(r'^(%[A-Za-z0-9_]+)\s*=\s*OpTypeInt\s+32\s+1\s*$', s)
        if m:
            int_type_id = m.group(1)
            break

    if not int_type_id:
        print("ERROR: cannot find int32 signed type")
        return False

    # 找该类型的零常量
    int_zero_id = None
    for line in lines:
        s = line.strip()
        m = re.match(r'^(%[A-Za-z0-9_]+)\s*=\s*OpConstant\s+' + re.escape(int_type_id) + r'\s+0\s*$', s)
        if m:
            int_zero_id = m.group(1)
            break

    if not int_zero_id:
        print(f"ERROR: cannot find int zero constant (type={int_type_id})")
        return False

    print(f"int_type={int_type_id}, int_zero={int_zero_id}, max_id={max_id}")

    id_pat = r'%[A-Za-z0-9_]+'

    new_lines = []
    image_fetch_count = 0
    access_chain_count = 0

    for line in lines:
        stripped = line.rstrip('\n').rstrip()
        leading = line[:len(line) - len(line.lstrip())]
        trailing_newline = '\n' if line.endswith('\n') else ''

        # %N = OpImageFetch %type %img %coord [rest...]
        m = re.match(
            r'^(' + id_pat + r')\s*=\s*OpImageFetch\s+(' + id_pat + r')\s+(' + id_pat + r')\s+(' + id_pat + r')(\s.*)?$',
            stripped
        )
        if m:
            result, img_type, sampler, coord, rest = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5) or ''
            max_id += 1
            safe_id = f'%{max_id}'
            new_lines.append(f'{leading}{safe_id} = OpSMax {int_type_id} {coord} {int_zero_id}{trailing_newline}')
            new_lines.append(f'{leading}{result} = OpImageFetch {img_type} {sampler} {safe_id}{rest}{trailing_newline}')
            image_fetch_count += 1
            continue

        # %N = OpAccessChain %_ptr_StorageBuffer_... %base %idx0 %idx1
        m = re.match(
            r'^(' + id_pat + r')\s*=\s*OpAccessChain\s+(' + id_pat + r')\s+(' + id_pat + r')\s+(' + id_pat + r')\s+(' + id_pat + r')\s*$',
            stripped
        )
        if m:
            result, ptr_type, base, idx0, idx1 = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
            # 只处理 StorageBuffer 指针类型
            if 'StorageBuffer' not in ptr_type:
                new_lines.append(line)
                continue
            max_id += 1
            safe_id = f'%{max_id}'
            new_lines.append(f'{leading}{safe_id} = OpSMax {int_type_id} {idx1} {int_zero_id}{trailing_newline}')
            new_lines.append(f'{leading}{result} = OpAccessChain {ptr_type} {base} {idx0} {safe_id}{trailing_newline}')
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
