import re

input_file = "BBFC05FA3DE7666C.comp"
output_file = "test10.comp"

with open(input_file, "r") as f:
    content = f.read()

# 1. 找到第6个 cp_s3 写入所在的 if (!_9208) 块并替换为简单赋值
# 使用正则匹配 if (!_9208) { ... }，假设内部没有嵌套大括号（原始文件符合）
pattern = r'(if\s*\(\s*!_\s*9208\s*\)\s*\{)([^{}]*)(\})'
# 替换整个块为 cp_s3_1._m0[0] = 0u;
# 注意保持缩进？这里简单替换，可能破坏缩进但不影响编译
content = re.sub(pattern, r'cp_s3_1._m0[0] = 0u;', content, count=1)

# 2. 注释所有其他 cp_s3 写入（包括可能未被替换的）
# 匹配以可选空白开头，然后 cp_s3_1._m0[ 的行
def comment_other(match):
    # 保留原行但加注释
    return "// " + match.group(0)

# 注意：不要匹配已经被替换的那一行（已变为 cp_s3_1._m0[0] = 0u;），它也会被匹配到，所以我们在替换后再进行注释
# 但是因为我们已经将整个 if 块替换成简单语句，该语句也会被下面的正则匹配到，从而被错误注释。
# 所以需要先标记替换后的行不被注释。简单方法：先替换，再注释时排除已经变成 cp_s3_1._m0[0] = 0u; 的行。
# 更简单：先注释所有 cp_s3 写入，再单独恢复第6个（但我们已经替换了块，不易恢复）。
# 这里采用两步：先备份替换后的内容，然后注释所有 cp_s3 写入，最后手动将我们想要的那一行改回来。
# 下面采用更稳健的方法：逐行处理。

# 为了清晰，使用逐行处理法（之前脚本已验证可行），但此处用正则会复杂。直接使用之前的逐行逻辑：
# 重新读入文件，逐行处理。
lines = content.splitlines(keepends=True)
output_lines = []
cp_s3_count = 0
in_target_block = False  # 标记是否处于要替换的块中（但我们已经用正则替换过了，所以这里直接用新内容）

# 由于我们已经用正则替换过，现在 content 中只包含一条 cp_s3_1._m0[0] = 0u; 作为第6个写入的替代。
# 我们需要注释其他所有 cp_s3 写入，但保留这一条。

# 因此重新解析 lines
for line in lines:
    if re.match(r'^\s*cp_s3_1\._m0\[', line):
        cp_s3_count += 1
        # 检查这一行是不是我们想要保留的（即写入索引为0且值为0）
        if re.search(r'cp_s3_1\._m0\[0\]\s*=\s*0u\s*;', line):
            output_lines.append(line)  # 保留
        else:
            output_lines.append("// " + line)  # 注释
    else:
        output_lines.append(line)

with open(output_file, "w") as f:
    f.writelines(output_lines)

print(f"Generated {output_file}: kept only simplified 6th cp_s3 write as cp_s3_1._m0[0]=0u, commented others")
