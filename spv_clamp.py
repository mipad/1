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

    # DEBUG：打印实际 OpImageFetch 和 OpAccessChain 样本
    op_fetch_lines = [l for l in lines if 'OpImageFetch' in l]
    op_ac_lines = [l for l in lines if 'OpAccessChain' in l]
    print(f"DEBUG: total OpImageFetch lines: {len(op_fetch_lines)}")
    for l in op_fetch_lines[:3]:
        print(f"  {l.rstrip()}")
    print(f"DEBUG: total OpAccessChain lines: {len(op_ac_lines)}")
    for l in op_ac_lines[:3]:
        print(f"  {l.rstrip()}")

    id_pat = r'%[A-Za-z0-9_]+'

    new_lines = []
    image_fetch_count = 0
    access_chain_count = 0

    for line in lines:
        s = line.strip()

        # 匹配 OpImageFetch：%N = OpImageFetch %type %img %coord [rest...]
        m = re.match(
            r'^(' + id_pat + r')\s*=\s*OpImageFetch\s+(' + id_pat + r')\s+(' + id_pat + r')\s+(' + id_pat + r')(\s.*)?$',
            s
        )
        if m:
            result, img_type, sampler, coord, rest = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5) or ''
            max_id += 1
            safe_id = f'%{max_id}'
            leading = line[:len(line) - len(line.lstrip())]
            trailing_newline = '\n' if line.endswith('\n') else ''
            new_lines.append(f'{leading}{safe_id} = OpSMax {int_type_id} {coord} {int_zero_id}{trailing_newline}')
            new_lines.append(f'{leading}{result} = OpImageFetch {img_type} {sampler} {safe_id}{rest}{trailing_newline}')
            image_fetch_count += 1
            continue

        # 匹配 OpAccessChain：%N = OpAccessChain %type %base %idx0 [%idx1 ...]
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
            safe_id = f'%{max_id}'
            leading = line[:len(line) - len(line.lstrip())]
            trailing_newline = '\n' if line.endswith('\n') else ''
            new_lines.append(f'{leading}{safe_id} = OpSMax {int_type_id} {last_idx} {int_zero_id}{trailing_newline}')
            new_indices = ' '.join(indices[:-1] + [safe_id])
            new_lines.append(f'{leading}{result} = OpAccessChain {ptr_type} {base} {new_indices}{trailing_newline}')
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
