import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))
count = len(matches)

print(f"floatBitsToInt count = {count}")

def generate(replace_count):
    filename = f"test_fbi_first{replace_count}.comp"

    result = []

    header = f"""// ========================================
// {filename}
// floatBitsToInt count = {count}
// replace range = [0, {replace_count})
// ========================================

"""

    result.append(header)

    last = 0

    for idx, m in enumerate(matches):

        result.append(original[last:m.start()])

        if idx < replace_count:
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

generate(1)
generate(2)
generate(4)
generate(6)
generate(8)

print()
print("========================================")
print("Generated files:")
print("test_fbi_first1.comp")
print("test_fbi_first2.comp")
print("test_fbi_first4.comp")
print("test_fbi_first6.comp")
print("test_fbi_first8.comp")
print("========================================")
