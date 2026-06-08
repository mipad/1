import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 替换第6个 if 块为更细致的拆分版本
pattern_if = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'

def repl(match):
    return """if (!_9208)
{
    uint _temp_shift = uint(_9376);
    uint _temp_shifted = _temp_shift >> 2u;
    uint _9394 = _temp_shifted;
    uint _temp_val = uint(_9392);
    cp_s3_1._m0[int(_9394)] = _temp_val;
}"""

content = re.sub(pattern_if, repl, content, count=1)

# 保留前5个 cp_s3 写入，注释其他
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)
        elif cp_s3_count == 6:
            output_lines.append(line)  # 保留修改后的第6个
        else:
            output_lines.append("// " + line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print("Generated test10.comp: split calculations into multiple steps")
