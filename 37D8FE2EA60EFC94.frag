#version 450

layout(set = 0, binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    vec4 _m3;
    int _m4;
    float _m5[73];
    ivec4 _m6;
    int _m7;
} support_buffer_1;

layout(set = 0, binding = 22, std140) uniform fp_c3 { vec4 _m0[4096]; } fp_c3_1;
layout(set = 0, binding = 25, std140) uniform fp_c6 { vec4 _m0[4096]; } fp_c6_1;
layout(set = 0, binding = 35, std140) uniform fp_c16 { vec4 _m0[4096]; } fp_c16_1;
layout(set = 0, binding = 20, std140) uniform fp_c1 { vec4 _m0[4096]; } fp_c1_1;
layout(set = 1, binding = 16, std430) buffer fp_s0 { uint _m0[]; } fp_s0_1;
layout(set = 2, binding = 128) uniform sampler2D fp_t_tcb_8;

layout(location = 0) in vec4 _38;
layout(location = 0) out vec4 _41;

void main()
{
    _41 = vec4(1.0, 0.0, 0.0, 1.0);
}