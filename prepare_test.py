import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))

count = len(matches)

print(f"floatBitsToInt count = {count}")

q1_end = count // 4

q1a_end = q1_end // 2

q1a_begin = 0
q1b_begin = q1a_end
q1b_end = q1_end


def make_shader(begin_idx, end_idx, filename):
    result = []

    result.append(
        f"""// ========================================
// {filename}
// floatBitsToInt count = {count}
// replace range = [{begin_idx}, {end_idx})
// ========================================

"""
    )

    last = 0

    for idx, m in enumerate(matches):

        result.append(original[last:m.start()])

        if begin_idx <= idx < end_idx:
            result.append(
                f"/* FBI#{idx} REPLACED */ int("
            )
        else:
            result.append(
                f"/* FBI#{idx} */ floatBitsToInt("
            )

        last = m.end()

    result.append(original[last:])

    text = "".join(result)

    with open(filename, "w", encoding="utf-8") as f:
        f.write(text)

    print("Generated:", filename)


make_shader(
    q1a_begin,
    q1a_end,
    "test_fbi_q1a.comp"
)

make_shader(
    q1b_begin,
    q1b_end,
    "test_fbi_q1b.comp"
)

print()
print("================================")
print("floatBitsToInt count =", count)
print()
print(
    f"Q1A replace FBI#{q1a_begin} ~ FBI#{q1a_end - 1}"
)
print(
    f"Q1B replace FBI#{q1b_begin} ~ FBI#{q1b_end - 1}"
)
print("================================")
