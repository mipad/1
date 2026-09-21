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

layout(set = 0, binding = 22, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(set = 0, binding = 20, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(set = 2, binding = 128) uniform sampler2D fp_t_tcb_8;
layout(set = 2, binding = 129) uniform sampler2D fp_t_tcb_C;
layout(set = 2, binding = 130) uniform sampler2D fp_t_tcb_A;
layout(set = 2, binding = 131) uniform sampler2D fp_t_tcb_E;

layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 4) in vec4 _39;
layout(location = 3) in vec4 _41;
layout(location = 2) in vec4 _43;
layout(location = 0) out vec4 _46;
layout(location = 1) out vec4 _48;
layout(location = 2) out vec4 _50;

void main()
{
    bool _434 = false;
    float _57 = _35.x;
    float _59 = _35.y;
    vec4 _62 = texture(fp_t_tcb_8, vec2(_57, _59)).xyzw;
    float _64 = _62.x;
    float _66 = _62.y;
    float _68 = _62.z;
    float _70 = _62.w;
    float _72 = _37.x;
    float _74 = _37.y;
    float _76 = _35.z;
    float _78 = _35.w;
    bool _82 = _70 <= fp_c3_1._m0[3].y;
    uint _85 = floatBitsToUint(_64);
    if (_82)
    {
        discard;
    }
    vec3 _89 = texture(fp_t_tcb_C, vec2(_72, _74)).xyw;
    float _91 = _89.x;
    float _93 = _89.y;
    float _95 = _89.z;
    float _97 = texture(fp_t_tcb_A, vec2(_78, _76)).x;
    float _99 = _39.x;
    float _101 = _39.y;
    float _103 = _41.x;
    float _105 = _39.z;
    float _107 = _41.y;
    float _109 = _41.z;
    precise float _702 = _99 * _99;
    float _111 = _702;
    precise float _705 = _103 * _103;
    float _113 = _705;
    float _115 = fma(_101, _101, _111);
    float _117 = fma(_107, _107, _113);
    float _119 = fma(_105, _105, _115);
    float _121 = inversesqrt(_119);
    float _123 = fma(_109, _109, _117);
    float _125 = _39.w;
    float _127 = inversesqrt(_123);
    precise float _731 = _121 * _105;
    float _129 = _731;
    precise float _734 = _121 * _99;
    float _131 = _734;
    float _133 = max(_64, _66);
    precise float _740 = _127 * _103;
    float _135 = _740;
    precise float _743 = _121 * _101;
    float _137 = _743;
    precise float _746 = _127 * _107;
    float _139 = _746;
    float _141 = max(_68, _133);
    precise float _752 = _127 * _109;
    float _143 = _752;
    precise float _755 = _135 * _137;
    float _145 = _755;
    bool _147 = _141 == 0.0;
    precise float _761 = _139 * _129;
    float _149 = _761;
    precise float _764 = _143 * _131;
    float _151 = _764;
    float _153 = -_145;
    float _155 = fma(_139, _131, _153);
    float _157 = -_149;
    float _159 = fma(_143, _137, _157);
    float _161 = _123;
    float _163 = _121;
    if (!_147)
    {
        precise float _784 = 1.0 / _141;
        float _165 = _784;
        _161 = _165;
    }
    float _167 = _161;
    precise float _790 = _155 * _125;
    float _169 = _790;
    float _171 = -_151;
    float _173 = fma(_135, _129, _171);
    precise float _799 = _159 * _125;
    float _175 = _799;
    precise float _802 = _173 * _125;
    float _177 = _802;
    precise float _805 = _91 * _95;
    float _179 = _805;
    float _181 = fma(_93, 2.0, -1.0);
    float _183 = min(_64, _66);
    float _185 = fma(_179, 2.0, -1.0);
    precise float _817 = _181 * _181;
    float _187 = _817;
    float _189 = min(_68, _183);
    float _191 = -_185;
    float _193 = -_187;
    float _195 = fma(_185, _191, _193);
    uint _197 = packHalf2x16(vec2(_195, _181));
    float _199 = -_189;
    precise float _837 = _141 + _199;
    float _201 = _837;
    precise float _840 = _181 * _129;
    float _203 = _840;
    precise float _843 = _181 * _131;
    float _205 = _843;
    precise float _846 = _181 * _137;
    float _207 = _846;
    precise float _848 = _195 + 1.0;
    float _209 = _848;
    float _211 = uintBitsToFloat(_197);
    float _213 = _201;
    int _216 = 0;
    int _218 = 0;
    if (_147)
    {
        _211 = 0.0;
    }
    float _220 = _211;
    float _222 = _220;
    if (!_147)
    {
        precise float _862 = _201 * _167;
        float _224 = _862;
        _222 = _224;
    }
    float _226 = _222;
    float _228 = max(0.0, _209);
    float _230 = sqrt(_228);
    bool _232 = _226 != 0.0;
    bool _234 = isnan(_226);
    bool _236 = _232 || _234;
    bool _238 = isnan(0.0);
    bool _240 = _236 || _238;
    float _242 = fma(_185, _175, _205);
    float _244 = fma(_185, _177, _207);
    float _246 = fma(_185, _169, _203);
    float _248 = fma(_135, _230, _242);
    float _250 = fma(_139, _230, _244);
    float _252 = fma(_143, _230, _246);
    uint _254 = floatBitsToUint(_230);
    float _256 = 0.0;
    float _258 = 0.0;
    int _260 = 0;
    int _262 = 0;
    int _264 = 0;
    int _266 = 0;
    if (_240)
    {
        bool _268 = _64 == _141;
        if (_268)
        {
            float _270 = -_68;
            precise float _918 = _66 + _270;
            float _272 = _918;
            float _274 = unpackHalf2x16(floatBitsToUint(_230)).y;
            uint _276 = packHalf2x16(vec2(_272, _274));
            _254 = _276;
        }
        uint _278 = _254;
        uint _280 = _278;
        if (_268)
        {
            precise float _934 = 1.0 / _201;
            float _282 = _934;
            _163 = _282;
        }
        float _284 = _163;
        float _286 = _284;
        if (_268)
        {
            float _288 = unpackHalf2x16(_278).x;
            precise float _946 = _288 * _284;
            float _290 = _946;
            _256 = _290;
        }
        float _292 = _256;
        float _294 = _292;
        float _296 = _292;
        if (!_268)
        {
            bool _298 = _66 == _141;
            if (_298)
            {
                precise float _961 = 1.0 / _201;
                float _300 = _961;
                _286 = _300;
            }
            float _302 = _286;
            if (_298)
            {
                float _304 = -_64;
                precise float _971 = _68 + _304;
                float _306 = _971;
                float _308 = unpackHalf2x16(_278).y;
                uint _310 = packHalf2x16(vec2(_306, _308));
                _280 = _310;
            }
            uint _312 = _280;
            if (_298)
            {
                float _314 = unpackHalf2x16(_312).x;
                float _316 = fma(_314, _302, fp_c1_1._m0[0].x);
                _294 = _316;
            }
            float _318 = _294;
            float _320 = _318;
            _296 = _318;
            if (!_298)
            {
                bool _322 = _68 == _141;
                if (_322)
                {
                    precise float _1006 = 1.0 / _201;
                    float _324 = _1006;
                    _213 = _324;
                }
                float _326 = _213;
                if (_322)
                {
                    float _328 = -_66;
                    precise float _1016 = _64 + _328;
                    float _330 = _1016;
                    float _332 = unpackHalf2x16(floatBitsToUint(_64)).y;
                    uint _334 = packHalf2x16(vec2(_330, _332));
                    _85 = _334;
                }
                uint _336 = _85;
                if (_322)
                {
                    float _338 = unpackHalf2x16(_336).x;
                    float _340 = fma(_338, _326, fp_c1_1._m0[0].y);
                    _320 = _340;
                }
                float _342 = _320;
                _296 = _342;
            }
        }
        float _344 = _296;
        precise float _1048 = _344 * fp_c1_1._m0[0].z;
        float _346 = _1048;
        bool _348 = _346 < 0.0;
        float _350 = _346;
        if (_348)
        {
            precise float _1055 = _346 + 1.0;
            float _352 = _1055;
            _350 = _352;
        }
        float _354 = _350;
        _258 = _354;
    }
    float _356 = _258;
    precise float _1066 = (-0.0) + fp_c3_1._m0[4].x;
    float _358 = _1066;
    float _360 = clamp(_358, 0.0, 1.0);
    precise float _1071 = _356 + _360;
    float _362 = _1071;
    precise float _1073 = _362 + (-0.0);
    float _364 = _1073;
    float _366 = floor(_364);
    float _368 = -_366;
    precise float _1080 = _364 + _368;
    float _370 = _1080;
    precise float _1083 = _370 * 6.0;
    float _372 = _1083;
    float _374 = floor(_372);
    precise float _1089 = _226 + fp_c3_1._m0[4].y;
    float _376 = _1089;
    float _378 = clamp(_376, 0.0, 1.0);
    bool _380 = _370 < 0.5;
    float _382 = fma(_374, fp_c1_1._m0[0].w, _370);
    precise float _1101 = _382 * 6.0;
    float _384 = _1101;
    precise float _1105 = _141 * fp_c3_1._m0[4].z;
    float _386 = _1105;
    precise float _1108 = _378 * _384;
    float _388 = _1108;
    float _390 = -_384;
    float _392 = fma(_378, _390, _378);
    float _394 = -_378;
    float _396 = fma(_386, _394, _386);
    float _398 = -_388;
    float _400 = fma(_386, _398, _386);
    float _402 = -_392;
    float _404 = fma(_386, _402, _386);
    bool _406 = true;
    bool _408 = true;
    int _420;
    int _426;
    int _432;
    if (_380)
    {
        bool _410 = _370 < fp_c1_1._m0[0].z;
        if (_410)
        {
            _406 = false;
        }
        bool _412 = _406;
        bool _414 = _412;
        if (_410)
        {
            _216 = floatBitsToInt(_386);
        }
        int _416 = _216;
        int _418 = _416;
        _420 = _416;
        if (_410)
        {
            _260 = floatBitsToInt(_404);
        }
        int _422 = _260;
        int _424 = _422;
        _426 = _422;
        if (_410)
        {
            _262 = floatBitsToInt(_396);
        }
        int _428 = _262;
        int _430 = _428;
        _432 = _428;
        _434 = !_412;
        if (!_434)
        {
            bool _436 = _370 < fp_c1_1._m0[1].x;
            if (_436)
            {
                _414 = false;
            }
            bool _438 = _414;
            if (_436)
            {
                _418 = floatBitsToInt(_400);
            }
            int _440 = _418;
            _420 = _440;
            if (_436)
            {
                _424 = floatBitsToInt(_386);
            }
            int _442 = _424;
            _426 = _442;
            if (_436)
            {
                _430 = floatBitsToInt(_396);
            }
            int _444 = _430;
            _432 = _444;
            _434 = !_438;
            if (!_434)
            {
                _420 = floatBitsToInt(_396);
                _432 = floatBitsToInt(_404);
                _426 = floatBitsToInt(_386);
                _434 = true;
            }
        }
    }
    else
    {
        bool _446 = _370 < fp_c1_1._m0[1].y;
        if (_446)
        {
            _408 = false;
        }
        bool _448 = _408;
        bool _450 = _448;
        if (_446)
        {
            _218 = floatBitsToInt(_396);
        }
        int _452 = _218;
        int _454 = _452;
        _420 = _452;
        if (_446)
        {
            _264 = floatBitsToInt(_400);
        }
        int _456 = _264;
        int _458 = _456;
        _426 = _456;
        if (_446)
        {
            _266 = floatBitsToInt(_386);
        }
        int _460 = _266;
        int _462 = _460;
        _432 = _460;
        if (_448)
        {
            bool _464 = _370 < fp_c1_1._m0[1].z;
            if (_464)
            {
                _450 = false;
            }
            bool _466 = _450;
            if (_464)
            {
                _454 = floatBitsToInt(_404);
            }
            int _468 = _454;
            int _470 = _468;
            if (_464)
            {
                _458 = floatBitsToInt(_396);
            }
            int _472 = _458;
            int _474 = _472;
            if (_464)
            {
                _462 = floatBitsToInt(_386);
            }
            int _476 = _462;
            int _478 = _476;
            if (_466)
            {
                _470 = floatBitsToInt(_386);
            }
            int _480 = _470;
            _420 = _480;
            if (_466)
            {
                _474 = floatBitsToInt(_396);
            }
            int _482 = _474;
            _426 = _482;
            if (_466)
            {
                _478 = floatBitsToInt(_400);
            }
            int _484 = _478;
            _432 = _484;
        }
    }
    _434 = false;
    int _486 = _420;
    int _488 = _432;
    int _490 = _426;
    precise float _1310 = _248 * fp_c3_1._m0[1].x;
    float _492 = _1310;
    float _494 = _43.x;
    precise float _1316 = _248 * fp_c3_1._m0[0].x;
    float _496 = _1316;
    float _498 = _43.y;
    float _500 = texture(fp_t_tcb_E, vec2(_494, _498)).x;
    precise float _1328 = _248 * fp_c3_1._m0[2].x;
    float _502 = _1328;
    float _504 = fma(_250, fp_c3_1._m0[1].y, _492);
    float _506 = fma(_250, fp_c3_1._m0[0].y, _496);
    float _508 = fma(_250, fp_c3_1._m0[2].y, _502);
    float _510 = fma(_252, fp_c3_1._m0[1].z, _504);
    float _512 = fma(_252, fp_c3_1._m0[0].z, _506);
    float _514 = fma(_252, fp_c3_1._m0[2].z, _508);
    float _516 = abs(_510);
    float _518 = abs(_512);
    precise float _1365 = _516 + _518;
    float _520 = _1365;
    float _522 = abs(_514);
    precise float _1370 = _522 + _520;
    float _524 = _1370;
    precise float _1372 = 1.0 / _524;
    float _526 = _1372;
    precise float _1375 = _514 * _526;
    float _528 = _1375;
    bool _530 = _528 >= 0.0;
    precise float _1380 = _510 * _526;
    float _532 = _1380;
    float _534 = unpackHalf2x16(floatBitsToUint(_510)).y;
    uint _536 = packHalf2x16(vec2(_532, _534));
    precise float _1391 = _512 * _526;
    float _538 = _1391;
    uint _540 = floatBitsToUint(_498);
    float _542 = _538;
    if (_530)
    {
        uint _544 = uint(int(uint(floatBitsToInt(_498)) >> uint(16)));
        int _546 = int(_544) << 16;
        int _548 = int(_536) & 65535;
        int _550 = _546 + _548;
        _540 = uint(_550);
    }
    uint _552 = _540;
    float _554 = -fp_c3_1._m0[3].x;
    float _556 = fma(_500, fp_c3_1._m0[3].x, _554);
    precise float _1425 = _556 + 1.0;
    float _558 = _1425;
    uint _560 = _552;
    if (!_530)
    {
        bool _562 = _532 >= 0.0;
        bool _564 = _538 >= 0.0;
        bool _566 = isnan(_538);
        bool _568 = _564 || _566;
        bool _570 = isnan(0.0);
        bool _572 = _568 || _570;
        float _574 = abs(_532);
        float _576 = -_574;
        precise float _1448 = _576 + 1.0;
        float _578 = _1448;
        float _580 = abs(_538);
        float _582 = -_580;
        precise float _1454 = _582 + 1.0;
        float _584 = _1454;
        float _586 = unpackHalf2x16(_552).y;
        uint _588 = packHalf2x16(vec2(_584, _586));
        precise float _1463 = _578 + (-0.0);
        float _590 = _1463;
        uint _592 = _588;
        float _594 = _590;
        if (!_562)
        {
            float _596 = -_584;
            uint _598 = packHalf2x16(vec2(_596, 0.0));
            _592 = _598;
        }
        uint _600 = _592;
        _560 = _600;
        if (!_572)
        {
            float _602 = -_590;
            precise float _1484 = _602 + (-0.0);
            float _604 = _1484;
            _594 = _604;
        }
        float _606 = _594;
        _542 = _606;
    }
    uint _608 = _560;
    float _610 = _542;
    float _612 = float(floatBitsToInt(fp_c3_1._m0[3].w));
    float _614 = float(floatBitsToInt(fp_c3_1._m0[3].z));
    precise float _1502 = (-0.0) + fp_c1_1._m0[1].w;
    float _616 = _1502;
    float _618 = unpackHalf2x16(_608).x;
    float _620 = fma(_610, 0.5, _616);
    float _622 = fma(_618, 0.5, _616);
    precise float _1514 = _612 * 0.0039215688593685626983642578125;
    float _624 = _1514;
    precise float _1516 = _614 * 0.0039215688593685626983642578125;
    float _626 = _1516;
    _46.x = intBitsToFloat(_486);
    _46.y = intBitsToFloat(_490);
    _46.z = intBitsToFloat(_488);
    _46.w = 0.0;
    _48.x = _620;
    _48.y = _622;
    _48.z = 0.0;
    _48.w = 0.0;
    _50.x = _97;
    _50.y = _558;
    _50.z = _626;
    _50.w = _624;
}

