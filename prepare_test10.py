import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 找到第6个 if (!_9208) 块，并在内部添加临时变量，修改写入行
pattern = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([\s\S]*?)(\})'
def repl(match):
    block_body = match.group(2)
    # 在块内查找写入语句的行
    # 简单方法：在块内替换写入语句为两行
    new_body = re.sub(r'(cp_s3_1\._m0\[[^\]]+\]\s*=\s*)(uint\(_9392\);)', r'\1_temp_val;\n    uint _temp_val = \2', block_body)
    return match.group(1) + new_body + match.group(3)

content = re.sub(pattern, repl, content, count=1)

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

print("Generated test10.comp: split 6th cp_s3 write into two statements (temp variable)")
