import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()


def save(name, text):
    with open(name, "w", encoding="utf-8") as f:
        f.write(text)
    print("Generated:", name)


# =====================================================
# test01_disable_51
# =====================================================

v = re.sub(
    r'void _51\(int _1748, int _1749\)\s*\{.*?\n\}',
    'void _51(int _1748, int _1749)\n{\n}',
    original,
    flags=re.S
)

save("test01_disable_51.comp", v)

# =====================================================
# test02_disable_53
# =====================================================

v = re.sub(
    r'void _53\(int _1841, int _1842\)\s*\{.*?\n\}',
    'void _53(int _1841, int _1842)\n{\n}',
    original,
    flags=re.S
)

save("test02_disable_53.comp", v)

# =====================================================
# test03_disable_51_53
# =====================================================

v = original

v = re.sub(
    r'void _51\(int _1748, int _1749\)\s*\{.*?\n\}',
    'void _51(int _1748, int _1749)\n{\n}',
    v,
    flags=re.S
)

v = re.sub(
    r'void _53\(int _1841, int _1842\)\s*\{.*?\n\}',
    'void _53(int _1841, int _1842)\n{\n}',
    v,
    flags=re.S
)

save("test03_disable_51_53.comp", v)

# =====================================================
# test04_single_cas_51
# =====================================================

v = original

v = re.sub(
    r'''
bool\s+_1758;
\s*do
\s*\{
(.*?)
\}
\s*while\s*\(_1758\);
''',
    r'''
{
\1
}
''',
    v,
    flags=re.S | re.X
)

save("test04_single_cas_51.comp", v)

# =====================================================
# test05_single_cas_53
# =====================================================

v = original

v = re.sub(
    r'''
bool\s+_1851;
\s*do
\s*\{
(.*?)
\}
\s*while\s*\(_1851\);
''',
    r'''
{
\1
}
''',
    v,
    flags=re.S | re.X
)

save("test05_single_cas_53.comp", v)

# =====================================================
# test06_no_shared
# =====================================================

v = original

v = re.sub(
    r'_35\[0\]\s*=\s*[^;]+;',
    '// removed shared write',
    v
)

save("test06_no_shared.comp", v)

# =====================================================
# test07_no_barrier
# =====================================================

v = original.replace(
    "barrier();",
    "// barrier removed"
)

save("test07_no_barrier.comp", v)

# =====================================================
# test08_small_workgroup
# =====================================================

v = original.replace(
    "layout(local_size_x = 28, local_size_y = 28, local_size_z = 1) in;",
    "layout(local_size_x = 8, local_size_y = 8, local_size_z = 1) in;"
)

save("test08_small_workgroup.comp", v)

print("Done")
