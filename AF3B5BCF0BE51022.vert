#version 450
#extension GL_ARB_shader_draw_parameters : require

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

layout(location = 1) out vec4 _16;
layout(location = 0) out vec4 _27;
// 新增：输出层索引（flat 修饰，不进行插值）
flat out int vLayer;

void main()
{
    gl_PointSize = 1.0;
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    _16.xy = vec2(0.0);
    _27 = vec4(0.0);

    float _39 = intBitsToFloat(gl_VertexIndex);
    float _41 = intBitsToFloat(gl_InstanceIndex);
    float _43 = intBitsToFloat(gl_BaseInstanceARB);
    int _46 = floatBitsToInt(_41) - floatBitsToInt(_43);
    float _48 = intBitsToFloat(gl_BaseVertexARB);
    int _50 = floatBitsToInt(_39) + floatBitsToInt(_48);
    float _52 = intBitsToFloat(gl_BaseInstanceARB);
    int _54 = _46 + floatBitsToInt(_52);
    int _56 = _50 >> 31;
    int _58 = _56 & 1;
    int _60 = _50 + _58;
    int _62 = _50 & 1;
    int _64 = _60 >> 1;
    int _66 = _62 << 2;
    int _68 = -_66;
    int _70 = _68 + 1;
    float _72 = float(_70);
    int _74 = _64 << 2;
    int _76 = _74 + (-1);
    float _78 = float(_76);
    float _80 = fma(_72, -0.5, 0.5);
    float _82 = fma(_78, 0.5, 0.5);

    gl_Position.x = _78;
    gl_Position.y = _72;
    _16.x = _82;
    _16.y = _80;
    _27.y = intBitsToFloat(_54);   // 保留原始输出（可能被片段着色器使用）
    vLayer = _54;                  // 输出层索引（原几何着色器中用到的值）
}