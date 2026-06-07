import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 1. 注释 cp_s3 写入行
content = re.sub(r'^(\s*cp_s3_1\._m0\[.*\] = .*;)\s*$', r'// \1', content, flags=re.MULTILINE)

# 2. 替换 cp_s0 读取为 0.0f
content = re.sub(r'uintBitsToFloat\(cp_s0_1\._m0\[[^\]]*\]\)', '0.0f', content)

# 3. 在第一次读取 _35 前插入 barrier()
content = re.sub(r'(\s*int _836 = _676 \+ 128;)', r'    barrier();\n\1', content)

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file}")