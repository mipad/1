#version 450

layout(location = 0) out vec4 v_color0;
layout(location = 1) out vec4 v_color1;

void main() {
    // 生成一个覆盖 NDC 的大三角形（无需顶点缓冲区）
    const vec4 positions[3] = vec4[](
        vec4(-1.0, -1.0, 0.0, 1.0),
        vec4( 3.0, -1.0, 0.0, 1.0),
        vec4(-1.0,  3.0, 0.0, 1.0)
    );
    int idx = gl_VertexIndex;
    if (idx < 0 || idx >= 3) idx = 0;
    gl_Position = positions[idx];
    v_color0 = vec4(1.0, 0.0, 0.0, 1.0);
    v_color1 = vec4(0.0, 1.0, 0.0, 1.0);
}