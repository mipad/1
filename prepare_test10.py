import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    lines = f.readlines()

target_index = 6  # 要注释的第几个写入（从1开始）
cp_s3_count = 0
output_lines = []

for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count == target_index:
            output_lines.append("// " + line)
        else:
            output_lines.append(line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file}: commented only cp_s3 write #{target_index}")
