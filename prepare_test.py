import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()

matches = list(re.finditer(r'floatBitsToInt\s*\(', original))

count = len(matches)

print("floatBitsToInt count =", count)

half = count // 2


def replace_selected(text, start_idx, end_idx):
    result = []
    last = 0

    for i, m in enumerate(matches):
        result.append(text[last:m.start()])

        if start_idx <= i < end_idx:
            result.append("int(")
        else:
            result.append(m.group(0))

        last = m.end()

    result.append(text[last:])
    return "".join(result)


# =====================================================
# 前半部分替换
# =====================================================

first_half = replace_selected(
    original,
    0,
    half
)

with open(
    "test_fbi_first_half.comp",
    "w",
    encoding="utf-8"
) as f:
    f.write(first_half)

print("Generated: test_fbi_first_half.comp")


# =====================================================
# 后半部分替换
# =====================================================

second_half = replace_selected(
    original,
    half,
    count
)

with open(
    "test_fbi_second_half.comp",
    "w",
    encoding="utf-8"
) as f:
    f.write(second_half)

print("Generated: test_fbi_second_half.comp")
