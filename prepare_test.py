import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()


def save(filename, content):
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated:", filename)


# ==========================================================
# test_original
# ==========================================================

save(
    "test_original_882C700EBC5FADF5.comp",
    original
)

# ==========================================================
# test_barrier
# ==========================================================

v1 = original

v1 = re.sub(
    r'''
bool _95 = _93 != 0;
\s*
if \(!_95\)
\s*\{
\s*return;
\s*\}
''',
    '''
bool _95 = _93 != 0;
''',
    v1,
    flags=re.VERBOSE
)

v1 = v1.replace(
'''barrier();
    int _103''',
'''barrier();

    if (!_95)
    {
        return;
    }

    int _103'''
)

save(
    "test_barrier_882C700EBC5FADF5.comp",
    v1
)

# ==========================================================
# test_shared_atomic
# ==========================================================

v2 = original

v2 = re.sub(
    r'_35\[0\]\s*=\s*uint\([^;]+\);',
    'atomicOr(_35[0], 1u);',
    v2
)

v2 = v2.replace(
    '_35[0] = 1u;',
    'atomicOr(_35[0], 1u);'
)

save(
    "test_shared_atomic_882C700EBC5FADF5.comp",
    v2
)

# ==========================================================
# test_atomic_uint
# ==========================================================

v3 = original

v3 = re.sub(
    r'float _1760 = uintBitsToFloat\(([^;]+)\);',
    r'uint _1760 = \1;',
    v3
)

v3 = v3.replace(
    'floatBitsToUint(_1760)',
    '_1760'
)

v3 = v3.replace(
    'floatBitsToInt(_1760)',
    'int(_1760)'
)

v3 = re.sub(
    r'float _1853 = uintBitsToFloat\(([^;]+)\);',
    r'uint _1853 = \1;',
    v3
)

v3 = v3.replace(
    'floatBitsToUint(_1853)',
    '_1853'
)

v3 = v3.replace(
    'floatBitsToInt(_1853)',
    'int(_1853)'
)

save(
    "test_atomic_uint_882C700EBC5FADF5.comp",
    v3
)

# ==========================================================
# test_remove_bitcast
# ==========================================================

v4 = original

v4 = re.sub(
    r'uintBitsToFloat\(',
    '(',
    v4
)

v4 = re.sub(
    r'floatBitsToInt\(',
    'int(',
    v4
)

v4 = re.sub(
    r'floatBitsToUint\(',
    'uint(',
    v4
)

save(
    "test_remove_bitcast_882C700EBC5FADF5.comp",
    v4
)

# ==========================================================
# test_all
# ==========================================================

v5 = original

# barrier

v5 = re.sub(
    r'''
bool _95 = _93 != 0;
\s*
if \(!_95\)
\s*\{
\s*return;
\s*\}
''',
    '''
bool _95 = _93 != 0;
''',
    v5,
    flags=re.VERBOSE
)

v5 = v5.replace(
'''barrier();
    int _103''',
'''barrier();

    if (!_95)
    {
        return;
    }

    int _103'''
)

# shared

v5 = re.sub(
    r'_35\[0\]\s*=\s*uint\([^;]+\);',
    'atomicOr(_35[0], 1u);',
    v5
)

v5 = v5.replace(
    '_35[0] = 1u;',
    'atomicOr(_35[0], 1u);'
)

# atomic

v5 = re.sub(
    r'float _1760 = uintBitsToFloat\(([^;]+)\);',
    r'uint _1760 = \1;',
    v5
)

v5 = v5.replace(
    'floatBitsToUint(_1760)',
    '_1760'
)

v5 = v5.replace(
    'floatBitsToInt(_1760)',
    'int(_1760)'
)

v5 = re.sub(
    r'float _1853 = uintBitsToFloat\(([^;]+)\);',
    r'uint _1853 = \1;',
    v5
)

v5 = v5.replace(
    'floatBitsToUint(_1853)',
    '_1853'
)

v5 = v5.replace(
    'floatBitsToInt(_1853)',
    'int(_1853)'
)

save(
    "test_all_882C700EBC5FADF5.comp",
    v5
)

print()
print("====================================")
print("Generated:")
print("test_original_882C700EBC5FADF5.comp")
print("test_barrier_882C700EBC5FADF5.comp")
print("test_shared_atomic_882C700EBC5FADF5.comp")
print("test_atomic_uint_882C700EBC5FADF5.comp")
print("test_remove_bitcast_882C700EBC5FADF5.comp")
print("test_all_882C700EBC5FADF5.comp")
print("====================================")
