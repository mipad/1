import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 仅注释所有 cp_s3 写入行，不修改 cp_s0 读取
content = re.sub(
    r'^(\s*cp_s3_1\._m0\[.*\] = .*;)\s*$',
    r'// \1',
    content,
    flags=re.MULTILINE
)

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file} (cp_s0 unchanged, cp_s3 writes commented)")
