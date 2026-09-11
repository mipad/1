#version 450

layout(location = 0) out vec4 _16;
layout(location = 1) out vec4 _18;
layout(location = 2) out vec4 _20;

void main()
{
    gl_PointSize = 1.0;
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);

    _16 = vec4(0.0, 0.0, 0.0, 1.0);
    _18 = vec4(0.0, 0.0, 0.0, 1.0);
    _20 = vec4(0.0, 0.0, 0.0, 1.0);
}
