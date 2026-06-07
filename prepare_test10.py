import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"   # 因为工作流只认 test10.comp

with open(input_file, "r") as f:
    lines = f.readlines()

cp_s3_write_count = 0
output_lines = []

for line in lines:
    # 匹配以可选空白开头，然后是 cp_s3_1._m0[ 的赋值语句（以分号结尾）
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_write_count += 1
        if cp_s3_write_count == 1:
            output_lines.append(line)          # 保留第一个写入
        else:
            output_lines.append("// " + line)  # 注释其余写入
    else:
        output_lines.append(line)              # 其他行原样保留

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file}: kept first cp_s3 write, commented others")
