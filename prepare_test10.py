import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 1. 修复第6个写入所在的 if (!_9208) 块
pattern_if = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'
def fix_write(match):
    block_body = match.group(2)
    lines = block_body.strip().split('\n')
    new_lines = []
    for line in lines:
        if 'cp_s3_1._m0[' in line:
            indent = line[:len(line)-len(line.lstrip())]
            new_lines.append(f"{indent}uint _temp_val = uint(_9392);")
            new_lines.append(f"{indent}cp_s3_1._m0[int(_9394)] = _temp_val;")
        else:
            new_lines.append(line.rstrip())
    return match.group(1) + "\n" + "\n".join(new_lines) + "\n" + match.group(3)

content = re.sub(pattern_if, fix_write, content, count=1)

# 2. 注释掉所有 cp_s3 写入，但保留前5个和已经修复的第6个
# 逐行处理
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)          # 保留前5个原始写入
        elif cp_s3_count == 6:
            # 第6个写入已经被替换为两行，但这里的正则可能匹配不到新行（因为新行中有 cp_s3_1._m0[ 但可能缩进不同）
            # 简单起见，我们直接保留已经处理过的第6个块，但需要确保它不会被注释。
            # 由于我们是在替换后处理，此时第6个写入已经变成两行，其中第二行包含 cp_s3_1._m0[。
            # 我们需要识别它。
            # 更好的方法：不在这里按行注释，而是直接保留所有行，因为前5个和修复后的第6个都已经保留，第7之后才注释。
            # 但因为我们不知道哪行是第7个，所以需要维护一个计数器。
            # 简单处理：跳过，因为我们已经在上面替换了第6个的 if 块，该块内语句不会被这个循环单独注释，但为了保险，可以不对第6个写入的 if 块内的行进行额外注释。
            # 实际上，由于我们是在替换后才逐行扫描，第6个写入的 if 块已经被替换成新的代码，其中包含的 cp_s3_1._m0[ 行仍然会被匹配到，但是 cp_s3_count 会递增，我们需要避免对它进行注释。
            # 这里我们直接让第6个写入的行保留（不注释），所以需要判断 cp_s3_count == 6 时，保留该行。
            output_lines.append(line)
        else:
            output_lines.append("// " + line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print("Generated test10.comp: kept first 5 writes + fixed 6th write, commented others")
