#version 450

layout(triangles) in;
layout(max_vertices = 3, triangle_strip) out;

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

layout(location = 0) in vec4 _18[3];
layout(location = 0) out vec4 _21;

layout(location = 1) in vec4 _26[3];
layout(location = 1) out vec4 _28;

void main()
{
    // Vertex 0
    _21 = _18[0];
    _28 = _26[0];
    gl_Position = gl_in[0].gl_Position;
    EmitVertex();

    // Vertex 1
    _21 = _18[1];
    _28 = _26[1];
    gl_Position = gl_in[1].gl_Position;
    EmitVertex();

    // Vertex 2
    _21 = _18[2];
    _28 = _26[2];
    gl_Position = gl_in[2].gl_Position;
    EmitVertex();

    EndPrimitive();
}