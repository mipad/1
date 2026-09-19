import re

with open("shader.glsl", "r", encoding="utf-8") as f:
    code = f.read()

# ========== 1. 补回 DescriptorSet ==========
code = code.replace('layout(binding = 0, std140) uniform support_buffer',
                    'layout(set = 0, binding = 0, std140) uniform support_buffer')
code = code.replace('layout(binding = 2, std140) uniform cp_c1',
                    'layout(set = 0, binding = 2, std140) uniform cp_c1')
code = code.replace('layout(binding = 4, std140) uniform cp_c3',
                    'layout(set = 0, binding = 4, std140) uniform cp_c3')
code = code.replace('layout(binding = 1, std140) uniform cp_c0',
                    'layout(set = 0, binding = 1, std140) uniform cp_c0')
code = code.replace('layout(binding = 0, std430) buffer cp_s0',
                    'layout(set = 1, binding = 0, std430) buffer cp_s0')
code = code.replace('layout(binding = 64) uniform samplerBuffer cp_t_tcb_8',
                    'layout(set = 2, binding = 64) uniform samplerBuffer cp_t_tcb_8')
code = code.replace('layout(binding = 65) uniform samplerBuffer cp_t_tcb_42',
                    'layout(set = 2, binding = 65) uniform samplerBuffer cp_t_tcb_42')

# ========== 2. clamp -> min/max（这次也先注释掉） ==========
# code = re.sub(
#     r'_33\[clamp\(([^,]+), 0, 1983\)\]',
#     r'_33[min(max(\1, 0), 1983)]',
#     code
# )

# ========== 3. 钳位所有裸索引（这次也先注释掉） ==========
# code = code.replace('shared uint _33[1984];', '@@SHARED_DECL@@')
# def clamp_33(m):
#     expr = m.group(1).strip()
#     if expr.isdigit():
#         return m.group(0)
#     return f'_33[min(max({expr}, 0), 1983)]'
# code = re.sub(r'_33\[([^\]]+)\]', clamp_33, code)
# code = code.replace('@@SHARED_DECL@@', 'shared uint _33[1984];')

# ========== 4. 扩展 ==========
if 'GL_EXT_samplerless_texture_functions' not in code:
    code = code.replace('#version 450',
                        '#version 450\n#extension GL_EXT_samplerless_texture_functions : require')

with open("shader_fixed.glsl", "w", encoding="utf-8") as f:
    f.write(code)

print("done: shader_fixed.glsl (NO _33 clamping)")
