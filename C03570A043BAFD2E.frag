#version 450

layout(location = 0) out vec4 _112;
layout(location = 1) out vec4 _114;

void main()
{
    // 输出固定红色，用于测试着色器是否崩溃
    _112 = vec4(1.0, 0.0, 0.0, 1.0);
    _114 = vec4(0.0, 0.875, 0.0, 1.0);
}