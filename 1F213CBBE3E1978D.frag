#version 450

layout(location = 0) out vec4 _109;
layout(location = 1) out vec4 _111;

void main()
{
    // 输出固定红色，用于测试着色器是否崩溃
    _109 = vec4(1.0, 0.0, 0.0, 1.0);
    _111 = vec4(0.0, 0.875, 0.0, 1.0);
}