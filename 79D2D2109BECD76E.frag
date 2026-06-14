#version 450

layout(location = 0) out vec4 _28;

void main()
{
    // 强制输出红色，忽略所有输入和计算
    _28 = vec4(1.0, 0.0, 0.0, 1.0);
}