#version 450

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
    float _48 = 1.0 / _32;
    float _36 = _48;
    float _38 = fma(_34, _36, fp_c3_1._m0[0].y);
    _25.x = _38;
    _25.y = _38;
    _25.z = _38;
    _25.w = _38;
}