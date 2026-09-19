import subprocess

def get_caps(spv):
    out = subprocess.run(
        ["spirv-dis", spv],
        capture_output=True, text=True, check=True
    )
    return sorted(set(
        line.strip() for line in out.stdout.splitlines()
        if "OpCapability" in line
    ))

subprocess.run(
    ["spirv-dis", "fixed_stripped.spv", "-o", "fixed_stripped.spvasm"],
    check=True
)

orig = get_caps("original.spv")
fix = get_caps("fixed_stripped.spv")
missing = [c for c in orig if c not in fix]

print("=== Missing capabilities ===")
for c in missing:
    print(c)

with open("fixed_stripped.spvasm") as f:
    lines = f.readlines()

last_cap_idx = -1
for i, line in enumerate(lines):
    if "OpCapability" in line:
        last_cap_idx = i

if last_cap_idx >= 0 and missing:
    new_lines = (
        lines[:last_cap_idx + 1]
        + ["               " + c + "\n" for c in missing]
        + lines[last_cap_idx + 1:]
    )
    with open("fixed_patched.spvasm", "w") as f:
        f.writelines(new_lines)
    print(f"Inserted {len(missing)} capabilities")
else:
    with open("fixed_patched.spvasm", "w") as f:
        f.writelines(lines)
    print("Nothing to insert")