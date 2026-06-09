import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))
count = len(matches)

print(f"floatBitsToInt count = {count}")

def generate(indices, filename):
    result = []

    header = f"""// ========================================
// {filename}
// floatBitsToInt count = {count}
// replace = {sorted(indices)}
// ========================================

"""

    result.append(header)

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

# 只改 FBI#4
generate(
    {4},
    "test_only_fbi4.comp"
)

# 同时改 FBI#0 FBI#1
generate(
    {0, 1},
    "test_fbi01.comp"
)

print()
print("========================================")
print("Generated files:")
print("test_only_fbi4.comp")
print("test_fbi01.comp")
print("========================================")
