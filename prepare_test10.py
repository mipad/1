import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 1. 替换第6个 if 块为 cp_s3_1._m0[0] = 0u;
pattern_if = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'
def replace_to_simple(match):
    return "cp_s3_1._m0[0] = 0u;"

content = re.sub(pattern_if, replace_to_simple, content, count=1)

# 2. 注释掉所有 cp_s3 写入，但保留前5个和刚才生成的简单写入
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)  # 保留前5个原始写入
        elif cp_s3_count == 6:
            # 保留我们替换后的简单写入
            output_lines.append(line)
        else:
            output_lines.append("// " + line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print("Generated test10.comp: kept first 5 writes + simplified 6th write (0,0)")
