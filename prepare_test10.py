import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

# 选择测试模式: 'C2' 或 'C3'
TEST_MODE = 'C3'   # 修改此处

with open(input_file, "r") as f:
    content = f.read()

# 替换第6个 if 块
pattern_if = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'

def repl(match):
    if TEST_MODE == 'C2':
        # 保留 _9394 计算，写入值改为 0u
        return """if (!_9208)
{
    uint _9394 = uint(int(uint(_9376) >> uint(2)));
    cp_s3_1._m0[int(_9394)] = 0u;
}"""
    elif TEST_MODE == 'C3':
        # 保留 _9392 转换，索引固定为0
        return """if (!_9208)
{
    cp_s3_1._m0[0] = uint(_9392);
}"""
    else:
        return match.group(0)

content = re.sub(pattern_if, repl, content, count=1)

# 注释掉其他所有 cp_s3 写入，但保留前5个和修改后的第6个
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)          # 保留前5个原始写入
        elif cp_s3_count == 6:
            output_lines.append(line)          # 保留我们修改后的第6个写入（上面替换生成的）
        else:
            output_lines.append("// " + line)  # 注释第7个及之后
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file} with mode {TEST_MODE}")
