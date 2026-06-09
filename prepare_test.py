import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()


def save(name, content):
    with open(name, "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated:", name)


# =====================================================
# test_safe_remove_uintBitsToFloat
# uintBitsToFloat(x) -> float(x)
# =====================================================

v1 = re.sub(
    r'uintBitsToFloat\s*\(',
    'float(',
    original
)

save(
    "test_safe_remove_uintBitsToFloat.comp",
    v1
)

# =====================================================
# test_safe_remove_floatBitsToInt
# floatBitsToInt(x) -> int(x)
# =====================================================

v2 = re.sub(
    r'floatBitsToInt\s*\(',
    'int(',
    original
)

save(
    "test_safe_remove_floatBitsToInt.comp",
    v2
)

# =====================================================
# test_safe_remove_floatBitsToUint
# floatBitsToUint(x) -> uint(x)
# =====================================================

v3 = re.sub(
    r'floatBitsToUint\s*\(',
    'uint(',
    original
)

save(
    "test_safe_remove_floatBitsToUint.comp",
    v3
)

print()
print("====================================")
print("Generated:")
print("test_safe_remove_uintBitsToFloat.comp")
print("test_safe_remove_floatBitsToInt.comp")
print("test_safe_remove_floatBitsToUint.comp")
print("====================================")
