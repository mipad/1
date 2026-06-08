import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

def split_write_line(line):
    """将 cp_s3 写入行拆分为多步安全操作"""
    # 匹配 cp_s3_1._m0[索引] = 值;
    m = re.match(r'^(\s*)(cp_s3_1\._m0\[)([^\]]+)(\]\s*=\s*)([^;]+);', line)
    if not m:
        return line
    indent = m.group(1)
    index_expr = m.group(3).strip()
    value_expr = m.group(5).strip()
    return (f"{indent}int _tmp_idx = int({index_expr});\n"
            f"{indent}uint _idx = uint(_tmp_idx);\n"
            f"{indent}uint _val = {value_expr};\n"
            f"{indent}cp_s3_1._m0[int(_idx)] = _val;\n")

with open(input_file, "r") as f:
    lines = f.readlines()

cp_count = 0
out_lines = []
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_count += 1
        if cp_count <= 5:
            out_lines.append(line)                 # 前5个保留原样
        elif cp_count <= 8:
            out_lines.append(split_write_line(line)) # 第6-8个拆分
        else:
            out_lines.append("// " + line)         # 第9个及之后注释
    else:
        out_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(out_lines)

print(f"Generated {output_file}:")
print("  - Writes 1-5: unchanged")
print("  - Writes 6-8: split into safe steps")
print("  - Writes 9-16: commented")
