import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

def split_write(line):
    """将 cp_s3 写入语句拆分为多步安全操作"""
    match = re.match(r'^(\s*)(cp_s3_1\._m0\[)([^\]]+)(\]\s*=\s*)([^;]+);', line)
    if not match:
        return line
    indent = match.group(1)
    index_expr = match.group(3).strip()
    value_expr = match.group(5).strip()
    return (f"{indent}int _tmp_idx = int({index_expr});\n"
            f"{indent}uint _idx = uint(_tmp_idx);\n"
            f"{indent}uint _val = {value_expr};\n"
            f"{indent}cp_s3_1._m0[int(_idx)] = _val;\n")

with open(input_file, "r") as f:
    lines = f.readlines()

count = 0
output = []
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        count += 1
        if count <= 5:
            output.append(line)          # 前5个原样保留
        else:
            output.append(split_write(line))  # 第6个及之后拆分
    else:
        output.append(line)

with open(output_file, "w") as f:
    f.writelines(output)

print(f"Generated {output_file}: kept first 5 cp_s3 writes, split writes 6..{count}")
