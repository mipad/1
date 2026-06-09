import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))

count = len(matches)

print(f"floatBitsToInt count = {count}")


def generate(indices, filename):
    result = []

    result.append(
f"""// ========================================
// {filename}
// floatBitsToInt count = {count}
// replaced = {sorted(indices)}
// ========================================

"""
    )

    last = 0

    for idx, m in enumerate(matches):

        result.append(original[last:m.start()])

        if idx in indices:
            result.append(
                f"/* FBI#{idx} REPLACED */ int("
            )
        else:
            result.append(
                f"/* FBI#{idx} */ floatBitsToInt("
            )

        last = m.end()

    result.append(original[last:])

    with open(filename, "w", encoding="utf-8") as f:
        f.write("".join(result))

    print("Generated:", filename)


# =========================================
# _47 _48 _49 _52
# =========================================

generate(
    {0, 1, 2, 4},
    "test_fbi_0124.comp"
)

# =========================================
# atomic CAS compare
# =========================================

generate(
    {3, 5},
    "test_fbi_35.comp"
)

# =========================================
# main() 开头
# =========================================

generate(
    {6, 7, 8, 9},
    "test_fbi_6789.comp"
)

print()
print("========================================")
print("Generated:")
print("test_fbi_0124.comp")
print("test_fbi_35.comp")
print("test_fbi_6789.comp")
print("========================================")
