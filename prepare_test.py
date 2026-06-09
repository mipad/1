import re

input_file = "882C700EBC5FADF5_Compute.glsl"
output_file = "test_fixed.comp"

with open(input_file, "r") as f:
    content = f.read()

# 1. 找到 main 函数体
main_match = re.search(r'(void main\(\)\s*\{)([\s\S]*?)(\})', content)
if not main_match:
    print("Cannot find main function")
    exit(1)

prefix = main_match.group(1)
body = main_match.group(2)
suffix = main_match.group(3)

# 2. 在 body 开头添加 bool active = true;
lines = body.split('\n')
new_body = []
injected_flag = False
for i, line in enumerate(lines):
    new_body.append(line)
    if not injected_flag and line.strip().startswith('{'):
        new_body.insert(new_body.index(line) + 1, '    bool active = true;')
        injected_flag = True
# 如果没找到开头的 '{'，直接在 body 开头插入
if not injected_flag:
    new_body.insert(0, '    bool active = true;')

body = '\n'.join(new_body)

# 3. 替换第一个 early return
# 匹配 "if (!_95) { return; }" 可能跨行
pattern_early_return = r'(if\s*\(\s*!_95\s*\)\s*\{\s*return;\s*\})'
def replace_early_return(match):
    return 'if (!_95) { active = false; }'
body = re.sub(pattern_early_return, replace_early_return, body, count=1)

# 4. 找到第一个 barrier 的位置，将其后的代码包裹在 if (active) 中
# 由于代码中可能有多个 barrier，我们只处理第一个 barrier 之后的所有代码（直到 main 结束）
# 使用括号匹配找到第一个 barrier 之后的代码块
lines = body.split('\n')
barrier_line_idx = -1
for i, line in enumerate(lines):
    if re.match(r'^\s*barrier\(\);', line):
        barrier_line_idx = i
        break

if barrier_line_idx == -1:
    print("No barrier found")
    exit(1)

# 从 barrier 后一行开始，找到 main 函数的结束位置（即匹配大括号）
# 但由于 body 不包含最外层的大括号，我们只需处理到 body 末尾即可
# 简单地将 barrier 之后的所有行缩进并包裹在 if (active) 中
before_barrier = lines[:barrier_line_idx+1]
after_barrier = lines[barrier_line_idx+1:]

# 处理 after_barrier 中可能存在的第二个 return
# 将第二个 return 也替换为设置标志，但由于我们已经要包裹在 if (active) 内，可以直接 return，但为了安全，仍然替换
new_after = []
for line in after_barrier:
    if re.match(r'^\s*if\s*\(\s*!_347\s*\)\s*\{\s*return;\s*\}', line):
        new_after.append('    if (!_347) { active = false; }')
    else:
        new_after.append(line)

# 将 after_barrier 的所有行增加一层缩进
indented_after = ['    ' + line if line.strip() else line for line in new_after]

# 包裹
wrapped_after = [
    '    if (active) {',
    *indented_after,
    '    }'
]

new_body = '\n'.join(before_barrier + wrapped_after)

# 重新组装
new_content = prefix + new_body + suffix

with open(output_file, "w") as f:
    f.write(new_content)

print(f"Generated {output_file} with early return fix using active flag.")
