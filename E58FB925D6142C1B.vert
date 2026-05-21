#version 450

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

layout(set = 0, binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(set = 0, binding = 7, std140) uniform vp_c6
{
    vec4 _m0[4096];
} vp_c6_1;

layout(set = 0, binding = 8, std140) uniform vp_c7
{
    vec4 _m0[4096];
} vp_c7_1;

layout(location = 0) out vec4 _26;
layout(location = 1) out vec4 _28;
layout(location = 2) out vec4 _30;
layout(location = 4) out vec4 _32;
layout(location = 7) out vec4 _34;
layout(location = 0) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 3) in vec4 _41;
layout(location = 2) in vec4 _43;

void main()
{
    gl_PointSize = 1.0;
    
    float _55 = _37.x;
    float _57 = _37.y;
    float _59 = _37.z;
    float _198 = _57 * vp_c5_1._m0[1].y;
    float _61 = _198;
    float _202 = _57 * vp_c5_1._m0[1].x;
    float _63 = _202;
    float _65 = fma(_55, vp_c5_1._m0[0].y, _61);
    float _212 = _57 * vp_c5_1._m0[1].z;
    float _67 = _212;
    float _69 = fma(_55, vp_c5_1._m0[0].x, _63);
    float _71 = fma(_59, vp_c5_1._m0[2].y, _65);
    float _73 = fma(_55, vp_c5_1._m0[0].z, _67);
    float _75 = fma(_59, vp_c5_1._m0[2].x, _69);
    float _236 = _71 + vp_c5_1._m0[3].y;
    float _77 = _236;
    float _79 = fma(_59, vp_c5_1._m0[2].z, _73);
    float _245 = _75 + vp_c5_1._m0[3].x;
    float _81 = _245;
    float _249 = _77 * vp_c6_1._m0[1].w;
    float _83 = _249;
    float _253 = _79 + vp_c5_1._m0[3].z;
    float _85 = _253;
    float _257 = _77 * vp_c6_1._m0[1].x;
    float _87 = _257;
    float _261 = _77 * vp_c6_1._m0[1].z;
    float _89 = _261;
    float _91 = fma(_81, vp_c6_1._m0[0].w, _83);
    float _270 = _77 * vp_c6_1._m0[1].y;
    float _93 = _270;
    float _95 = fma(_81, vp_c6_1._m0[0].x, _87);
    float _97 = fma(_85, vp_c6_1._m0[2].w, _91);
    float _99 = fma(_81, vp_c6_1._m0[0].y, _93);
    float _101 = fma(_81, vp_c6_1._m0[0].z, _89);
    float _103 = fma(_85, vp_c6_1._m0[2].x, _95);
    float _299 = _97 + vp_c6_1._m0[3].w;
    float _105 = _299;
    float _107 = fma(_85, vp_c6_1._m0[2].y, _99);
    float _109 = fma(_85, vp_c6_1._m0[2].z, _101);
    float _313 = _103 + vp_c6_1._m0[3].x;
    float _111 = _313;
    float _317 = _107 + vp_c6_1._m0[3].y;
    float _113 = _317;
    float _321 = _109 + vp_c6_1._m0[3].z;
    float _115 = _321;
    float _325 = _77 * vp_c7_1._m0[1].x;
    float _117 = _325;
    float _119 = _39.x;
    float _121 = _39.y;
    float _333 = _77 * vp_c7_1._m0[1].y;
    float _123 = _333;
    float _125 = _41.z;
    float _339 = _77 * vp_c7_1._m0[1].z;
    float _127 = _339;
    float _129 = _37.w;
    float _131 = fma(_81, vp_c7_1._m0[0].x, _117);
    float _133 = _43.x;
    float _135 = fma(_81, vp_c7_1._m0[0].y, _123);
    float _137 = _43.y;
    float _139 = fma(_81, vp_c7_1._m0[0].z, _127);
    float _141 = _43.z;
    _28.x = _55;
    _28.y = _57;
    _28.z = _59;
    gl_Position.x = _111;
    gl_Position.y = _113;
    gl_Position.z = _115;
    gl_Position.w = _105;
    float _143 = fma(_85, vp_c7_1._m0[2].x, _131);
    _28.w = _129;
    float _145 = fma(_85, vp_c7_1._m0[2].y, _135);
    _30.x = _133;
    float _147 = fma(_85, vp_c7_1._m0[2].z, _139);
    _30.y = _137;
    float _149 = fma(_119, vp_c6_1._m0[4].x, vp_c6_1._m0[4].z);
    _30.z = _141;
    float _151 = fma(_121, vp_c6_1._m0[4].y, vp_c6_1._m0[4].w);
    _32.w = 0.0;
    float _153 = -_125;
    float _417 = _153 + 1.0;
    float _155 = _417;
    _26.x = _149;
    _26.y = _151;
    float _425 = _143 + vp_c7_1._m0[3].x;
    float _157 = _425;
    _34.x = _155;
    float _431 = _145 + vp_c7_1._m0[3].y;
    float _159 = _431;
    float _435 = _147 + vp_c7_1._m0[3].z;
    float _161 = _435;
    _32.x = _157;
    _32.y = _159;
    _32.z = _161;
}