import re

INPUT = "882C700EBC5FADF5_Compute.glsl"
OUTPUT = "test_remove_bitcast_chain.comp"

with open(INPUT, "r", encoding="utf-8") as f:
    text = f.read()

# _47
text = re.sub(
    r'float\s+_1646\s*=\s*uintBitsToFloat\(cp_s0_1\._m0\[int\(_1644\)\]\);',
    r'uint _1646 = cp_s0_1._m0[int(_1644)];',
    text
)

text = re.sub(
    r'uint\s+_1652\s*=\s*uint\(int\(uint\(floatBitsToInt\(_1646\)\)\s*>>\s*uint\(_1650\)\)\);',
    r'uint _1652 = _1646 >> uint(_1650);',
    text
)

# _48
text = re.sub(
    r'float\s+_1682\s*=\s*uintBitsToFloat\(cp_s1_1\._m0\[int\(_1680\)\]\);',
    r'uint _1682 = cp_s1_1._m0[int(_1680)];',
    text
)

text = re.sub(
    r'uint\s+_1688\s*=\s*uint\(int\(uint\(floatBitsToInt\(_1682\)\)\s*>>\s*uint\(_1686\)\)\);',
    r'uint _1688 = _1682 >> uint(_1686);',
    text
)

# _49
text = re.sub(
    r'float\s+_1718\s*=\s*uintBitsToFloat\(cp_s2_1\._m0\[int\(_1716\)\]\);',
    r'uint _1718 = cp_s2_1._m0[int(_1716)];',
    text
)

text = re.sub(
    r'uint\s+_1724\s*=\s*uint\(int\(uint\(floatBitsToInt\(_1718\)\)\s*>>\s*uint\(_1722\)\)\);',
    r'uint _1724 = _1718 >> uint(_1722);',
    text
)

# _52
text = re.sub(
    r'float\s+_1811\s*=\s*uintBitsToFloat\(cp_s3_1\._m0\[int\(_1809\)\]\);',
    r'uint _1811 = cp_s3_1._m0[int(_1809)];',
    text
)

text = re.sub(
    r'uint\s+_1817\s*=\s*uint\(int\(uint\(floatBitsToInt\(_1811\)\)\s*>>\s*uint\(_1815\)\)\);',
    r'uint _1817 = _1811 >> uint(_1815);',
    text
)

header = """// ========================================
// test_remove_bitcast_chain.comp
// modify _47 _48 _49 _52 only
// remove uintBitsToFloat -> floatBitsToInt chains
// ========================================

"""

with open(OUTPUT, "w", encoding="utf-8") as f:
    f.write(header + text)

print("Generated:", OUTPUT)
