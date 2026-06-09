import re

INPUT = "882C700EBC5FADF5_Compute.glsl"

with open(INPUT, "r", encoding="utf-8") as f:
    original = f.read()


def save(name, content):
    with open(name, "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated:", name)


# =====================================================
# test_remove_workgroup_bitcast
#
# 只处理:
# gl_WorkGroupID
# gl_LocalInvocationID
# =====================================================

wg = original

wg = wg.replace(
    "float _57 = uintBitsToFloat(gl_WorkGroupID.y);",
    "int _57 = int(gl_WorkGroupID.y);"
)

wg = wg.replace(
    "float _59 = uintBitsToFloat(gl_LocalInvocationID.y);",
    "int _59 = int(gl_LocalInvocationID.y);"
)

wg = wg.replace(
    "float _69 = uintBitsToFloat(gl_WorkGroupID.x);",
    "int _69 = int(gl_WorkGroupID.x);"
)

wg = wg.replace(
    "float _71 = uintBitsToFloat(gl_LocalInvocationID.x);",
    "int _71 = int(gl_LocalInvocationID.x);"
)

wg = wg.replace(
    "floatBitsToInt(_57)",
    "_57"
)

wg = wg.replace(
    "floatBitsToInt(_59)",
    "_59"
)

wg = wg.replace(
    "floatBitsToInt(_69)",
    "_69"
)

wg = wg.replace(
    "floatBitsToInt(_71)",
    "_71"
)

wg = wg.replace(
    "floatBitsToUint(_57)",
    "uint(_57)"
)

wg = wg.replace(
    "floatBitsToUint(_69)",
    "uint(_69)"
)

save(
    "test_remove_workgroup_bitcast_882C700EBC5FADF5.comp",
    wg
)

# =====================================================
# test_remove_buffer_bitcast
#
# 只处理 _47 _48 _49 _52
# =====================================================

buf = original

# _47

buf = re.sub(
r'''
float\s+(_1646)\s*=\s*uintBitsToFloat\(([^;]+)\);
\s*
int\s+(_1648)\s*=\s*_1641\s*&\s*3;
\s*
int\s+(_1650)\s*=\s*\3\s*<<\s*3;
\s*
uint\s+(_1652)\s*=\s*uint\(int\(uint\(floatBitsToInt\(\1\)\)\s*>>\s*uint\(\4\)\)\);
''',
r'''
uint \1 = \2;
int \3 = _1641 & 3;
int \4 = \3 << 3;
uint \5 = \1 >> uint(\4);
''',
buf,
flags=re.VERBOSE
)

# _48

buf = re.sub(
r'''
float\s+(_1682)\s*=\s*uintBitsToFloat\(([^;]+)\);
\s*
int\s+(_1684)\s*=\s*_1677\s*&\s*3;
\s*
int\s+(_1686)\s*=\s*\3\s*<<\s*3;
\s*
uint\s+(_1688)\s*=\s*uint\(int\(uint\(floatBitsToInt\(\1\)\)\s*>>\s*uint\(\4\)\)\);
''',
r'''
uint \1 = \2;
int \3 = _1677 & 3;
int \4 = \3 << 3;
uint \5 = \1 >> uint(\4);
''',
buf,
flags=re.VERBOSE
)

# _49

buf = re.sub(
r'''
float\s+(_1718)\s*=\s*uintBitsToFloat\(([^;]+)\);
\s*
int\s+(_1720)\s*=\s*_1713\s*&\s*3;
\s*
int\s+(_1722)\s*=\s*\3\s*<<\s*3;
\s*
uint\s+(_1724)\s*=\s*uint\(int\(uint\(floatBitsToInt\(\1\)\)\s*>>\s*uint\(\4\)\)\);
''',
r'''
uint \1 = \2;
int \3 = _1713 & 3;
int \4 = \3 << 3;
uint \5 = \1 >> uint(\4);
''',
buf,
flags=re.VERBOSE
)

# _52

buf = re.sub(
r'''
float\s+(_1811)\s*=\s*uintBitsToFloat\(([^;]+)\);
\s*
int\s+(_1813)\s*=\s*_1806\s*&\s*3;
\s*
int\s+(_1815)\s*=\s*\3\s*<<\s*3;
\s*
uint\s+(_1817)\s*=\s*uint\(int\(uint\(floatBitsToInt\(\1\)\)\s*>>\s*uint\(\4\)\)\);
''',
r'''
uint \1 = \2;
int \3 = _1806 & 3;
int \4 = \3 << 3;
uint \5 = \1 >> uint(\4);
''',
buf,
flags=re.VERBOSE
)

save(
    "test_remove_buffer_bitcast_882C700EBC5FADF5.comp",
    buf
)

print()
print("Generated:")
print("test_remove_workgroup_bitcast_882C700EBC5FADF5.comp")
print("test_remove_buffer_bitcast_882C700EBC5FADF5.comp")
