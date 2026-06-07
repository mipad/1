import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 1. 替换 cp_s0 读取为 0.0f（与测试10相同）
content = re.sub(
    r'uintBitsToFloat\(cp_s0_1\._m0\[[^\]]*\]\)',
    '0.0f',
    content
)

# 2. 不要注释 cp_s3 写入行（所以什么都不做）

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file} (cp_s0 = 0.0f, cp_s3 writes enabled)")
