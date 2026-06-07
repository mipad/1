import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

# 根据你的实际 cp_s3 缓冲区大小修改这个值
# 建议先设一个很大的值（如 1048576）测试是否还崩溃，如果不再崩溃则说明是越界，然后再调整
CP_S3_SIZE = 65536   # 你可以根据需要修改

with open(input_file, "r") as f:
    content = f.read()

# 1. 替换 cp_s0 读取为 0.0f（与测试12相同）
content = re.sub(r'uintBitsToFloat\(cp_s0_1\._m0\[[^\]]*\]\)', '0.0f', content)

# 2. 为每个 cp_s3 写入添加边界检查
# 匹配模式：开头空格 + cp_s3_1._m0[索引] = 值;
# 注意：可能跨多行，但原始代码都是单行，所以用单行正则
def add_bounds_check(match):
    indent = match.group(1)           # 前面的空白
    full_line = match.group(2)        # 整行语句
    # 提取索引表达式（在方括号内）
    index_expr = re.search(r'cp_s3_1\._m0\[([^\]]+)\]', full_line).group(1)
    # 生成边界检查代码
    return (f'{indent}if (uint({index_expr}) < {CP_S3_SIZE}u) {{\n'
            f'{indent}    {full_line}\n'
            f'{indent}}}')

# 匹配以可选空白开头，然后 cp_s3_1._m0[...] = ... ; 的行
pattern = r'^(\s*)(cp_s3_1\._m0\[[^\]]+\]\s*=\s*[^;]+;)\s*$'
content = re.sub(pattern, add_bounds_check, content, flags=re.MULTILINE)

# 可选：在文件开头添加注释说明
content = f'// DEBUG VERSION: cp_s3 writes bounded to size {CP_S3_SIZE}\n' + content

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file} with cp_s3 bounds check (size={CP_S3_SIZE})")
