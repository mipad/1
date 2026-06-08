import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

def split_write(match):
    indent = match.group(1)
    full_stmt = match.group(2).rstrip(';')  # 去掉结尾分号
    # 提取索引表达式
    index_match = re.search(r'cp_s3_1\._m0\[([^\]]+)\]', full_stmt)
    if not index_match:
        return full_stmt
    index_expr = index_match.group(1)
    # 提取值表达式
    value_match = re.search(r'=\s*(.+)$', full_stmt)
    if not value_match:
        return full_stmt
    value_expr = value_match.group(1).strip()
    # 生成拆分后的代码
    return (f"{indent}int _tmp_idx = int({index_expr});\n"
            f"{indent}uint _idx = uint(_tmp_idx);\n"
            f"{indent}uint _val = {value_expr};\n"
            f"{indent}cp_s3_1._m0[int(_idx)] = _val;\n")

pattern = r'^(\s*)(cp_s3_1\._m0\[[^\]]+\]\s*=\s*[^;]+;)\s*$'
content = re.sub(pattern, split_write, content, flags=re.MULTILINE)

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file}: all cp_s3 writes split into safe steps")
