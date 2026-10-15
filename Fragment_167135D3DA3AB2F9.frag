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

layout(set = 2, binding = 128) uniform sampler2D fp_t_tcb_10;
layout(set = 2, binding = 129) uniform sampler2D fp_t_tcb_C;
layout(set = 2, binding = 130) uniform sampler2DShadow fp_t_tcb_16;
layout(set = 2, binding = 131) uniform sampler2DShadow fp_t_tcb_8;
layout(set = 2, binding = 132) uniform sampler2DShadow fp_t_tcb_A;
layout(set = 2, binding = 197) uniform samplerBuffer fp_t_tcb_28;
layout(set = 2, binding = 198) uniform samplerBuffer fp_t_tcb_2A;
layout(set = 2, binding = 199) uniform samplerBuffer fp_t_tcb_2C;
layout(set = 2, binding = 200) uniform samplerBuffer fp_t_tcb_30;
layout(set = 2, binding = 137) uniform sampler2DArray fp_t_tcb_E;
layout(set = 2, binding = 138) uniform samplerCube fp_t_tcb_18;
layout(set = 2, binding = 139) uniform sampler2D fp_t_tcb_14;
layout(set = 2, binding = 140) uniform sampler2D fp_t_tcb_12;

layout(location = 0) in vec4 _67[16];
layout(location = 0) out vec4 _73;

