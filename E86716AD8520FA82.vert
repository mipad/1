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

layout(location = 0) out vec4 _16;
layout(location = 1) out vec4 _18;
layout(location = 2) out vec4 _20;
layout(location = 0) in vec4 _23;
layout(location = 2) in vec4 _25;
layout(location = 1) in vec4 _27;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;

    _16.x = 0.0;
    _16.y = 0.0;
    _16.z = 0.0;
    _16.w = 1.0;

    _18.x = 0.0;
    _18.y = 0.0;
    _18.z = 0.0;
    _18.w = 1.0; // 补上

    _20.x = 0.0;
    _20.y = 0.0;
    _20.z = 0.0;
    _20.w = 1.0;

    float _39 = _23.x;
    float _41 = _23.y;
    float _43 = _23.z;
    float _45 = _23.w;
    float _47 = _25.x;
    float _49 = _25.y;
    float _51 = _25.z;
    float _53 = _25.w;
    float _55 = _27.x;
    float _57 = _27.y;
    float _59 = _27.z;
    // float _61 = _27.w; // 原文件没取

    _16.x = _39;
    _16.y = _41;
    _16.z = _43;
    _16.w = _45;

    _20.x = _47;
    _20.y = _49;
    _20.z = _51;
    _20.w = _53;

    _18.x = _55;
    _18.y = _57;
    _18.z = _59;
    _18.w = 1.0; // 也可以用 _27.w
}