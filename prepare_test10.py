import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    lines = f.readlines()

cp_s3_count = 0
output_lines = []

for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count == 6:
            # 提取值部分
            match = re.search(r'cp_s3_1\._m0\[[^\]]+\]\s*=\s*([^;]+);', line)
            if match:
                value = match.group(1).strip()
                output_lines.append(f"cp_s3_1._m0[0] = {value};\n")
            else:
                output_lines.append(line)  # fallback
        else:
            output_lines.append(f"// {line.rstrip()}\n")
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file}: kept only cp_s3 write #6 with fixed index 0")
