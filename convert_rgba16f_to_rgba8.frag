#version 450

layout(location = 0) in vec2 texcoord;
layout(location = 0) out vec4 color;

layout(binding = 0) uniform sampler2D input_texture;

// ---------- 修改点：将 push_constant 改为 binding = 1 的 Uniform Block ----------
layout(binding = 1) uniform PushConstantsBlock {
    float exposure;
    float gamma;
} constants;
// -----------------------------------------------------------------------------

vec3 tonemap(vec3 hdr) {
    // Reinhard tonemapping
    return hdr / (hdr + vec3(1.0));
}

void main() {
    vec4 hdr = texture(input_texture, texcoord);

    // Apply exposure
    vec3 exposed = hdr.rgb * constants.exposure;

    // Tonemap
    vec3 tonemapped = tonemap(exposed);

    // Gamma correction
    vec3 gamma_corrected = pow(tonemapped, vec3(1.0 / constants.gamma));

    color = vec4(gamma_corrected, hdr.a);
}