import re
import sys

input_file  = sys.argv[1] if len(sys.argv) > 1 else "shader.glsl"
output_file = sys.argv[2] if len(sys.argv) > 2 else "shader_fixed.glsl"

with open(input_file, "r", encoding="utf-8") as f:
    code = f.read()

pattern = r'_33\[([^\]]+)\]'
matches = re.findall(pattern, code)
fixed = re.sub(pattern, r'_33[clamp(\1, 0, 1983)]', code)

with open(output_file, "w", encoding="utf-8") as f:
    f.write(fixed)

print(f"[OK] replaced {len(matches)} _33 accesses -> {output_file}")