import re

input_file = "BBFC05FA3DE7666C.comp"
TARGET = 7   # 改成你要测试的写入编号，比如 7,8,9,...,16
output_file = "test10.comp"

with open(input_file, "r") as f:
    lines = f.readlines()

cp_count = 0
out_lines = []
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_count += 1
        if cp_count <= 5:
            out_lines.append(line)          # 保留前5个
        elif cp_count == TARGET:
            out_lines.append(line)          # 只保留第 TARGET 个
        else:
            out_lines.append("// " + line)  # 注释其他所有
    else:
        out_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(out_lines)

print(f"Generated {output_file}: kept writes 1-5 and write #{TARGET}")