void main()
{
    bool _4371 = false;
    bool _3909 = false;
    bool _500 = false;
    bool _2558 = false;
    bool _2102 = false;
    bool _1442 = false;
    bool _782 = false;
    float _84 = _67[1].y;
    float _86 = _67[1].x;
    float _88 = _67[1].z;
    float _90 = _67[1].w;
    float _92 = _67[7].x;
    float _94 = _67[7].y;
    precise float _4880 = _84 * fp_c3_1._m0[15].x;
    float _96 = _4880;
    precise float _4884 = _84 * fp_c3_1._m0[15].y;
    float _98 = _4884;
    float _100 = fma(_86, fp_c3_1._m0[14].x, _96);
    float _102 = fma(_86, fp_c3_1._m0[14].y, _98);
    float _104 = fma(_88, fp_c3_1._m0[16].x, _100);
    float _106 = fma(_88, fp_c3_1._m0[16].y, _102);
    float _108 = fma(_90, fp_c3_1._m0[17].x, _104);
    vec2 _112 = texture(fp_t_tcb_10, vec2(_92, _94)).yw;
    float _114 = _112.x;
    float _116 = _112.y;
    float _118 = fma(_90, fp_c3_1._m0[17].y, _106);
    vec3 _122 = texture(fp_t_tcb_C, vec2(_108, _118)).xyz;
    float _124 = _122.x;
    float _126 = _122.y;
    float _128 = _122.z;
    float _130 = -_86;
    precise float _4947 = _130 + fp_c3_1._m0[6].x;
    float _132 = _4947;
    float _134 = _67[6].x;
    float _136 = -_84;
    precise float _4955 = _136 + fp_c3_1._m0[6].y;
    float _138 = _4955;
    float _140 = _67[6].y;
    float _142 = -_88;
    precise float _4963 = _142 + fp_c3_1._m0[6].z;
    float _144 = _4963;
    bool _148 = 1.0 <= fp_c3_1._m0[56].y;
    float _150 = -fp_c3_1._m0[50].y;
    precise float _4974 = 1.0 + _150;
    float _152 = _4974;
    precise float _4977 = _132 * _132;
    float _154 = _4977;
    float _156 = -fp_c3_1._m0[50].z;
    precise float _4982 = 1.0 + _156;
    float _158 = _4982;
    float _160 = -fp_c3_1._m0[50].x;
    precise float _4987 = 1.0 + _160;
    float _162 = _4987;
    precise float _4992 = _152 * fp_c3_1._m0[49].y;
    float _164 = _4992;
    float _166 = fma(_138, _138, _154);
    float _168 = _67[6].z;
    precise float _5002 = _158 * fp_c3_1._m0[49].z;
    float _170 = _5002;
    float _172 = 0.0;
    float _174 = _128;
    float _176 = _128;
    if (_148)
    {
        _172 = 0.0;
    }
    float _178 = _172;
    float _180 = fma(_144, _144, _166);
    float _182 = inversesqrt(_180);
    precise float _5018 = _132 * _182;
    float _184 = _5018;
    precise float _5021 = _144 * _182;
    float _186 = _5021;
    precise float _5024 = _138 * _182;
    float _188 = _5024;
    float _190 = fma(_116, 2.0, _134);
    float _192 = fma(_114, 2.0, _168);
    float _194 = -fp_c3_1._m0[19].y;
    float _196 = fma(_124, fp_c3_1._m0[19].y, _194);
    float _198 = -fp_c3_1._m0[19].y;
    float _200 = fma(_128, fp_c3_1._m0[19].y, _198);
    precise float _5051 = _190 + (-1.0);
    float _202 = _5051;
    float _204 = fma(fp_c3_1._m0[50].w, 10.0, 1.0);
    precise float _5057 = _192 + (-1.0);
    float _206 = _5057;
    float _208 = -fp_c3_1._m0[19].x;
    float _210 = fma(_124, fp_c3_1._m0[19].x, _208);
    float _212 = -fp_c3_1._m0[19].x;
    float _214 = fma(_126, fp_c3_1._m0[19].x, _212);
    float _216 = -fp_c3_1._m0[19].x;
    float _218 = fma(_128, fp_c3_1._m0[19].x, _216);
    precise float _5084 = _202 * _202;
    float _220 = _5084;
    float _222 = -fp_c3_1._m0[19].y;
    float _224 = fma(_126, fp_c3_1._m0[19].y, _222);
    float _226 = exp2(_204);
    float _228 = -fp_c3_1._m0[18].x;
    float _230 = fma(_124, fp_c3_1._m0[18].x, _228);
    float _232 = -fp_c3_1._m0[18].x;
    float _234 = fma(_126, fp_c3_1._m0[18].x, _232);
    float _236 = fma(_140, _140, _220);
    float _238 = -fp_c3_1._m0[18].x;
    float _240 = fma(_128, fp_c3_1._m0[18].x, _238);
    precise float _5125 = _210 + 1.0;
    float _242 = _5125;
    precise float _5127 = _214 + 1.0;
    float _244 = _5127;
    precise float _5129 = _218 + 1.0;
    float _246 = _5129;
    precise float _5131 = _196 + 1.0;
    float _248 = _5131;
    float _250 = fma(_206, _206, _236);
    precise float _5137 = _224 + 1.0;
    float _252 = _5137;
    float _254 = inversesqrt(_250);
    precise float _5141 = _200 + 1.0;
    float _256 = _5141;
    float _258 = fma(_226, 0.125, 0.25);
    precise float _5147 = _230 + 1.0;
    float _260 = _5147;
    precise float _5149 = _234 + 1.0;
    float _262 = _5149;
    precise float _5151 = _240 + 1.0;
    float _264 = _5151;
    precise float _5154 = _202 * _254;
    float _266 = _5154;
    precise float _5157 = _140 * _254;
    float _268 = _5157;
    precise float _5160 = _206 * _254;
    float _270 = _5160;
    float _272 = _206;
    float _274 = _202;
    float _276 = _254;
    float _278 = _206;
    float _280 = _202;
    float _282 = _178;
    if (!_148)
    {
        float _284 = _67[2].x;
        float _286 = _67[2].y;
        bool _288 = floatBitsToInt(fp_c3_1._m0[56].x) == 2;
        float _290 = _67[2].z;
        float _292 = _67[2].w;
        precise float _5186 = _284 * fp_c3_1._m0[28].x;
        float _294 = _5186;
        float _296 = fma(_286, fp_c3_1._m0[28].y, _294);
        float _298 = fma(_290, fp_c3_1._m0[28].z, _296);
        float _300 = fma(_292, fp_c3_1._m0[28].w, _298);
        float _302 = clamp(_300, 0.0, 1.0);
        float _304 = 1.0;
        float _306 = 1.0;
        float _308 = _286;
        float _310 = _290;
        float _312 = _292;
        float _314 = _284;
        float _316 = _284;
        float _318 = 1.0;
        float _320 = _292;
        float _322 = 1.0;
        float _324 = 1.0;
        if (_288)
        {
            bool _326 = _302 == 0.0;
            if (_326)
            {
                precise float _5220 = _84 * fp_c3_1._m0[52].x;
                float _328 = _5220;
                float _330 = fma(_86, fp_c3_1._m0[51].x, _328);
                precise float _5230 = _84 * fp_c3_1._m0[52].y;
                float _332 = _5230;
                precise float _5235 = 3.0 * fp_c3_1._m0[55].x;
                float _334 = _5235;
                float _336 = fma(_88, fp_c3_1._m0[53].x, _330);
                float _338 = fma(_90, fp_c3_1._m0[54].x, _336);
                float _340 = -fp_c3_1._m0[55].x;
                float _342 = fma(1.5, _340, _338);
                float _344 = fma(_86, fp_c3_1._m0[51].y, _332);
                float _346 = -_334;
                bool _348 = _342 <= _346;
                float _350 = fma(_88, fp_c3_1._m0[53].y, _344);
                float _352 = fma(_90, fp_c3_1._m0[54].y, _350);
                bool _354 = _342 >= 1.0;
                bool _356 = _354 || _348;
                float _358 = -fp_c3_1._m0[55].y;
                float _360 = fma(1.5, _358, _352);
                precise float _5288 = 3.0 * fp_c3_1._m0[55].y;
                float _362 = _5288;
                bool _364 = _360 >= 1.0;
                bool _366 = _364 || _356;
                float _368 = -_362;
                bool _370 = _360 <= _368;
                bool _372 = _370 || _366;
                if (_372)
                {
                    _304 = 0.0;
                }
                float _374 = _304;
                float _376 = _374;
                if (!_372)
                {
                    precise float _5313 = _84 * fp_c3_1._m0[52].w;
                    float _378 = _5313;
                    precise float _5317 = _84 * fp_c3_1._m0[52].z;
                    float _380 = _5317;
                    precise float _5321 = _342 + fp_c3_1._m0[55].x;
                    float _382 = _5321;
                    precise float _5325 = _360 + fp_c3_1._m0[55].y;
                    float _384 = _5325;
                    float _386 = fma(_86, fp_c3_1._m0[51].w, _378);
                    float _388 = fma(_86, fp_c3_1._m0[51].z, _380);
                    precise float _5339 = _382 + fp_c3_1._m0[55].x;
                    float _390 = _5339;
                    precise float _5343 = _384 + fp_c3_1._m0[55].y;
                    float _392 = _5343;
                    float _394 = fma(_88, fp_c3_1._m0[53].w, _386);
                    float _396 = fma(_88, fp_c3_1._m0[53].z, _388);
                    precise float _5357 = _390 + fp_c3_1._m0[55].x;
                    float _398 = _5357;
                    float _400 = fma(_90, fp_c3_1._m0[54].w, _394);
                    float _402 = fma(_90, fp_c3_1._m0[54].z, _396);
                    precise float _5369 = 1.0 / _400;
                    float _404 = _5369;
                    float _406 = min(_402, _400);
                    float _408 = min(_400, _406);
                    precise float _5378 = _360 * _404;
                    float _410 = _5378;
                    precise float _5381 = _382 * _404;
                    float _412 = _5381;
                    precise float _5384 = _342 * _404;
                    float _414 = _5384;
                    precise float _5387 = _390 * _404;
                    float _416 = _5387;
                    precise float _5390 = _384 * _404;
                    float _418 = _5390;
                    precise float _5393 = _408 * _404;
                    float _420 = _5393;
                    float _422 = texture(fp_t_tcb_16, vec3(vec2(_412, _410), _420));
                    float _424 = texture(fp_t_tcb_16, vec3(vec2(_414, _410), _420));
                    float _426 = texture(fp_t_tcb_16, vec3(vec2(_416, _410), _420));
                    float _428 = texture(fp_t_tcb_16, vec3(vec2(_414, _418), _420));
                    precise float _5420 = _398 * _404;
                    float _430 = _5420;
                    float _432 = texture(fp_t_tcb_16, vec3(vec2(_430, _410), _420));
                    float _434 = texture(fp_t_tcb_16, vec3(vec2(_412, _418), _420));
                    precise float _5435 = _392 * _404;
                    float _436 = _5435;
                    float _438 = texture(fp_t_tcb_16, vec3(vec2(_416, _418), _420));
                    float _440 = texture(fp_t_tcb_16, vec3(vec2(_430, _418), _420));
                    float _442 = texture(fp_t_tcb_16, vec3(vec2(_414, _436), _420));
                    float _444 = texture(fp_t_tcb_16, vec3(vec2(_416, _436), _420));
                    float _446 = texture(fp_t_tcb_16, vec3(vec2(_412, _436), _420));
                    precise float _5469 = _392 + fp_c3_1._m0[55].y;
                    float _448 = _5469;
                    precise float _5472 = _448 * _404;
                    float _450 = _5472;
                    float _452 = texture(fp_t_tcb_16, vec3(vec2(_430, _436), _420));
                    float _454 = texture(fp_t_tcb_16, vec3(vec2(_414, _450), _420));
                    float _456 = texture(fp_t_tcb_16, vec3(vec2(_412, _450), _420));
                    float _458 = texture(fp_t_tcb_16, vec3(vec2(_416, _450), _420));
                    float _460 = texture(fp_t_tcb_16, vec3(vec2(_430, _450), _420));
                    precise float _5505 = _422 + _424;
                    float _462 = _5505;
                    precise float _5508 = _426 + _462;
                    float _464 = _5508;
                    precise float _5511 = _464 + _432;
                    float _466 = _5511;
                    precise float _5514 = _428 + _466;
                    float _468 = _5514;
                    precise float _5517 = _468 + _434;
                    float _470 = _5517;
                    precise float _5520 = _470 + _438;
                    float _472 = _5520;
                    precise float _5523 = _472 + _440;
                    float _474 = _5523;
                    precise float _5526 = _474 + _442;
                    float _476 = _5526;
                    precise float _5529 = _446 + _476;
                    float _478 = _5529;
                    precise float _5532 = _478 + _444;
                    float _480 = _5532;
                    precise float _5535 = _480 + _452;
                    float _482 = _5535;
                    precise float _5538 = _482 + _454;
                    float _484 = _5538;
                    precise float _5541 = _456 + _484;
                    float _486 = _5541;
                    precise float _5544 = _486 + _458;
                    float _488 = _5544;
                    precise float _5547 = _488 + _460;
                    float _490 = _5547;
                    float _492 = fma(_490, -0.0625, 1.0);
                    _376 = _492;
                }
                float _494 = _376;
                float _496 = -_494;
                precise float _5557 = _496 + 1.0;
                float _498 = _5557;
                _324 = _498;
                _500 = true;
            }
            else
            {
                bool _502 = _302 == 1.0;
                if (_502)
                {
                    precise float _5569 = _284 * fp_c3_1._m0[23].x;
                    float _504 = _5569;
                    float _506 = fma(_286, fp_c3_1._m0[23].y, _504);
                    float _508 = fma(_290, fp_c3_1._m0[23].z, _506);
                    float _510 = fma(_292, fp_c3_1._m0[23].w, _508);
                    bool _512 = _510 > 0.0;
                    float _514 = _506;
                    float _516 = _510;
                    if (_512)
                    {
                        float _518 = _67[3].w;
                        _272 = _518;
                    }
                    float _520 = _272;
                    float _522 = _520;
                    if (_512)
                    {
                        float _524 = _67[3].x;
                        _514 = _524;
                    }
                    float _526 = _514;
                    float _528 = _526;
                    if (_512)
                    {
                        float _530 = _67[3].y;
                        _516 = _530;
                    }
                    float _532 = _516;
                    float _534 = _532;
                    if (_512)
                    {
                        float _536 = _67[3].z;
                        _306 = _536;
                    }
                    float _538 = _306;
                    float _540 = _538;
                    if (_512)
                    {
                        _274 = 1.0;
                    }
                    float _542 = _274;
                    float _544 = _542;
                    if (!_512)
                    {
                        _544 = 0.0;
                    }
                    float _546 = _544;
                    float _548 = _546;
                    if (!_512)
                    {
                        _522 = _292;
                    }
                    float _550 = _522;
                    if (!_512)
                    {
                        _528 = _284;
                    }
                    float _552 = _528;
                    float _554 = _552;
                    if (!_512)
                    {
                        _534 = _286;
                    }
                    float _556 = _534;
                    float _558 = _556;
                    if (!_512)
                    {
                        _540 = _290;
                    }
                    float _560 = _540;
                    if (_512)
                    {
                        _308 = fp_c3_1._m0[22].y;
                    }
                    float _562 = _308;
                    bool _564 = _546 == 0.0;
                    float _566 = _562;
                    if (_512)
                    {
                        _310 = fp_c3_1._m0[22].w;
                    }
                    float _568 = _310;
                    float _570 = _568;
                    if (_512)
                    {
                        _312 = fp_c3_1._m0[25].y;
                    }
                    float _572 = _312;
                    float _574 = _572;
                    if (_512)
                    {
                        _548 = fp_c3_1._m0[27].x;
                    }
                    float _576 = _548;
                    float _578 = _576;
                    if (_512)
                    {
                        _174 = fp_c3_1._m0[27].y;
                    }
                    float _580 = _174;
                    float _582 = _580;
                    if (!_512)
                    {
                        _566 = fp_c3_1._m0[21].y;
                    }
                    float _584 = _566;
                    if (!_512)
                    {
                        _570 = fp_c3_1._m0[21].w;
                    }
                    float _586 = _570;
                    if (!_512)
                    {
                        _574 = fp_c3_1._m0[24].y;
                    }
                    float _588 = _574;
                    if (!_512)
                    {
                        _578 = fp_c3_1._m0[26].x;
                    }
                    float _590 = _578;
                    if (!_512)
                    {
                        _582 = fp_c3_1._m0[26].y;
                    }
                    float _592 = _582;
                    precise float _5737 = 1.0 / _550;
                    float _594 = _5737;
                    precise float _5740 = _594 * _552;
                    float _596 = _5740;
                    precise float _5743 = _594 * _556;
                    float _598 = _5743;
                    precise float _5746 = _594 * _560;
                    float _600 = _5746;
                    float _602 = _594;
                    if (_512)
                    {
                        _558 = fp_c3_1._m0[22].x;
                    }
                    float _604 = _558;
                    float _606 = _604;
                    if (_512)
                    {
                        _602 = fp_c3_1._m0[22].z;
                    }
                    float _608 = _602;
                    float _610 = _608;
                    if (_512)
                    {
                        _554 = fp_c3_1._m0[25].x;
                    }
                    float _612 = _554;
                    float _614 = _612;
                    if (!_512)
                    {
                        _606 = fp_c3_1._m0[21].x;
                    }
                    float _616 = _606;
                    if (!_512)
                    {
                        _610 = fp_c3_1._m0[21].z;
                    }
                    float _618 = _610;
                    if (!_512)
                    {
                        _614 = fp_c3_1._m0[24].x;
                    }
                    float _620 = _614;
                    float _780;
                    if (_564)
                    {
                        precise float _5794 = _596 + _590;
                        float _622 = _5794;
                        precise float _5796 = _620 * 3.0;
                        float _624 = _5796;
                        precise float _5799 = _598 + _592;
                        float _626 = _5799;
                        float _628 = -_624;
                        bool _630 = _622 <= _628;
                        precise float _5806 = _588 * 3.0;
                        float _632 = _5806;
                        bool _634 = _622 >= 1.0;
                        bool _636 = _634 || _630;
                        bool _638 = _626 >= 1.0;
                        bool _640 = _638 || _636;
                        float _642 = -_632;
                        bool _644 = _626 <= _642;
                        bool _646 = _644 || _640;
                        float _648 = _632;
                        if (_646)
                        {
                            _648 = 0.0;
                        }
                        float _650 = _648;
                        float _652 = _650;
                        if (!_646)
                        {
                            precise float _5836 = _622 + _620;
                            float _654 = _5836;
                            precise float _5839 = _626 + _588;
                            float _656 = _5839;
                            precise float _5842 = _622 + (-0.0);
                            float _658 = _5842;
                            float _660 = clamp(_658, 0.0, 1.0);
                            precise float _5846 = _626 + (-0.0);
                            float _662 = _5846;
                            float _664 = clamp(_662, 0.0, 1.0);
                            float _666 = min(_600, 1.0);
                            precise float _5853 = _654 + _620;
                            float _668 = _5853;
                            precise float _5855 = _654 + (-0.0);
                            float _670 = _5855;
                            float _672 = clamp(_670, 0.0, 1.0);
                            float _674 = fma(_660, _616, _618);
                            float _676 = fma(_664, _584, _586);
                            precise float _5867 = _668 + (-0.0);
                            float _678 = _5867;
                            float _680 = clamp(_678, 0.0, 1.0);
                            float _682 = texture(fp_t_tcb_8, vec3(vec2(_674, _676), _666));
                            precise float _5878 = _668 + _620;
                            float _684 = _5878;
                            float _686 = clamp(_684, 0.0, 1.0);
                            precise float _5882 = _656 + (-0.0);
                            float _688 = _5882;
                            float _690 = clamp(_688, 0.0, 1.0);
                            float _692 = fma(_672, _616, _618);
                            float _694 = fma(_680, _616, _618);
                            float _696 = fma(_686, _616, _618);
                            float _698 = fma(_690, _584, _586);
                            float _700 = texture(fp_t_tcb_8, vec3(vec2(_692, _676), _666));
                            float _702 = texture(fp_t_tcb_8, vec3(vec2(_694, _676), _666));
                            float _704 = texture(fp_t_tcb_8, vec3(vec2(_696, _676), _666));
                            float _706 = texture(fp_t_tcb_8, vec3(vec2(_674, _698), _666));
                            float _708 = texture(fp_t_tcb_8, vec3(vec2(_692, _698), _666));
                            precise float _5933 = _656 + _588;
                            float _710 = _5933;
                            precise float _5935 = _710 + (-0.0);
                            float _712 = _5935;
                            float _714 = clamp(_712, 0.0, 1.0);
                            float _716 = fma(_714, _584, _586);
                            float _718 = texture(fp_t_tcb_8, vec3(vec2(_694, _698), _666));
                            float _720 = texture(fp_t_tcb_8, vec3(vec2(_696, _698), _666));
                            float _722 = texture(fp_t_tcb_8, vec3(vec2(_692, _716), _666));
                            float _724 = texture(fp_t_tcb_8, vec3(vec2(_694, _716), _666));
                            float _726 = texture(fp_t_tcb_8, vec3(vec2(_674, _716), _666));
                            precise float _5974 = _710 + _588;
                            float _728 = _5974;
                            precise float _5976 = _728 + (-0.0);
                            float _730 = _5976;
                            float _732 = clamp(_730, 0.0, 1.0);
                            float _734 = fma(_732, _584, _586);
                            float _736 = texture(fp_t_tcb_8, vec3(vec2(_696, _716), _666));
                            float _738 = texture(fp_t_tcb_8, vec3(vec2(_674, _734), _666));
                            float _740 = texture(fp_t_tcb_8, vec3(vec2(_692, _734), _666));
                            float _742 = texture(fp_t_tcb_8, vec3(vec2(_694, _734), _666));
                            float _744 = texture(fp_t_tcb_8, vec3(vec2(_696, _734), _666));
                            precise float _6015 = _682 + _700;
                            float _746 = _6015;
                            precise float _6018 = _746 + _702;
                            float _748 = _6018;
                            precise float _6021 = _748 + _704;
                            float _750 = _6021;
                            precise float _6024 = _750 + _706;
                            float _752 = _6024;
                            precise float _6027 = _752 + _708;
                            float _754 = _6027;
                            precise float _6030 = _754 + _718;
                            float _756 = _6030;
                            precise float _6033 = _756 + _720;
                            float _758 = _6033;
                            precise float _6036 = _758 + _726;
                            float _760 = _6036;
                            precise float _6039 = _760 + _722;
                            float _762 = _6039;
                            precise float _6042 = _762 + _724;
                            float _764 = _6042;
                            precise float _6045 = _764 + _736;
                            float _766 = _6045;
                            precise float _6048 = _766 + _738;
                            float _768 = _6048;
                            precise float _6051 = _768 + _740;
                            float _770 = _6051;
                            precise float _6054 = _770 + _742;
                            float _772 = _6054;
                            precise float _6057 = _744 + _772;
                            float _774 = _6057;
                            float _776 = fma(_774, -0.0625, 1.0);
                            _652 = _776;
                        }
                        float _778 = _652;
                        _780 = _778;
                        _782 = true;
                    }
                    else
                    {
                        precise float _6067 = _596 + _590;
                        float _784 = _6067;
                        precise float _6069 = _620 * 3.0;
                        float _786 = _6069;
                        precise float _6072 = _598 + _592;
                        float _788 = _6072;
                        precise float _6074 = _588 * 3.0;
                        float _790 = _6074;
                        float _792 = -_786;
                        bool _794 = _784 <= _792;
                        bool _796 = _784 >= 1.0;
                        bool _798 = _796 || _794;
                        bool _800 = _788 >= 1.0;
                        bool _802 = _800 || _798;
                        float _804 = -_790;
                        bool _806 = _788 <= _804;
                        bool _808 = _806 || _802;
                        float _810 = _790;
                        if (_808)
                        {
                            _810 = 0.0;
                        }
                        float _812 = _810;
                        float _814 = _812;
                        if (!_808)
                        {
                            precise float _6109 = _784 + _620;
                            float _816 = _6109;
                            precise float _6112 = _788 + _588;
                            float _818 = _6112;
                            precise float _6114 = _788 + (-0.0);
                            float _820 = _6114;
                            float _822 = clamp(_820, 0.0, 1.0);
                            precise float _6118 = _784 + (-0.0);
                            float _824 = _6118;
                            float _826 = clamp(_824, 0.0, 1.0);
                            float _828 = min(_600, 1.0);
                            precise float _6125 = _816 + _620;
                            float _830 = _6125;
                            precise float _6127 = _816 + (-0.0);
                            float _832 = _6127;
                            float _834 = clamp(_832, 0.0, 1.0);
                            float _836 = fma(_822, _584, _586);
                            float _838 = fma(_826, _616, _618);
                            precise float _6139 = _830 + (-0.0);
                            float _840 = _6139;
                            float _842 = clamp(_840, 0.0, 1.0);
                            float _844 = texture(fp_t_tcb_A, vec3(vec2(_838, _836), _828));
                            precise float _6150 = _830 + _620;
                            float _846 = _6150;
                            float _848 = clamp(_846, 0.0, 1.0);
                            precise float _6154 = _818 + (-0.0);
                            float _850 = _6154;
                            float _852 = clamp(_850, 0.0, 1.0);
                            float _854 = fma(_834, _616, _618);
                            float _856 = fma(_842, _616, _618);
                            float _858 = fma(_848, _616, _618);
                            float _860 = fma(_852, _584, _586);
                            float _862 = texture(fp_t_tcb_A, vec3(vec2(_854, _836), _828));
                            float _864 = texture(fp_t_tcb_A, vec3(vec2(_856, _836), _828));
                            float _866 = texture(fp_t_tcb_A, vec3(vec2(_858, _836), _828));
                            float _868 = texture(fp_t_tcb_A, vec3(vec2(_838, _860), _828));
                            float _870 = texture(fp_t_tcb_A, vec3(vec2(_854, _860), _828));
                            precise float _6205 = _818 + _588;
                            float _872 = _6205;
                            precise float _6207 = _872 + (-0.0);
                            float _874 = _6207;
                            float _876 = clamp(_874, 0.0, 1.0);
                            float _878 = fma(_876, _584, _586);
                            float _880 = texture(fp_t_tcb_A, vec3(vec2(_856, _860), _828));
                            float _882 = texture(fp_t_tcb_A, vec3(vec2(_858, _860), _828));
                            float _884 = texture(fp_t_tcb_A, vec3(vec2(_854, _878), _828));
                            float _886 = texture(fp_t_tcb_A, vec3(vec2(_856, _878), _828));
                            float _888 = texture(fp_t_tcb_A, vec3(vec2(_838, _878), _828));
                            precise float _6246 = _872 + _588;
                            float _890 = _6246;
                            precise float _6248 = _890 + (-0.0);
                            float _892 = _6248;
                            float _894 = clamp(_892, 0.0, 1.0);
                            float _896 = fma(_894, _584, _586);
                            float _898 = texture(fp_t_tcb_A, vec3(vec2(_858, _878), _828));
                            float _900 = texture(fp_t_tcb_A, vec3(vec2(_838, _896), _828));
                            float _902 = texture(fp_t_tcb_A, vec3(vec2(_854, _896), _828));
                            float _904 = texture(fp_t_tcb_A, vec3(vec2(_856, _896), _828));
                            float _906 = texture(fp_t_tcb_A, vec3(vec2(_858, _896), _828));
                            precise float _6287 = _844 + _862;
                            float _908 = _6287;
                            precise float _6290 = _908 + _864;
                            float _910 = _6290;
                            precise float _6293 = _910 + _866;
                            float _912 = _6293;
                            precise float _6296 = _912 + _868;
                            float _914 = _6296;
                            precise float _6299 = _914 + _870;
                            float _916 = _6299;
                            precise float _6302 = _916 + _880;
                            float _918 = _6302;
                            precise float _6305 = _918 + _882;
                            float _920 = _6305;
                            precise float _6308 = _920 + _888;
                            float _922 = _6308;
                            precise float _6311 = _922 + _884;
                            float _924 = _6311;
                            precise float _6314 = _924 + _886;
                            float _926 = _6314;
                            precise float _6317 = _926 + _898;
                            float _928 = _6317;
                            precise float _6320 = _928 + _900;
                            float _930 = _6320;
                            precise float _6323 = _930 + _902;
                            float _932 = _6323;
                            precise float _6326 = _932 + _904;
                            float _934 = _6326;
                            precise float _6329 = _906 + _934;
                            float _936 = _6329;
                            float _938 = fma(_936, -0.0625, 1.0);
                            _814 = _938;
                        }
                        float _940 = _814;
                        _780 = _940;
                    }
                    _782 = false;
                    float _942 = _780;
                    float _944 = -_942;
                    precise float _6341 = _944 + 1.0;
                    float _946 = _6341;
                    _324 = _946;
                    _500 = true;
                }
                else
                {
                    precise float _6347 = _284 * fp_c3_1._m0[23].x;
                    float _948 = _6347;
                    precise float _6351 = _84 * fp_c3_1._m0[52].x;
                    float _950 = _6351;
                    float _952 = fma(_286, fp_c3_1._m0[23].y, _948);
                    float _954 = fma(_86, fp_c3_1._m0[51].x, _950);
                    precise float _6365 = _84 * fp_c3_1._m0[52].y;
                    float _956 = _6365;
                    float _958 = fma(_290, fp_c3_1._m0[23].z, _952);
                    float _960 = fma(_88, fp_c3_1._m0[53].x, _954);
                    float _962 = fma(_292, fp_c3_1._m0[23].w, _958);
                    float _964 = fma(_90, fp_c3_1._m0[54].x, _960);
                    bool _966 = _962 > 0.0;
                    precise float _6390 = 3.0 * fp_c3_1._m0[55].x;
                    float _968 = _6390;
                    float _970 = -fp_c3_1._m0[55].x;
                    float _972 = fma(1.5, _970, _964);
                    float _974 = fma(_86, fp_c3_1._m0[51].y, _956);
                    precise float _6404 = 3.0 * fp_c3_1._m0[55].y;
                    float _976 = _6404;
                    float _978 = -_968;
                    bool _980 = _972 <= _978;
                    float _982 = _968;
                    float _984 = _974;
                    float _986 = _972;
                    if (_966)
                    {
                        float _988 = _67[3].w;
                        _982 = _988;
                    }
                    float _990 = _982;
                    float _992 = fma(_88, fp_c3_1._m0[53].y, _974);
                    float _994 = 0.0;
                    float _996 = _990;
                    float _998 = _992;
                    if (_966)
                    {
                        float _1000 = _67[3].x;
                        _994 = _1000;
                    }
                    float _1002 = _994;
                    float _1004 = _1002;
                    if (!_966)
                    {
                        _996 = _292;
                    }
                    float _1006 = _996;
                    float _1008 = _1006;
                    if (_966)
                    {
                        float _1010 = _67[3].y;
                        _984 = _1010;
                    }
                    float _1012 = _984;
                    float _1014 = _1012;
                    if (_966)
                    {
                        _276 = 1.0;
                    }
                    float _1016 = _276;
                    float _1018 = _1016;
                    if (!_966)
                    {
                        _1018 = 0.0;
                    }
                    float _1020 = _1018;
                    float _1022 = _1020;
                    if (!_966)
                    {
                        _1004 = _284;
                    }
                    float _1024 = _1004;
                    if (!_966)
                    {
                        _1014 = _286;
                    }
                    float _1026 = _1014;
                    float _1028 = fma(_90, fp_c3_1._m0[54].y, _992);
                    float _1030 = _1026;
                    if (_966)
                    {
                        float _1032 = _67[3].z;
                        _998 = _1032;
                    }
                    float _1034 = _998;
                    float _1036 = _1034;
                    if (!_966)
                    {
                        _1036 = _290;
                    }
                    float _1038 = _1036;
                    bool _1040 = _1020 == 0.0;
                    bool _1042 = _972 >= 1.0;
                    bool _1044 = _1042 || _980;
                    float _1046 = -fp_c3_1._m0[55].y;
                    float _1048 = fma(1.5, _1046, _1028);
                    bool _1050 = _1048 >= 1.0;
                    bool _1052 = _1050 || _1044;
                    precise float _6512 = 1.0 / _1006;
                    float _1054 = _6512;
                    float _1056 = -_976;
                    bool _1058 = _1048 <= _1056;
                    bool _1060 = _1058 || _1052;
                    precise float _6523 = _1054 * _1024;
                    float _1062 = _6523;
                    precise float _6526 = _1054 * _1026;
                    float _1064 = _6526;
                    precise float _6529 = _1054 * _1038;
                    float _1066 = _6529;
                    float _1068 = 0.0;
                    float _1070 = _1048;
                    if (_1060)
                    {
                        _1068 = 0.0;
                    }
                    float _1072 = _1068;
                    float _1074 = _1072;
                    float _1076 = 0.0;
                    float _1078 = 0.0;
                    if (!_1060)
                    {
                        precise float _6542 = _84 * fp_c3_1._m0[52].w;
                        float _1080 = _6542;
                        precise float _6546 = _84 * fp_c3_1._m0[52].z;
                        float _1082 = _6546;
                        precise float _6550 = _972 + fp_c3_1._m0[55].x;
                        float _1084 = _6550;
                        float _1086 = fma(_86, fp_c3_1._m0[51].w, _1080);
                        float _1088 = fma(_86, fp_c3_1._m0[51].z, _1082);
                        float _1090 = fma(_88, fp_c3_1._m0[53].w, _1086);
                        float _1092 = fma(_88, fp_c3_1._m0[53].z, _1088);
                        float _1094 = fma(_90, fp_c3_1._m0[54].w, _1090);
                        float _1096 = fma(_90, fp_c3_1._m0[54].z, _1092);
                        precise float _6582 = 1.0 / _1094;
                        float _1098 = _6582;
                        float _1100 = min(_1096, _1094);
                        float _1102 = min(_1094, _1100);
                        precise float _6591 = _1048 * _1098;
                        float _1104 = _6591;
                        precise float _6594 = _1084 * _1098;
                        float _1106 = _6594;
                        precise float _6597 = _972 * _1098;
                        float _1108 = _6597;
                        precise float _6600 = _1102 * _1098;
                        float _1110 = _6600;
                        float _1112 = texture(fp_t_tcb_16, vec3(vec2(_1106, _1104), _1110));
                        float _1114 = texture(fp_t_tcb_16, vec3(vec2(_1108, _1104), _1110));
                        precise float _6616 = _1084 + fp_c3_1._m0[55].x;
                        float _1116 = _6616;
                        precise float _6620 = _1048 + fp_c3_1._m0[55].y;
                        float _1118 = _6620;
                        precise float _6624 = _1116 + fp_c3_1._m0[55].x;
                        float _1120 = _6624;
                        precise float _6627 = _1116 * _1098;
                        float _1122 = _6627;
                        float _1124 = texture(fp_t_tcb_16, vec3(vec2(_1122, _1104), _1110));
                        precise float _6636 = _1120 * _1098;
                        float _1126 = _6636;
                        float _1128 = texture(fp_t_tcb_16, vec3(vec2(_1126, _1104), _1110));
                        precise float _6645 = _1118 * _1098;
                        float _1130 = _6645;
                        float _1132 = texture(fp_t_tcb_16, vec3(vec2(_1108, _1130), _1110));
                        float _1134 = texture(fp_t_tcb_16, vec3(vec2(_1106, _1130), _1110));
                        precise float _6661 = _1118 + fp_c3_1._m0[55].y;
                        float _1136 = _6661;
                        float _1138 = texture(fp_t_tcb_16, vec3(vec2(_1122, _1130), _1110));
                        float _1140 = texture(fp_t_tcb_16, vec3(vec2(_1126, _1130), _1110));
                        precise float _6676 = _1136 * _1098;
                        float _1142 = _6676;
                        float _1144 = texture(fp_t_tcb_16, vec3(vec2(_1108, _1142), _1110));
                        precise float _6685 = _1112 + _1114;
                        float _1146 = _6685;
                        float _1148 = texture(fp_t_tcb_16, vec3(vec2(_1122, _1142), _1110));
                        float _1150 = texture(fp_t_tcb_16, vec3(vec2(_1106, _1142), _1110));
                        precise float _6701 = _1136 + fp_c3_1._m0[55].y;
                        float _1152 = _6701;
                        precise float _6704 = _1152 * _1098;
                        float _1154 = _6704;
                        float _1156 = texture(fp_t_tcb_16, vec3(vec2(_1126, _1142), _1110));
                        float _1158 = texture(fp_t_tcb_16, vec3(vec2(_1108, _1154), _1110));
                        float _1160 = texture(fp_t_tcb_16, vec3(vec2(_1106, _1154), _1110));
                        float _1162 = texture(fp_t_tcb_16, vec3(vec2(_1122, _1154), _1110));
                        float _1164 = texture(fp_t_tcb_16, vec3(vec2(_1126, _1154), _1110));
                        precise float _6737 = _1124 + _1146;
                        float _1166 = _6737;
                        precise float _6740 = _1166 + _1128;
                        float _1168 = _6740;
                        precise float _6743 = _1132 + _1168;
                        float _1170 = _6743;
                        precise float _6746 = _1170 + _1134;
                        float _1172 = _6746;
                        precise float _6749 = _1172 + _1138;
                        float _1174 = _6749;
                        precise float _6752 = _1174 + _1140;
                        float _1176 = _6752;
                        precise float _6755 = _1176 + _1144;
                        float _1178 = _6755;
                        precise float _6758 = _1150 + _1178;
                        float _1180 = _6758;
                        precise float _6761 = _1180 + _1148;
                        float _1182 = _6761;
                        precise float _6764 = _1182 + _1156;
                        float _1184 = _6764;
                        precise float _6767 = _1184 + _1158;
                        float _1186 = _6767;
                        precise float _6770 = _1160 + _1186;
                        float _1188 = _6770;
                        precise float _6773 = _1188 + _1162;
                        float _1190 = _6773;
                        precise float _6776 = _1190 + _1164;
                        float _1192 = _6776;
                        float _1194 = fma(_1192, -0.0625, 1.0);
                        _1074 = _1194;
                        _986 = _1188;
                        _1070 = _1192;
                        _1022 = _1154;
                        _1076 = _1098;
                        _314 = _1134;
                        _1078 = _1146;
                        _1030 = _1154;
                        _1008 = _1190;
                    }
                    float _1196 = _1074;
                    float _1198 = _986;
                    float _1200 = _1070;
                    float _1202 = _1022;
                    float _1204 = _1076;
                    float _1206 = _314;
                    float _1208 = _1078;
                    float _1210 = _1030;
                    float _1212 = _1008;
                    float _1214 = _1210;
                    float _1216 = _1206;
                    float _1218 = _1212;
                    float _1220 = _1208;
                    float _1222 = _1200;
                    float _1224 = _1204;
                    float _1226 = _1198;
                    float _1228 = _1202;
                    if (_966)
                    {
                        _1214 = fp_c3_1._m0[22].x;
                    }
                    float _1230 = _1214;
                    float _1232 = _1230;
                    if (_966)
                    {
                        _1216 = fp_c3_1._m0[22].y;
                    }
                    float _1234 = _1216;
                    float _1236 = _1234;
                    if (_966)
                    {
                        _1218 = fp_c3_1._m0[22].z;
                    }
                    float _1238 = _1218;
                    float _1240 = _1238;
                    if (_966)
                    {
                        _1220 = fp_c3_1._m0[22].w;
                    }
                    float _1242 = _1220;
                    float _1244 = _1242;
                    if (_966)
                    {
                        _1222 = fp_c3_1._m0[25].x;
                    }
                    float _1246 = _1222;
                    float _1248 = _1246;
                    if (_966)
                    {
                        _1224 = fp_c3_1._m0[25].y;
                    }
                    float _1250 = _1224;
                    float _1252 = _1250;
                    if (_966)
                    {
                        _1226 = fp_c3_1._m0[27].x;
                    }
                    float _1254 = _1226;
                    float _1256 = _1254;
                    if (_966)
                    {
                        _1228 = fp_c3_1._m0[27].y;
                    }
                    float _1258 = _1228;
                    float _1260 = _1258;
                    if (!_966)
                    {
                        _1232 = fp_c3_1._m0[21].x;
                    }
                    float _1262 = _1232;
                    if (!_966)
                    {
                        _1236 = fp_c3_1._m0[21].y;
                    }
                    float _1264 = _1236;
                    if (!_966)
                    {
                        _1240 = fp_c3_1._m0[21].z;
                    }
                    float _1266 = _1240;
                    if (!_966)
                    {
                        _1244 = fp_c3_1._m0[21].w;
                    }
                    float _1268 = _1244;
                    if (!_966)
                    {
                        _1248 = fp_c3_1._m0[24].x;
                    }
                    float _1270 = _1248;
                    if (!_966)
                    {
                        _1252 = fp_c3_1._m0[24].y;
                    }
                    float _1272 = _1252;
                    if (!_966)
                    {
                        _1256 = fp_c3_1._m0[26].x;
                    }
                    float _1274 = _1256;
                    if (!_966)
                    {
                        _1260 = fp_c3_1._m0[26].y;
                    }
                    float _1276 = _1260;
                    float _1278 = -_1196;
                    precise float _6921 = _1278 + 1.0;
                    float _1280 = _6921;
                    float _1440;
                    if (_1040)
                    {
                        precise float _6926 = _1062 + _1274;
                        float _1282 = _6926;
                        precise float _6928 = _1270 * 3.0;
                        float _1284 = _6928;
                        precise float _6931 = _1064 + _1276;
                        float _1286 = _6931;
                        float _1288 = -_1284;
                        bool _1290 = _1282 <= _1288;
                        precise float _6938 = _1272 * 3.0;
                        float _1292 = _6938;
                        bool _1294 = _1282 >= 1.0;
                        bool _1296 = _1294 || _1290;
                        bool _1298 = _1286 >= 1.0;
                        bool _1300 = _1298 || _1296;
                        float _1302 = -_1292;
                        bool _1304 = _1286 <= _1302;
                        bool _1306 = _1304 || _1300;
                        float _1308 = _1292;
                        if (_1306)
                        {
                            _1308 = 0.0;
                        }
                        float _1310 = _1308;
                        float _1312 = _1310;
                        if (!_1306)
                        {
                            precise float _6968 = _1282 + _1270;
                            float _1314 = _6968;
                            precise float _6970 = _1282 + (-0.0);
                            float _1316 = _6970;
                            float _1318 = clamp(_1316, 0.0, 1.0);
                            precise float _6974 = _1286 + (-0.0);
                            float _1320 = _6974;
                            float _1322 = clamp(_1320, 0.0, 1.0);
                            precise float _6979 = _1286 + _1272;
                            float _1324 = _6979;
                            float _1326 = min(_1066, 1.0);
                            precise float _6984 = _1314 + _1270;
                            float _1328 = _6984;
                            precise float _6986 = _1314 + (-0.0);
                            float _1330 = _6986;
                            float _1332 = clamp(_1330, 0.0, 1.0);
                            float _1334 = fma(_1322, _1264, _1268);
                            float _1336 = fma(_1318, _1262, _1266);
                            precise float _6998 = _1324 + (-0.0);
                            float _1338 = _6998;
                            float _1340 = clamp(_1338, 0.0, 1.0);
                            float _1342 = texture(fp_t_tcb_8, vec3(vec2(_1336, _1334), _1326));
                            precise float _7008 = _1328 + (-0.0);
                            float _1344 = _7008;
                            float _1346 = clamp(_1344, 0.0, 1.0);
                            precise float _7013 = _1328 + _1270;
                            float _1348 = _7013;
                            float _1350 = clamp(_1348, 0.0, 1.0);
                            float _1352 = fma(_1332, _1262, _1266);
                            float _1354 = texture(fp_t_tcb_8, vec3(vec2(_1352, _1334), _1326));
                            float _1356 = fma(_1346, _1262, _1266);
                            float _1358 = fma(_1350, _1262, _1266);
                            float _1360 = fma(_1340, _1264, _1268);
                            float _1362 = texture(fp_t_tcb_8, vec3(vec2(_1356, _1334), _1326));
                            float _1364 = texture(fp_t_tcb_8, vec3(vec2(_1336, _1360), _1326));
                            float _1366 = texture(fp_t_tcb_8, vec3(vec2(_1358, _1334), _1326));
                            float _1368 = texture(fp_t_tcb_8, vec3(vec2(_1352, _1360), _1326));
                            float _1370 = texture(fp_t_tcb_8, vec3(vec2(_1356, _1360), _1326));
                            float _1372 = texture(fp_t_tcb_8, vec3(vec2(_1358, _1360), _1326));
                            precise float _7076 = _1324 + _1272;
                            float _1374 = _7076;
                            precise float _7079 = _1374 + _1272;
                            float _1376 = _7079;
                            precise float _7081 = _1374 + (-0.0);
                            float _1378 = _7081;
                            float _1380 = clamp(_1378, 0.0, 1.0);
                            precise float _7085 = _1376 + (-0.0);
                            float _1382 = _7085;
                            float _1384 = clamp(_1382, 0.0, 1.0);
                            float _1386 = fma(_1380, _1264, _1268);
                            float _1388 = fma(_1384, _1264, _1268);
                            float _1390 = texture(fp_t_tcb_8, vec3(vec2(_1352, _1386), _1326));
                            float _1392 = texture(fp_t_tcb_8, vec3(vec2(_1336, _1386), _1326));
                            float _1394 = texture(fp_t_tcb_8, vec3(vec2(_1356, _1386), _1326));
                            float _1396 = texture(fp_t_tcb_8, vec3(vec2(_1358, _1386), _1326));
                            float _1398 = texture(fp_t_tcb_8, vec3(vec2(_1336, _1388), _1326));
                            float _1400 = texture(fp_t_tcb_8, vec3(vec2(_1352, _1388), _1326));
                            float _1402 = texture(fp_t_tcb_8, vec3(vec2(_1356, _1388), _1326));
                            float _1404 = texture(fp_t_tcb_8, vec3(vec2(_1358, _1388), _1326));
                            precise float _7146 = _1342 + _1354;
                            float _1406 = _7146;
                            precise float _7149 = _1406 + _1362;
                            float _1408 = _7149;
                            precise float _7152 = _1408 + _1366;
                            float _1410 = _7152;
                            precise float _7155 = _1410 + _1364;
                            float _1412 = _7155;
                            precise float _7158 = _1412 + _1368;
                            float _1414 = _7158;
                            precise float _7161 = _1414 + _1370;
                            float _1416 = _7161;
                            precise float _7164 = _1416 + _1372;
                            float _1418 = _7164;
                            precise float _7167 = _1418 + _1392;
                            float _1420 = _7167;
                            precise float _7170 = _1420 + _1390;
                            float _1422 = _7170;
                            precise float _7173 = _1422 + _1394;
                            float _1424 = _7173;
                            precise float _7176 = _1424 + _1396;
                            float _1426 = _7176;
                            precise float _7179 = _1426 + _1398;
                            float _1428 = _7179;
                            precise float _7182 = _1428 + _1400;
                            float _1430 = _7182;
                            precise float _7185 = _1430 + _1402;
                            float _1432 = _7185;
                            precise float _7188 = _1404 + _1432;
                            float _1434 = _7188;
                            float _1436 = fma(_1434, -0.0625, 1.0);
                            _1312 = _1436;
                        }
                        float _1438 = _1312;
                        _1440 = _1438;
                        _1442 = true;
                    }
                    else
                    {
                        precise float _7198 = _1062 + _1274;
                        float _1444 = _7198;
                        precise float _7200 = _1270 * 3.0;
                        float _1446 = _7200;
                        precise float _7202 = _1272 * 3.0;
                        float _1448 = _7202;
                        float _1450 = -_1446;
                        bool _1452 = _1444 <= _1450;
                        precise float _7210 = _1064 + _1276;
                        float _1454 = _7210;
                        bool _1456 = _1444 >= 1.0;
                        bool _1458 = _1456 || _1452;
                        bool _1460 = _1454 >= 1.0;
                        bool _1462 = _1460 || _1458;
                        float _1464 = -_1448;
                        bool _1466 = _1454 <= _1464;
                        bool _1468 = _1466 || _1462;
                        float _1470 = _1448;
                        if (_1468)
                        {
                            _1470 = 0.0;
                        }
                        float _1472 = _1470;
                        float _1474 = _1472;
                        if (!_1468)
                        {
                            precise float _7240 = _1444 + _1270;
                            float _1476 = _7240;
                            precise float _7242 = _1454 + (-0.0);
                            float _1478 = _7242;
                            float _1480 = clamp(_1478, 0.0, 1.0);
                            precise float _7247 = _1454 + _1272;
                            float _1482 = _7247;
                            precise float _7249 = _1444 + (-0.0);
                            float _1484 = _7249;
                            float _1486 = clamp(_1484, 0.0, 1.0);
                            float _1488 = min(_1066, 1.0);
                            precise float _7256 = _1476 + _1270;
                            float _1490 = _7256;
                            precise float _7258 = _1476 + (-0.0);
                            float _1492 = _7258;
                            float _1494 = clamp(_1492, 0.0, 1.0);
                            float _1496 = fma(_1480, _1264, _1268);
                            float _1498 = fma(_1486, _1262, _1266);
                            precise float _7270 = _1482 + (-0.0);
                            float _1500 = _7270;
                            float _1502 = clamp(_1500, 0.0, 1.0);
                            float _1504 = texture(fp_t_tcb_A, vec3(vec2(_1498, _1496), _1488));
                            precise float _7280 = _1490 + (-0.0);
                            float _1506 = _7280;
                            float _1508 = clamp(_1506, 0.0, 1.0);
                            precise float _7285 = _1490 + _1270;
                            float _1510 = _7285;
                            float _1512 = clamp(_1510, 0.0, 1.0);
                            float _1514 = fma(_1494, _1262, _1266);
                            float _1516 = texture(fp_t_tcb_A, vec3(vec2(_1514, _1496), _1488));
                            float _1518 = fma(_1508, _1262, _1266);
                            float _1520 = fma(_1512, _1262, _1266);
                            float _1522 = fma(_1502, _1264, _1268);
                            float _1524 = texture(fp_t_tcb_A, vec3(vec2(_1518, _1496), _1488));
                            float _1526 = texture(fp_t_tcb_A, vec3(vec2(_1498, _1522), _1488));
                            float _1528 = texture(fp_t_tcb_A, vec3(vec2(_1520, _1496), _1488));
                            float _1530 = texture(fp_t_tcb_A, vec3(vec2(_1514, _1522), _1488));
                            float _1532 = texture(fp_t_tcb_A, vec3(vec2(_1518, _1522), _1488));
                            float _1534 = texture(fp_t_tcb_A, vec3(vec2(_1520, _1522), _1488));
                            precise float _7348 = _1482 + _1272;
                            float _1536 = _7348;
                            precise float _7351 = _1536 + _1272;
                            float _1538 = _7351;
                            precise float _7353 = _1536 + (-0.0);
                            float _1540 = _7353;
                            float _1542 = clamp(_1540, 0.0, 1.0);
                            precise float _7357 = _1538 + (-0.0);
                            float _1544 = _7357;
                            float _1546 = clamp(_1544, 0.0, 1.0);
                            float _1548 = fma(_1542, _1264, _1268);
                            float _1550 = fma(_1546, _1264, _1268);
                            float _1552 = texture(fp_t_tcb_A, vec3(vec2(_1514, _1548), _1488));
                            float _1554 = texture(fp_t_tcb_A, vec3(vec2(_1498, _1548), _1488));
                            float _1556 = texture(fp_t_tcb_A, vec3(vec2(_1518, _1548), _1488));
                            float _1558 = texture(fp_t_tcb_A, vec3(vec2(_1520, _1548), _1488));
                            float _1560 = texture(fp_t_tcb_A, vec3(vec2(_1498, _1550), _1488));
                            float _1562 = texture(fp_t_tcb_A, vec3(vec2(_1514, _1550), _1488));
                            float _1564 = texture(fp_t_tcb_A, vec3(vec2(_1518, _1550), _1488));
                            float _1566 = texture(fp_t_tcb_A, vec3(vec2(_1520, _1550), _1488));
                            precise float _7418 = _1504 + _1516;
                            float _1568 = _7418;
                            precise float _7421 = _1568 + _1524;
                            float _1570 = _7421;
                            precise float _7424 = _1570 + _1528;
                            float _1572 = _7424;
                            precise float _7427 = _1572 + _1526;
                            float _1574 = _7427;
                            precise float _7430 = _1574 + _1530;
                            float _1576 = _7430;
                            precise float _7433 = _1576 + _1532;
                            float _1578 = _7433;
                            precise float _7436 = _1578 + _1534;
                            float _1580 = _7436;
                            precise float _7439 = _1580 + _1554;
                            float _1582 = _7439;
                            precise float _7442 = _1582 + _1552;
                            float _1584 = _7442;
                            precise float _7445 = _1584 + _1556;
                            float _1586 = _7445;
                            precise float _7448 = _1586 + _1558;
                            float _1588 = _7448;
                            precise float _7451 = _1588 + _1560;
                            float _1590 = _7451;
                            precise float _7454 = _1590 + _1562;
                            float _1592 = _7454;
                            precise float _7457 = _1592 + _1564;
                            float _1594 = _7457;
                            precise float _7460 = _1594 + _1566;
                            float _1596 = _7460;
                            float _1598 = fma(_1596, -0.0625, 1.0);
                            _1474 = _1598;
                        }
                        float _1600 = _1474;
                        _1440 = _1600;
                    }
                    _1442 = false;
                    float _1602 = _1440;
                    float _1604 = -_1280;
                    float _1606 = -_1602;
                    precise float _7475 = _1604 + _1606;
                    float _1608 = _7475;
                    float _1610 = fma(_302, _1608, _302);
                    precise float _7482 = _1280 + _1610;
                    float _1612 = _7482;
                    _324 = _1612;
                    _500 = true;
                }
            }
        }
        else
        {
            bool _1614 = floatBitsToInt(fp_c3_1._m0[56].x) == 1;
            if (_1614)
            {
                precise float _7496 = _84 * fp_c3_1._m0[52].x;
                float _1616 = _7496;
                bool _1618 = _302 > 0.0;
                float _1620 = fma(_86, fp_c3_1._m0[51].x, _1616);
                precise float _7507 = _84 * fp_c3_1._m0[52].y;
                float _1622 = _7507;
                precise float _7510 = 3.0 * fp_c3_1._m0[55].x;
                float _1624 = _7510;
                precise float _7513 = 3.0 * fp_c3_1._m0[55].y;
                float _1626 = _7513;
                float _1628 = fma(_88, fp_c3_1._m0[53].x, _1620);
                float _1630 = fma(_90, fp_c3_1._m0[54].x, _1628);
                float _1632 = -fp_c3_1._m0[55].x;
                float _1634 = fma(1.5, _1632, _1630);
                float _1636 = fma(_86, fp_c3_1._m0[51].y, _1622);
                float _1638 = -_1624;
                bool _1640 = _1634 <= _1638;
                float _1642 = fma(_88, fp_c3_1._m0[53].y, _1636);
                float _1644 = fma(_90, fp_c3_1._m0[54].y, _1642);
                bool _1646 = _1634 >= 1.0;
                bool _1648 = _1646 || _1640;
                float _1650 = -fp_c3_1._m0[55].y;
                float _1652 = fma(1.5, _1650, _1644);
                bool _1654 = _1652 >= 1.0;
                bool _1656 = _1654 || _1648;
                float _1658 = -_1626;
                bool _1660 = _1652 <= _1658;
                bool _1662 = _1660 || _1656;
                float _1664 = 0.0;
                float _1666 = _1652;
                float _1668 = _1626;
                float _1670 = 1.5;
                if (_1662)
                {
                    _1664 = 0.0;
                }
                float _1672 = _1664;
                float _1674 = _1672;
                float _1676 = 0.0;
                float _1678 = 0.0;
                if (!_1662)
                {
                    precise float _7587 = _84 * fp_c3_1._m0[52].w;
                    float _1680 = _7587;
                    precise float _7591 = _84 * fp_c3_1._m0[52].z;
                    float _1682 = _7591;
                    precise float _7595 = _1652 + fp_c3_1._m0[55].y;
                    float _1684 = _7595;
                    float _1686 = fma(_86, fp_c3_1._m0[51].w, _1680);
                    float _1688 = fma(_86, fp_c3_1._m0[51].z, _1682);
                    precise float _7609 = _1634 + fp_c3_1._m0[55].x;
                    float _1690 = _7609;
                    float _1692 = fma(_88, fp_c3_1._m0[53].w, _1686);
                    float _1694 = fma(_88, fp_c3_1._m0[53].z, _1688);
                    precise float _7623 = _1690 + fp_c3_1._m0[55].x;
                    float _1696 = _7623;
                    float _1698 = fma(_90, fp_c3_1._m0[54].w, _1692);
                    float _1700 = fma(_90, fp_c3_1._m0[54].z, _1694);
                    precise float _7635 = 1.0 / _1698;
                    float _1702 = _7635;
                    precise float _7639 = _1696 + fp_c3_1._m0[55].x;
                    float _1704 = _7639;
                    float _1706 = min(_1700, _1698);
                    float _1708 = min(_1698, _1706);
                    precise float _7648 = _1652 * _1702;
                    float _1710 = _7648;
                    precise float _7651 = _1690 * _1702;
                    float _1712 = _7651;
                    precise float _7654 = _1634 * _1702;
                    float _1714 = _7654;
                    precise float _7657 = _1696 * _1702;
                    float _1716 = _7657;
                    precise float _7660 = _1704 * _1702;
                    float _1718 = _7660;
                    precise float _7663 = _1708 * _1702;
                    float _1720 = _7663;
                    float _1722 = texture(fp_t_tcb_16, vec3(vec2(_1712, _1710), _1720));
                    float _1724 = texture(fp_t_tcb_16, vec3(vec2(_1714, _1710), _1720));
                    float _1726 = texture(fp_t_tcb_16, vec3(vec2(_1716, _1710), _1720));
                    float _1728 = texture(fp_t_tcb_16, vec3(vec2(_1718, _1710), _1720));
                    precise float _7690 = _1684 * _1702;
                    float _1730 = _7690;
                    float _1732 = texture(fp_t_tcb_16, vec3(vec2(_1712, _1730), _1720));
                    float _1734 = texture(fp_t_tcb_16, vec3(vec2(_1714, _1730), _1720));
                    precise float _7706 = _1684 + fp_c3_1._m0[55].y;
                    float _1736 = _7706;
                    float _1738 = texture(fp_t_tcb_16, vec3(vec2(_1716, _1730), _1720));
                    float _1740 = texture(fp_t_tcb_16, vec3(vec2(_1718, _1730), _1720));
                    precise float _7721 = _1722 + _1724;
                    float _1742 = _7721;
                    precise float _7724 = _1736 * _1702;
                    float _1744 = _7724;
                    precise float _7727 = _1726 + _1742;
                    float _1746 = _7727;
                    precise float _7730 = _1746 + _1728;
                    float _1748 = _7730;
                    float _1750 = texture(fp_t_tcb_16, vec3(vec2(_1714, _1744), _1720));
                    float _1752 = texture(fp_t_tcb_16, vec3(vec2(_1716, _1744), _1720));
                    float _1754 = texture(fp_t_tcb_16, vec3(vec2(_1712, _1744), _1720));
                    precise float _7752 = _1736 + fp_c3_1._m0[55].y;
                    float _1756 = _7752;
                    precise float _7755 = _1756 * _1702;
                    float _1758 = _7755;
                    float _1760 = texture(fp_t_tcb_16, vec3(vec2(_1718, _1744), _1720));
                    float _1762 = texture(fp_t_tcb_16, vec3(vec2(_1714, _1758), _1720));
                    float _1764 = texture(fp_t_tcb_16, vec3(vec2(_1712, _1758), _1720));
                    float _1766 = texture(fp_t_tcb_16, vec3(vec2(_1716, _1758), _1720));
                    float _1768 = texture(fp_t_tcb_16, vec3(vec2(_1718, _1758), _1720));
                    precise float _7788 = _1734 + _1748;
                    float _1770 = _7788;
                    precise float _7791 = _1770 + _1732;
                    float _1772 = _7791;
                    precise float _7794 = _1772 + _1738;
                    float _1774 = _7794;
                    precise float _7797 = _1774 + _1740;
                    float _1776 = _7797;
                    precise float _7800 = _1776 + _1750;
                    float _1778 = _7800;
                    precise float _7803 = _1754 + _1778;
                    float _1780 = _7803;
                    precise float _7806 = _1780 + _1752;
                    float _1782 = _7806;
                    precise float _7809 = _1782 + _1760;
                    float _1784 = _7809;
                    precise float _7812 = _1784 + _1762;
                    float _1786 = _7812;
                    precise float _7815 = _1764 + _1786;
                    float _1788 = _7815;
                    precise float _7818 = _1788 + _1766;
                    float _1790 = _7818;
                    precise float _7821 = _1790 + _1768;
                    float _1792 = _7821;
                    float _1794 = fma(_1792, -0.0625, 1.0);
                    _1674 = _1794;
                    _1666 = _1744;
                    _1668 = _1764;
                    _1670 = _1760;
                    _1676 = _1770;
                    _1678 = _1772;
                }
                float _1796 = _1674;
                float _1798 = _1666;
                float _1800 = _1668;
                float _1802 = _1670;
                float _1804 = _1676;
                float _1806 = _1678;
                float _1808 = -_1796;
                precise float _7840 = _1808 + 1.0;
                float _1810 = _7840;
                float _1812 = _1800;
                float _1814 = _1802;
                float _1816 = _1798;
                float _1818 = _1806;
                float _1820 = _1804;
                if (_1618)
                {
                    precise float _7851 = _284 * fp_c3_1._m0[23].x;
                    float _1822 = _7851;
                    float _1824 = fma(_286, fp_c3_1._m0[23].y, _1822);
                    float _1826 = fma(_290, fp_c3_1._m0[23].z, _1824);
                    float _1828 = fma(_292, fp_c3_1._m0[23].w, _1826);
                    bool _1830 = _1828 > 0.0;
                    float _1832 = _1824;
                    float _1834 = _1828;
                    if (_1830)
                    {
                        float _1836 = _67[3].w;
                        _1812 = _1836;
                    }
                    float _1838 = _1812;
                    float _1840 = _1838;
                    if (_1830)
                    {
                        float _1842 = _67[3].x;
                        _1832 = _1842;
                    }
                    float _1844 = _1832;
                    float _1846 = _1844;
                    if (_1830)
                    {
                        float _1848 = _67[3].y;
                        _1834 = _1848;
                    }
                    float _1850 = _1834;
                    float _1852 = _1850;
                    if (_1830)
                    {
                        float _1854 = _67[3].z;
                        _1814 = _1854;
                    }
                    float _1856 = _1814;
                    float _1858 = _1856;
                    if (_1830)
                    {
                        _1816 = 1.0;
                    }
                    float _1860 = _1816;
                    float _1862 = _1860;
                    if (!_1830)
                    {
                        _1862 = 0.0;
                    }
                    float _1864 = _1862;
                    float _1866 = _1864;
                    if (!_1830)
                    {
                        _1840 = _292;
                    }
                    float _1868 = _1840;
                    float _1870 = _1868;
                    if (!_1830)
                    {
                        _1846 = _284;
                    }
                    float _1872 = _1846;
                    float _1874 = _1872;
                    if (!_1830)
                    {
                        _1852 = _286;
                    }
                    float _1876 = _1852;
                    float _1878 = _1876;
                    if (!_1830)
                    {
                        _1858 = _290;
                    }
                    float _1880 = _1858;
                    float _1882 = _1880;
                    if (_1830)
                    {
                        _1818 = fp_c3_1._m0[22].y;
                    }
                    float _1884 = _1818;
                    bool _1886 = _1864 == 0.0;
                    float _1888 = _1884;
                    if (_1830)
                    {
                        _1866 = fp_c3_1._m0[22].x;
                    }
                    float _1890 = _1866;
                    float _1892 = _1890;
                    if (_1830)
                    {
                        _316 = fp_c3_1._m0[22].w;
                    }
                    float _1894 = _316;
                    float _1896 = _1894;
                    if (_1830)
                    {
                        _1820 = fp_c3_1._m0[25].y;
                    }
                    float _1898 = _1820;
                    float _1900 = _1898;
                    if (!_1830)
                    {
                        _1892 = fp_c3_1._m0[21].x;
                    }
                    float _1902 = _1892;
                    if (!_1830)
                    {
                        _1888 = fp_c3_1._m0[21].y;
                    }
                    float _1904 = _1888;
                    if (!_1830)
                    {
                        _1896 = fp_c3_1._m0[21].w;
                    }
                    float _1906 = _1896;
                    if (!_1830)
                    {
                        _1900 = fp_c3_1._m0[24].y;
                    }
                    float _1908 = _1900;
                    precise float _8001 = 1.0 / _1868;
                    float _1910 = _8001;
                    if (_1830)
                    {
                        _1870 = fp_c3_1._m0[27].y;
                    }
                    float _1912 = _1870;
                    float _1914 = _1912;
                    if (!_1830)
                    {
                        _1914 = fp_c3_1._m0[26].y;
                    }
                    float _1916 = _1914;
                    precise float _8018 = _1910 * _1872;
                    float _1918 = _8018;
                    precise float _8021 = _1910 * _1876;
                    float _1920 = _8021;
                    precise float _8024 = _1910 * _1880;
                    float _1922 = _8024;
                    if (_1830)
                    {
                        _1878 = fp_c3_1._m0[22].z;
                    }
                    float _1924 = _1878;
                    float _1926 = _1924;
                    if (_1830)
                    {
                        _1874 = fp_c3_1._m0[25].x;
                    }
                    float _1928 = _1874;
                    float _1930 = _1928;
                    if (_1830)
                    {
                        _1882 = fp_c3_1._m0[27].x;
                    }
                    float _1932 = _1882;
                    float _1934 = _1932;
                    if (!_1830)
                    {
                        _1926 = fp_c3_1._m0[21].z;
                    }
                    float _1936 = _1926;
                    if (!_1830)
                    {
                        _1930 = fp_c3_1._m0[24].x;
                    }
                    float _1938 = _1930;
                    if (!_1830)
                    {
                        _1934 = fp_c3_1._m0[26].x;
                    }
                    float _1940 = _1934;
                    float _2100;
                    if (_1886)
                    {
                        precise float _8071 = _1918 + _1940;
                        float _1942 = _8071;
                        precise float _8073 = _1938 * 3.0;
                        float _1944 = _8073;
                        precise float _8076 = _1920 + _1916;
                        float _1946 = _8076;
                        float _1948 = -_1944;
                        bool _1950 = _1942 <= _1948;
                        precise float _8083 = _1908 * 3.0;
                        float _1952 = _8083;
                        bool _1954 = _1942 >= 1.0;
                        bool _1956 = _1954 || _1950;
                        bool _1958 = _1946 >= 1.0;
                        bool _1960 = _1958 || _1956;
                        float _1962 = -_1952;
                        bool _1964 = _1946 <= _1962;
                        bool _1966 = _1964 || _1960;
                        float _1968 = _1952;
                        if (_1966)
                        {
                            _1968 = 0.0;
                        }
                        float _1970 = _1968;
                        float _1972 = _1970;
                        if (!_1966)
                        {
                            precise float _8113 = _1942 + _1938;
                            float _1974 = _8113;
                            precise float _8115 = _1946 + (-0.0);
                            float _1976 = _8115;
                            float _1978 = clamp(_1976, 0.0, 1.0);
                            precise float _8120 = _1946 + _1908;
                            float _1980 = _8120;
                            precise float _8122 = _1942 + (-0.0);
                            float _1982 = _8122;
                            float _1984 = clamp(_1982, 0.0, 1.0);
                            float _1986 = min(_1922, 1.0);
                            precise float _8129 = _1974 + _1938;
                            float _1988 = _8129;
                            precise float _8131 = _1974 + (-0.0);
                            float _1990 = _8131;
                            float _1992 = clamp(_1990, 0.0, 1.0);
                            float _1994 = fma(_1978, _1904, _1906);
                            float _1996 = fma(_1984, _1902, _1936);
                            precise float _8143 = _1980 + (-0.0);
                            float _1998 = _8143;
                            float _2000 = clamp(_1998, 0.0, 1.0);
                            float _2002 = texture(fp_t_tcb_8, vec3(vec2(_1996, _1994), _1986));
                            precise float _8153 = _1988 + (-0.0);
                            float _2004 = _8153;
                            float _2006 = clamp(_2004, 0.0, 1.0);
                            precise float _8158 = _1988 + _1938;
                            float _2008 = _8158;
                            float _2010 = clamp(_2008, 0.0, 1.0);
                            float _2012 = fma(_1992, _1902, _1936);
                            float _2014 = texture(fp_t_tcb_8, vec3(vec2(_2012, _1994), _1986));
                            float _2016 = fma(_2006, _1902, _1936);
                            float _2018 = fma(_2010, _1902, _1936);
                            float _2020 = fma(_2000, _1904, _1906);
                            float _2022 = texture(fp_t_tcb_8, vec3(vec2(_2016, _1994), _1986));
                            float _2024 = texture(fp_t_tcb_8, vec3(vec2(_1996, _2020), _1986));
                            float _2026 = texture(fp_t_tcb_8, vec3(vec2(_2018, _1994), _1986));
                            float _2028 = texture(fp_t_tcb_8, vec3(vec2(_2012, _2020), _1986));
                            float _2030 = texture(fp_t_tcb_8, vec3(vec2(_2016, _2020), _1986));
                            float _2032 = texture(fp_t_tcb_8, vec3(vec2(_2018, _2020), _1986));
                            precise float _8221 = _1980 + _1908;
                            float _2034 = _8221;
                            precise float _8224 = _2034 + _1908;
                            float _2036 = _8224;
                            precise float _8226 = _2034 + (-0.0);
                            float _2038 = _8226;
                            float _2040 = clamp(_2038, 0.0, 1.0);
                            precise float _8230 = _2036 + (-0.0);
                            float _2042 = _8230;
                            float _2044 = clamp(_2042, 0.0, 1.0);
                            float _2046 = fma(_2040, _1904, _1906);
                            float _2048 = fma(_2044, _1904, _1906);
                            float _2050 = texture(fp_t_tcb_8, vec3(vec2(_2012, _2046), _1986));
                            float _2052 = texture(fp_t_tcb_8, vec3(vec2(_1996, _2046), _1986));
                            float _2054 = texture(fp_t_tcb_8, vec3(vec2(_2016, _2046), _1986));
                            float _2056 = texture(fp_t_tcb_8, vec3(vec2(_2018, _2046), _1986));
                            float _2058 = texture(fp_t_tcb_8, vec3(vec2(_1996, _2048), _1986));
                            float _2060 = texture(fp_t_tcb_8, vec3(vec2(_2012, _2048), _1986));
                            float _2062 = texture(fp_t_tcb_8, vec3(vec2(_2016, _2048), _1986));
                            float _2064 = texture(fp_t_tcb_8, vec3(vec2(_2018, _2048), _1986));
                            precise float _8291 = _2002 + _2014;
                            float _2066 = _8291;
                            precise float _8294 = _2066 + _2022;
                            float _2068 = _8294;
                            precise float _8297 = _2068 + _2026;
                            float _2070 = _8297;
                            precise float _8300 = _2070 + _2024;
                            float _2072 = _8300;
                            precise float _8303 = _2072 + _2028;
                            float _2074 = _8303;
                            precise float _8306 = _2074 + _2030;
                            float _2076 = _8306;
                            precise float _8309 = _2076 + _2032;
                            float _2078 = _8309;
                            precise float _8312 = _2078 + _2052;
                            float _2080 = _8312;
                            precise float _8315 = _2080 + _2050;
                            float _2082 = _8315;
                            precise float _8318 = _2082 + _2054;
                            float _2084 = _8318;
                            precise float _8321 = _2084 + _2056;
                            float _2086 = _8321;
                            precise float _8324 = _2086 + _2058;
                            float _2088 = _8324;
                            precise float _8327 = _2088 + _2060;
                            float _2090 = _8327;
                            precise float _8330 = _2090 + _2062;
                            float _2092 = _8330;
                            precise float _8333 = _2092 + _2064;
                            float _2094 = _8333;
                            float _2096 = fma(_2094, -0.0625, 1.0);
                            _1972 = _2096;
                        }
                        float _2098 = _1972;
                        _2100 = _2098;
                        _2102 = true;
                    }
                    else
                    {
                        precise float _8343 = _1918 + _1940;
                        float _2104 = _8343;
                        precise float _8345 = _1938 * 3.0;
                        float _2106 = _8345;
                        precise float _8348 = _1920 + _1916;
                        float _2108 = _8348;
                        float _2110 = -_2106;
                        bool _2112 = _2104 <= _2110;
                        precise float _8355 = _1908 * 3.0;
                        float _2114 = _8355;
                        bool _2116 = _2104 >= 1.0;
                        bool _2118 = _2116 || _2112;
                        bool _2120 = _2108 >= 1.0;
                        bool _2122 = _2120 || _2118;
                        float _2124 = -_2114;
                        bool _2126 = _2108 <= _2124;
                        bool _2128 = _2126 || _2122;
                        float _2130 = _2114;
                        if (_2128)
                        {
                            _2130 = 0.0;
                        }
                        float _2132 = _2130;
                        float _2134 = _2132;
                        if (!_2128)
                        {
                            precise float _8385 = _2104 + _1938;
                            float _2136 = _8385;
                            precise float _8387 = _2108 + (-0.0);
                            float _2138 = _8387;
                            float _2140 = clamp(_2138, 0.0, 1.0);
                            precise float _8392 = _2108 + _1908;
                            float _2142 = _8392;
                            precise float _8394 = _2104 + (-0.0);
                            float _2144 = _8394;
                            float _2146 = clamp(_2144, 0.0, 1.0);
                            float _2148 = min(_1922, 1.0);
                            precise float _8401 = _2136 + _1938;
                            float _2150 = _8401;
                            precise float _8403 = _2136 + (-0.0);
                            float _2152 = _8403;
                            float _2154 = clamp(_2152, 0.0, 1.0);
                            float _2156 = fma(_2140, _1904, _1906);
                            float _2158 = fma(_2146, _1902, _1936);
                            precise float _8415 = _2142 + (-0.0);
                            float _2160 = _8415;
                            float _2162 = clamp(_2160, 0.0, 1.0);
                            float _2164 = texture(fp_t_tcb_A, vec3(vec2(_2158, _2156), _2148));
                            precise float _8425 = _2150 + (-0.0);
                            float _2166 = _8425;
                            float _2168 = clamp(_2166, 0.0, 1.0);
                            precise float _8430 = _2150 + _1938;
                            float _2170 = _8430;
                            float _2172 = clamp(_2170, 0.0, 1.0);
                            float _2174 = fma(_2154, _1902, _1936);
                            float _2176 = fma(_2162, _1904, _1906);
                            float _2178 = fma(_2168, _1902, _1936);
                            float _2180 = fma(_2172, _1902, _1936);
                            float _2182 = texture(fp_t_tcb_A, vec3(vec2(_2174, _2156), _2148));
                            float _2184 = texture(fp_t_tcb_A, vec3(vec2(_2178, _2156), _2148));
                            float _2186 = texture(fp_t_tcb_A, vec3(vec2(_2158, _2176), _2148));
                            float _2188 = texture(fp_t_tcb_A, vec3(vec2(_2180, _2156), _2148));
                            float _2190 = texture(fp_t_tcb_A, vec3(vec2(_2174, _2176), _2148));
                            float _2192 = texture(fp_t_tcb_A, vec3(vec2(_2178, _2176), _2148));
                            float _2194 = texture(fp_t_tcb_A, vec3(vec2(_2180, _2176), _2148));
                            precise float _8493 = _2142 + _1908;
                            float _2196 = _8493;
                            precise float _8496 = _2196 + _1908;
                            float _2198 = _8496;
                            precise float _8498 = _2196 + (-0.0);
                            float _2200 = _8498;
                            float _2202 = clamp(_2200, 0.0, 1.0);
                            precise float _8502 = _2198 + (-0.0);
                            float _2204 = _8502;
                            float _2206 = clamp(_2204, 0.0, 1.0);
                            float _2208 = fma(_2202, _1904, _1906);
                            float _2210 = fma(_2206, _1904, _1906);
                            float _2212 = texture(fp_t_tcb_A, vec3(vec2(_2174, _2208), _2148));
                            float _2214 = texture(fp_t_tcb_A, vec3(vec2(_2158, _2208), _2148));
                            float _2216 = texture(fp_t_tcb_A, vec3(vec2(_2178, _2208), _2148));
                            float _2218 = texture(fp_t_tcb_A, vec3(vec2(_2180, _2208), _2148));
                            float _2220 = texture(fp_t_tcb_A, vec3(vec2(_2158, _2210), _2148));
                            float _2222 = texture(fp_t_tcb_A, vec3(vec2(_2174, _2210), _2148));
                            float _2224 = texture(fp_t_tcb_A, vec3(vec2(_2178, _2210), _2148));
                            float _2226 = texture(fp_t_tcb_A, vec3(vec2(_2180, _2210), _2148));
                            precise float _8563 = _2164 + _2182;
                            float _2228 = _8563;
                            precise float _8566 = _2228 + _2184;
                            float _2230 = _8566;
                            precise float _8569 = _2230 + _2188;
                            float _2232 = _8569;
                            precise float _8572 = _2232 + _2186;
                            float _2234 = _8572;
                            precise float _8575 = _2234 + _2190;
                            float _2236 = _8575;
                            precise float _8578 = _2236 + _2192;
                            float _2238 = _8578;
                            precise float _8581 = _2238 + _2194;
                            float _2240 = _8581;
                            precise float _8584 = _2240 + _2214;
                            float _2242 = _8584;
                            precise float _8587 = _2242 + _2212;
                            float _2244 = _8587;
                            precise float _8590 = _2244 + _2216;
                            float _2246 = _8590;
                            precise float _8593 = _2246 + _2218;
                            float _2248 = _8593;
                            precise float _8596 = _2248 + _2220;
                            float _2250 = _8596;
                            precise float _8599 = _2250 + _2222;
                            float _2252 = _8599;
                            precise float _8602 = _2252 + _2224;
                            float _2254 = _8602;
                            precise float _8605 = _2226 + _2254;
                            float _2256 = _8605;
                            float _2258 = fma(_2256, -0.0625, 1.0);
                            _2134 = _2258;
                        }
                        float _2260 = _2134;
                        _2100 = _2260;
                    }
                    _2102 = false;
                    float _2262 = _2100;
                    float _2264 = -_2262;
                    float _2266 = fma(_302, _2264, fp_c1_1._m0[0].x);
                    _318 = _2266;
                }
                float _2268 = _318;
                float _2270 = min(_1810, _2268);
                _324 = _2270;
                _500 = true;
            }
            else
            {
                bool _2272 = _302 > 0.0;
                if (_2272)
                {
                    precise float _8636 = _284 * fp_c3_1._m0[23].x;
                    float _2274 = _8636;
                    float _2276 = fma(_286, fp_c3_1._m0[23].y, _2274);
                    float _2278 = fma(_290, fp_c3_1._m0[23].z, _2276);
                    float _2280 = fma(_292, fp_c3_1._m0[23].w, _2278);
                    bool _2282 = _2280 > 0.0;
                    float _2284 = _2276;
                    float _2286 = _2280;
                    if (_2282)
                    {
                        float _2288 = _67[3].w;
                        _2284 = _2288;
                    }
                    float _2290 = _2284;
                    float _2292 = _2290;
                    if (_2282)
                    {
                        float _2294 = _67[3].x;
                        _2286 = _2294;
                    }
                    float _2296 = _2286;
                    float _2298 = _2296;
                    if (_2282)
                    {
                        float _2300 = _67[3].y;
                        _278 = _2300;
                    }
                    float _2302 = _278;
                    float _2304 = _2302;
                    if (_2282)
                    {
                        float _2306 = _67[3].z;
                        _280 = _2306;
                    }
                    float _2308 = _280;
                    float _2310 = _2308;
                    if (_2282)
                    {
                        _176 = 1.0;
                    }
                    float _2312 = _176;
                    float _2314 = _2312;
                    if (!_2282)
                    {
                        _2314 = 0.0;
                    }
                    float _2316 = _2314;
                    float _2318 = _2316;
                    if (!_2282)
                    {
                        _2292 = _292;
                    }
                    float _2320 = _2292;
                    if (!_2282)
                    {
                        _2298 = _284;
                    }
                    float _2322 = _2298;
                    float _2324 = _2322;
                    if (!_2282)
                    {
                        _2304 = _286;
                    }
                    float _2326 = _2304;
                    float _2328 = _2326;
                    if (!_2282)
                    {
                        _2310 = _290;
                    }
                    float _2330 = _2310;
                    float _2332 = _2330;
                    if (_2282)
                    {
                        _320 = fp_c3_1._m0[22].y;
                    }
                    float _2334 = _320;
                    bool _2336 = _2316 == 0.0;
                    float _2338 = _2334;
                    if (_2282)
                    {
                        _322 = fp_c3_1._m0[22].w;
                    }
                    float _2340 = _322;
                    float _2342 = 0.0;
                    float _2344 = _2340;
                    if (_2282)
                    {
                        _2342 = fp_c3_1._m0[25].y;
                    }
                    float _2346 = _2342;
                    float _2348 = _2346;
                    if (_2282)
                    {
                        _2318 = fp_c3_1._m0[27].y;
                    }
                    float _2350 = _2318;
                    float _2352 = _2350;
                    if (!_2282)
                    {
                        _2338 = fp_c3_1._m0[21].y;
                    }
                    float _2354 = _2338;
                    if (!_2282)
                    {
                        _2344 = fp_c3_1._m0[21].w;
                    }
                    float _2356 = _2344;
                    if (!_2282)
                    {
                        _2348 = fp_c3_1._m0[24].y;
                    }
                    float _2358 = _2348;
                    if (!_2282)
                    {
                        _2352 = fp_c3_1._m0[26].y;
                    }
                    float _2360 = _2352;
                    precise float _8785 = 1.0 / _2320;
                    float _2362 = _8785;
                    precise float _8788 = _2362 * _2322;
                    float _2364 = _8788;
                    precise float _8791 = _2362 * _2326;
                    float _2366 = _8791;
                    precise float _8794 = _2362 * _2330;
                    float _2368 = _8794;
                    float _2370 = _2362;
                    if (_2282)
                    {
                        _2324 = fp_c3_1._m0[22].x;
                    }
                    float _2372 = _2324;
                    float _2374 = _2372;
                    if (_2282)
                    {
                        _2328 = fp_c3_1._m0[22].z;
                    }
                    float _2376 = _2328;
                    float _2378 = _2376;
                    if (_2282)
                    {
                        _2370 = fp_c3_1._m0[25].x;
                    }
                    float _2380 = _2370;
                    float _2382 = _2380;
                    if (_2282)
                    {
                        _2332 = fp_c3_1._m0[27].x;
                    }
                    float _2384 = _2332;
                    float _2386 = _2384;
                    if (!_2282)
                    {
                        _2374 = fp_c3_1._m0[21].x;
                    }
                    float _2388 = _2374;
                    if (!_2282)
                    {
                        _2378 = fp_c3_1._m0[21].z;
                    }
                    float _2390 = _2378;
                    if (!_2282)
                    {
                        _2382 = fp_c3_1._m0[24].x;
                    }
                    float _2392 = _2382;
                    if (!_2282)
                    {
                        _2386 = fp_c3_1._m0[26].x;
                    }
                    float _2394 = _2386;
                    float _2396 = _2394;
                    float _2556;
                    if (_2336)
                    {
                        precise float _8857 = _2364 + _2394;
                        float _2398 = _8857;
                        precise float _8859 = _2392 * 3.0;
                        float _2400 = _8859;
                        precise float _8862 = _2366 + _2360;
                        float _2402 = _8862;
                        float _2404 = -_2400;
                        bool _2406 = _2398 <= _2404;
                        precise float _8869 = _2358 * 3.0;
                        float _2408 = _8869;
                        bool _2410 = _2398 >= 1.0;
                        bool _2412 = _2410 || _2406;
                        bool _2414 = _2402 >= 1.0;
                        bool _2416 = _2414 || _2412;
                        float _2418 = -_2408;
                        bool _2420 = _2402 <= _2418;
                        bool _2422 = _2420 || _2416;
                        float _2424 = _2408;
                        if (_2422)
                        {
                            _2424 = 0.0;
                        }
                        float _2426 = _2424;
                        float _2428 = _2426;
                        if (!_2422)
                        {
                            precise float _8899 = _2398 + _2392;
                            float _2430 = _8899;
                            precise float _8901 = _2402 + (-0.0);
                            float _2432 = _8901;
                            float _2434 = clamp(_2432, 0.0, 1.0);
                            precise float _8906 = _2402 + _2358;
                            float _2436 = _8906;
                            precise float _8908 = _2398 + (-0.0);
                            float _2438 = _8908;
                            float _2440 = clamp(_2438, 0.0, 1.0);
                            float _2442 = min(_2368, 1.0);
                            precise float _8915 = _2430 + _2392;
                            float _2444 = _8915;
                            precise float _8917 = _2430 + (-0.0);
                            float _2446 = _8917;
                            float _2448 = clamp(_2446, 0.0, 1.0);
                            float _2450 = fma(_2434, _2354, _2356);
                            float _2452 = fma(_2440, _2388, _2390);
                            precise float _8929 = _2436 + (-0.0);
                            float _2454 = _8929;
                            float _2456 = clamp(_2454, 0.0, 1.0);
                            float _2458 = texture(fp_t_tcb_8, vec3(vec2(_2452, _2450), _2442));
                            precise float _8939 = _2444 + (-0.0);
                            float _2460 = _8939;
                            float _2462 = clamp(_2460, 0.0, 1.0);
                            precise float _8944 = _2444 + _2392;
                            float _2464 = _8944;
                            float _2466 = clamp(_2464, 0.0, 1.0);
                            float _2468 = fma(_2448, _2388, _2390);
                            float _2470 = fma(_2462, _2388, _2390);
                            float _2472 = fma(_2466, _2388, _2390);
                            float _2474 = fma(_2456, _2354, _2356);
                            float _2476 = texture(fp_t_tcb_8, vec3(vec2(_2468, _2450), _2442));
                            float _2478 = texture(fp_t_tcb_8, vec3(vec2(_2470, _2450), _2442));
                            float _2480 = texture(fp_t_tcb_8, vec3(vec2(_2472, _2450), _2442));
                            float _2482 = texture(fp_t_tcb_8, vec3(vec2(_2468, _2474), _2442));
                            float _2484 = texture(fp_t_tcb_8, vec3(vec2(_2452, _2474), _2442));
                            float _2486 = texture(fp_t_tcb_8, vec3(vec2(_2470, _2474), _2442));
                            precise float _9001 = _2436 + _2358;
                            float _2488 = _9001;
                            precise float _9003 = _2488 + (-0.0);
                            float _2490 = _9003;
                            float _2492 = clamp(_2490, 0.0, 1.0);
                            float _2494 = texture(fp_t_tcb_8, vec3(vec2(_2472, _2474), _2442));
                            float _2496 = fma(_2492, _2354, _2356);
                            float _2498 = texture(fp_t_tcb_8, vec3(vec2(_2468, _2496), _2442));
                            float _2500 = texture(fp_t_tcb_8, vec3(vec2(_2470, _2496), _2442));
                            float _2502 = texture(fp_t_tcb_8, vec3(vec2(_2452, _2496), _2442));
                            precise float _9036 = _2488 + _2358;
                            float _2504 = _9036;
                            precise float _9038 = _2504 + (-0.0);
                            float _2506 = _9038;
                            float _2508 = clamp(_2506, 0.0, 1.0);
                            float _2510 = fma(_2508, _2354, _2356);
                            float _2512 = texture(fp_t_tcb_8, vec3(vec2(_2472, _2496), _2442));
                            float _2514 = texture(fp_t_tcb_8, vec3(vec2(_2452, _2510), _2442));
                            float _2516 = texture(fp_t_tcb_8, vec3(vec2(_2468, _2510), _2442));
                            float _2518 = texture(fp_t_tcb_8, vec3(vec2(_2470, _2510), _2442));
                            float _2520 = texture(fp_t_tcb_8, vec3(vec2(_2472, _2510), _2442));
                            precise float _9077 = _2458 + _2476;
                            float _2522 = _9077;
                            precise float _9080 = _2522 + _2478;
                            float _2524 = _9080;
                            precise float _9083 = _2524 + _2480;
                            float _2526 = _9083;
                            precise float _9086 = _2526 + _2484;
                            float _2528 = _9086;
                            precise float _9089 = _2528 + _2482;
                            float _2530 = _9089;
                            precise float _9092 = _2530 + _2486;
                            float _2532 = _9092;
                            precise float _9095 = _2532 + _2494;
                            float _2534 = _9095;
                            precise float _9098 = _2534 + _2502;
                            float _2536 = _9098;
                            precise float _9101 = _2536 + _2498;
                            float _2538 = _9101;
                            precise float _9104 = _2538 + _2500;
                            float _2540 = _9104;
                            precise float _9107 = _2540 + _2512;
                            float _2542 = _9107;
                            precise float _9110 = _2542 + _2514;
                            float _2544 = _9110;
                            precise float _9113 = _2544 + _2516;
                            float _2546 = _9113;
                            precise float _9116 = _2546 + _2518;
                            float _2548 = _9116;
                            precise float _9119 = _2520 + _2548;
                            float _2550 = _9119;
                            float _2552 = fma(_2550, -0.0625, 1.0);
                            _2428 = _2552;
                        }
                        float _2554 = _2428;
                        _2556 = _2554;
                        _2558 = true;
                    }
                    else
                    {
                        precise float _9129 = _2364 + _2394;
                        float _2560 = _9129;
                        precise float _9131 = _2392 * 3.0;
                        float _2562 = _9131;
                        precise float _9134 = _2366 + _2360;
                        float _2564 = _9134;
                        precise float _9136 = _2358 * 3.0;
                        float _2566 = _9136;
                        float _2568 = -_2562;
                        bool _2570 = _2560 <= _2568;
                        bool _2572 = _2560 >= 1.0;
                        bool _2574 = _2572 || _2570;
                        bool _2576 = _2564 >= 1.0;
                        bool _2578 = _2576 || _2574;
                        float _2580 = -_2566;
                        bool _2582 = _2564 <= _2580;
                        bool _2584 = _2582 || _2578;
                        if (_2584)
                        {
                            _2396 = 0.0;
                        }
                        float _2586 = _2396;
                        float _2588 = _2586;
                        if (!_2584)
                        {
                            precise float _9170 = _2560 + _2392;
                            float _2590 = _9170;
                            precise float _9173 = _2564 + _2358;
                            float _2592 = _9173;
                            precise float _9175 = _2564 + (-0.0);
                            float _2594 = _9175;
                            float _2596 = clamp(_2594, 0.0, 1.0);
                            precise float _9179 = _2560 + (-0.0);
                            float _2598 = _9179;
                            float _2600 = clamp(_2598, 0.0, 1.0);
                            float _2602 = min(_2368, 1.0);
                            precise float _9186 = _2590 + _2392;
                            float _2604 = _9186;
                            precise float _9188 = _2590 + (-0.0);
                            float _2606 = _9188;
                            float _2608 = clamp(_2606, 0.0, 1.0);
                            float _2610 = fma(_2596, _2354, _2356);
                            float _2612 = fma(_2600, _2388, _2390);
                            precise float _9200 = _2592 + (-0.0);
                            float _2614 = _9200;
                            float _2616 = clamp(_2614, 0.0, 1.0);
                            float _2618 = texture(fp_t_tcb_A, vec3(vec2(_2612, _2610), _2602));
                            precise float _9210 = _2604 + (-0.0);
                            float _2620 = _9210;
                            float _2622 = clamp(_2620, 0.0, 1.0);
                            precise float _9215 = _2604 + _2392;
                            float _2624 = _9215;
                            float _2626 = clamp(_2624, 0.0, 1.0);
                            float _2628 = fma(_2608, _2388, _2390);
                            float _2630 = fma(_2622, _2388, _2390);
                            float _2632 = fma(_2626, _2388, _2390);
                            float _2634 = fma(_2616, _2354, _2356);
                            float _2636 = texture(fp_t_tcb_A, vec3(vec2(_2628, _2610), _2602));
                            float _2638 = texture(fp_t_tcb_A, vec3(vec2(_2630, _2610), _2602));
                            float _2640 = texture(fp_t_tcb_A, vec3(vec2(_2632, _2610), _2602));
                            float _2642 = texture(fp_t_tcb_A, vec3(vec2(_2628, _2634), _2602));
                            float _2644 = texture(fp_t_tcb_A, vec3(vec2(_2612, _2634), _2602));
                            float _2646 = texture(fp_t_tcb_A, vec3(vec2(_2630, _2634), _2602));
                            precise float _9272 = _2592 + _2358;
                            float _2648 = _9272;
                            precise float _9274 = _2648 + (-0.0);
                            float _2650 = _9274;
                            float _2652 = clamp(_2650, 0.0, 1.0);
                            float _2654 = texture(fp_t_tcb_A, vec3(vec2(_2632, _2634), _2602));
                            float _2656 = fma(_2652, _2354, _2356);
                            float _2658 = texture(fp_t_tcb_A, vec3(vec2(_2628, _2656), _2602));
                            float _2660 = texture(fp_t_tcb_A, vec3(vec2(_2630, _2656), _2602));
                            float _2662 = texture(fp_t_tcb_A, vec3(vec2(_2612, _2656), _2602));
                            precise float _9307 = _2648 + _2358;
                            float _2664 = _9307;
                            precise float _9309 = _2664 + (-0.0);
                            float _2666 = _9309;
                            float _2668 = clamp(_2666, 0.0, 1.0);
                            float _2670 = fma(_2668, _2354, _2356);
                            float _2672 = texture(fp_t_tcb_A, vec3(vec2(_2632, _2656), _2602));
                            float _2674 = texture(fp_t_tcb_A, vec3(vec2(_2612, _2670), _2602));
                            float _2676 = texture(fp_t_tcb_A, vec3(vec2(_2628, _2670), _2602));
                            float _2678 = texture(fp_t_tcb_A, vec3(vec2(_2630, _2670), _2602));
                            float _2680 = texture(fp_t_tcb_A, vec3(vec2(_2632, _2670), _2602));
                            precise float _9348 = _2618 + _2636;
                            float _2682 = _9348;
                            precise float _9351 = _2682 + _2638;
                            float _2684 = _9351;
                            precise float _9354 = _2684 + _2640;
                            float _2686 = _9354;
                            precise float _9357 = _2686 + _2644;
                            float _2688 = _9357;
                            precise float _9360 = _2688 + _2642;
                            float _2690 = _9360;
                            precise float _9363 = _2690 + _2646;
                            float _2692 = _9363;
                            precise float _9366 = _2692 + _2654;
                            float _2694 = _9366;
                            precise float _9369 = _2694 + _2662;
                            float _2696 = _9369;
                            precise float _9372 = _2696 + _2658;
                            float _2698 = _9372;
                            precise float _9375 = _2698 + _2660;
                            float _2700 = _9375;
                            precise float _9378 = _2700 + _2672;
                            float _2702 = _9378;
                            precise float _9381 = _2702 + _2674;
                            float _2704 = _9381;
                            precise float _9384 = _2704 + _2676;
                            float _2706 = _9384;
                            precise float _9387 = _2706 + _2678;
                            float _2708 = _9387;
                            precise float _9390 = _2680 + _2708;
                            float _2710 = _9390;
                            float _2712 = fma(_2710, -0.0625, 1.0);
                            _2588 = _2712;
                        }
                        float _2714 = _2588;
                        _2556 = _2714;
                    }
                    _2558 = false;
                    float _2716 = _2556;
                    float _2718 = -_2716;
                    float _2720 = fma(_302, _2718, fp_c1_1._m0[0].x);
                    _324 = _2720;
                }
            }
        }
        _500 = false;
        float _2722 = _324;
        float _2724 = -fp_c3_1._m0[56].y;
        precise float _9416 = _2722 + _2724;
        float _2726 = _9416;
        float _2728 = clamp(_2726, 0.0, 1.0);
        _282 = _2728;
    }
    float _2730 = _282;
    float _2732 = -fp_c3_1._m0[0].x;
    precise float _9427 = _184 + _2732;
    float _2734 = _9427;
    float _2736 = gl_FragCoord.z;
    float _2738 = -fp_c3_1._m0[1].x;
    precise float _9435 = _184 + _2738;
    float _2740 = _9435;
    float _2742 = -fp_c3_1._m0[0].y;
    precise float _9441 = _188 + _2742;
    float _2744 = _9441;
    float _2746 = -fp_c3_1._m0[1].y;
    precise float _9447 = _188 + _2746;
    float _2748 = _9447;
    float _2750 = -fp_c3_1._m0[0].z;
    precise float _9453 = _186 + _2750;
    float _2752 = _9453;
    precise float _9456 = _2734 * _2734;
    float _2754 = _9456;
    precise float _9459 = _2740 * _2740;
    float _2756 = _9459;
    float _2758 = -fp_c3_1._m0[1].z;
    precise float _9465 = _186 + _2758;
    float _2760 = _9465;
    float _2762 = -fp_c3_1._m0[0].x;
    precise float _9471 = _266 * _2762;
    float _2764 = _9471;
    float _2766 = -fp_c3_1._m0[2].y;
    precise float _9477 = _188 + _2766;
    float _2768 = _9477;
    float _2770 = -fp_c3_1._m0[1].x;
    precise float _9483 = _266 * _2770;
    float _2772 = _9483;
    float _2774 = fma(_2744, _2744, _2754);
    float _2776 = fma(_2748, _2748, _2756);
    float _2778 = -fp_c3_1._m0[2].z;
    precise float _9497 = _186 + _2778;
    float _2780 = _9497;
    float _2782 = -fp_c3_1._m0[0].y;
    float _2784 = fma(_268, _2782, _2764);
    precise float _9508 = _264 * fp_c3_1._m0[3].z;
    float _2786 = _9508;
    float _2788 = -fp_c3_1._m0[1].y;
    float _2790 = fma(_268, _2788, _2772);
    float _2792 = fma(_2752, _2752, _2774);
    float _2794 = fma(_2760, _2760, _2776);
    float _2796 = inversesqrt(_2792);
    float _2798 = -fp_c3_1._m0[0].z;
    float _2800 = fma(_270, _2798, _2784);
    float _2802 = clamp(_2800, 0.0, 1.0);
    float _2804 = inversesqrt(_2794);
    precise float _9541 = _244 * fp_c3_1._m0[4].y;
    float _2806 = _9541;
    float _2808 = -fp_c3_1._m0[1].z;
    float _2810 = fma(_270, _2808, _2790);
    float _2812 = clamp(_2810, 0.0, 1.0);
    precise float _9554 = _260 * fp_c3_1._m0[3].x;
    float _2814 = _9554;
    precise float _9559 = _252 * fp_c3_1._m0[5].y;
    float _2816 = _9559;
    precise float _9563 = _256 * fp_c3_1._m0[5].z;
    float _2818 = _9563;
    precise float _9567 = _262 * fp_c3_1._m0[3].y;
    float _2820 = _9567;
    precise float _9571 = _242 * fp_c3_1._m0[4].x;
    float _2822 = _9571;
    float _2824 = fma(_2736, fp_c3_1._m0[31].x, fp_c3_1._m0[31].y);
    float _2826 = -fp_c3_1._m0[2].x;
    precise float _9584 = _184 + _2826;
    float _2828 = _9584;
    precise float _9588 = _246 * fp_c3_1._m0[4].z;
    float _2830 = _9588;
    precise float _9591 = _2744 * _2796;
    float _2832 = _9591;
    precise float _9594 = _2752 * _2796;
    float _2834 = _9594;
    precise float _9597 = _2740 * _2804;
    float _2836 = _9597;
    precise float _9600 = _2760 * _2804;
    float _2838 = _9600;
    precise float _9603 = _2828 * _2828;
    float _2840 = _9603;
    precise float _9606 = _2812 * _2822;
    float _2842 = _9606;
    precise float _9609 = _2812 * _2830;
    float _2844 = _9609;
    precise float _9612 = _2802 * _2814;
    float _2846 = _9612;
    precise float _9615 = _2802 * _2820;
    float _2848 = _9615;
    precise float _9618 = _2802 * _2786;
    float _2850 = _9618;
    float _2852 = fma(_2768, _2768, _2840);
    float _2854 = fma(_2780, _2780, _2852);
    precise float _9629 = _2734 * _2796;
    float _2856 = _9629;
    float _2858 = inversesqrt(_2854);
    precise float _9634 = _2812 * _2806;
    float _2860 = _9634;
    precise float _9637 = _2748 * _2804;
    float _2862 = _9637;
    precise float _9640 = _184 * _2836;
    float _2864 = _9640;
    precise float _9643 = _266 * _2836;
    float _2866 = _9643;
    precise float _9646 = _184 * _2856;
    float _2868 = _9646;
    float _2870 = fma(_2848, _2730, _2860);
    float _2872 = fma(_268, _2862, _2866);
    float _2874 = fma(_188, _2832, _2868);
    precise float _9661 = _2768 * _2858;
    float _2876 = _9661;
    float _2878 = fma(_188, _2862, _2864);
    precise float _9668 = _2828 * _2858;
    float _2880 = _9668;
    precise float _9671 = _266 * _2856;
    float _2882 = _9671;
    precise float _9674 = _2780 * _2858;
    float _2884 = _9674;
    float _2886 = fma(_186, _2834, _2874);
    float _2888 = clamp(_2886, 0.0, 1.0);
    float _2890 = -fp_c3_1._m0[2].x;
    precise float _9686 = _266 * _2890;
    float _2892 = _9686;
    float _2894 = fma(_186, _2838, _2878);
    float _2896 = clamp(_2894, 0.0, 1.0);
    precise float _9695 = _184 * _2880;
    float _2898 = _9695;
    float _2900 = fma(_268, _2832, _2882);
    float _2902 = fma(_270, _2838, _2872);
    float _2904 = clamp(_2902, 0.0, 1.0);
    float _2906 = -_2888;
    precise float _9709 = _2906 + 1.0;
    float _2908 = _9709;
    float _2910 = log2(_2904);
    float _2912 = -_2896;
    precise float _9715 = _2912 + 1.0;
    float _2914 = _9715;
    float _2916 = abs(_2908);
    float _2918 = log2(_2916);
    float _2920 = fma(_188, _2876, _2898);
    float _2922 = abs(_2914);
    float _2924 = log2(_2922);
    float _2926 = fma(_270, _2834, _2900);
    float _2928 = clamp(_2926, 0.0, 1.0);
    precise float _9736 = _266 * _2880;
    float _2930 = _9736;
    float _2932 = log2(_2928);
    float _2934 = -fp_c3_1._m0[2].y;
    float _2936 = fma(_268, _2934, _2892);
    precise float _9749 = _248 * fp_c3_1._m0[5].x;
    float _2938 = _9749;
    float _2940 = fma(_186, _2884, _2920);
    float _2942 = clamp(_2940, 0.0, 1.0);
    float _2944 = fma(_268, _2876, _2930);
    float _2946 = log2(_2824);
    float _2948 = -fp_c3_1._m0[2].z;
    float _2950 = fma(_270, _2948, _2936);
    float _2952 = clamp(_2950, 0.0, 1.0);
    precise float _9773 = _2918 * 5.0;
    float _2954 = _9773;
    float _2956 = -_2942;
    precise float _9777 = _2956 + 1.0;
    float _2958 = _9777;
    precise float _9779 = _2924 * 5.0;
    float _2960 = _9779;
    float _2962 = abs(_2958);
    float _2964 = log2(_2962);
    precise float _9786 = _226 * _2910;
    float _2966 = _9786;
    precise float _9789 = _2952 * _2938;
    float _2968 = _9789;
    precise float _9792 = _2952 * _2816;
    float _2970 = _9792;
    precise float _9795 = _2952 * _2818;
    float _2972 = _9795;
    float _2974 = exp2(_2954);
    precise float _9800 = _226 * _2932;
    float _2976 = _9800;
    float _2978 = exp2(_2960);
    float _2980 = fma(_270, _2884, _2944);
    float _2982 = clamp(_2980, 0.0, 1.0);
    float _2984 = log2(_2982);
    float _2986 = fma(_2946, fp_c3_1._m0[31].z, fp_c3_1._m0[31].w);
    float _2988 = exp2(_2966);
    precise float _9820 = _2964 * 5.0;
    float _2990 = _9820;
    float _2992 = exp2(_2976);
    precise float _9825 = _2970 + _2870;
    float _2994 = _9825;
    float _2996 = fma(_162, _2974, fp_c3_1._m0[50].x);
    float _2998 = fma(_152, _2974, fp_c3_1._m0[50].y);
    float _3000 = fma(_158, _2974, fp_c3_1._m0[50].z);
    float _3002 = fma(_162, _2978, fp_c3_1._m0[50].x);
    float _3004 = fma(_152, _2978, fp_c3_1._m0[50].y);
    precise float _9853 = _258 * _2996;
    float _3006 = _9853;
    float _3008 = fma(_158, _2978, fp_c3_1._m0[50].z);
    float _3010 = exp2(_2990);
    precise float _9863 = _258 * _2998;
    float _3012 = _9863;
    precise float _9866 = _258 * _3000;
    float _3014 = _9866;
    precise float _9869 = _226 * _2984;
    float _3016 = _9869;
    precise float _9872 = _258 * _3004;
    float _3018 = _9872;
    precise float _9875 = _2992 * _3006;
    float _3020 = _9875;
    precise float _9878 = _258 * _3002;
    float _3022 = _9878;
    float _3024 = max(0.0, _2986);
    precise float _9883 = _258 * _3008;
    float _3026 = _9883;
    float _3028 = trunc(_3024);
    float _3030 = max(_3028, 0.0);
    uint _3033 = uint(_3030);
    precise float _9892 = _2992 * _3012;
    float _3035 = _9892;
    precise float _9895 = _2992 * _3014;
    float _3037 = _9895;
    precise float _9898 = _3020 * _2846;
    float _3039 = _9898;
    precise float _9901 = _3018 * _2988;
    float _3041 = _9901;
    float _3043 = exp2(_3016);
    precise float _9906 = _3022 * _2988;
    float _3045 = _9906;
    precise float _9909 = _3026 * _2988;
    float _3047 = _9909;
    float _3049 = fma(_162, _3010, fp_c3_1._m0[50].x);
    float _3051 = fma(_152, _3010, fp_c3_1._m0[50].y);
    float _3053 = fma(_158, _3010, fp_c3_1._m0[50].z);
    float _3055 = fma(_2846, _2730, _2842);
    precise float _9931 = _3035 * _2848;
    float _3057 = _9931;
    precise float _9934 = _3045 * _2842;
    float _3059 = _9934;
    precise float _9937 = _3037 * _2850;
    float _3061 = _9937;
    precise float _9940 = _258 * _3049;
    float _3063 = _9940;
    precise float _9943 = _258 * _3051;
    float _3065 = _9943;
    float _3067 = fma(_2850, _2730, _2844);
    precise float _9950 = _3041 * _2860;
    float _3069 = _9950;
    bool _3071 = _3033 < 0u;
    precise float _9956 = _258 * _3053;
    float _3073 = _9956;
    precise float _9959 = _3047 * _2844;
    float _3075 = _9959;
    float _3077 = fma(_3039, _2730, _3059);
    precise float _9966 = _3043 * _3063;
    float _3079 = _9966;
    precise float _9969 = _3043 * _3065;
    float _3081 = _9969;
    float _3083 = fma(_3057, _2730, _3069);
    precise float _9976 = _3043 * _3073;
    float _3085 = _9976;
    float _3087 = fma(_3061, _2730, _3075);
    precise float _9983 = _2968 + _3055;
    float _3089 = _9983;
    precise float _9986 = _2972 + _3067;
    float _3091 = _9986;
    float _3093 = fma(_3079, _2968, _3077);
    float _3095 = fma(_3081, _2970, _3083);
    float _3097 = fma(_3085, _2972, _3087);
    float _3099 = _3089;
    float _3101 = _3093;
    float _3103 = _2994;
    float _3105 = _3095;
    float _3107 = _3091;
    float _3109 = _3097;
    float _3111 = _3089;
    float _3113 = _2994;
    float _3115 = _3091;
    float _3117 = _3093;
    float _3119 = _3095;
    float _3121 = _3097;
    float _3123 = _3091;
    float _3125 = _3089;
    float _3127 = _2994;
    float _3129 = _3093;
    float _3131 = _3095;
    float _3133 = _3097;
    if (_3071)
    {
        int _3136 = int(_3033) & 65535;
        uint _3138 = uint(int(uint(floatBitsToInt(fp_c3_1._m0[30].x)) >> uint(16)));
        int _3140 = _3136 * int(_3138);
        int _3142 = _3140 & 65535;
        int _3144 = floatBitsToInt(fp_c3_1._m0[30].x) << 16;
        int _3146 = _3142 | _3144;
        float _3148 = gl_FragCoord.y;
        float _3150 = support_buffer_1._m5[0];
        precise float _10048 = _3148 / _3150;
        float _3152 = _10048;
        float _3154 = gl_FragCoord.x;
        float _3156 = support_buffer_1._m5[0];
        precise float _10055 = _3154 / _3156;
        float _3158 = _10055;
        precise float _10058 = _3152 * 0.015625;
        float _3160 = _10058;
        precise float _10060 = _3158 * 0.015625;
        float _3162 = _10060;
        float _3164 = trunc(_3160);
        float _3166 = max(_3164, 0.0);
        uint _3168 = uint(_3166);
        float _3170 = trunc(_3162);
        float _3172 = max(_3170, 0.0);
        uint _3174 = uint(_3172);
        int _3176 = int(_3168) & 65535;
        int _3178 = floatBitsToInt(fp_c3_1._m0[29].x) & 65535;
        int _3180 = _3176 * _3178;
        int _3182 = int(_3168) & 65535;
        uint _3184 = uint(int(uint(floatBitsToInt(fp_c3_1._m0[29].x)) >> uint(16)));
        int _3186 = _3182 * int(_3184);
        int _3188 = _3186 & 65535;
        int _3190 = floatBitsToInt(fp_c3_1._m0[29].x) << 16;
        int _3192 = _3188 | _3190;
        uint _3194 = uint(int(uint(int(_3168)) >> uint(16)));
        uint _3196 = uint(int(uint(_3192) >> uint(16)));
        int _3198 = int(_3194) * int(_3196);
        int _3200 = _3198 << 16;
        int _3202 = _3192 << 16;
        int _3204 = _3180 + _3202;
        int _3206 = _3200 + _3204;
        int _3208 = int(_3033) & 65535;
        int _3210 = floatBitsToInt(fp_c3_1._m0[30].x) & 65535;
        int _3212 = _3208 * _3210;
        int _3214 = _3212 + _3206;
        uint _3216 = uint(int(uint(int(_3033)) >> uint(16)));
        uint _3218 = uint(int(uint(_3146) >> uint(16)));
        int _3220 = int(_3216) * int(_3218);
        int _3222 = _3220 << 16;
        int _3224 = _3146 << 16;
        int _3226 = _3214 + _3224;
        int _3228 = _3222 + _3226;
        int _3230 = _3228 + int(_3174);
        int _3232 = _3230 * 511;
        float _3234 = texelFetch(fp_t_tcb_28, _3232).x;
        precise float _10175 = 1.0 / _2824;
        float _3236 = _10175;
        int _3238 = _3232 + 1;
        float _3240 = -fp_c3_1._m0[32].y;
        precise float _10185 = _3240 + fp_c3_1._m0[32].x;
        float _3242 = _10185;
        precise float _10187 = 1.0 / _3242;
        float _3244 = _10187;
        float _3246 = -_3236;
        float _3248 = -fp_c3_1._m0[32].y;
        precise float _10195 = _3246 + _3248;
        float _3250 = _10195;
        precise float _10198 = _3250 * _3244;
        float _3252 = _10198;
        float _3254 = clamp(_3252, 0.0, 1.0);
        float _3256 = fma(_3254, -2.0, 3.0);
        precise float _10206 = _3254 * _3254;
        float _3258 = _10206;
        precise float _10209 = _3256 * _3258;
        float _3260 = _10209;
        uint _3262 = uint(int(uint(floatBitsToInt(_3234)) >> uint(16)));
        int _3264 = floatBitsToInt(_3234) & 65535;
        bool _3266 = _3262 <= 0u;
        if (!_3266)
        {
            int _3268 = 0;
            bool _3270;
            do
            {
                int _3272 = _3268;
                float _3274 = _3099;
                float _3276 = _3101;
                float _3278 = _3103;
                float _3280 = _3105;
                float _3282 = _3107;
                float _3284 = _3109;
                int _3286 = _3238 + _3272;
                float _3288 = texelFetch(fp_t_tcb_28, _3286).x;
                vec4 _3291 = texelFetch(fp_t_tcb_2A, floatBitsToInt(_3288)).xyzw;
                float _3293 = _3291.x;
                float _3295 = _3291.y;
                float _3297 = _3291.z;
                float _3299 = _3291.w;
                int _3301 = _3272 + 1;
                _3270 = uint(_3301) >= _3262;
                float _3303 = -_86;
                precise float _10263 = _3303 + _3293;
                float _3305 = _10263;
                float _3307 = -_84;
                precise float _10268 = _3307 + _3295;
                float _3309 = _10268;
                float _3311 = -_88;
                precise float _10273 = _3311 + _3297;
                float _3313 = _10273;
                precise float _10276 = _3299 * _3299;
                float _3315 = _10276;
                precise float _10279 = _3305 * _3305;
                float _3317 = _10279;
                float _3319 = fma(_3309, _3309, _3317);
                float _3321 = fma(_3313, _3313, _3319);
                bool _3323 = _3321 < _3315;
                _3268 = _3301;
                float _3325 = _3274;
                float _3327 = _3276;
                float _3329 = _3278;
                float _3331 = _3280;
                float _3333 = _3282;
                float _3335 = _3284;
                if (_3323)
                {
                    int _3337 = floatBitsToInt(_3288) << 1;
                    int _3339 = _3337 + 1;
                    vec2 _3341 = texelFetch(fp_t_tcb_2C, _3339).xy;
                    float _3343 = _3341.x;
                    float _3345 = _3341.y;
                    vec3 _3347 = texelFetch(fp_t_tcb_2C, _3337).xyz;
                    float _3349 = _3347.x;
                    float _3351 = _3347.y;
                    float _3353 = _3347.z;
                    float _3355 = inversesqrt(_3321);
                    float _3357 = -_3355;
                    precise float _10331 = _3305 * _3357;
                    float _3359 = _10331;
                    float _3361 = -_3355;
                    precise float _10336 = _3309 * _3361;
                    float _3363 = _10336;
                    float _3365 = -_3355;
                    precise float _10341 = _3313 * _3365;
                    float _3367 = _10341;
                    float _3369 = -_3359;
                    precise float _10346 = _184 + _3369;
                    float _3371 = _10346;
                    float _3373 = -_3363;
                    precise float _10351 = _188 + _3373;
                    float _3375 = _10351;
                    float _3377 = -_3367;
                    precise float _10356 = _186 + _3377;
                    float _3379 = _10356;
                    float _3381 = -_3359;
                    precise float _10361 = _266 * _3381;
                    float _3383 = _10361;
                    precise float _10364 = _3371 * _3371;
                    float _3385 = _10364;
                    float _3387 = -_3363;
                    float _3389 = fma(_268, _3387, _3383);
                    float _3391 = fma(_3375, _3375, _3385);
                    float _3393 = -_3367;
                    float _3395 = fma(_270, _3393, _3389);
                    float _3397 = clamp(_3395, 0.0, 1.0);
                    float _3399 = fma(_3379, _3379, _3391);
                    float _3401 = inversesqrt(_3399);
                    precise float _10391 = _3371 * _3401;
                    float _3403 = _10391;
                    precise float _10394 = _3375 * _3401;
                    float _3405 = _10394;
                    precise float _10397 = _3379 * _3401;
                    float _3407 = _10397;
                    precise float _10400 = _184 * _3403;
                    float _3409 = _10400;
                    precise float _10403 = _266 * _3403;
                    float _3411 = _10403;
                    float _3413 = fma(_188, _3405, _3409);
                    float _3415 = fma(_268, _3405, _3411);
                    float _3417 = fma(_186, _3407, _3413);
                    float _3419 = clamp(_3417, 0.0, 1.0);
                    float _3421 = fma(_270, _3407, _3415);
                    float _3423 = clamp(_3421, 0.0, 1.0);
                    float _3425 = log2(_3423);
                    float _3427 = -_3419;
                    precise float _10429 = _3427 + 1.0;
                    float _3429 = _10429;
                    float _3431 = abs(_3429);
                    float _3433 = log2(_3431);
                    float _3435 = -_3343;
                    precise float _10438 = _3321 * _3435;
                    float _3437 = _10438;
                    precise float _10440 = _3433 * 5.0;
                    float _3439 = _10440;
                    precise float _10443 = _3260 * _3349;
                    float _3441 = _10443;
                    precise float _10446 = _3437 * 1.44269502162933349609375;
                    float _3443 = _10446;
                    precise float _10449 = _226 * _3425;
                    float _3445 = _10449;
                    float _3447 = exp2(_3439);
                    precise float _10454 = _3260 * _3351;
                    float _3449 = _10454;
                    float _3451 = exp2(_3443);
                    float _3453 = fma(_152, _3447, fp_c3_1._m0[50].y);
                    precise float _10464 = _3260 * _3353;
                    float _3455 = _10464;
                    precise float _10467 = _3345 * _3451;
                    float _3457 = _10467;
                    float _3459 = fma(_162, _3447, fp_c3_1._m0[50].x);
                    float _3461 = exp2(_3445);
                    float _3463 = fma(_158, _3447, fp_c3_1._m0[50].z);
                    precise float _10482 = _258 * _3453;
                    float _3465 = _10482;
                    float _3467 = min(_3457, 1.0);
                    precise float _10487 = _258 * _3459;
                    float _3469 = _10487;
                    precise float _10490 = _258 * _3463;
                    float _3471 = _10490;
                    precise float _10493 = _3441 * _3467;
                    float _3473 = _10493;
                    precise float _10496 = _3449 * _3467;
                    float _3475 = _10496;
                    precise float _10499 = _3455 * _3467;
                    float _3477 = _10499;
                    precise float _10502 = _3461 * _3469;
                    float _3479 = _10502;
                    precise float _10505 = _3461 * _3465;
                    float _3481 = _10505;
                    precise float _10508 = _3461 * _3471;
                    float _3483 = _10508;
                    precise float _10511 = _3397 * _3473;
                    float _3485 = _10511;
                    precise float _10514 = _3397 * _3475;
                    float _3487 = _10514;
                    precise float _10517 = _3397 * _3477;
                    float _3489 = _10517;
                    precise float _10520 = _3485 + _3274;
                    float _3491 = _10520;
                    float _3493 = fma(_3479, _3485, _3276);
                    precise float _10527 = _3487 + _3278;
                    float _3495 = _10527;
                    float _3497 = fma(_3481, _3487, _3280);
                    precise float _10534 = _3489 + _3282;
                    float _3499 = _10534;
                    float _3501 = fma(_3483, _3489, _3284);
                    _3325 = _3491;
                    _3327 = _3493;
                    _3329 = _3495;
                    _3331 = _3497;
                    _3333 = _3499;
                    _3335 = _3501;
                }
                float _3503 = _3325;
                float _3505 = _3327;
                float _3507 = _3329;
                float _3509 = _3331;
                float _3511 = _3333;
                float _3513 = _3335;
                _3099 = _3503;
                _3101 = _3505;
                _3103 = _3507;
                _3105 = _3509;
                _3107 = _3511;
                _3109 = _3513;
                _3111 = _3503;
                _3113 = _3507;
                _3115 = _3511;
                _3117 = _3505;
                _3119 = _3509;
                _3121 = _3513;
            } while (!_3270);
        }
        float _3515 = _3111;
        float _3517 = _3113;
        float _3519 = _3115;
        float _3521 = _3117;
        float _3523 = _3119;
        float _3525 = _3121;
        bool _3527 = uint(_3264) <= 0u;
        int _3529 = int(_3262) + _3238;
        float _3531 = _3515;
        float _3533 = _3517;
        float _3535 = _3519;
        float _3537 = _3521;
        float _3539 = _3523;
        float _3541 = _3525;
        _3123 = _3519;
        _3125 = _3515;
        _3127 = _3517;
        _3129 = _3521;
        _3131 = _3523;
        _3133 = _3525;
        if (!_3527)
        {
            int _3543 = 0;
            bool _3545;
            do
            {
                int _3547 = _3543;
                float _3549 = _3531;
                float _3551 = _3533;
                float _3553 = _3535;
                float _3555 = _3537;
                float _3557 = _3539;
                float _3559 = _3541;
                int _3561 = _3529 + _3547;
                float _3563 = texelFetch(fp_t_tcb_28, _3561).x;
                int _3565 = floatBitsToInt(_3563) * 5;
                int _3567 = floatBitsToInt(_3563) * 5;
                int _3569 = _3567 + 2;
                vec3 _3571 = texelFetch(fp_t_tcb_30, _3565).xyz;
                float _3573 = _3571.x;
                float _3575 = _3571.y;
                float _3577 = _3571.z;
                int _3579 = _3569 + 2;
                vec3 _3581 = texelFetch(fp_t_tcb_30, _3579).xyz;
                float _3583 = _3581.x;
                float _3585 = _3581.y;
                float _3587 = _3581.z;
                int _3589 = _3547 + 1;
                _3545 = uint(_3589) >= uint(_3264);
                float _3591 = -_86;
                precise float _10657 = _3591 + _3573;
                float _3593 = _10657;
                float _3595 = -_84;
                precise float _10662 = _3595 + _3575;
                float _3597 = _10662;
                float _3599 = -_88;
                precise float _10667 = _3599 + _3577;
                float _3601 = _10667;
                precise float _10670 = _3593 * _3593;
                float _3603 = _10670;
                float _3605 = fma(_3597, _3597, _3603);
                float _3607 = fma(_3601, _3601, _3605);
                bool _3609 = _3607 < _3583;
                _3543 = _3589;
                float _3611 = _3549;
                float _3613 = _3551;
                float _3615 = _3553;
                float _3617 = _3555;
                float _3619 = _3557;
                float _3621 = _3559;
                if (_3609)
                {
                    int _3623 = _3569 + 1;
                    int _3625 = _3569 + (-1);
                    vec2 _3627 = texelFetch(fp_t_tcb_30, _3623).xy;
                    float _3629 = _3627.x;
                    float _3631 = _3627.y;
                    vec3 _3633 = texelFetch(fp_t_tcb_30, _3625).xyz;
                    float _3635 = _3633.x;
                    float _3637 = _3633.y;
                    float _3639 = _3633.z;
                    vec3 _3641 = texelFetch(fp_t_tcb_30, _3569).xyz;
                    float _3643 = _3641.x;
                    float _3645 = _3641.y;
                    float _3647 = _3641.z;
                    float _3649 = inversesqrt(_3607);
                    float _3651 = -_3649;
                    precise float _10733 = _3593 * _3651;
                    float _3653 = _10733;
                    float _3655 = -_3649;
                    precise float _10738 = _3597 * _3655;
                    float _3657 = _10738;
                    float _3659 = -_3649;
                    precise float _10743 = _3601 * _3659;
                    float _3661 = _10743;
                    float _3663 = -_3653;
                    precise float _10748 = _184 + _3663;
                    float _3665 = _10748;
                    float _3667 = -_3657;
                    precise float _10753 = _188 + _3667;
                    float _3669 = _10753;
                    float _3671 = -_3661;
                    precise float _10758 = _186 + _3671;
                    float _3673 = _10758;
                    float _3675 = -_3653;
                    precise float _10763 = _266 * _3675;
                    float _3677 = _10763;
                    precise float _10766 = _3665 * _3665;
                    float _3679 = _10766;
                    float _3681 = -_3657;
                    float _3683 = fma(_268, _3681, _3677);
                    float _3685 = fma(_3669, _3669, _3679);
                    float _3687 = fma(_3673, _3673, _3685);
                    float _3689 = inversesqrt(_3687);
                    precise float _10785 = _3665 * _3689;
                    float _3691 = _10785;
                    precise float _10788 = _3669 * _3689;
                    float _3693 = _10788;
                    precise float _10791 = _3673 * _3689;
                    float _3695 = _10791;
                    precise float _10794 = _184 * _3691;
                    float _3697 = _10794;
                    precise float _10797 = _266 * _3691;
                    float _3699 = _10797;
                    float _3701 = fma(_188, _3693, _3697);
                    float _3703 = fma(_268, _3693, _3699);
                    float _3705 = fma(_186, _3695, _3701);
                    float _3707 = clamp(_3705, 0.0, 1.0);
                    float _3709 = fma(_270, _3695, _3703);
                    float _3711 = clamp(_3709, 0.0, 1.0);
                    float _3713 = log2(_3711);
                    float _3715 = -_3707;
                    precise float _10823 = _3715 + 1.0;
                    float _3717 = _10823;
                    float _3719 = abs(_3717);
                    float _3721 = log2(_3719);
                    float _3723 = -_3629;
                    precise float _10832 = _3607 * _3723;
                    float _3725 = _10832;
                    float _3727 = -_3653;
                    precise float _10837 = _3635 * _3727;
                    float _3729 = _10837;
                    precise float _10840 = _3260 * _3643;
                    float _3731 = _10840;
                    precise float _10842 = _3725 * 1.44269502162933349609375;
                    float _3733 = _10842;
                    float _3735 = -_3657;
                    float _3737 = fma(_3637, _3735, _3729);
                    precise float _10851 = _3260 * _3647;
                    float _3739 = _10851;
                    precise float _10853 = _3721 * 5.0;
                    float _3741 = _10853;
                    float _3743 = exp2(_3733);
                    float _3745 = -_3661;
                    float _3747 = fma(_3639, _3745, _3737);
                    precise float _10864 = _226 * _3713;
                    float _3749 = _10864;
                    float _3751 = fma(_3587, _3747, _3585);
                    float _3753 = clamp(_3751, 0.0, 1.0);
                    float _3755 = exp2(_3741);
                    precise float _10875 = _3260 * _3645;
                    float _3757 = _10875;
                    float _3759 = exp2(_3749);
                    float _3761 = -_3661;
                    float _3763 = fma(_270, _3761, _3683);
                    float _3765 = clamp(_3763, 0.0, 1.0);
                    precise float _10888 = _3631 * _3743;
                    float _3767 = _10888;
                    float _3769 = min(_3767, 1.0);
                    float _3771 = fma(_158, _3755, fp_c3_1._m0[50].z);
                    precise float _10898 = _3769 * _3753;
                    float _3773 = _10898;
                    float _3775 = fma(_162, _3755, fp_c3_1._m0[50].x);
                    float _3777 = fma(_152, _3755, fp_c3_1._m0[50].y);
                    precise float _10911 = _3731 * _3773;
                    float _3779 = _10911;
                    precise float _10914 = _3757 * _3773;
                    float _3781 = _10914;
                    precise float _10917 = _3739 * _3773;
                    float _3783 = _10917;
                    precise float _10920 = _258 * _3775;
                    float _3785 = _10920;
                    precise float _10923 = _258 * _3777;
                    float _3787 = _10923;
                    precise float _10926 = _258 * _3771;
                    float _3789 = _10926;
                    precise float _10929 = _3765 * _3779;
                    float _3791 = _10929;
                    precise float _10932 = _3765 * _3781;
                    float _3793 = _10932;
                    precise float _10935 = _3765 * _3783;
                    float _3795 = _10935;
                    precise float _10938 = _3759 * _3785;
                    float _3797 = _10938;
                    precise float _10941 = _3759 * _3787;
                    float _3799 = _10941;
                    precise float _10944 = _3759 * _3789;
                    float _3801 = _10944;
                    precise float _10947 = _3791 + _3549;
                    float _3803 = _10947;
                    precise float _10950 = _3793 + _3551;
                    float _3805 = _10950;
                    precise float _10953 = _3795 + _3553;
                    float _3807 = _10953;
                    float _3809 = fma(_3797, _3791, _3555);
                    float _3811 = fma(_3799, _3793, _3557);
                    float _3813 = fma(_3801, _3795, _3559);
                    _3611 = _3803;
                    _3613 = _3805;
                    _3615 = _3807;
                    _3617 = _3809;
                    _3619 = _3811;
                    _3621 = _3813;
                }
                float _3815 = _3611;
                float _3817 = _3613;
                float _3819 = _3615;
                float _3821 = _3617;
                float _3823 = _3619;
                float _3825 = _3621;
                _3531 = _3815;
                _3533 = _3817;
                _3535 = _3819;
                _3537 = _3821;
                _3539 = _3823;
                _3541 = _3825;
                _3123 = _3819;
                _3125 = _3815;
                _3127 = _3817;
                _3129 = _3821;
                _3131 = _3823;
                _3133 = _3825;
            } while (!_3545);
        }
    }
    float _3827 = _3123;
    float _3829 = _3125;
    float _3831 = _3127;
    float _3833 = _3129;
    float _3835 = _3131;
    float _3837 = _3133;
    precise float _11007 = _266 * fp_c3_1._m0[33].y;
    float _3839 = _11007;
    precise float _11011 = _268 * fp_c3_1._m0[33].y;
    float _3841 = _11011;
    precise float _11015 = _270 * fp_c3_1._m0[33].y;
    float _3843 = _11015;
    bool _3845 = 0.0 == fp_c3_1._m0[34].x;
    precise float _11022 = _3839 * _3839;
    float _3847 = _11022;
    float _3849 = fma(_3841, _3841, _3847);
    float _3851 = fma(_3843, _3843, _3849);
    float _3853 = inversesqrt(_3851);
    precise float _11035 = _3841 * _3853;
    float _3855 = _11035;
    precise float _11038 = _3843 * _3853;
    float _3857 = _11038;
    precise float _11041 = _3839 * _3853;
    float _3859 = _11041;
    precise float _11044 = _3855 * (-1.02332746982574462890625);
    float _3861 = _11044;
    precise float _11047 = _3857 * 1.02332746982574462890625;
    float _3863 = _11047;
    precise float _11049 = _3859 * (-1.02332746982574462890625);
    float _3865 = _11049;
    float _3867 = 0.0;
    float _3869 = 0.0;
    float _3871 = 0.0;
    float _3907;
    if (_3845)
    {
        float _3873 = _67[5].y;
        float _3875 = _67[5].z;
        float _3877 = _67[5].x;
        precise float _11060 = _3873 + (-0.5);
        float _3879 = _11060;
        precise float _11062 = _3875 + (-0.5);
        float _3881 = _11062;
        precise float _11064 = _3877 + (-0.5);
        float _3883 = _11064;
        float _3885 = abs(_3879);
        float _3887 = abs(_3881);
        float _3889 = max(_3885, _3887);
        float _3891 = abs(_3883);
        float _3893 = max(_3891, _3889);
        bool _3895 = _3893 <= 0.5;
        bool _3897 = isnan(_3893);
        bool _3899 = _3895 || _3897;
        bool _3901 = isnan(0.5);
        bool _3903 = _3899 || _3901;
        float _3905 = float(_3903);
        _3907 = _3905;
        _3909 = true;
    }
    else
    {
        float _3911 = _67[5].y;
        float _3913 = _67[5].z;
        float _3915 = _67[5].x;
        float _3917 = -_3911;
        precise float _11102 = _3917 + 1.0;
        float _3919 = _11102;
        float _3921 = min(_3911, fp_c3_1._m0[34].x);
        float _3923 = -_3913;
        precise float _11110 = _3923 + 1.0;
        float _3925 = _11110;
        float _3927 = -_3915;
        precise float _11114 = _3927 + 1.0;
        float _3929 = _11114;
        float _3931 = min(_3919, fp_c3_1._m0[34].x);
        float _3933 = min(_3929, fp_c3_1._m0[34].x);
        float _3935 = min(_3931, _3921);
        float _3937 = min(_3913, fp_c3_1._m0[34].x);
        float _3939 = min(_3925, fp_c3_1._m0[34].x);
        float _3941 = min(_3915, fp_c3_1._m0[34].x);
        float _3943 = min(_3937, _3939);
        float _3945 = min(_3933, _3941);
        precise float _11146 = 1.0 / fp_c3_1._m0[34].x;
        float _3947 = _11146;
        float _3949 = min(_3935, _3943);
        float _3951 = min(_3949, _3945);
        precise float _11155 = _3951 * _3947;
        float _3953 = _11155;
        float _3955 = clamp(_3953, 0.0, 1.0);
        _3907 = _3955;
    }
    _3909 = false;
    float _3957 = _3907;
    bool _3959 = _3957 != 0.0;
    bool _3961 = isnan(_3957);
    bool _3963 = _3959 || _3961;
    bool _3965 = isnan(0.0);
    bool _3967 = _3963 || _3965;
    if (_3967)
    {
        float _3969 = _67[4].z;
        float _3971 = float(floatBitsToInt(fp_c3_1._m0[32].w));
        float _3973 = _67[4].y;
        float _3975 = _67[4].x;
        float _3977 = _67[4].x;
        float _3979 = _67[4].x;
        float _3981 = _67[4].x;
        float _3983 = _67[4].x;
        precise float _11194 = _3971 * _3969;
        float _3985 = _11194;
        float _3987 = floor(_3985);
        int _3989 = int(_3987);
        int _3991 = floatBitsToInt(fp_c3_1._m0[32].w) + (-1);
        int _3993 = _3989 + 1;
        float _3995 = float(_3989);
        int _3997 = min(_3991, _3993);
        float _3999 = _67[4].x;
        precise float _11214 = _3971 + _3995;
        float _4001 = _11214;
        float _4003 = float(_3997);
        precise float _11219 = _3971 + _4001;
        float _4005 = _11219;
        float _4007 = roundEven(_3995);
        float _4009 = max(_4007, 0.0);
        uint _4011 = uint(_4009);
        uint _4013 = clamp(_4011, 0u, 65535u);
        precise float _11231 = _3971 + _4003;
        float _4015 = _11231;
        float _4017 = roundEven(_4005);
        float _4019 = max(_4017, 0.0);
        uint _4021 = uint(_4019);
        uint _4023 = clamp(_4021, 0u, 65535u);
        precise float _11242 = _3971 + _4015;
        float _4025 = _11242;
        float _4027 = roundEven(_4015);
        float _4029 = max(_4027, 0.0);
        uint _4031 = uint(_4029);
        uint _4033 = clamp(_4031, 0u, 65535u);
        float _4035 = -_3995;
        precise float _11255 = _3985 + _4035;
        float _4037 = _11255;
        float _4039 = roundEven(_4003);
        float _4041 = max(_4039, 0.0);
        uint _4043 = uint(_4041);
        uint _4045 = clamp(_4043, 0u, 65535u);
        float _4047 = roundEven(_4025);
        float _4049 = max(_4047, 0.0);
        uint _4051 = uint(_4049);
        uint _4053 = clamp(_4051, 0u, 65535u);
        float _4055 = roundEven(_4001);
        float _4057 = max(_4055, 0.0);
        uint _4059 = uint(_4057);
        uint _4061 = clamp(_4059, 0u, 65535u);
        vec4 _4063 = texture(fp_t_tcb_E, vec3(_3999, _3973, float(int(_4053)))).xyzw;
        float _4065 = _4063.x;
        float _4067 = _4063.y;
        float _4069 = _4063.z;
        float _4071 = _4063.w;
        vec4 _4073 = texture(fp_t_tcb_E, vec3(_3975, _3973, float(int(_4033)))).xyzw;
        float _4075 = _4073.x;
        float _4077 = _4073.y;
        float _4079 = _4073.z;
        float _4081 = _4073.w;
        vec4 _4083 = texture(fp_t_tcb_E, vec3(_3977, _3973, float(int(_4023)))).xyzw;
        float _4085 = _4083.x;
        float _4087 = _4083.y;
        float _4089 = _4083.z;
        float _4091 = _4083.w;
        vec4 _4093 = texture(fp_t_tcb_E, vec3(_3979, _3973, float(int(_4045)))).xyzw;
        float _4095 = _4093.x;
        float _4097 = _4093.y;
        float _4099 = _4093.z;
        float _4101 = _4093.w;
        vec4 _4103 = texture(fp_t_tcb_E, vec3(_3981, _3973, float(int(_4061)))).xyzw;
        float _4105 = _4103.x;
        float _4107 = _4103.y;
        float _4109 = _4103.z;
        float _4111 = _4103.w;
        vec4 _4113 = texture(fp_t_tcb_E, vec3(_3983, _3973, float(int(_4013)))).xyzw;
        float _4115 = _4113.x;
        float _4117 = _4113.y;
        float _4119 = _4113.z;
        float _4121 = _4113.w;
        precise float _11384 = _4065 * _4037;
        float _4123 = _11384;
        precise float _11387 = _4067 * _4037;
        float _4125 = _11387;
        float _4127 = -_4037;
        precise float _11391 = _4127 + 1.0;
        float _4129 = _11391;
        precise float _11394 = _4037 * _4075;
        float _4131 = _11394;
        precise float _11397 = _4037 * _4095;
        float _4133 = _11397;
        precise float _11400 = _4037 * _4077;
        float _4135 = _11400;
        precise float _11403 = _4037 * _4079;
        float _4137 = _11403;
        precise float _11406 = _4037 * _4081;
        float _4139 = _11406;
        float _4141 = fma(_4085, _4129, _4123);
        float _4143 = fma(_4129, _4105, _4131);
        precise float _11417 = _4037 * _4097;
        float _4145 = _11417;
        float _4147 = fma(_4129, _4115, _4133);
        precise float _11424 = _4069 * _4037;
        float _4149 = _11424;
        precise float _11427 = _4037 * _4099;
        float _4151 = _11427;
        float _4153 = fma(_4129, _4107, _4135);
        float _4155 = fma(_4087, _4129, _4125);
        float _4157 = fma(_4129, _4117, _4145);
        precise float _11442 = _4147 * 0.8862273693084716796875;
        float _4159 = _11442;
        precise float _11444 = _4143 * 0.8862273693084716796875;
        float _4161 = _11444;
        precise float _11446 = _4141 * 0.8862273693084716796875;
        float _4163 = _11446;
        precise float _11449 = _4071 * _4037;
        float _4165 = _11449;
        precise float _11452 = _4037 * _4101;
        float _4167 = _11452;
        float _4169 = fma(_4129, _4119, _4151);
        float _4171 = fma(_3861, _4157, _4159);
        float _4173 = fma(_4129, _4109, _4137);
        float _4175 = fma(_3861, _4153, _4161);
        float _4177 = fma(_4089, _4129, _4149);
        float _4179 = fma(_3861, _4155, _4163);
        float _4181 = fma(_4129, _4121, _4167);
        float _4183 = fma(_3863, _4169, _4171);
        float _4185 = fma(_4129, _4111, _4139);
        float _4187 = fma(_3863, _4173, _4175);
        float _4189 = fma(_4091, _4129, _4165);
        float _4191 = fma(_3863, _4177, _4179);
        float _4193 = fma(_3865, _4181, _4183);
        float _4195 = fma(_3865, _4185, _4187);
        float _4197 = fma(_3865, _4189, _4191);
        float _4199 = max(0.0, _4193);
        float _4201 = max(0.0, _4195);
        float _4203 = max(0.0, _4197);
        precise float _11521 = _4199 * _3957;
        float _4205 = _11521;
        precise float _11524 = _4201 * _3957;
        float _4207 = _11524;
        precise float _11527 = _4203 * _3957;
        float _4209 = _11527;
        _3867 = _4205;
        _3869 = _4207;
        _3871 = _4209;
    }
    float _4211 = _3867;
    float _4213 = _3869;
    float _4215 = _3871;
    float _4217 = abs(_266);
    float _4219 = abs(_268);
    float _4221 = max(_4217, _4219);
    float _4223 = abs(_270);
    float _4225 = max(_4223, _4221);
    precise float _11548 = 1.0 / _4225;
    float _4227 = _11548;
    precise float _11551 = _270 * _4227;
    float _4229 = _11551;
    precise float _11554 = _266 * _4227;
    float _4231 = _11554;
    precise float _11557 = _268 * _4227;
    float _4233 = _11557;
    vec3 _4235 = texture(fp_t_tcb_18, vec3(_4231, _4233, _4229)).xyz;
    float _4237 = _4235.x;
    float _4239 = _4235.y;
    float _4241 = _4235.z;
    bool _4243 = 0.0 > fp_c3_1._m0[35].z;
    precise float _11578 = _4211 * fp_c3_1._m0[33].x;
    float _4245 = _11578;
    precise float _11582 = _4213 * fp_c3_1._m0[33].x;
    float _4247 = _11582;
    precise float _11586 = _4215 * fp_c3_1._m0[33].x;
    float _4249 = _11586;
    precise float _11591 = _4237 * fp_c3_1._m0[47].x;
    float _4251 = _11591;
    precise float _11595 = _4239 * fp_c3_1._m0[47].x;
    float _4253 = _11595;
    precise float _11599 = _4241 * fp_c3_1._m0[47].x;
    float _4255 = _11599;
    precise float _11604 = _4251 * fp_c3_1._m0[48].x;
    float _4257 = _11604;
    precise float _11608 = _4253 * fp_c3_1._m0[48].y;
    float _4259 = _11608;
    precise float _11612 = _4255 * fp_c3_1._m0[48].z;
    float _4261 = _11612;
    float _4263 = _4245;
    float _4265 = _4247;
    float _4267 = _4249;
    if (_4243)
    {
        precise float _11620 = _4245 + _4257;
        float _4269 = _11620;
        _4263 = _4269;
    }
    float _4271 = _4263;
    float _4273 = _4271;
    float _4275 = _4271;
    if (_4243)
    {
        precise float _11630 = _4247 + _4259;
        float _4277 = _11630;
        _4265 = _4277;
    }
    float _4279 = _4265;
    float _4281 = _4279;
    float _4283 = _4279;
    if (_4243)
    {
        precise float _11640 = _4249 + _4261;
        float _4285 = _11640;
        _4267 = _4285;
    }
    float _4287 = _4267;
    float _4289 = _4287;
    if (!_4243)
    {
        int _4291 = floatBitsToInt(fp_c3_1._m0[33].z) + (-1);
        int _4293 = _4291 << 4;
        int _4295 = _4293 + 208;
        int _4297 = _4293 + 212;
        int _4299 = _4293 + 216;
        int _4301 = _4295 - 128;
        uint _4303 = uint(int(uint(_4301) >> uint(4)));
        uint _4305 = uint(int(uint(_4301) >> uint(2)));
        int _4307 = int(_4305) & 3;
        float _4309 = _67[int(_4303)][_4307];
        int _4311 = _4297 - 128;
        uint _4313 = uint(int(uint(_4311) >> uint(4)));
        uint _4315 = uint(int(uint(_4311) >> uint(2)));
        int _4317 = int(_4315) & 3;
        float _4319 = _67[int(_4313)][_4317];
        int _4321 = _4299 - 128;
        uint _4323 = uint(int(uint(_4321) >> uint(4)));
        uint _4325 = uint(int(uint(_4321) >> uint(2)));
        int _4327 = int(_4325) & 3;
        float _4329 = _67[int(_4323)][_4327];
        precise float _11713 = _4309 + (-0.5);
        float _4331 = _11713;
        precise float _11715 = _4319 + (-0.5);
        float _4333 = _11715;
        precise float _11717 = _4329 + (-0.5);
        float _4335 = _11717;
        precise float _11720 = _4331 * _4331;
        float _4337 = _11720;
        float _4339 = fma(_4333, _4333, _4337);
        float _4341 = fma(_4335, _4335, _4339);
        float _4343 = sqrt(_4341);
        bool _4345 = 1.0 > fp_c3_1._m0[35].z;
        float _4347 = -fp_c3_1._m0[35].y;
        float _4349 = fma(_4343, fp_c3_1._m0[35].x, _4347);
        float _4351 = clamp(_4349, 0.0, 1.0);
        if (_4345)
        {
            float _4353 = -_4245;
            precise float _11750 = _4353 + _4257;
            float _4355 = _11750;
            float _4357 = -_4247;
            precise float _11755 = _4357 + _4259;
            float _4359 = _11755;
            float _4361 = -_4249;
            precise float _11760 = _4361 + _4261;
            float _4363 = _11760;
            float _4365 = fma(_4351, _4355, _4245);
            float _4367 = fma(_4351, _4359, _4247);
            float _4369 = fma(_4351, _4363, _4249);
            _4289 = _4369;
            _4275 = _4365;
            _4283 = _4367;
            _4371 = true;
        }
        else
        {
            bool _4373 = fp_c3_1._m0[35].z < 2.0;
            if (_4373)
            {
                float _4375 = fma(_4257, _4351, _4245);
                _4273 = _4375;
            }
            float _4377 = _4273;
            _4275 = _4377;
            if (_4373)
            {
                float _4379 = fma(_4259, _4351, _4247);
                _4281 = _4379;
            }
            float _4381 = _4281;
            _4283 = _4381;
            if (_4373)
            {
                float _4383 = fma(_4261, _4351, _4249);
                _4289 = _4383;
            }
        }
    }
    _4371 = false;
    float _4385 = _4289;
    float _4387 = _4275;
    float _4389 = _4283;
    precise float _11817 = _86 * fp_c3_1._m0[42].x;
    float _4391 = _11817;
    precise float _11822 = _86 * fp_c3_1._m0[40].x;
    float _4393 = _11822;
    float _4395 = fma(_84, fp_c3_1._m0[42].y, _4391);
    precise float _11832 = _86 * fp_c3_1._m0[41].x;
    float _4397 = _11832;
    float _4399 = fma(_84, fp_c3_1._m0[40].y, _4393);
    float _4401 = fma(_88, fp_c3_1._m0[42].z, _4395);
    float _4403 = fma(_84, fp_c3_1._m0[41].y, _4397);
    float _4405 = fma(_90, fp_c3_1._m0[42].w, _4401);
    float _4407 = fma(_88, fp_c3_1._m0[40].z, _4399);
    precise float _11859 = 1.0 / _4405;
    float _4409 = _11859;
    float _4411 = fma(_88, fp_c3_1._m0[41].z, _4403);
    float _4413 = fma(_90, fp_c3_1._m0[40].w, _4407);
    float _4415 = fma(_90, fp_c3_1._m0[41].w, _4411);
    precise float _11877 = _4413 * _4409;
    float _4417 = _11877;
    precise float _11880 = _4415 * _4409;
    float _4419 = _11880;
    float _4421 = texture(fp_t_tcb_14, vec2(_4417, _4419)).x;
    float _4423 = -_268;
    precise float _11890 = _4423 + 1.0;
    float _4425 = _11890;
    float _4427 = -fp_c3_1._m0[43].y;
    float _4429 = -_184;
    float _4431 = fma(_266, _4427, _4429);
    float _4433 = -fp_c3_1._m0[43].y;
    float _4435 = -_186;
    float _4437 = fma(_270, _4433, _4435);
    float _4439 = -fp_c3_1._m0[45].x;
    precise float _11916 = _86 + _4439;
    float _4441 = _11916;
    float _4443 = -fp_c3_1._m0[45].y;
    precise float _11922 = _84 + _4443;
    float _4445 = _11922;
    float _4447 = -_188;
    float _4449 = fma(_4425, fp_c3_1._m0[43].y, _4447);
    precise float _11932 = _4431 * _4431;
    float _4451 = _11932;
    precise float _11937 = _4441 * fp_c3_1._m0[46].x;
    float _4453 = _11937;
    float _4455 = fma(_4449, _4449, _4451);
    float _4457 = fma(_4445, fp_c3_1._m0[46].y, _4453);
    float _4459 = fma(_4437, _4437, _4455);
    float _4461 = inversesqrt(_4459);
    precise float _11955 = _4431 * _4461;
    float _4463 = _11955;
    precise float _11958 = _4449 * _4461;
    float _4465 = _11958;
    float _4467 = -fp_c3_1._m0[45].z;
    precise float _11964 = _88 + _4467;
    float _4469 = _11964;
    precise float _11967 = _4437 * _4461;
    float _4471 = _11967;
    float _4473 = fma(_4469, fp_c3_1._m0[46].z, _4457);
    float _4475 = fma(_4421, fp_c3_1._m0[44].y, fp_c3_1._m0[44].x);
    float _4477 = clamp(_4475, 0.0, 1.0);
    precise float _11983 = 1.0 / _4477;
    float _4479 = _11983;
    float _4481 = -_4473;
    precise float _11988 = _4481 + _4479;
    float _4483 = _11988;
    float _4485 = min(_4483, fp_c3_1._m0[43].z);
    float _4487 = fma(_4485, _4463, _86);
    float _4489 = fma(_4485, _4465, _84);
    float _4491 = fma(_4485, _4471, _88);
    precise float _12008 = _4487 * fp_c3_1._m0[42].x;
    float _4493 = _12008;
    precise float _12012 = _4487 * fp_c3_1._m0[41].x;
    float _4495 = _12012;
    float _4497 = fma(_4489, fp_c3_1._m0[42].y, _4493);
    precise float _12021 = _4487 * fp_c3_1._m0[40].x;
    float _4499 = _12021;
    float _4501 = fma(_4489, fp_c3_1._m0[41].y, _4495);
    float _4503 = fma(_4491, fp_c3_1._m0[42].z, _4497);
    float _4505 = fma(_4489, fp_c3_1._m0[40].y, _4499);
    float _4507 = fma(_4491, fp_c3_1._m0[41].z, _4501);
    precise float _12045 = _4503 + fp_c3_1._m0[42].w;
    float _4509 = _12045;
    float _4511 = fma(_4491, fp_c3_1._m0[40].z, _4505);
    precise float _12052 = 1.0 / _4509;
    float _4513 = _12052;
    precise float _12056 = _4507 + fp_c3_1._m0[41].w;
    float _4515 = _12056;
    precise float _12060 = _4511 + fp_c3_1._m0[40].w;
    float _4517 = _12060;
    precise float _12063 = _4517 * _4513;
    float _4519 = _12063;
    precise float _12066 = _4515 * _4513;
    float _4521 = _12066;
    float _4523 = texture(fp_t_tcb_14, vec2(_4519, _4521)).x;
    float _4525 = fma(_4523, fp_c3_1._m0[44].y, fp_c3_1._m0[44].x);
    float _4527 = clamp(_4525, 0.0, 1.0);
    precise float _12082 = 1.0 / _4527;
    float _4529 = _12082;
    bool _4531 = _4473 > _4529;
    float _4533 = _4489;
    float _4535 = _4413;
    float _4537 = _4415;
    float _4539 = _4529;
    if (_4531)
    {
        _4533 = _4405;
    }
    float _4541 = _4533;
    float _4543 = _4541;
    if (!_4531)
    {
        _4543 = _4509;
    }
    float _4545 = _4543;
    if (!_4531)
    {
        _4535 = _4517;
    }
    float _4547 = _4535;
    precise float _12109 = 1.0 / _4545;
    float _4549 = _12109;
    if (!_4531)
    {
        _4537 = _4515;
    }
    float _4551 = _4537;
    precise float _12118 = _4549 * _4547;
    float _4553 = _12118;
    precise float _12121 = _4549 * _4551;
    float _4555 = _12121;
    vec3 _4557 = texture(fp_t_tcb_12, vec2(_4553, _4555)).xyz;
    float _4559 = _4557.x;
    float _4561 = _4557.y;
    float _4563 = _4557.z;
    float _4565 = _67[0].w;
    precise float _12139 = _184 * fp_c3_1._m0[0].x;
    float _4567 = _12139;
    float _4569 = _67[6].w;
    float _4571 = fma(_188, fp_c3_1._m0[0].y, _4567);
    if (_4531)
    {
        _4539 = _4479;
    }
    float _4573 = _4539;
    precise float _12156 = _266 * fp_c3_1._m0[12].x;
    float _4575 = _12156;
    float _4577 = fma(_84, fp_c3_1._m0[9].x, fp_c3_1._m0[9].y);
    float _4579 = clamp(_4577, 0.0, 1.0);
    float _4581 = fma(_84, fp_c3_1._m0[10].x, fp_c3_1._m0[10].y);
    float _4583 = clamp(_4581, 0.0, 1.0);
    float _4585 = fma(_186, fp_c3_1._m0[0].z, _4571);
    float _4587 = -_4473;
    precise float _12184 = _4587 + _4573;
    float _4589 = _12184;
    precise float _12187 = _4579 * _4579;
    float _4591 = _12187;
    precise float _12190 = _4583 * _4583;
    float _4593 = _12190;
    precise float _12193 = _4385 + _3827;
    float _4595 = _12193;
    float _4597 = fma(_4585, fp_c3_1._m0[38].w, fp_c3_1._m0[39].w);
    float _4599 = fma(_268, fp_c3_1._m0[12].y, _4575);
    precise float _12209 = (-0.0) + fp_c3_1._m0[7].w;
    float _4601 = _12209;
    float _4603 = clamp(_4601, 0.0, 1.0);
    precise float _12214 = _4591 * (-1.44269502162933349609375);
    float _4605 = _12214;
    precise float _12216 = _4593 * (-1.44269502162933349609375);
    float _4607 = _12216;
    precise float _12220 = _4589 * fp_c3_1._m0[43].w;
    float _4609 = _12220;
    float _4611 = max(_4597, fp_c1_1._m0[0].y);
    float _4613 = fma(_4565, fp_c3_1._m0[10].z, fp_c3_1._m0[10].w);
    float _4615 = clamp(_4613, 0.0, 1.0);
    float _4617 = log2(_4611);
    precise float _12239 = _266 * fp_c3_1._m0[11].x;
    float _4619 = _12239;
    float _4621 = exp2(_4607);
    precise float _12246 = _266 * fp_c3_1._m0[13].x;
    float _4623 = _12246;
    float _4625 = exp2(_4605);
    float _4627 = fma(_4565, fp_c3_1._m0[9].z, fp_c3_1._m0[9].w);
    float _4629 = clamp(_4627, 0.0, 1.0);
    precise float _12259 = _4585 * _4585;
    float _4631 = _12259;
    float _4633 = fma(_268, fp_c3_1._m0[11].y, _4619);
    float _4635 = exp2(_4609);
    float _4637 = fma(_268, fp_c3_1._m0[13].y, _4623);
    precise float _12275 = (-0.0) + fp_c3_1._m0[8].w;
    float _4639 = _12275;
    float _4641 = clamp(_4639, 0.0, 1.0);
    precise float _12280 = _4617 * (-1.5);
    float _4643 = _12280;
    float _4645 = fma(_270, fp_c3_1._m0[11].z, _4633);
    float _4647 = fma(_270, fp_c3_1._m0[12].z, _4599);
    float _4649 = -fp_c3_1._m0[50].x;
    precise float _12295 = 1.0 + _4649;
    float _4651 = _12295;
    float _4653 = fma(_270, fp_c3_1._m0[13].z, _4637);
    float _4655 = -_4621;
    float _4657 = fma(_4641, _4655, _4641);
    float _4659 = -_4625;
    float _4661 = fma(_4603, _4659, _4603);
    float _4663 = exp2(_4643);
    float _4665 = abs(_4645);
    float _4667 = abs(_4647);
    precise float _12321 = _4665 + _4667;
    float _4669 = _12321;
    precise float _12324 = _4387 + _3829;
    float _4671 = _12324;
    precise float _12327 = _4389 + _3831;
    float _4673 = _12327;
    precise float _12331 = _4651 * fp_c3_1._m0[49].x;
    float _4675 = _12331;
    float _4677 = fma(_4631, fp_c3_1._m0[38].x, fp_c3_1._m0[38].x);
    float _4679 = fma(_4631, fp_c3_1._m0[38].y, fp_c3_1._m0[38].y);
    float _4681 = fma(_4631, fp_c3_1._m0[38].z, fp_c3_1._m0[38].z);
    float _4683 = abs(_4653);
    precise float _12354 = _4683 + _4669;
    float _4685 = _12354;
    precise float _12357 = _4629 * _4661;
    float _4687 = _12357;
    precise float _12359 = 1.0 / _4685;
    float _4689 = _12359;
    precise float _12362 = _4615 * _4657;
    float _4691 = _12362;
    float _4693 = fma(_4663, fp_c3_1._m0[39].x, _4677);
    float _4695 = fma(_4663, fp_c3_1._m0[39].y, _4679);
    float _4697 = fma(_4663, fp_c3_1._m0[39].z, _4681);
    precise float _12380 = _4675 * _4671;
    float _4699 = _12380;
    precise float _12383 = _164 * _4673;
    float _4701 = _12383;
    precise float _12386 = _170 * _4595;
    float _4703 = _12386;
    float _4705 = min(_4635, 1.0);
    precise float _12393 = _4697 + fp_c3_1._m0[37].z;
    float _4707 = _12393;
    precise float _12396 = _4653 * _4689;
    float _4709 = _12396;
    precise float _12399 = _4647 * _4689;
    float _4711 = _12399;
    bool _4713 = _4709 >= 0.0;
    float _4715 = -_4671;
    float _4717 = fma(_4675, _4715, _4559);
    float _4719 = -_4673;
    float _4721 = fma(_164, _4719, _4561);
    float _4723 = -_4595;
    float _4725 = fma(_170, _4723, _4563);
    precise float _12422 = _4645 * _4689;
    float _4727 = _12422;
    precise float _12426 = _4693 + fp_c3_1._m0[37].x;
    float _4729 = _12426;
    float _4731 = fma(_4717, _4705, _4699);
    float _4733 = fma(_4721, _4705, _4701);
    float _4735 = fma(_4725, _4705, _4703);
    precise float _12443 = _4569 * fp_c3_1._m0[36].x;
    float _4737 = _12443;
    precise float _12446 = _4731 + _3833;
    float _4739 = _12446;
    precise float _12449 = _4733 + _3835;
    float _4741 = _12449;
    precise float _12452 = _4735 + _3837;
    float _4743 = _12452;
    precise float _12456 = _4569 * fp_c3_1._m0[36].y;
    float _4745 = _12456;
    float _4747 = exp2(_4737);
    float _4749 = clamp(_4747, 0.0, 1.0);
    float _4751 = -_4739;
    precise float _12466 = _4751 + fp_c3_1._m0[7].x;
    float _4753 = _12466;
    float _4755 = -_4741;
    precise float _12472 = _4755 + fp_c3_1._m0[7].y;
    float _4757 = _12472;
    float _4759 = -_4743;
    precise float _12478 = _4759 + fp_c3_1._m0[7].z;
    float _4761 = _12478;
    precise float _12482 = _4569 * fp_c3_1._m0[36].z;
    float _4763 = _12482;
    float _4765 = fma(_4753, _4687, _4739);
    float _4767 = fma(_4757, _4687, _4741);
    float _4769 = fma(_4761, _4687, _4743);
    precise float _12498 = _4695 + fp_c3_1._m0[37].y;
    float _4771 = _12498;
    float _4773 = -_4765;
    precise float _12504 = _4773 + fp_c3_1._m0[8].x;
    float _4775 = _12504;
    float _4777 = -_4767;
    precise float _12510 = _4777 + fp_c3_1._m0[8].y;
    float _4779 = _12510;
    float _4781 = -_4769;
    precise float _12516 = _4781 + fp_c3_1._m0[8].z;
    float _4783 = _12516;
    float _4785 = _4727;
    float _4787 = _4711;
    if (!_4713)
    {
        bool _4789 = _4711 >= 0.0;
        float _4791 = float(_4789);
        bool _4793 = _4727 >= 0.0;
        float _4795 = float(_4793);
        float _4797 = abs(_4727);
        float _4799 = -_4797;
        precise float _12535 = _4799 + (-0.0);
        float _4801 = _12535;
        float _4803 = fma(_4791, 2.0, -1.0);
        float _4805 = fma(_4795, 2.0, -1.0);
        float _4807 = abs(_4711);
        float _4809 = -_4807;
        precise float _12545 = _4809 + (-0.0);
        float _4811 = _12545;
        float _4813 = fma(_4803, _4801, _4803);
        float _4815 = fma(_4805, _4811, _4805);
        _4785 = _4815;
        _4787 = _4813;
    }
    float _4817 = _4785;
    float _4819 = _4787;
    float _4821 = fma(_4775, _4691, _4765);
    float _4823 = exp2(_4745);
    float _4825 = clamp(_4823, 0.0, 1.0);
    float _4827 = fma(_4779, _4691, _4767);
    float _4829 = exp2(_4763);
    float _4831 = clamp(_4829, 0.0, 1.0);
    float _4833 = fma(_4783, _4691, _4769);
    float _4835 = fma(_4817, 0.5, 0.5);
    float _4837 = fma(_4819, 0.5, 0.5);
    float _4839 = -_4729;
    precise float _12587 = _4821 + _4839;
    float _4841 = _12587;
    float _4843 = -_4771;
    precise float _12592 = _4827 + _4843;
    float _4845 = _12592;
    float _4847 = -_4707;
    precise float _12597 = _4833 + _4847;
    float _4849 = _12597;
    float _4851 = fma(_4841, _4749, _4729);
    float _4853 = fma(_4845, _4825, _4771);
    float _4855 = fma(_4849, _4831, _4707);
    _73.x = 1.0;
    _73.y = 0.0;
    _73.z = 0.0;
    _73.w = 0.0;
}

