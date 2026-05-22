#version 450
layout(triangles) in;
layout(max_vertices = 3, triangle_strip) out;
layout(location = 0) out vec4 out_0;
layout(location = 1) out vec4 out_1;
layout(location = 2) out vec4 out_2;
layout(location = 3) out vec4 out_3;
layout(location = 5) out vec4 out_5;
layout(location = 4) out vec4 out_4;
in vec4 in_0[3];
in vec4 in_1[3];
in vec4 in_2[3];
in vec4 in_3[3];
in vec4 in_4[3];
void main() {
    for (int i = 0; i < 3; ++i) {
        gl_Position = gl_in[i].gl_Position;
        out_0 = in_0[i];
        out_1 = in_1[i];
        out_2 = in_2[i];
        out_3 = vec4(0);
        out_5 = vec4(0);
        out_4 = in_4[i];
        EmitVertex();
    }
    EndPrimitive();
}