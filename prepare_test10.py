import re

input_file = "test10.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 取消注释所有被注释的 cp_s3 写入行（删除行首的 "// "）
# 注意：原始 test10.comp 中 cp_s3 写入行已被注释为 "// cp_s3_1._m0[...] = ...;"
content = re.sub(
    r'^//\s*(cp_s3_1\._m0\[.*\] = .*;)\s*$',
    r'\1',
    content,
    flags=re.MULTILINE
)

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file} (cp_s0 remains 0.0f, cp_s3 writes restored)")
