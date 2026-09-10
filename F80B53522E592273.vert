#version 450
#extension GL_ARB_shader_draw_parameters : require

layout(location = 1) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    _51 = vec4(0.0);
}
