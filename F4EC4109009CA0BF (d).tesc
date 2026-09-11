#version 450
layout(vertices = 3) out;

layout(set = 0, binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    vec4 _m3;
    int _m4;
    float _m5[73];
    ivec4 _m6;
    int _m7;
} support_buffer_1;

layout(set = 0, binding = 60, std140) uniform tcp_c5
{
    vec4 _m0[4096];
} tcp_c5_1;

layout(location = 0) out vec4 _27[3];
layout(location = 3) out vec4 _29[3];
layout(location = 4) out vec4 _31[3];
layout(location = 0) in vec4 _41[];
layout(location = 2) in vec4 _43[];
layout(location = 1) in vec4 _45[];

void _72(int _964, int _965, int _966)
{
}

void main()
{
    // ===== 实验 D：最小 TCS + 无 subgroup 扩展 =====

    // 1. 把输入直通到输出
    _27[gl_InvocationID] = _41[gl_InvocationID];
    _29[gl_InvocationID] = _45[gl_InvocationID];
    _31[gl_InvocationID] = _43[gl_InvocationID];

    // 2. 传递 gl_Position
    gl_out[gl_InvocationID].gl_Position = gl_in[gl_InvocationID].gl_Position;

    // 3. 只在 invocation 0 设置细分级别
    if (gl_InvocationID == 0)
    {
        gl_TessLevelOuter[0] = 1.0;
        gl_TessLevelOuter[1] = 1.0;
        gl_TessLevelOuter[2] = 1.0;
        gl_TessLevelInner[0] = 1.0;
    }

    // ===== 实验 D 结束 =====
}