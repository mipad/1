import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 定位第6个 cp_s3 写入所在的 if (!_9208) 块并替换为分开版本
pattern_if = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'

def repl(match):
    # 提取原块内容，但我们将完全重写
    return """uint _9394;
if (!_9208)
{
    _9394 = uint(int(uint(_9376) >> uint(2)));
}
if (!_9208)
{
    cp_s3_1._m0[int(_9394)] = uint(_9392);
}"""

content = re.sub(pattern_if, repl, content, count=1)

# 注释掉所有其他 cp_s3 写入，但保留前5个和修改后的第6个（注意我们替换后的块中包含了两个 if，其中第二个有 cp_s3 写入）
# 我们需要精确识别：保留前5个原始 cp_s3 写入，以及我们新生成的 cp_s3 写入（即第二个 if 块中的那一行）
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)
        elif cp_s3_count == 6:
            # 这是新生成的写入行，我们保留它
            output_lines.append(line)
        else:
            output_lines.append("// " + line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print("Generated test10.comp: split 6th cp_s3 write into two separate if blocks")
