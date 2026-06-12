#version 450
layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;

layout(location = 0) in vec4 v_color[3];
layout(location = 0) out vec4 f_color;

void main() {
    for (int i = 0; i < 3; i++) {
        gl_Position = gl_in[i].gl_Position;
        f_color = v_color[i];
        EmitVertex();
    }
    EndPrimitive();
}