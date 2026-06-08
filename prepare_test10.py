import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

def split_write_stmt(line: str) -> str:
    """将 cp_s3 写入语句拆分为多步安全操作。"""
    # 匹配 cp_s3_1._m0[ 索引 ] = 值 ;
    # 索引和值可能包含复杂表达式，但原始形式如 int(_9394) 和 uint(_9392)
    match = re.match(r'^(\s*)(cp_s3_1\._m0\[)([^\]]+)(\]\s*=\s*)([^;]+);', line)
    if not match:
        return line  # 不应该发生，但保底
    indent = match.group(1)
    index_expr = match.group(3).strip()
    value_expr = match.group(5).strip()
    # 生成拆分代码
    return (f"{indent}int _tmp_idx = int({index_expr});\n"
            f"{indent}uint _idx = uint(_tmp_idx);\n"
            f"{indent}uint _val = {value_expr};\n"
            f"{indent}cp_s3_1._m0[int(_idx)] = _val;\n")

with open(input_file, "r") as f:
    lines = f.readlines()

cp_s3_count = 0
output_lines = []

for line in lines:
    # 检查是否为 cp_s3 写入行
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)          # 前5个原样保留
        else:
            output_lines.append(split_write_stmt(line))  # 第6个及之后拆分
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file}: kept first 5 cp_s3 writes, split writes 6..{cp_s3_count}")
