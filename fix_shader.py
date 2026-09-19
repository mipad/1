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

# ========== 2. 先把数组声明保护起来 ==========
code = code.replace('shared uint _33[1984];', '@@SHARED_DECL@@')

# ========== 3. 把所有裸 _33[...] 用 min/max 钳位 ==========
def clamp_33(m):
    expr = m.group(1).strip()
    # 纯数字常量索引（如 _33[6]、_33[10]）跳过
    if expr.isdigit():
        return m.group(0)
    return f'_33[min(max({expr}, 0), 1983)]'

code = re.sub(r'_33\[([^\]]+)\]', clamp_33, code)

# ========== 4. 恢复数组声明 ==========
code = code.replace('@@SHARED_DECL@@', 'shared uint _33[1984];')

# ========== 5. samplerBuffer 需要的扩展 ==========
if 'GL_EXT_samplerless_texture_functions' not in code:
    code = code.replace(
        '#version 450',
        '#version 450\n#extension GL_EXT_samplerless_texture_functions : require'
    )

with open("shader_fixed.glsl", "w", encoding="utf-8") as f:
    f.write(code)

print("done: shader_fixed.glsl")
