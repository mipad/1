import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

# 可根据实际缓冲区大小修改此值
CP_S3_SIZE = 65536

with open(input_file, "r") as f:
    lines = f.readlines()

cp_s3_count = 0
output_lines = []

# 先添加宏定义（放在 #version 之后，不影响解析）
version_line_index = -1
for i, line in enumerate(lines):
    if line.startswith("#version"):
        version_line_index = i
        break

# 插入宏定义
if version_line_index != -1:
    output_lines.append(lines[version_line_index])          # 保留 #version
    output_lines.append(f"#define CP_S3_SIZE {CP_S3_SIZE}u\n")
    # 继续添加后面的行，但需要跳过 #version 那一行
    for j in range(version_line_index + 1, len(lines)):
        line = lines[j]
        if re.match(r'^\s*cp_s3_1\._m0\[', line):
            cp_s3_count += 1
            if cp_s3_count == 6:
                # 保留第6个写入，并添加边界检查
                # 提取前导空格
                indent_match = re.match(r'^(\s*)', line)
                indent = indent_match.group(1) if indent_match else ""
                # 原语句去掉末尾换行
                stmt = line.rstrip()
                # 替换成带 if 的版本
                # 注意：需要提取索引表达式，以便在 if 条件中使用
                # 匹配 cp_s3_1._m0[ 索引 ] = 值 ;
                # 简化：直接使用原语句，但我们需要索引变量名，假设索引表达式是单一的变量或简单表达式
                # 更可靠的方法：用正则提取方括号内的内容
                index_match = re.search(r'cp_s3_1\._m0\[([^\]]+)\]', stmt)
                if index_match:
                    index_expr = index_match.group(1).strip()
                    # 生成新代码
                    output_lines.append(f"{indent}if (uint({index_expr}) < CP_S3_SIZE) {{\n")
                    output_lines.append(f"{indent}    {stmt}\n")
                    output_lines.append(f"{indent}}}\n")
                else:
                    # 如果无法提取索引，直接注释掉并报错
                    output_lines.append(f"// {stmt}\n")
                    print(f"Warning: cannot extract index from line: {stmt}")
            else:
                # 注释其他写入
                output_lines.append(f"// {line.rstrip()}\n")
        else:
            output_lines.append(line)
else:
    # 如果没有 #version，直接从头处理
    print("Warning: no #version line found, adding define at top")
    output_lines.append(f"#define CP_S3_SIZE {CP_S3_SIZE}u\n")
    for line in lines:
        if re.match(r'^\s*cp_s3_1\._m0\[', line):
            cp_s3_count += 1
            if cp_s3_count == 6:
                # 同上
                indent_match = re.match(r'^(\s*)', line)
                indent = indent_match.group(1) if indent_match else ""
                stmt = line.rstrip()
                index_match = re.search(r'cp_s3_1\._m0\[([^\]]+)\]', stmt)
                if index_match:
                    index_expr = index_match.group(1).strip()
                    output_lines.append(f"{indent}if (uint({index_expr}) < CP_S3_SIZE) {{\n")
                    output_lines.append(f"{indent}    {stmt}\n")
                    output_lines.append(f"{indent}}}\n")
                else:
                    output_lines.append(f"// {stmt}\n")
            else:
                output_lines.append(f"// {line.rstrip()}\n")
        else:
            output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file}: kept only cp_s3 write #6 with bounds check (size={CP_S3_SIZE})")
