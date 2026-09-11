#version 450
#extension GL_KHR_shader_subgroup_basic : require
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
    bool _373 = false;

    // ===== 修正：TCS 输出数组必须用 gl_InvocationID 直接索引 =====
    _27[gl_InvocationID].x = 0.0;
    _27[gl_InvocationID].y = 0.0;
    _27[gl_InvocationID].z = 0.0;
    _29[gl_InvocationID].x = 0.0;
    _29[gl_InvocationID].y = 0.0;
    _29[gl_InvocationID].z = 0.0;
    _31[gl_InvocationID].x = 0.0;
    _31[gl_InvocationID].y = 0.0;
    // =============================================================

    float _92 = uintBitsToFloat(gl_SubgroupInvocationID);
    int _94 = ~0;
    bool _98 = floatBitsToInt(_92) < 0;
    int _100 = floatBitsToInt(_92) << 2;
    int _102 = 4096;
    int _104 = 32;
    int _106 = 4096;
    if (_94 != 0)
    {
        _102 = 4224;
    }
    int _108 = _102;
    if (_98)
    {
        float _110 = intBitsToFloat(gl_InvocationID);
        float _112 = intBitsToFloat(gl_BuiltIn_14);
        int _114 = floatBitsToInt(_112) << 16;
        int _116 = floatBitsToInt(_110) << 2;
        int _118 = _116 >> 2;
        int _120 = _114 & 255;
        uint _123 = uint(int(uint(_114) >> uint(16)));
        int _125 = int(_123) & 255;
        int _127 = _120 * _125;
        int _129 = _127 + _118;
        uint _131 = uint(int(uint(_114) >> uint(16)));
        int _133 = int(_131) & 255;
        bool _135 = uint(_133) <= uint(_118);
        int _137 = _100 + 128;
        int _139 = _137 + _108;
        int _141 = _139 + 508;
        int _143 = _139 + 3556;
        int _145 = _139 + 1524;
        int _147 = _139 + 4064;
        int _149 = _139 + 4572;
        int _151 = _139 + 2032;
        int _153 = _139 + 5080;
        int _155 = _129;
        if (_135)
        {
            // ===== 实验 B：去掉 0x80000000 =====
            _155 = 0;
            // ==================================
        }
        int _157 = _155;
        bool _159 = floatBitsToInt(_110) == 0;
        float _161 = _41[_157].x;
        float _163 = _41[_157].y;
        float _165 = _41[_157].z;
        int _167 = _139 + 2540;
        float _169 = _41[_157].w;
        int _171 = 0;
        if (_159)
        {
            _171 = floatBitsToInt(tcp_c5_1._m0[4].x);
        }
        int _173 = _171;
        float _175 = _43[_157].x;
        int _177 = _139 + 1016;
        float _179 = _43[_157].y;
        int _181 = _139 + 3048;
        float _183 = _43[_157].z;
        bool _185 = uint(_139) < 0u;
        int _187 = int(_185);
        int _189 = _139;
        int _191 = _187;
        int _193 = floatBitsToInt(_161);
        _72(_189, _191, _193);
        float _195 = _43[_157].w;
        bool _197 = uint(_141) < 0u;
        int _199 = int(_197);
        int _201 = _141;
        int _203 = _199;
        int _205 = floatBitsToInt(_163);
        _72(_201, _203, _205);
        float _207 = _45[_157].x;
        float _209 = _45[_157].y;
        float _211 = _45[_157].z;
        if (_159)
        {
            gl_TessLevelOuter[0] = intBitsToFloat(_173);
        }
        if (_159)
        {
            gl_TessLevelOuter[1] = intBitsToFloat(_173);
        }
        if (_159)
        {
            gl_TessLevelOuter[2] = intBitsToFloat(_173);
        }
        if (_159)
        {
            gl_TessLevelInner[0] = intBitsToFloat(_173);
        }
        bool _213 = uint(_177) < 0u;
        int _215 = int(_213);
        int _217 = _177;
        int _219 = _215;
        int _221 = floatBitsToInt(_165);
        _72(_217, _219, _221);
        bool _223 = uint(_145) < 0u;
        int _225 = int(_223);
        int _227 = _145;
        int _229 = _225;
        int _231 = floatBitsToInt(_169);
        _72(_227, _229, _231);
        bool _233 = uint(_143) < 0u;
        int _235 = int(_233);
        int _237 = _143;
        int _239 = _235;
        int _241 = floatBitsToInt(_175);
        _72(_237, _239, _241);
        bool _243 = uint(_147) < 0u;
        int _245 = int(_243);
        int _247 = _147;
        int _249 = _245;
        int _251 = floatBitsToInt(_179);
        _72(_247, _249, _251);
        bool _253 = uint(_149) < 0u;
        int _255 = int(_253);
        int _257 = _149;
        int _259 = _255;
        int _261 = floatBitsToInt(_183);
        _72(_257, _259, _261);
        bool _263 = uint(_153) < 0u;
        int _265 = int(_263);
        int _267 = _153;
        int _269 = _265;
        int _271 = floatBitsToInt(_195);
        _72(_267, _269, _271);
        bool _273 = uint(_151) < 0u;
        int _275 = int(_273);
        int _277 = _151;
        int _279 = _275;
        int _281 = floatBitsToInt(_207);
        _72(_277, _279, _281);
        bool _283 = uint(_167) < 0u;
        int _285 = int(_283);
        int _287 = _167;
        int _289 = _285;
        int _291 = floatBitsToInt(_209);
        _72(_287, _289, _291);
        bool _293 = uint(_181) < 0u;
        int _295 = int(_293);
        int _297 = _181;
        int _299 = _295;
        int _301 = floatBitsToInt(_211);
        _72(_297, _299, _301);
    }
    int _303 = -_100;
    int _305 = _303 + 127;
    int _307 = _100 + 128;
    int _309 = 0;
    uint _311 = uint(_307);
    int _313 = _100;
    int _369;
    int _371;
    if (false)
    {
        int _315 = _307 + 128;
        int _317 = _100 + 128;
        int _319 = _315 + 128;
        int _321 = _317 + 128;
        int _323 = int(bitfieldInsert(0u, 2u, int(2u), int(4u)));
        int _325 = 4 ^ _317;
        int _327 = _323 ^ _321;
        bool _329 = uint(_100) < 0u;
        int _331 = int(_329);
        int _333 = _100;
        int _335 = _331;
        int _337 = _305;
        _72(_333, _335, _337);
        bool _339 = uint(_307) < 0u;
        int _341 = int(_339);
        int _343 = _307;
        int _345 = _341;
        int _347 = _100;
        _72(_343, _345, _347);
        bool _349 = uint(_315) < 0u;
        int _351 = int(_349);
        int _353 = _315;
        int _355 = _351;
        int _357 = _325;
        _72(_353, _355, _357);
        bool _359 = uint(_319) < 0u;
        int _361 = int(_359);
        int _363 = _319;
        int _365 = _361;
        int _367 = _327;
        _72(_363, _365, _367);
        _369 = 0;
        _371 = 0;
        _373 = true;
    }
    else
    {
        bool _375 = uint(_100) < 0u;
        int _377 = int(_375);
        int _379 = _100;
        int _381 = _377;
        int _383 = _305;
        _72(_379, _381, _383);
        bool _385;
        do
        {
            int _387 = _309;
            int _389 = _104;
            uint _391 = _311;
            int _393 = _313;
            int _395 = _387 << 2;
            int _397 = _389 + (-1);
            bool _399 = _397 == 0;
            bool _401 = _397 < 0;
            int _403 = _387 + 1;
            int _405 = int(_391) + 128;
            int _407 = _395 ^ _393;
            int _409 = _393 + 128;
            int _411 = _403 & 15;
            bool _413 = _391 < 0u;
            int _415 = int(_413);
            int _417 = int(_391);
            int _419 = _415;
            int _421 = _407;
            _72(_417, _419, _421);
            _385 = !_399;
            _309 = _411;
            _104 = _397;
            _311 = uint(_405);
            _313 = _409;
            _369 = _401 ? (-1) : 0;
            _371 = _399 ? (-1) : 0;
        } while (_385);
    }
    _373 = false;
    int _423 = _369;
    int _425 = _371;
    int _427 = ~_423;
    int _429 = _427 & _425;
    int _431 = _305;
    int _433 = 96;
    if (!(_429 != 0))
    {
        _431 = _100;
    }
    int _435 = _431;
    if (!(_429 != 0))
    {
        int _437 = _100 + 4096;
        int _439 = _437 + 128;
        _106 = _439;
    }
    int _441 = _106;
    if (!(_429 != 0))
    {
        _433 = 0;
    }
    int _443 = _433;
    if (!(_429 != 0))
    {
        bool _445 = uint(_441) < 0u;
        int _447 = int(_445);
        int _449 = _443 + _447;
        int _451 = _441;
        int _453 = _449;
        int _455 = _435;
        _72(_451, _453, _455);
    }
}
