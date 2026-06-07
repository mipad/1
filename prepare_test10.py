import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 找到所有 cp_s3 写入行（假设每行一条，且以分号结尾）
# 使用正则匹配行首空白 + cp_s3_1._m0[...] = ...;
pattern = r'^(\s*)(cp_s3_1\._m0\[[^\]]+\]\s*=\s*[^;]+;)\s*$'

matches = list(re.finditer(pattern, content, flags=re.MULTILINE))

if not matches:
    print("No cp_s3 writes found!")
    exit(1)

# 保留第一个匹配，其余注释掉
for i, match in enumerate(matches):
    indent = match.group(1)
    line = match.group(2)
    if i == 0:
        replacement = line  # 保留原行
    else:
        replacement = f"// {line}"  # 注释掉
    # 替换原行（注意需要精确替换该行的内容）
    start, end = match.start(), match.end()
    content = content[:start] + replacement + content[end:]

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file}: kept first cp_s3 write (line {matches[0].group(0).strip()[:50]}...), commented others")
