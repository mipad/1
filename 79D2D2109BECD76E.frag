#version 450
#extension GL_EXT_multiview : enable

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

layout(set = 0, binding = 20, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(location = 1) in vec4 _25;
layout(location = 0) out vec4 _28;

void main()
{
    // 原代码中使用 gl_Layer，现在改为 gl_ViewIndex
    // 原：float _35 = intBitsToFloat(gl_Layer);
    // 因为 gl_ViewIndex 是 int，需要转换为 float 后再进行原有整数+1的操作
    int layer = gl_ViewIndex;
    float _35 = float(layer);           // 转换为 float，相当于原 intBitsToFloat 的效果
    int _38 = int(_35) + 1;             // 注意：原代码中 floatBitsToInt(_35) 再 +1，这里直接取整加1
    float _40 = float(_38);
    float _42 = _25.x;
    float _44 = _25.y;
    float _46 = exp2(_40);
    precise float _202 = 1.0 / _46;
    float _48 = _202;
    precise float _205 = _46 * _42;
    float _50 = _205;
    precise float _208 = _46 * _44;
    float _52 = _208;
    float _54 = floor(_50);
    float _56 = floor(_52);
    precise float _214 = _54 + 1.0;
    float _58 = _214;
    precise float _217 = _54 * _48;
    float _60 = _217;
    precise float _219 = _56 + 1.0;
    float _62 = _219;
    float _64 = floor(_60);
    precise float _224 = _56 * _48;
    float _66 = _224;
    precise float _227 = _58 * _48;
    float _68 = _227;
    float _70 = floor(_66);
    precise float _232 = _62 * _48;
    float _72 = _232;
    float _74 = floor(_68);
    float _76 = -_64;
    float _78 = fma(_46, _76, _54);
    float _80 = floor(_72);
    float _82 = -_70;
    float _84 = fma(_46, _82, _56);
    float _86 = -_56;
    precise float _253 = _52 + _86;
    float _88 = _253;
    float _90 = -_74;
    float _92 = fma(_46, _90, _58);
    precise float _262 = _78 * 27.168979644775390625;
    float _94 = _262;
    float _96 = -_80;
    float _98 = fma(_46, _96, _62);
    precise float _270 = _92 * 27.168979644775390625;
    float _100 = _270;
    float _102 = fma(_98, fp_c1_1._m0[0].x, _94);
    float _104 = fma(_84, fp_c1_1._m0[0].x, _94);
    float _106 = fma(_84, fp_c1_1._m0[0].x, _100);
    float _108 = fma(_98, fp_c1_1._m0[0].x, _100);
    float _110 = sin(_102);
    float _112 = sin(_104);
    float _114 = sin(_106);
    float _116 = -_54;
    precise float _302 = _50 + _116;
    float _118 = _302;
    float _120 = sin(_108);
    precise float _307 = _110 * 5151.54736328125;
    float _122 = _307;
    precise float _309 = _112 * 5151.54736328125;
    float _124 = _309;
    float _126 = floor(_122);
    precise float _313 = _114 * 5151.54736328125;
    float _128 = _313;
    float _130 = floor(_124);
    precise float _317 = _120 * 5151.54736328125;
    float _132 = _317;
    float _134 = floor(_128);
    float _136 = -_126;
    precise float _324 = _122 + _136;
    float _138 = _324;
    float _140 = floor(_132);
    float _142 = -_130;
    precise float _331 = _124 + _142;
    float _144 = _331;
    precise float _334 = _118 * _118;
    float _146 = _334;
    float _148 = fma(_118, -2.0, 3.0);
    float _150 = fma(_88, -2.0, 3.0);
    precise float _343 = _88 * _88;
    float _152 = _343;
    float _154 = -_134;
    precise float _348 = _128 + _154;
    float _156 = _348;
    precise float _351 = _148 * _146;
    float _158 = _351;
    precise float _354 = _150 * _152;
    float _160 = _354;
    float _162 = -_140;
    precise float _359 = _132 + _162;
    float _164 = _359;
    float _166 = -_144;
    precise float _364 = _166 + _156;
    float _168 = _364;
    float _170 = -_138;
    precise float _369 = _164 + _170;
    float _172 = _369;
    float _174 = fma(_168, _158, _144);
    float _176 = fma(_172, _158, _138);
    float _178 = -_174;
    precise float _382 = _178 + _176;
    float _180 = _382;
    float _182 = fma(_160, _180, _174);
    _28.x = _182;
    _28.y = _182;
    _28.z = _182;
    _28.w = 1.0;
}