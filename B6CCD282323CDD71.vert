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

layout(set = 0, binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 0) out vec4 _22;
layout(location = 1) out vec4 _24;
layout(location = 2) out vec4 _26;
layout(location = 3) out vec4 _28;
layout(location = 3) in vec4 _31;
layout(location = 0) in vec4 _33;
layout(location = 1) in vec4 _35;
layout(location = 2) in vec4 _37;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    _22.x = 0.0;
    _22.y = 0.0;
    _22.z = 0.0;
    _22.w = 1.0;
    _24.w = 1.0;
    _26.x = 0.0;
    _26.y = 0.0;
    _26.z = 0.0;
    _28.x = 0.0;
    _28.y = 0.0;
    bool _50 = 0.0 < vp_c3_1._m0[0].x;
    float _53 = _31.x;
    bool _55 = 0.0 < vp_c3_1._m0[0].y;
    float _57 = _31.y;
    float _59 = _31.z;
    float _61 = _31.w;
    float _63 = 0.0;
    if (_50)
    {
        float _65 = _33.x;
        _63 = _65;
    }
    float _67 = _63;
    float _69 = _67;
    if (!_50)
    {
        float _71 = _35.x;
        _69 = _71;
    }
    float _73 = _69;
    precise float _296 = _53 * vp_c3_1._m0[6].x;
    float _75 = _296;
    float _77 = _37.x;
    precise float _302 = _53 * vp_c3_1._m0[5].x;
    float _79 = _302;
    float _81 = _37.y;
    precise float _308 = _53 * vp_c3_1._m0[7].x;
    float _83 = _308;
    float _85 = 0.0;
    if (_50)
    {
        float _87 = _33.y;
        _85 = _87;
    }
    float _89 = _85;
    float _91 = fma(_57, vp_c3_1._m0[6].y, _75);
    int _94 = 0;
    float _96 = _89;
    if (_55)
    {
        float _98 = _33.y;
        _94 = floatBitsToInt(_98);
    }
    int _100 = _94;
    float _102 = fma(_57, vp_c3_1._m0[5].y, _79);
    int _104 = _100;
    if (!_50)
    {
        float _106 = _35.y;
        _96 = _106;
    }
    float _108 = _96;
    float _110 = fma(_57, vp_c3_1._m0[7].y, _83);
    if (!_55)
    {
        float _112 = _35.y;
        _104 = floatBitsToInt(_112);
    }
    int _114 = _104;
    float _116 = fma(_59, vp_c3_1._m0[6].z, _91);
    int _118 = 0;
    if (_55)
    {
        float _120 = _33.x;
        _118 = floatBitsToInt(_120);
    }
    int _122 = _118;
    float _124 = fma(_59, vp_c3_1._m0[5].z, _102);
    int _126 = _122;
    if (!_55)
    {
        float _128 = _35.x;
        _126 = floatBitsToInt(_128);
    }
    int _130 = _126;
    float _132 = fma(_59, vp_c3_1._m0[7].z, _110);
    float _134 = _37.z;
    float _136 = fma(_61, vp_c3_1._m0[6].w, _116);
    float _138 = _37.w;
    float _140 = fma(_61, vp_c3_1._m0[5].w, _124);
    _22.x = _77;
    float _142 = fma(_61, vp_c3_1._m0[7].w, _132);
    _22.y = _81;
    precise float _418 = _136 * vp_c3_1._m0[2].x;
    float _144 = _418;
    _28.z = intBitsToFloat(_114);
    precise float _425 = _136 * vp_c3_1._m0[2].y;
    float _146 = _425;
    _26.w = _61;
    precise float _432 = _73 + vp_c3_1._m0[8].x;
    float _148 = _432;
    _26.y = _136;
    float _150 = fma(_140, vp_c3_1._m0[1].x, _144);
    _28.w = intBitsToFloat(_130);
    float _152 = fma(_140, vp_c3_1._m0[1].y, _146);
    _26.z = _142;
    precise float _453 = _136 * vp_c3_1._m0[2].z;
    float _154 = _453;
    _22.z = _134;
    precise float _459 = _136 * vp_c3_1._m0[2].w;
    float _156 = _459;
    _22.w = _138;
    float _158 = fma(_142, vp_c3_1._m0[3].x, _150);
    _28.x = _148;
    float _160 = fma(_140, vp_c3_1._m0[1].z, _154);
    _26.x = _140;
    float _162 = fma(_140, vp_c3_1._m0[1].w, _156);
    float _164 = fma(_61, vp_c3_1._m0[4].x, _158);
    float _166 = fma(_142, vp_c3_1._m0[3].y, _152);
    _24.x = _164;
    float _168 = fma(_142, vp_c3_1._m0[3].z, _160);
    gl_Position.x = _164;
    float _170 = fma(_142, vp_c3_1._m0[3].w, _162);
    precise float _508 = _108 + vp_c3_1._m0[8].y;
    float _172 = _508;
    float _174 = fma(_61, vp_c3_1._m0[4].y, _166);
    _28.y = _172;
    float _176 = fma(_61, vp_c3_1._m0[4].z, _168);
    _24.y = _174;
    float _178 = fma(_61, vp_c3_1._m0[4].w, _170);
    gl_Position.y = _174;
    precise float _534 = _164 * vp_c3_1._m0[9].x;
    float _180 = _534;
    _24.z = _176;
    precise float _541 = _164 * vp_c3_1._m0[10].x;
    float _182 = _541;
    gl_Position.z = _176;
    precise float _548 = _164 * vp_c3_1._m0[11].x;
    float _184 = _548;
    _24.w = _178;
    precise float _555 = _164 * vp_c3_1._m0[12].x;
    float _186 = _555;
    gl_Position.w = _178;
    precise float _562 = _164 * vp_c3_1._m0[13].x;
    float _188 = _562;
    precise float _567 = _164 * vp_c3_1._m0[14].x;
    float _190 = _567;
    float _192 = fma(_174, vp_c3_1._m0[9].y, _180);
    float _194 = fma(_174, vp_c3_1._m0[10].y, _182);
    float _196 = fma(_174, vp_c3_1._m0[11].y, _184);
    float _198 = fma(_174, vp_c3_1._m0[12].y, _186);
    float _200 = fma(_174, vp_c3_1._m0[13].y, _188);
    float _202 = fma(_174, vp_c3_1._m0[14].y, _190);
    float _204 = fma(_176, vp_c3_1._m0[9].z, _192);
    float _206 = fma(_176, vp_c3_1._m0[10].z, _194);
    float _208 = fma(_176, vp_c3_1._m0[11].z, _196);
    float _210 = fma(_176, vp_c3_1._m0[12].z, _198);
    float _212 = fma(_176, vp_c3_1._m0[13].z, _200);
    float _214 = fma(_176, vp_c3_1._m0[14].z, _202);
    float _216 = fma(_178, vp_c3_1._m0[9].w, _204);
    float _218 = fma(_178, vp_c3_1._m0[10].w, _206);
    float _220 = fma(_178, vp_c3_1._m0[11].w, _208);
    float _222 = fma(_178, vp_c3_1._m0[12].w, _210);
    float _224 = fma(_178, vp_c3_1._m0[13].w, _212);
    float _226 = fma(_178, vp_c3_1._m0[14].w, _214);
}