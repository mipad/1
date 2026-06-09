import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))
count = len(matches)

print(f"floatBitsToInt count = {count}")

def generate(target_idx):
    filename = f"test_only_fbi{target_idx}.comp"

    result = []

    header = f"""// ========================================
// {filename}
// floatBitsToInt count = {count}
// replace FBI#{target_idx} only
// ========================================

"""

    result.append(header)

    last = 0

    for idx, m in enumerate(matches):

        result.append(original[last:m.start()])

        if idx == target_idx:
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

generate(0)
generate(1)
generate(2)

print()
print("========================================")
print("Generated files:")
print("test_only_fbi0.comp")
print("test_only_fbi1.comp")
print("test_only_fbi2.comp")
print("========================================")
