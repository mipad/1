import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))

count = len(matches)

print("floatBitsToInt count =", count)

q1_end = count // 4
q2_end = count // 2


def replace_range(text, begin_idx, end_idx):
    result = []
    last = 0

    for i, m in enumerate(matches):
        result.append(text[last:m.start()])

        if begin_idx <= i < end_idx:
            result.append("int(")
        else:
            result.append(m.group(0))

        last = m.end()

    result.append(text[last:])
    return "".join(result)


# =====================================================
# Q1 : 0 ~ 25%
# =====================================================

q1 = replace_range(
    original,
    0,
    q1_end
)

with open(
    "test_fbi_q1.comp",
    "w",
    encoding="utf-8"
) as f:
    f.write(q1)

print("Generated: test_fbi_q1.comp")


# =====================================================
# Q2 : 25% ~ 50%
# =====================================================

q2 = replace_range(
    original,
    q1_end,
    q2_end
)

with open(
    "test_fbi_q2.comp",
    "w",
    encoding="utf-8"
) as f:
    f.write(q2)

print("Generated: test_fbi_q2.comp")

print()
print("====================================")
print("Generated:")
print("test_fbi_q1.comp")
print("test_fbi_q2.comp")
print("====================================")
