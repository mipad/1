import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()


def save(name, text):
    with open(name, "w", encoding="utf-8") as f:
        f.write(text)
    print("Generated:", name)


# =====================================================
# test_floatBitsToInt_only_buffer
#
# 只修改:
# _47
# _48
# _49
# _52
# =====================================================

buffer_ver = original

for fn in ["_47", "_48", "_49", "_52"]:

    pattern = rf'(int\s+{fn}\s*\([^{{]+\{{.*?\n\}})'

    m = re.search(pattern, buffer_ver, re.S)

    if m:
        body = m.group(1)

        body2 = body.replace(
            "floatBitsToInt(",
            "int("
        )

        buffer_ver = (
            buffer_ver[:m.start()]
            + body2
            + buffer_ver[m.end():]
        )

save(
    "test_floatBitsToInt_only_buffer.comp",
    buffer_ver
)


# =====================================================
# test_floatBitsToInt_only_main
#
# 只修改 main()
# =====================================================

main_ver = original

m = re.search(
    r'void\s+main\s*\(\)\s*\{.*\}\s*$',
    main_ver,
    re.S
)

if m:
    body = m.group(0)

    body2 = body.replace(
        "floatBitsToInt(",
        "int("
    )

    main_ver = (
        main_ver[:m.start()]
        + body2
        + main_ver[m.end():]
    )

save(
    "test_floatBitsToInt_only_main.comp",
    main_ver
)

print()
print("====================================")
print("Generated:")
print("test_floatBitsToInt_only_buffer.comp")
print("test_floatBitsToInt_only_main.comp")
print("====================================")
