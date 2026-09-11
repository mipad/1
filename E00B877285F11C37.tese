#version 450
layout(triangles, cw, fractional_even_spacing) in;

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

layout(set = 0, binding = 77, std140) uniform tep_c4
{
    vec4 _m0[4096];
} tep_c4_1;

layout(set = 0, binding = 79, std140) uniform tep_c6
{
    vec4 _m0[4096];
} tep_c6_1;

layout(location = 0) out vec4 _24;
layout(location = 4) out vec4 _26;
layout(location = 5) out vec4 _28;
layout(location = 3) in vec4 _40[];
layout(location = 0) in vec4 _42[];
layout(location = 4) in vec4 _44[];
layout(location = 3) out vec4 _46;

void main()
{
    // ===== 实验 E：最小 TES =====

    // 用 barycentric 权重对三个顶点做简单插值
    float w0 = gl_TessCoord.x;
    float w1 = gl_TessCoord.y;
    float w2 = gl_TessCoord.z;

    // 输出全设为 0，避免复杂计算
    _24 = vec4(0.0);
    _26 = vec4(0.0);
    _28 = vec4(0.0);
    _46 = vec4(0.0);

    // gl_Position 必须写，用简单插值
    gl_Position = w0 * gl_in[0].gl_Position
                + w1 * gl_in[1].gl_Position
                + w2 * gl_in[2].gl_Position;

    // ===== 实验 E 结束 =====
}