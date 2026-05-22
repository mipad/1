#version 450

layout(location = 0) in vec4 in_pos;
layout(location = 1) in vec4 in_uv;
layout(location = 3) in vec4 in_normal;
layout(location = 2) in vec4 in_tangent;

layout(location = 0) out vec4 out_uv;
layout(location = 1) out vec4 out_pos;
layout(location = 2) out vec4 out_normal;
layout(location = 4) out vec4 out_extra;
layout(location = 7) out vec4 out_tangent;

void main() {
    gl_PointSize = 1.0;
    // 直接传递，不做任何矩阵变换（测试用）
    gl_Position = in_pos;
    out_uv = in_uv;
    out_pos = in_pos;
    out_normal = in_normal;
    out_tangent = in_tangent;
    out_extra = vec4(0.0);
}