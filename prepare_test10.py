import re

input_file = "BBFC05FA3DE7666C.comp"   # 确保这个文件是你贴出的完整代码
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 找到所有 cp_s3 写入行（假设每行一条，且不跨行）
pattern = r'^(\s*)(cp_s3_1\._m0\[[^\]]+\]\s*=\s*[^;]+;)\s*$'
matches = list(re.finditer(pattern, content, flags=re.MULTILINE))

if not matches:
    print("No cp_s3 writes found!")
    exit(1)

# 保留第一个匹配，其余注释掉
for i, match in enumerate(matches):
    indent = match.group(1)
    line = match.group(2)
    start, end = match.start(), match.end()
    if i == 0:
        replacement = line
    else:
        replacement = f"// {line}"
    content = content[:start] + replacement + content[end:]

# 注意：不要替换 cp_s0 读取，因为测试14需要真实的 cp_s0 数据

with open(output_file, "w") as f:
    f.write(content)

print(f"Generated {output_file} (kept first cp_s3 write, commented others)")
