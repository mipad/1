#version 450

layout(location = 3) in vec4 _33;
layout(location = 0) in uvec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 1) in vec4 _43;
layout(location = 6) in vec4 _45;
layout(location = 5) in vec4 _47;
layout(location = 8) in vec4 _49;
layout(location = 7) in vec4 _51;

layout(location = 0) out vec4 _22;
layout(location = 1) out vec4 _24;
layout(location = 2) out vec4 _26;
layout(location = 3) out vec4 _28;
layout(location = 4) out vec4 _30;

void main()
{
    gl_PointSize = 1.0;
    gl_Position = _33;
    _22 = _43;
    _24 = _39;
    _26 = _41;
    _28 = _45;
    _30 = _47;
}
