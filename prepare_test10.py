import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

# 选择测试模式: 'A' 或 'B'
TEST_MODE = 'B'   # 改为 'B' 进行测试B

with open(input_file, "r") as f:
    content = f.read()

# 定位第6个 cp_s3 写入所在的 if (!_9208) 块并替换
pattern = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'

def repl(match):
    if TEST_MODE == 'A':
        # 保留 _9394 计算，写入改为 cp_s3_1._m0[0] = 0u;
        block_body = match.group(2)
        lines = block_body.strip().split('\n')
        new_body = []
        for line in lines:
            if re.search(r'uint\s+_9394\s*=', line):
                new_body.append(line.rstrip())
        new_body.append("    cp_s3_1._m0[0] = 0u;")
        return match.group(1) + "\n" + "\n".join(new_body) + "\n" + match.group(3)
    elif TEST_MODE == 'B':
        # 注释 _9394 计算，写入改为 cp_s3_1._m0[0] = uint(_9392);
        block_body = match.group(2)
        lines = block_body.strip().split('\n')
        new_body = []
        for line in lines:
            if re.search(r'uint\s+_9394\s*=', line):
                new_body.append("    // " + line.lstrip())
            elif re.search(r'cp_s3_1\._m0\[', line):
                new_body.append("    cp_s3_1._m0[0] = uint(_9392);")
            else:
                new_body.append(line.rstrip())
        return match.group(1) + "\n" + "\n".join(new_body) + "\n" + match.group(3)
    else:
        return match.group(0)

content = re.sub(pattern, repl, content, count=1)

# 注释所有其他 cp_s3 写入（保留刚修改的写入）
lines = content.splitlines(keepends=True)
output_lines = []
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        # 如果是我们保留的写入（索引0且未被注释），则保留
        if 'cp_s3_1._m0[0]' in line and not line.lstrip().startswith('//'):
            output_lines.append(line)
        else:
            output_lines.append("// " + line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file} with mode {TEST_MODE}")
