import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

# 要保留的 cp_s3 写入个数（从1开始，逐步增大）
KEEP_COUNT = 8

with open(input_file, "r") as f:
    lines = f.readlines()

# 统计所有 cp_s3 写入行
total_writes = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        total_writes += 1

# 逐行处理
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= KEEP_COUNT:
            output_lines.append(line)          # 保留前 KEEP_COUNT 个写入
        else:
            output_lines.append("// " + line)  # 注释掉其余的
    else:
        output_lines.append(line)

# 在文件开头添加注释（不影响 #version 的位置）
header = f"// Generated: kept first {KEEP_COUNT} of {total_writes} total cp_s3 writes\n"
with open(output_file, "w") as f:
    f.write(header)
    f.writelines(output_lines)

print(f"Generated {output_file}: kept first {KEEP_COUNT} cp_s3 writes (total {total_writes})")
