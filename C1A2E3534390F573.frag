#version 450

layout(location = 1) in vec4 in_uv;
layout(location = 0) in vec4 in_pos;
layout(location = 2) in vec4 in_normal;
layout(location = 3) in vec4 in_tangent;

layout(location = 0) out vec4 out_color;

void main() {
    // 固定输出红色，忽略所有输入
    out_color = vec4(1.0, 0.0, 0.0, 1.0);
}