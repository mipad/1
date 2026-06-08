import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 匹配每个 cp_s3 写入语句（假设单行）
def split_write(match):
    indent = match.group(1)                     # 前导空白
    array_part = match.group(2)                # 包括数组索引的部分
    value_part = match.group(3).strip().rstrip(';')  # 值部分，去掉结尾分号
    # 提取索引表达式（方括号内的内容）
    index_expr = re.search(r'\[([^\]]+)\]', array_part).group(1)
    # 生成拆分后的代码
    return (f"{indent}int _tmp_idx = int({index_expr});\n"
            f"{indent}uint _idx = uint(_tmp_idx);\n"
            f"{indent}uint _val = {value_part};\n"
            f"{indent}cp_s3_1._m0[int(_idx)] = _val;\n")

# 正则匹配整行：可选空白 + cp_s3_1._m0[ ... ] = ... ;
pattern = r'^(\s*)(cp_s3_1\._m0\[[^\]]+\]\s*=\s*[^;]+;)\s*$'
content = re.sub(pattern, split_write, content, flags=re.MULTILINE)

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file}: all cp_s3 writes split into safe steps")
