#version 450

layout(set = 0, binding = 22, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(location = 0) in vec4 _22;
layout(location = 0) out vec4 _25;

void main()
{
    _25 = vec4(1.0);
}