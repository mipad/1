#version 450

layout(location = 7) in uvec4 _34;
layout(location = 1) in uvec4 _36;
layout(location = 4) in uvec4 _38;
layout(location = 13) in uvec4 _40;
layout(location = 6) in vec4 _43;
layout(location = 0) in vec4 _45;
layout(location = 2) in vec4 _47;
layout(location = 3) in vec4 _49;
layout(location = 5) in vec4 _51;
layout(location = 8) in vec4 _53;
layout(location = 10) in vec4 _55;
layout(location = 9) in vec4 _57;
layout(location = 12) in vec4 _59;
layout(location = 11) in vec4 _61;

layout(location = 0) out vec4 _22;
layout(location = 1) out vec4 _24;
layout(location = 2) out vec4 _26;
layout(location = 3) out vec4 _28;
layout(location = 4) out vec4 _30;

void main()
{
    gl_PointSize = 1.0;
    gl_Position = _45;
    _22 = _43;
    _24 = _47;
    _26 = _49;
    _28 = _51;
    _30 = _53;
}
