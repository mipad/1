import re

input_file = "882C700EBC5FADF5_Compute.glsl"

# 1. 移除 early return（注释掉所有单独的 return;）
def remove_early_return(content):
    # 注意：保留函数内部的 return（如 do-while 循环中的 return 不会出现，这里只匹配 main 中的）
    # 简单匹配行首的 return;
    return re.sub(r'^(\s*)return;', r'\1// return;', content, flags=re.MULTILINE)

# 2. 注释所有 barrier()
def remove_barriers(content):
    return re.sub(r'^(\s*)barrier\(\);', r'\1// barrier();', content, flags=re.MULTILINE)

# 3. 禁用原子写入（注释 _51 和 _53 函数内的 atomicCompSwap）
def disable_atomic_writes(content):
    # 匹配整个函数体，将 atomicCompSwap 行注释
    def disable_in_func(match):
        func_body = match.group(0)
        func_body = re.sub(r'^(\s*)uint _\d+ = atomicCompSwap\(.*\);', r'\1// atomicCompSwap disabled', func_body, flags=re.MULTILINE)
        return func_body
    # 匹配 _51 和 _53 函数（从 void _51(...) 到对应的结束大括号）
    # 使用非贪婪匹配，注意函数体内可能包含嵌套大括号，但此处是简单函数，可以近似匹配
    content = re.sub(r'(void _5[13]\([^)]+\)\s*\{[^{}]*\})', disable_in_func, content, flags=re.DOTALL)
    return content

# 4. 简化位运算：将 uint(int(uint(x) >> uint(2))) 替换为 (uint(x) >> 2u)
def simplify_bit_ops(content):
    return re.sub(r'uint\(int\(uint\(([^)]+)\) >> uint\(2\)\)\)', r'(uint(\1) >> 2u)', content)

# 5. 注释所有对 cp_s3 的写入（即 _53 调用）
def disable_cp_s3_writes(content):
    return re.sub(r'^(\s*)_53\(.*\);', r'\1// _53(...);', content, flags=re.MULTILINE)

# 6. 确保所有线程都经过 barrier：将 early return 改为设置标志并跳过后续代码
def fix_early_return_with_flag(content):
    # 将 main 函数中的 early return 替换为标志变量
    # 在 main 开头添加 bool active = true;
    # 将 if (!_95) { return; } 替换为 if (!_95) { active = false; }
    # 然后在每个 barrier 之前检查 active，但为简化，我们只替换 return 为设置标志，并注释掉后续的 barrier 同步？不，更好的方法：
    # 我们将整个 main 函数包裹在一个 if (active) 块中，但需要处理 barrier。由于复杂，简单注释 return 即可
    return remove_early_return(content)

modes = [
    ("01_remove_early_return", remove_early_return, "注释所有 return 语句（main 中的早期返回）"),
    ("02_remove_barriers", remove_barriers, "注释所有 barrier()"),
    ("03_disable_atomic_writes", disable_atomic_writes, "禁用原子写入（atomicCompSwap）"),
    ("04_simplify_bit_ops", simplify_bit_ops, "简化 uint(int(uint(x)>>2)) 为 (uint(x)>>2u)"),
    ("05_disable_cp_s3_writes", disable_cp_s3_writes, "注释所有 _53 调用（cp_s3 写入）"),
    ("06_fix_early_return_flag", fix_early_return_with_flag, "将 early return 改为设置标志（实际同01）"),
]

for name, func, desc in modes:
    with open(input_file, "r") as f:
        content = f.read()
    modified = func(content)
    output_file = f"test_{name}.comp"
    with open(output_file, "w") as f:
        f.write(modified)
    print(f"Generated {output_file}: {desc}")

print("\n建议按顺序编译测试：")
print("1. test_01_remove_early_return.comp  -> 如果正常，则问题在于 early return + barrier 冲突")
print("2. test_02_remove_barriers.comp       -> 如果正常，则问题在于 barrier 与 early return 的组合")
print("3. test_03_disable_atomic_writes.comp -> 如果正常，则问题在原子操作")
print("4. test_04_simplify_bit_ops.comp      -> 如果正常，则问题在复杂位运算")
print("5. test_05_disable_cp_s3_writes.comp  -> 如果正常，则问题在 cp_s3 写入")
print("6. 如果以上均崩溃，可能需要更精细的二分注释")
