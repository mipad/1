import re

with open("shader.glsl", "r", encoding="utf-8") as f:
    code = f.read()

# ========== 1. 补回 DescriptorSet ==========
for old, new in [
    ('layout(binding = 0, std140) uniform support_buffer',
     'layout(set = 0, binding = 0, std140) uniform support_buffer'),
    ('layout(binding = 2, std140) uniform cp_c1',
     'layout(set = 0, binding = 2, std140) uniform cp_c1'),
    ('layout(binding = 4, std140) uniform cp_c3',
     'layout(set = 0, binding = 4, std140) uniform cp_c3'),
    ('layout(binding = 1, std140) uniform cp_c0',
     'layout(set = 0, binding = 1, std140) uniform cp_c0'),
    ('layout(binding = 0, std430) buffer cp_s0',
     'layout(set = 1, binding = 0, std430) buffer cp_s0'),
    ('layout(binding = 64) uniform samplerBuffer cp_t_tcb_8',
     'layout(set = 2, binding = 64) uniform samplerBuffer cp_t_tcb_8'),
    ('layout(binding = 65) uniform samplerBuffer cp_t_tcb_42',
     'layout(set = 2, binding = 65) uniform samplerBuffer cp_t_tcb_42'),
]:
    code = code.replace(old, new)

# ========== 2. 保护数组声明 ==========
code = code.replace('shared uint _33[1984];', '@@SHARED_DECL@@')

# ========== 3. _33 动态索引：改用三元运算 ==========
def clamp_33(m):
    expr = m.group(1).strip()
    if expr.isdigit():
        return m.group(0)
    # 上下界都用三元判断
    return f'_33[min(max({expr}, 0), 1983)]'

code = re.sub(r'_33\[([^\]]+)\]', clamp_33, code)

# ========== 4. cp_s0_1._m0[...] 非负保护（三元运算） ==========
def clamp_s0(m):
    expr = m.group(1).strip()
    return f'cp_s0_1._m0[(({expr}) < 0 ? 0 : ({expr}))]'

code = re.sub(
    r'cp_s0_1\._m0\[\s*(int\(_[0-9]+\)|_[0-9]+)\s*\]',
    clamp_s0,
    code
)

# ========== 5. texelFetch 索引非负保护（三元运算） ==========
# 模式 A：texelFetch(cp_t_tcb_8, int(_NNN))
def clamp_texel_a(m):
    sampler = m.group(1)
    inner = m.group(2)
    return f'texelFetch({sampler}, (int({inner}) < 0 ? 0 : int({inner})))'

code = re.sub(
    r'texelFetch\((cp_t_tcb_8|cp_t_tcb_42),\s*int\((_[0-9]+)\)\)',
    clamp_texel_a,
    code
)

# 模式 B：texelFetch(cp_t_tcb_8, _NNN)  (其中 _NNN 是 int 类型的变量)
def clamp_texel_b(m):
    sampler = m.group(1)
    inner = m.group(2)
    return f'texelFetch({sampler}, ({inner} < 0 ? 0 : {inner}))'

code = re.sub(
    r'texelFetch\((cp_t_tcb_8|cp_t_tcb_42),\s*(_[0-9]+)\)',
    clamp_texel_b,
    code
)

# ========== 6. 恢复数组声明 ==========
code = code.replace('@@SHARED_DECL@@', 'shared uint _33[1984];')

# ========== 7. samplerBuffer 扩展 ==========
if 'GL_EXT_samplerless_texture_functions' not in code:
    code = code.replace(
        '#version 450',
        '#version 450\n#extension GL_EXT_samplerless_texture_functions : require'
    )

with open("shader_fixed.glsl", "w", encoding="utf-8") as f:
    f.write(code)

print("done: shader_fixed.glsl")
