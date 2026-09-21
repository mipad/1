#version 450

layout(location = 0) in vec4 _22;
layout(location = 0) out vec4 _25;

void main()
{
    float _32 = _22.w;
    float _34 = _22.z;
    precise float _48 = 1.0 / _32;
    float _36 = _48;
    float _38 = _34 * _36;
    _25 = vec4(_38);
}