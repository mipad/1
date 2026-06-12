#version 450
layout(location = 0) in vec4 f_color0;
layout(location = 1) in vec4 f_color1;
layout(location = 0) out vec4 out_color;

void main() {
    out_color = f_color0;   // 输出红色，也可改为 f_color1 或其他
}