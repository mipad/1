import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 替换第6个 if 块
pattern_if = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([\s\S]*?)(\})'
def repl(match):
    block_body = match.group(2)
    # 将写入语句拆分成多步
    new_body = re.sub(
        r'(cp_s3_1\._m0\[[^\]]+\]\s*=\s*)(uint\(_9392\);)',
        r'int _tmp_idx = int(_9394);\n    uint _idx = uint(_tmp_idx);\n    uint _val = \2;\n    cp_s3_1._m0[int(_idx)] = _val;',
        block_body
    )
    return match.group(1) + new_body + match.group(3)

content = re.sub(pattern_if, repl, content, count=1)

# 注释掉第7个及之后的 cp_s3 写入（保留前5个和第6个修改后的）
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        if cp_s3_count <= 5:
            output_lines.append(line)
        else:
            # 第6个及之后的行，但我们希望保留第6个新生成的写入，需要判断一下
            # 这里简单处理：如果行中包含 '_idx' 或 '_val'，认为是新生成的，保留
            if '_idx' in line or '_val' in line:
                output_lines.append(line)
            else:
                output_lines.append("// " + line)
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print("Generated test10.comp: kept first 5 writes, split 6th write, commented others")
