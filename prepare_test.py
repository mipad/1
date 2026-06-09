import re

input_file = "882C700EBC5FADF5_Compute.glsl"

def read_file():
    with open(input_file, "r") as f:
        return f.read()

def write_test(content, name):
    with open(name, "w") as f:
        f.write(content)
    print(f"Generated: {name}")

original = read_file()

# 1. 注释所有 early return
content1 = re.sub(r'^(\s*)return;$', r'\1// return;', original, flags=re.MULTILINE)
write_test(content1, "test_no_early_return.comp")

# 2. 注释所有 barrier()
content2 = re.sub(r'^(\s*)barrier\(\);', r'\1// barrier();', original, flags=re.MULTILINE)
write_test(content2, "test_no_barrier.comp")

# 3. 注释所有 _53 函数调用（cp_s3 原子写入）
content3 = re.sub(r'^(\s*)_53\([^;]+\);', r'\1// _53(...);', original, flags=re.MULTILINE)
write_test(content3, "test_no_cp_s3_writes.comp")

# 4. 注释所有 _51 函数调用（cp_s1 原子写入）
content4 = re.sub(r'^(\s*)_51\([^;]+\);', r'\1// _51(...);', original, flags=re.MULTILINE)
write_test(content4, "test_no_cp_s1_writes.comp")

# 5. 注释所有共享内存写入 _35[...] = ...
content5 = re.sub(r'^(\s*)_35\[[^\]]+\]\s*=\s*[^;]+;', r'\1// _35[...] = ...;', original, flags=re.MULTILINE)
write_test(content5, "test_no_shared_writes.comp")

# 6. 注释所有 cp_s0 读取（函数 _47 内部）
content6 = re.sub(r'float _1646 = uintBitsToFloat\(cp_s0_1\._m0\[int\(_1644\)\]\);', 
                  '// float _1646 = 0.0;', original)
write_test(content6, "test_no_cp_s0_reads.comp")

# 7. 简化复杂移位和类型转换
def simplify_bitops(content):
    content = re.sub(r'uint\(int\(uint\(([^)]+)\)\s*>>\s*uint\(2\)\)\)', r'(uint(\1) >> 2u)', content)
    return content
content7 = simplify_bitops(original)
write_test(content7, "test_simplified_bitops.comp")

# 8. 禁用原子交换（保留循环，但用简单赋值替换 atomicCompSwap）
def disable_atomic_swap(content):
    # 将 atomicCompSwap 行替换为直接赋值 0，并提供 dummy 变量
    def repl(match):
        indent = match.group(1)
        return f'{indent}uint _1887 = 0; // atomicCompSwap disabled'
    content = re.sub(r'^(\s*)uint _1887 = atomicCompSwap\(.*\);', repl, content, flags=re.MULTILINE)
    # 同时修改 while 条件，避免使用未定义的 _1857，直接 break
    content = re.sub(r'do\s*\{([^{}]*)\}\s*while\s*\([^;]+\);', r'{\1}', content, flags=re.DOTALL)
    return content
content8 = disable_atomic_swap(original)
write_test(content8, "test_no_atomic_swap.comp")

# 9. 注释所有对 _52 的调用（cp_s3 读取）
content9 = re.sub(r'^(\s*)_52\([^;]+\);', r'\1// _52(...);', original, flags=re.MULTILINE)
write_test(content9, "test_no_cp_s3_reads.comp")

# 10. 注释所有对 _48 和 _49 的调用（cp_s1/cp_s2 读取）
content10 = re.sub(r'^(\s*)_(48|49)\([^;]+\);', r'\1// _\2(...);', original, flags=re.MULTILINE)
write_test(content10, "test_no_cp_s1_s2_reads.comp")

print("\n所有测试版本已生成在当前目录。")
