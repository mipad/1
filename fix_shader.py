import re

with open("shader.glsl", "r", encoding="utf-8") as f:
    code = f.read()

# 1) 修复 _33 所有动态索引，钳到 0..1983
code = re.sub(r'_33\[([^\]]+)\]', r'_33[clamp(\1, 0, 1983)]', code)

# 2) 把被误改的数组声明改回来
code = code.replace(
    'shared uint _33[clamp(1984, 0, 1983)];',
    'shared uint _33[1984];'
)

# 3) cp_s0_1._m0 防负索引（上限交给 robustBufferAccess）
code = re.sub(
    r'cp_s0_1\._m0\[([^\]]+)\]',
    r'cp_s0_1._m0[max(\1, 0)]',
    code
)

with open("shader_fixed.glsl", "w", encoding="utf-8") as f:
    f.write(code)

print("done: shader_fixed.glsl")
