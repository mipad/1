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

layout(set = 0, binding = 22, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(location = 0) in vec4 _22;
layout(location = 0) out vec4 _25;

void main()
{
    float _32 = _22.w;
    float _34 = _22.z;
    precise float _48 = 1.0 / _32;
    float _36 = _48;
    float _38 = fma(_34, _36, fp_c3_1._m0[0].y);
    _25.x = _38;
    _25.y = _38;
    _25.z = _38;
    _25.w = _38;
}

