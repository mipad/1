import re

input_file = "882C700EBC5FADF5_Compute.glsl"
output_file = "test_fixed.comp"

print(f"Reading {input_file}...")
with open(input_file, "r") as f:
    content = f.read()

# 1. 查找 main 函数体
main_match = re.search(r'(void main\(\)\s*\{)([\s\S]*?)(\})', content)
if not main_match:
    raise Exception("Could not find main() function")

prefix = main_match.group(1)
body = main_match.group(2)
suffix = main_match.group(3)

print("Main function body found.")

# 2. 在 body 开头添加 bool active = true;
body = "    bool active = true;\n" + body

# 3. 替换第一个 early return (if (!_95) { return; })
pattern_early = r'if\s*\(\s*!_95\s*\)\s*\{\s*return;\s*\}'
if re.search(pattern_early, body):
    body = re.sub(pattern_early, 'if (!_95) { active = false; }', body, count=1)
    print("Replaced early return.")
else:
    print("Warning: Could not find early return pattern. Proceeding anyway.")

# 4. 查找第一个 barrier() 的位置（使用更宽松的正则）
lines = body.split('\n')
barrier_idx = -1
for i, line in enumerate(lines):
    if re.search(r'^\s*barrier\s*\(\s*\)\s*;', line):
        barrier_idx = i
        break

if barrier_idx == -1:
    raise Exception("No barrier() found in shader. Please check the source.")

print(f"Found barrier() at line {barrier_idx+1}")

# 分割
before_barrier = lines[:barrier_idx+1]
after_barrier = lines[barrier_idx+1:]

# 5. 处理 after_barrier 中的第二个 return (if (!_347) { return; })
new_after = []
for line in after_barrier:
    if re.search(r'if\s*\(\s*!_347\s*\)\s*\{\s*return;\s*\}', line):
        new_after.append('    if (!_347) { active = false; }')
    else:
        new_after.append(line)

# 6. 将 after_barrier 缩进并包裹在 if (active) 中
indented_after = ['    ' + ln if ln.strip() else ln for ln in new_after]
wrapped_after = [
    '    if (active) {',
    *indented_after,
    '    }'
]

new_body = '\n'.join(before_barrier + wrapped_after)
final_content = prefix + new_body + suffix

with open(output_file, "w") as f:
    f.write(final_content)

print(f"Successfully generated {output_file}")
