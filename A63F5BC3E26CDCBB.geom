#version 450

layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;

layout(location = 0) in vec4 v_uv[3];
layout(location = 1) in vec4 v_pos[3];
layout(location = 2) in vec4 v_normal[3];
layout(location = 7) in vec4 v_tangent[3];
layout(location = 4) in vec4 v_color[3];

layout(location = 0) out vec4 out_uv;
layout(location = 1) out vec4 out_pos;
layout(location = 2) out vec4 out_normal;
layout(location = 3) out vec4 out_tangent;
layout(location = 5) out vec4 out_unused;
layout(location = 4) out vec4 out_color;

void main() {
    for (int i = 0; i < 3; ++i) {
        gl_Position = gl_in[i].gl_Position;
        out_uv = v_uv[i];
        out_pos = v_pos[i];
        out_normal = v_normal[i];
        out_tangent = v_tangent[i];
        out_unused = vec4(0.0);
        out_color = v_color[i];
        EmitVertex();
    }
    EndPrimitive();
}