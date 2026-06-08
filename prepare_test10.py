import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

# 选择测试模式: 'C2' 或 'C3'
TEST_MODE = 'C2'   # 修改此处

with open(input_file, "r") as f:
    lines = f.readlines()

# 找到第6个 cp_s3 写入的行号
cp_s3_indices = [i for i, line in enumerate(lines) if re.match(r'^\s*cp_s3_1\._m0\[', line)]
if len(cp_s3_indices) < 6:
    print("Error: less than 6 cp_s3 writes")
    exit(1)
target_idx = cp_s3_indices[5]

# 向上查找最近的 "if (!_9208)" 行
if_start = None
for i in range(target_idx, -1, -1):
    if re.search(r'if\s*\(\s*!_\s*9208\s*\)', lines[i]):
        if_start = i
        break
if if_start is None:
    print("Error: cannot find if (!_9208)")
    exit(1)

# 找到花括号范围
brace_start = None
for i in range(if_start, len(lines)):
    if '{' in lines[i]:
        brace_start = i
        break
if brace_start is None:
    print("Error: cannot find '{'")
    exit(1)

balance = 0
brace_end = None
for i in range(brace_start, len(lines)):
    for ch in lines[i]:
        if ch == '{':
            balance += 1
        elif ch == '}':
            balance -= 1
            if balance == 0:
                brace_end = i
                break
    if brace_end is not None:
        break
if brace_end is None:
    print("Error: cannot find matching '}'")
    exit(1)

print(f"Replacing lines {if_start+1}-{brace_end+1}")

# 构建替换内容
indent = re.match(r'^(\s*)', lines[if_start]).group(1)
if TEST_MODE == 'C2':
    replacement = [
        f"{indent}if (!_9208)\n",
        f"{indent}{{\n",
        f"{indent}    uint _9394 = uint(int(uint(_9376) >> uint(2)));\n",
        f"{indent}    cp_s3_1._m0[int(_9394)] = 0u;\n",
        f"{indent}}}\n"
    ]
elif TEST_MODE == 'C3':
    replacement = [
        f"{indent}if (!_9208)\n",
        f"{indent}{{\n",
        f"{indent}    cp_s3_1._m0[0] = uint(_9392);\n",
        f"{indent}}}\n"
    ]
else:
    replacement = []

# 构建输出，并注释其他 cp_s3 写入
output_lines = []
cp_s3_count = 0
i = 0
while i < len(lines):
    if i == if_start:
        output_lines.extend(replacement)
        i = brace_end + 1
        continue
    if re.match(r'^\s*cp_s3_1\._m0\[', lines[i]):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(lines[i])
        elif cp_s3_count == 6:
            # 第6个写入已被替换，按理不会出现，但为了安全保留原行（但通常已被跳过）
            output_lines.append(lines[i])
        else:
            output_lines.append("// " + lines[i])
    else:
        output_lines.append(lines[i])
    i += 1

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file} with mode {TEST_MODE}")
