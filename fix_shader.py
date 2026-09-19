import re

with open("shader.glsl", "r", encoding="utf-8") as f:
    code = f.read()

# ========== 1. 补回 DescriptorSet ==========
code = code.replace(
    'layout(binding = 0, std140) uniform support_buffer',
    'layout(set = 0, binding = 0, std140) uniform support_buffer'
)
code = code.replace(
    'layout(binding = 2, std140) uniform cp_c1',
    'layout(set = 0, binding = 2, std140) uniform cp_c1'
)
code = code.replace(
    'layout(binding = 4, std140) uniform cp_c3',
    'layout(set = 0, binding = 4, std140) uniform cp_c3'
)
code = code.replace(
    'layout(binding = 1, std140) uniform cp_c0',
    'layout(set = 0, binding = 1, std140) uniform cp_c0'
)
code = code.replace(
    'layout(binding = 0, std430) buffer cp_s0',
    'layout(set = 1, binding = 0, std430) buffer cp_s0'
)
code = code.replace(
    'layout(binding = 64) uniform samplerBuffer cp_t_tcb_8',
    'layout(set = 2, binding = 64) uniform samplerBuffer cp_t_tcb_8'
)
code = code.replace(
    'layout(binding = 65) uniform samplerBuffer cp_t_tcb_42',
    'layout(set = 2, binding = 65) uniform samplerBuffer cp_t_tcb_42'
)

# ========== 2. clamp -> min/max ==========
code = re.sub(
    r'_33\[clamp\(([^,]+), 0, 1983\)\]',
    r'_33[min(max(\1, 0), 1983)]',
    code
)

# ========== 3. 数组声明兜底 ==========
code = code.replace(
    'shared uint _33[clamp(1984, 0, 1983)];',
    'shared uint _33[1984];'
)
code = code.replace(
    'shared uint _33[min(max(1984, 0), 1983)];',
    'shared uint _33[1984];'
)

# ========== 4. samplerBuffer 需要的扩展 ==========
if 'GL_EXT_samplerless_texture_functions' not in code:
    code = code.replace(
        '#version 450',
        '#version 450\n#extension GL_EXT_samplerless_texture_functions : require'
    )

with open("shader_fixed.glsl", "w", encoding="utf-8") as f:
    f.write(code)

print("done: shader_fixed.glsl")