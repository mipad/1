#version 450

// ========= 调试模式选择 =========
// 0: 原始安全加固输出
// 1: 输出纹理 fp_t_tcb_8
// 2: 输出纹理 fp_t_tcb_10
// 3: 输出纹理 fp_t_tcb_A
// 4: 输出变量 _499
// 5: 输出最终颜色的红色通道
#define DEBUG_MODE 0
// =================================

// ========= 安全数学函数宏 =========
#define SAFE_SQRT(x)   sqrt(max(x, 0.0))
#define SAFE_INVSQRT(x) inversesqrt(max(x, 1e-7))
#define SAFE_LOG2(x)    log2(max(x, 1e-7))
#define SAFE_DIV(x,y)   ( (x) / max((y), 1e-7) )
// =================================

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
layout(set = 2, binding = 129) uniform sampler2D fp_t_tcb_10;
layout(set = 2, binding = 130) uniform sampler2D fp_t_tcb_12;
layout(set = 2, binding = 131) uniform sampler2D fp_t_tcb_A;
layout(set = 2, binding = 132) uniform sampler2DShadow fp_t_tcb_16;
layout(set = 2, binding = 133) uniform sampler2DShadow fp_t_tcb_C;
layout(set = 2, binding = 134) uniform sampler2DShadow fp_t_tcb_E;
layout(set = 2, binding = 199) uniform samplerBuffer fp_t_tcb_28;
layout(set = 2, binding = 200) uniform samplerBuffer fp_t_tcb_2A;
layout(set = 2, binding = 201) uniform samplerBuffer fp_t_tcb_2C;
layout(set = 2, binding = 202) uniform samplerBuffer fp_t_tcb_30;
layout(set = 2, binding = 139) uniform samplerCube fp_t_tcb_18;
layout(set = 2, binding = 140) uniform sampler2DArray fp_t_tcb_14;
layout(set = 2, binding = 141) uniform samplerCube fp_t_tcb_1A;

layout(location = 0) in vec4 _69[16];
layout(location = 0) out vec4 _75;

void main()
{
    bool _4929 = false;
    bool _4467 = false;
    bool _761 = false;
    bool _2989 = false;
    bool _2501 = false;
    bool _1783 = false;
    bool _1061 = false;
    bool _418 = false;
    float _82 = _69[7].z;
    float _84 = _69[7].w;
    float _86 = _69[7].x;
    float _88 = _69[7].y;

    // ========= 纹理坐标钳制 =========
    vec2 coord_7 = clamp(vec2(_82, _84), 0.0, 1.0);
    vec2 coord_8 = clamp(vec2(_86, _88), 0.0, 1.0);
    // =================================

    vec4 _91 = texture(fp_t_tcb_8, coord_7).xyzw;
    float _93 = _91.x;
    float _95 = _91.y;
    float _97 = _91.z;
    float _99 = _91.w;
    uint _102 = packHalf2x16(vec2(_93, _95));
    uint _104 = packHalf2x16(vec2(_97, _99));
    vec3 _108 = texture(fp_t_tcb_10, coord_7).xyw;
    float _110 = _108.x;
    float _112 = _108.y;
    float _114 = _108.z;
    vec3 _116 = texture(fp_t_tcb_12, coord_8).xyz;
    float _118 = _116.x;
    float _120 = _116.y;
    float _122 = _116.z;
    bool _126 = _99 <= fp_c3_1._m0[15].x;
    uint _128 = _102;
    uint _130 = _104;
    if (_126)
    {
        discard;
    }
    vec3 _132 = texture(fp_t_tcb_A, coord_7).xyz;
    float _134 = _132.x;
    float _136 = _132.y;
    float _138 = _132.z;
    uint _140 = packHalf2x16(vec2(_134, _136));
    float _142 = _69[10].x;
    float _144 = _69[9].x;
    float _146 = _69[10].y;
    float _148 = _69[9].y;
    float _150 = _69[10].z;
    float _152 = _69[9].z;
    float _154 = _69[1].x;
    float _156 = _69[1].y;
    float _158 = _69[1].z;
    float _160 = _69[6].w;
    float _5382 = _110 * _114;
    float _162 = _5382;
    float _164 = -fp_c3_1._m0[13].y;
    float _166 = fma(_118, fp_c3_1._m0[13].y, _164);
    float _168 = -fp_c3_1._m0[13].y;
    float _170 = fma(_120, fp_c3_1._m0[13].y, _168);
    float _172 = -fp_c3_1._m0[12].x;
    float _174 = fma(_118, fp_c3_1._m0[12].x, _172);
    float _176 = -fp_c3_1._m0[12].x;
    float _178 = fma(_120, fp_c3_1._m0[12].x, _176);
    float _180 = -fp_c3_1._m0[12].x;
    float _182 = fma(_122, fp_c3_1._m0[12].x, _180);
    float _184 = -fp_c3_1._m0[13].y;
    float _186 = fma(_122, fp_c3_1._m0[13].y, _184);
    float _5435 = _166 + 1.0;
    float _188 = _5435;
    float _5437 = _170 + 1.0;
    float _190 = _5437;
    float _5439 = _174 + 1.0;
    float _192 = _5439;
    float _5441 = _178 + 1.0;
    float _194 = _5441;
    float _5443 = _182 + 1.0;
    float _196 = _5443;
    float _5445 = _186 + 1.0;
    float _198 = _5445;
    float _5448 = _142 * _142;
    float _200 = _5448;
    float _5451 = _144 * _144;
    float _202 = _5451;
    float _204 = fma(_146, _146, _200);
    float _206 = fma(_148, _148, _202);
    float _208 = -_156;
    float _5465 = _208 + fp_c3_1._m0[7].y;
    float _210 = _5465;
    float _212 = fma(_150, _150, _204);
    float _214 = fma(_152, _152, _206);
    float _216 = SAFE_INVSQRT(_212);
    float _218 = -_154;
    float _5481 = _218 + fp_c3_1._m0[7].x;
    float _220 = _5481;
    float _222 = SAFE_INVSQRT(_214);
    float _5486 = _220 * _220;
    float _224 = _5486;
    float _5489 = _216 * _146;
    float _226 = _5489;
    float _5492 = _216 * _142;
    float _228 = _5492;
    float _5495 = _216 * _150;
    float _230 = _5495;
    float _232 = fma(_112, 2.0, -1.0);
    float _5502 = _222 * _144;
    float _234 = _5502;
    float _236 = -_158;
    float _5508 = _236 + fp_c3_1._m0[7].z;
    float _238 = _5508;
    float _240 = fma(_210, _210, _224);
    float _5515 = _222 * _152;
    float _242 = _5515;
    float _244 = fma(_162, 2.0, -1.0);
    uint _246 = packHalf2x16(vec2(_232, _244));
    float _5524 = _232 * _232;
    float _248 = _5524;
    float _5527 = _222 * _148;
    float _250 = _5527;
    float _252 = fma(_238, _238, _240);
    float _5534 = _226 * _242;
    float _254 = _5534;
    float _5537 = _230 * _234;
    float _256 = _5537;
    float _258 = SAFE_INVSQRT(_252);
    float _260 = -_244;
    float _262 = -_248;
    float _264 = fma(_244, _260, _262);
    float _5550 = _228 * _250;
    float _266 = _5550;
    float _268 = -_254;
    float _270 = fma(_230, _250, _268);
    float _272 = -_256;
    float _274 = fma(_228, _242, _272);
    float _5564 = _264 + 1.0;
    float _276 = _5564;
    float _278 = -_266;
    float _280 = fma(_226, _234, _278);
    float _5573 = _232 * _242;
    float _282 = _5573;
    float _5576 = _232 * _234;
    float _284 = _5576;
    float _5579 = _210 * _258;
    float _286 = _5579;
    float _288 = max(0.0, _276);
    float _5585 = _280 * _160;
    float _290 = _5585;
    float _292 = unpackHalf2x16(floatBitsToUint(_214)).y;
    uint _294 = packHalf2x16(vec2(_290, _292));
    float _296 = SAFE_SQRT(_288);
    float _5598 = _270 * _160;
    float _298 = _5598;
    float _5601 = _274 * _160;
    float _300 = _5601;
    uint _302 = packHalf2x16(vec2(_298, _300));
    float _5608 = _232 * _250;
    float _304 = _5608;
    float _5611 = _220 * _258;
    float _306 = _5611;
    float _5614 = _238 * _258;
    float _308 = _5614;
    float _310 = fma(_244, _290, _282);
    float _312 = fma(_244, _298, _284);
    uint _314 = packHalf2x16(vec2(_282, _312));
    float _316 = fma(_244, _300, _304);
    uint _318 = packHalf2x16(vec2(_316, _310));
    float _320 = -fp_c3_1._m0[13].x;
    float _322 = fma(_118, fp_c3_1._m0[13].x, _320);
    float _324 = -fp_c3_1._m0[13].x;
    float _326 = fma(_120, fp_c3_1._m0[13].x, _324);
    float _328 = -fp_c3_1._m0[13].x;
    float _330 = fma(_122, fp_c3_1._m0[13].x, _328);
    float _5661 = _286 + (-0.0);
    float _332 = _5661;
    float _5663 = _306 + (-0.0);
    float _334 = _5663;
    float _5665 = _308 + (-0.0);
    float _336 = _5665;
    float _338 = fma(_226, _296, _316);
    float _340 = fma(_230, _296, _310);
    float _342 = fma(_228, _296, _312);
    float _5679 = _322 + 1.0;
    float _344 = _5679;
    float _5681 = _326 + 1.0;
    float _346 = _5681;
    float _5683 = _330 + 1.0;
    float _348 = _5683;
    bool _350 = _138 >= 0.5;
    uint _352 = _140;
    float _354 = uintBitsToFloat(_302);
    float _356 = uintBitsToFloat(_294);
    float _358 = fp_c3_1._m0[12].x;
    float _360 = uintBitsToFloat(_314);
    float _362 = uintBitsToFloat(_318);
    float _364 = uintBitsToFloat(_294);
    float _366 = fp_c3_1._m0[12].x;
    float _368 = _222;
    float _370 = uintBitsToFloat(_246);
    float _372 = _288;
    float _374 = _222;
    float _376 = uintBitsToFloat(_294);
    float _378 = uintBitsToFloat(_314);
    float _380 = _222;
    float _382 = uintBitsToFloat(_302);
    uint _416;
    if (_350)
    {
        float _5718 = _93 * _136;
        float _384 = _5718;
        float _5721 = _95 * _136;
        float _386 = _5721;
        float _5724 = _97 * _136;
        float _388 = _5724;
        float _390 = -_136;
        float _392 = -_136;
        float _394 = fma(_93, _390, _93);
        float _396 = fma(_95, _392, _95);
        uint _398 = packHalf2x16(vec2(_394, _396));
        float _400 = -_136;
        float _402 = fma(_97, _400, _97);
        uint _404 = packHalf2x16(vec2(_134, _402));
        float _5754 = _384 * fp_c1_1._m0[0].x;
        float _406 = _5754;
        float _5758 = _386 * fp_c1_1._m0[0].x;
        float _408 = _5758;
        uint _410 = packHalf2x16(vec2(_406, _408));
        float _5766 = _388 * fp_c1_1._m0[0].x;
        float _412 = _5766;
        uint _414 = packHalf2x16(vec2(_412, _99));
        _416 = _398;
        _352 = _404;
        _128 = _410;
        _130 = _414;
        _418 = true;
    }
    else
    {
        uint _420 = uint(int(uint(floatBitsToInt(_308)) >> uint(16)));
        int _423 = int(_420) << 16;
        uint _425 = uint(int(uint(int(_140)) >> uint(16)));
        int _427 = _423 + int(_425);
        uint _429 = uint(int(uint(int(_140)) >> uint(16)));
        int _431 = int(_429) << 16;
        int _433 = _427 & 65535;
        int _435 = _431 + _433;
        _416 = uint(_435);
    }
    _418 = false;
    uint _437 = _416;
    uint _439 = _352;
    uint _441 = _128;
    uint _443 = _130;
    float _5815 = (-0.0) + fp_c1_1._m0[0].y;
    float _445 = _5815;
    float _447 = unpackHalf2x16(_437).x;
    float _449 = unpackHalf2x16(_437).y;
    float _451 = -_447;
    float _453 = -_449;
    float _5827 = _451 + 1.0;
    float _455 = _5827;
    float _5829 = _453 + 1.0;
    float _457 = _5829;
    float _459 = unpackHalf2x16(_439).y;
    float _461 = -_459;
    float _5836 = _461 + 1.0;
    float _463 = _5836;
    float _5839 = (-0.0) + fp_c1_1._m0[0].z;
    float _465 = _5839;
    float _467 = unpackHalf2x16(_439).x;
    float _469 = fma(_467, 10.0, _445);
    bool _471 = fp_c3_1._m0[39].y >= 1.0;
    float _473 = unpackHalf2x16(_441).x;
    float _5856 = _473 * _455;
    float _475 = _5856;
    float _477 = unpackHalf2x16(_441).y;
    float _5862 = _477 * _457;
    float _479 = _5862;
    float _481 = unpackHalf2x16(_443).x;
    float _5868 = _481 * _463;
    float _483 = _5868;
    float _485 = unpackHalf2x16(_443).y;
    float _5874 = _342 * _334;
    float _487 = _5874;
    float _489 = exp2(_469);
    float _491 = fma(_338, _332, _487);
    float _493 = 0.0;
    if (_471)
    {
        _493 = 0.0;
    }
    float _495 = _493;
    float _497 = fma(_340, _336, _491);
    float _499 = clamp(_497, 0.0, 1.0);
    float _5892 = _489 + (-0.0);
    float _501 = _5892;
    float _503 = fma(_501, 0.125, _465);
    float _505 = _495;
    uint _507 = 0u;
    uint _509 = 0u;
    if (!_471)
    {
        float _511 = _69[2].x;
        float _513 = _69[2].y;
        bool _515 = floatBitsToInt(fp_c3_1._m0[39].x) == 2;
        float _517 = _69[2].z;
        float _519 = _69[2].w;
        float _5918 = _511 * fp_c3_1._m0[23].x;
        float _521 = _5918;
        float _523 = fma(_513, fp_c3_1._m0[23].y, _521);
        float _525 = fma(_517, fp_c3_1._m0[23].z, _523);
        float _527 = fma(_519, fp_c3_1._m0[23].w, _525);
        float _529 = clamp(_527, 0.0, 1.0);
        uint _531 = floatBitsToUint(_513);
        float _533 = fp_c3_1._m0[39].x;
        float _535 = 1.0;
        uint _537 = floatBitsToUint(_513);
        uint _539 = floatBitsToUint(_513);
        float _541 = 1.0;
        float _543 = _513;
        float _545 = _517;
        float _547 = 1.0;
        float _549 = _519;
        uint _551 = floatBitsToUint(_513);
        uint _553 = floatBitsToUint(_513);
        float _555 = 1.0;
        uint _557 = floatBitsToUint(_513);
        float _559 = fp_c3_1._m0[39].x;
        float _561 = 1.0;
        float _563 = _513;
        float _565 = _517;
        float _567 = 1.0;
        uint _569 = floatBitsToUint(_513);
        uint _759;
        if (_515)
        {
            bool _571 = _529 == 0.0;
            if (_571)
            {
                float _5969 = _156 * fp_c3_1._m0[35].x;
                float _573 = _5969;
                float _575 = _69[1].w;
                float _5975 = _156 * fp_c3_1._m0[35].w;
                float _577 = _5975;
                float _579 = fma(_154, fp_c3_1._m0[34].x, _573);
                float _5986 = 3.0 * fp_c3_1._m0[38].x;
                float _581 = _5986;
                float _5989 = 3.0 * fp_c3_1._m0[38].y;
                float _583 = _5989;
                float _585 = fma(_158, fp_c3_1._m0[36].x, _579);
                float _587 = fma(_575, fp_c3_1._m0[37].x, _585);
                float _589 = -fp_c3_1._m0[38].x;
                float _591 = fma(1.5, _589, _587);
                float _6012 = _156 * fp_c3_1._m0[35].y;
                float _593 = _6012;
                float _595 = -_581;
                bool _597 = _591 <= _595;
                float _599 = fma(_154, fp_c3_1._m0[34].y, _593);
                float _601 = fma(_154, fp_c3_1._m0[34].w, _577);
                float _603 = fma(_158, fp_c3_1._m0[36].y, _599);
                float _605 = fma(_158, fp_c3_1._m0[36].w, _601);
                bool _607 = _591 >= 1.0;
                bool _609 = _607 || _597;
                float _611 = fma(_575, fp_c3_1._m0[37].y, _603);
                float _613 = fma(_575, fp_c3_1._m0[37].w, _605);
                float _615 = -fp_c3_1._m0[38].y;
                float _617 = fma(1.5, _615, _611);
                float _6062 = _156 * fp_c3_1._m0[35].z;
                float _619 = _6062;
                bool _621 = _617 >= 1.0;
                bool _623 = _621 || _609;
                float _625 = fma(_154, fp_c3_1._m0[34].z, _619);
                float _627 = fma(_158, fp_c3_1._m0[36].z, _625);
                float _629 = -_583;
                bool _631 = _617 <= _629;
                bool _633 = _631 || _623;
                float _635 = fma(_575, fp_c3_1._m0[37].z, _627);
                uint _637 = 1065353216u;
                uint _639 = 0u;
                if (!_633)
                {
                    float _641 = min(_635, _613);
                    float _6099 = SAFE_DIV(1.0, _613);
                    float _643 = _6099;
                    float _6103 = _591 + fp_c3_1._m0[38].x;
                    float _645 = _6103;
                    float _6107 = _617 + fp_c3_1._m0[38].y;
                    float _647 = _6107;
                    float _649 = min(_613, _641);
                    float _6114 = _645 + fp_c3_1._m0[38].x;
                    float _651 = _6114;
                    float _6117 = _617 * _643;
                    float _653 = _6117;
                    float _6120 = _645 * _643;
                    float _655 = _6120;
                    float _6123 = _649 * _643;
                    float _657 = _6123;
                    float _6126 = _591 * _643;
                    float _659 = _6126;
                    float _6130 = _651 + fp_c3_1._m0[38].x;
                    float _661 = _6130;
                    float _6133 = _651 * _643;
                    float _663 = _6133;
                    float _665 = texture(fp_t_tcb_16, vec3(vec2(_655, _653), _657));
                    uint _667 = packHalf2x16(vec2(_665, 0.0));
                    float _669 = texture(fp_t_tcb_16, vec3(vec2(_659, _653), _657));
                    float _671 = texture(fp_t_tcb_16, vec3(vec2(_663, _653), _657));
                    float _6157 = _661 * _643;
                    float _673 = _6157;
                    float _6160 = _647 * _643;
                    float _675 = _6160;
                    float _677 = texture(fp_t_tcb_16, vec3(vec2(_673, _653), _657));
                    float _679 = texture(fp_t_tcb_16, vec3(vec2(_659, _675), _657));
                    float _681 = texture(fp_t_tcb_16, vec3(vec2(_655, _675), _657));
                    float _6182 = _647 + fp_c3_1._m0[38].y;
                    float _683 = _6182;
                    float _685 = texture(fp_t_tcb_16, vec3(vec2(_663, _675), _657));
                    float _6192 = _683 + fp_c3_1._m0[38].y;
                    float _687 = _6192;
                    float _6195 = _683 * _643;
                    float _689 = _6195;
                    float _691 = texture(fp_t_tcb_16, vec3(vec2(_673, _675), _657));
                    float _693 = texture(fp_t_tcb_16, vec3(vec2(_659, _689), _657));
                    float _695 = texture(fp_t_tcb_16, vec3(vec2(_655, _689), _657));
                    float _697 = texture(fp_t_tcb_16, vec3(vec2(_663, _689), _657));
                    float _6222 = _687 * _643;
                    float _699 = _6222;
                    float _701 = texture(fp_t_tcb_16, vec3(vec2(_673, _689), _657));
                    float _703 = texture(fp_t_tcb_16, vec3(vec2(_659, _699), _657));
                    float _705 = texture(fp_t_tcb_16, vec3(vec2(_655, _699), _657));
                    float _707 = texture(fp_t_tcb_16, vec3(vec2(_663, _699), _657));
                    float _709 = texture(fp_t_tcb_16, vec3(vec2(_673, _699), _657));
                    float _6255 = _669 + _665;
                    float _711 = _6255;
                    float _6258 = _711 + _671;
                    float _713 = _6258;
                    float _6261 = _713 + _677;
                    float _715 = _6261;
                    float _6264 = _715 + _679;
                    float _717 = _6264;
                    float _6267 = _717 + _681;
                    float _719 = _6267;
                    uint _721 = packHalf2x16(vec2(_719, 0.0));
                    float _6273 = _719 + _685;
                    float _723 = _6273;
                    float _6276 = _723 + _691;
                    float _725 = _6276;
                    float _6279 = _725 + _693;
                    float _727 = _6279;
                    float _6282 = _727 + _695;
                    float _729 = _6282;
                    float _6285 = _729 + _697;
                    float _731 = _6285;
                    float _6288 = _731 + _701;
                    float _733 = _6288;
                    float _6291 = _733 + _703;
                    float _735 = _6291;
                    float _6294 = _735 + _705;
                    float _737 = _6294;
                    float _6297 = _737 + _707;
                    float _739 = _6297;
                    float _6300 = _739 + _709;
                    float _741 = _6300;
                    float _743 = fma(_741, -0.0625, _445);
                    uint _745 = packHalf2x16(vec2(_743, 0.0));
                    _637 = _745;
                    _639 = _721;
                    _531 = _667;
                }
                uint _747 = _637;
                uint _749 = _639;
                uint _751 = _531;
                float _753 = unpackHalf2x16(_747).x;
                float _755 = -_753;
                float _6321 = _755 + 1.0;
                float _757 = _6321;
                _567 = _757;
                _759 = _749;
                _569 = _751;
                _761 = true;
            }
            else
            {
                bool _763 = _529 == 1.0;
                if (_763)
                {
                    float _6334 = _511 * fp_c3_1._m0[18].x;
                    float _765 = _6334;
                    float _767 = fma(_513, fp_c3_1._m0[18].y, _765);
                    float _769 = fma(_517, fp_c3_1._m0[18].z, _767);
                    float _771 = fma(_519, fp_c3_1._m0[18].w, _769);
                    bool _773 = _771 > 0.0;
                    float _775 = _765;
                    float _777 = _771;
                    if (_773)
                    {
                        float _779 = _69[3].w;
                        _533 = _779;
                    }
                    float _781 = _533;
                    float _783 = _781;
                    if (_773)
                    {
                        float _785 = _69[3].x;
                        _775 = _785;
                    }
                    float _787 = _775;
                    float _789 = _787;
                    if (_773)
                    {
                        float _791 = _69[3].y;
                        _354 = _791;
                    }
                    float _793 = _354;
                    float _795 = 0.0;
                    float _797 = _793;
                    if (_773)
                    {
                        float _799 = _69[3].z;
                        _795 = _799;
                    }
                    float _801 = _795;
                    float _803 = _801;
                    if (!_773)
                    {
                        _535 = 0.0;
                    }
                    float _805 = _535;
                    if (!_773)
                    {
                        _783 = _519;
                    }
                    float _807 = _783;
                    if (!_773)
                    {
                        _789 = _511;
                    }
                    float _809 = _789;
                    float _811 = _809;
                    if (!_773)
                    {
                        _797 = _513;
                    }
                    float _813 = _797;
                    if (!_773)
                    {
                        _803 = _517;
                    }
                    float _815 = _803;
                    if (_773)
                    {
                        _777 = fp_c3_1._m0[17].x;
                    }
                    float _817 = _777;
                    bool _819 = _805 == 0.0;
                    float _821 = _817;
                    if (_773)
                    {
                        _356 = fp_c3_1._m0[17].y;
                    }
                    float _823 = _356;
                    float _825 = 0.0;
                    float _827 = _823;
                    if (_773)
                    {
                        _825 = fp_c3_1._m0[17].w;
                    }
                    float _829 = _825;
                    float _831 = _829;
                    if (_773)
                    {
                        _358 = fp_c3_1._m0[20].y;
                    }
                    float _833 = _358;
                    float _835 = _833;
                    if (_773)
                    {
                        _360 = fp_c3_1._m0[22].x;
                    }
                    float _837 = _360;
                    float _839 = _837;
                    if (_773)
                    {
                        _362 = fp_c3_1._m0[22].y;
                    }
                    float _841 = _362;
                    float _843 = _841;
                    if (!_773)
                    {
                        _821 = fp_c3_1._m0[16].x;
                    }
                    float _845 = _821;
                    if (!_773)
                    {
                        _827 = fp_c3_1._m0[16].y;
                    }
                    float _847 = _827;
                    if (!_773)
                    {
                        _831 = fp_c3_1._m0[16].w;
                    }
                    float _849 = _831;
                    if (!_773)
                    {
                        _835 = fp_c3_1._m0[19].y;
                    }
                    float _851 = _835;
                    if (!_773)
                    {
                        _839 = fp_c3_1._m0[21].x;
                    }
                    float _853 = _839;
                    if (!_773)
                    {
                        _843 = fp_c3_1._m0[21].y;
                    }
                    float _855 = _843;
                    float _6508 = SAFE_DIV(1.0, _807);
                    float _857 = _6508;
                    float _6511 = _857 * _809;
                    float _859 = _6511;
                    float _6514 = _857 * _813;
                    float _861 = _6514;
                    float _6517 = _857 * _815;
                    float _863 = _6517;
                    float _865 = _857;
                    if (_773)
                    {
                        _811 = fp_c3_1._m0[17].z;
                    }
                    float _867 = _811;
                    float _869 = _867;
                    if (_773)
                    {
                        _865 = fp_c3_1._m0[20].x;
                    }
                    float _871 = _865;
                    float _873 = _871;
                    if (!_773)
                    {
                        _869 = fp_c3_1._m0[16].z;
                    }
                    float _875 = _869;
                    if (!_773)
                    {
                        _873 = fp_c3_1._m0[19].x;
                    }
                    float _877 = _873;
                    uint _1055;
                    uint _1057;
                    uint _1059;
                    if (_819)
                    {
                        float _6551 = _859 + _853;
                        float _879 = _6551;
                        float _6553 = _877 * 3.0;
                        float _881 = _6553;
                        float _6556 = _861 + _855;
                        float _883 = _6556;
                        float _6558 = _851 * 3.0;
                        float _885 = _6558;
                        float _887 = -_881;
                        bool _889 = _879 <= _887;
                        bool _891 = _879 >= 1.0;
                        bool _893 = _891 || _889;
                        bool _895 = _883 >= 1.0;
                        bool _897 = _895 || _893;
                        float _899 = -_885;
                        bool _901 = _883 <= _899;
                        bool _903 = _901 || _897;
                        uint _905 = floatBitsToUint(_885);
                        if (_903)
                        {
                            uint _907 = uint(int(uint(floatBitsToInt(_885)) >> uint(16)));
                            int _909 = int(_907) << 16;
                            _905 = uint(_909);
                        }
                        uint _911 = _905;
                        uint _913 = _911;
                        uint _915 = 0u;
                        if (!_903)
                        {
                            float _6603 = _879 + _877;
                            float _917 = _6603;
                            float _6606 = _883 + _851;
                            float _919 = _6606;
                            float _6608 = _883 + (-0.0);
                            float _921 = _6608;
                            float _923 = clamp(_921, 0.0, 1.0);
                            float _6612 = _879 + (-0.0);
                            float _925 = _6612;
                            float _927 = clamp(_925, 0.0, 1.0);
                            float _929 = min(_863, 1.0);
                            float _6619 = _917 + _877;
                            float _931 = _6619;
                            float _6621 = _917 + (-0.0);
                            float _933 = _6621;
                            float _935 = clamp(_933, 0.0, 1.0);
                            float _937 = fma(_923, _847, _849);
                            float _939 = fma(_927, _845, _875);
                            float _6633 = _931 + (-0.0);
                            float _941 = _6633;
                            float _943 = clamp(_941, 0.0, 1.0);
                            float _945 = texture(fp_t_tcb_C, vec3(vec2(_939, _937), _929));
                            float _6644 = _931 + _877;
                            float _947 = _6644;
                            float _949 = clamp(_947, 0.0, 1.0);
                            float _6648 = _919 + (-0.0);
                            float _951 = _6648;
                            float _953 = clamp(_951, 0.0, 1.0);
                            float _955 = fma(_935, _845, _875);
                            float _957 = fma(_943, _845, _875);
                            float _959 = fma(_949, _845, _875);
                            float _961 = fma(_953, _847, _849);
                            float _963 = texture(fp_t_tcb_C, vec3(vec2(_955, _937), _929));
                            float _965 = texture(fp_t_tcb_C, vec3(vec2(_957, _937), _929));
                            float _967 = texture(fp_t_tcb_C, vec3(vec2(_959, _937), _929));
                            float _969 = texture(fp_t_tcb_C, vec3(vec2(_939, _961), _929));
                            float _971 = texture(fp_t_tcb_C, vec3(vec2(_955, _961), _929));
                            float _6699 = _919 + _851;
                            float _973 = _6699;
                            float _6701 = _973 + (-0.0);
                            float _975 = _6701;
                            float _977 = clamp(_975, 0.0, 1.0);
                            float _6706 = _973 + _851;
                            float _979 = _6706;
                            float _981 = texture(fp_t_tcb_C, vec3(vec2(_957, _961), _929));
                            float _983 = fma(_977, _847, _849);
                            float _6718 = _979 + (-0.0);
                            float _985 = _6718;
                            float _987 = clamp(_985, 0.0, 1.0);
                            float _989 = fma(_987, _847, _849);
                            float _991 = texture(fp_t_tcb_C, vec3(vec2(_959, _961), _929));
                            float _993 = texture(fp_t_tcb_C, vec3(vec2(_939, _983), _929));
                            float _995 = texture(fp_t_tcb_C, vec3(vec2(_955, _983), _929));
                            float _997 = texture(fp_t_tcb_C, vec3(vec2(_957, _983), _929));
                            float _999 = texture(fp_t_tcb_C, vec3(vec2(_959, _983), _929));
                            float _1001 = texture(fp_t_tcb_C, vec3(vec2(_939, _989), _929));
                            float _1003 = texture(fp_t_tcb_C, vec3(vec2(_955, _989), _929));
                            float _1005 = texture(fp_t_tcb_C, vec3(vec2(_957, _989), _929));
                            float _1007 = texture(fp_t_tcb_C, vec3(vec2(_959, _989), _929));
                            float _6781 = _945 + _963;
                            float _1009 = _6781;
                            uint _1011 = packHalf2x16(vec2(_1009, 0.0));
                            float _6787 = _1009 + _965;
                            float _1013 = _6787;
                            float _6790 = _1013 + _967;
                            float _1015 = _6790;
                            float _6793 = _1015 + _969;
                            float _1017 = _6793;
                            float _6796 = _1017 + _971;
                            float _1019 = _6796;
                            uint _1021 = packHalf2x16(vec2(_1019, 0.0));
                            float _6802 = _1019 + _981;
                            float _1023 = _6802;
                            float _6805 = _1023 + _991;
                            float _1025 = _6805;
                            float _6808 = _1025 + _993;
                            float _1027 = _6808;
                            float _6811 = _1027 + _995;
                            float _1029 = _6811;
                            float _1031 = unpackHalf2x16(floatBitsToUint(_989)).y;
                            float _6818 = _1029 + _997;
                            float _1033 = _6818;
                            float _6821 = _1033 + _999;
                            float _1035 = _6821;
                            float _6824 = _1035 + _1001;
                            float _1037 = _6824;
                            float _6827 = _1037 + _1003;
                            float _1039 = _6827;
                            float _6830 = _1039 + _1005;
                            float _1041 = _6830;
                            float _6833 = _1041 + _1007;
                            float _1043 = _6833;
                            float _1045 = fma(_1043, -0.0625, _445);
                            uint _1047 = packHalf2x16(vec2(_1045, _1031));
                            _913 = _1047;
                            _915 = _1021;
                            _537 = _1011;
                        }
                        uint _1049 = _913;
                        uint _1051 = _915;
                        uint _1053 = _537;
                        _1055 = _1049;
                        _1057 = _1051;
                        _1059 = _1053;
                        _1061 = true;
                    }
                    else
                    {
                        float _6854 = _859 + _853;
                        float _1063 = _6854;
                        float _6856 = _877 * 3.0;
                        float _1065 = _6856;
                        float _6859 = _861 + _855;
                        float _1067 = _6859;
                        float _6861 = _851 * 3.0;
                        float _1069 = _6861;
                        float _1071 = -_1065;
                        bool _1073 = _1063 <= _1071;
                        bool _1075 = _1063 >= 1.0;
                        bool _1077 = _1075 || _1073;
                        bool _1079 = _1067 >= 1.0;
                        bool _1081 = _1079 || _1077;
                        float _1083 = -_1069;
                        bool _1085 = _1067 <= _1083;
                        bool _1087 = _1085 || _1081;
                        uint _1089 = floatBitsToUint(_1069);
                        if (_1087)
                        {
                            uint _1091 = uint(int(uint(floatBitsToInt(_1069)) >> uint(16)));
                            int _1093 = int(_1091) << 16;
                            _1089 = uint(_1093);
                        }
                        uint _1095 = _1089;
                        uint _1097 = _1095;
                        uint _1099 = 0u;
                        if (!_1087)
                        {
                            float _6906 = _1063 + _877;
                            float _1101 = _6906;
                            float _6909 = _1067 + _851;
                            float _1103 = _6909;
                            float _6911 = _1067 + (-0.0);
                            float _1105 = _6911;
                            float _1107 = clamp(_1105, 0.0, 1.0);
                            float _6915 = _1063 + (-0.0);
                            float _1109 = _6915;
                            float _1111 = clamp(_1109, 0.0, 1.0);
                            float _1113 = min(_863, 1.0);
                            float _6922 = _1101 + _877;
                            float _1115 = _6922;
                            float _6924 = _1101 + (-0.0);
                            float _1117 = _6924;
                            float _1119 = clamp(_1117, 0.0, 1.0);
                            float _1121 = fma(_1107, _847, _849);
                            float _1123 = fma(_1111, _845, _875);
                            float _6936 = _1115 + (-0.0);
                            float _1125 = _6936;
                            float _1127 = clamp(_1125, 0.0, 1.0);
                            float _1129 = texture(fp_t_tcb_E, vec3(vec2(_1123, _1121), _1113));
                            float _6947 = _1115 + _877;
                            float _1131 = _6947;
                            float _1133 = clamp(_1131, 0.0, 1.0);
                            float _6951 = _1103 + (-0.0);
                            float _1135 = _6951;
                            float _1137 = clamp(_1135, 0.0, 1.0);
                            float _1139 = fma(_1119, _845, _875);
                            float _1141 = fma(_1127, _845, _875);
                            float _1143 = fma(_1133, _845, _875);
                            float _1145 = fma(_1137, _847, _849);
                            float _1147 = texture(fp_t_tcb_E, vec3(vec2(_1139, _1121), _1113));
                            float _1149 = texture(fp_t_tcb_E, vec3(vec2(_1141, _1121), _1113));
                            float _1151 = texture(fp_t_tcb_E, vec3(vec2(_1143, _1121), _1113));
                            float _1153 = texture(fp_t_tcb_E, vec3(vec2(_1123, _1145), _1113));
                            float _1155 = texture(fp_t_tcb_E, vec3(vec2(_1139, _1145), _1113));
                            float _7002 = _1103 + _851;
                            float _1157 = _7002;
                            float _7004 = _1157 + (-0.0);
                            float _1159 = _7004;
                            float _1161 = clamp(_1159, 0.0, 1.0);
                            float _7009 = _1157 + _851;
                            float _1163 = _7009;
                            float _1165 = texture(fp_t_tcb_E, vec3(vec2(_1141, _1145), _1113));
                            float _1167 = fma(_1161, _847, _849);
                            float _7021 = _1163 + (-0.0);
                            float _1169 = _7021;
                            float _1171 = clamp(_1169, 0.0, 1.0);
                            float _1173 = fma(_1171, _847, _849);
                            float _1175 = texture(fp_t_tcb_E, vec3(vec2(_1143, _1145), _1113));
                            float _1177 = texture(fp_t_tcb_E, vec3(vec2(_1123, _1167), _1113));
                            float _1179 = texture(fp_t_tcb_E, vec3(vec2(_1139, _1167), _1113));
                            float _1181 = texture(fp_t_tcb_E, vec3(vec2(_1141, _1167), _1113));
                            float _1183 = texture(fp_t_tcb_E, vec3(vec2(_1143, _1167), _1113));
                            float _1185 = texture(fp_t_tcb_E, vec3(vec2(_1123, _1173), _1113));
                            float _1187 = texture(fp_t_tcb_E, vec3(vec2(_1139, _1173), _1113));
                            float _1189 = texture(fp_t_tcb_E, vec3(vec2(_1141, _1173), _1113));
                            float _1191 = texture(fp_t_tcb_E, vec3(vec2(_1143, _1173), _1113));
                            float _7084 = _1129 + _1147;
                            float _1193 = _7084;
                            uint _1195 = packHalf2x16(vec2(_1193, 0.0));
                            float _7090 = _1193 + _1149;
                            float _1197 = _7090;
                            float _7093 = _1197 + _1151;
                            float _1199 = _7093;
                            float _7096 = _1199 + _1153;
                            float _1201 = _7096;
                            float _7099 = _1201 + _1155;
                            float _1203 = _7099;
                            uint _1205 = packHalf2x16(vec2(_1203, 0.0));
                            float _7105 = _1203 + _1165;
                            float _1207 = _7105;
                            float _7108 = _1207 + _1175;
                            float _1209 = _7108;
                            float _7111 = _1209 + _1177;
                            float _1211 = _7111;
                            float _7114 = _1211 + _1179;
                            float _1213 = _7114;
                            float _1215 = unpackHalf2x16(floatBitsToUint(_1173)).y;
                            float _7121 = _1213 + _1181;
                            float _1217 = _7121;
                            float _7124 = _1217 + _1183;
                            float _1219 = _7124;
                            float _7127 = _1219 + _1185;
                            float _1221 = _7127;
                            float _7130 = _1221 + _1187;
                            float _1223 = _7130;
                            float _7133 = _1223 + _1189;
                            float _1225 = _7133;
                            float _7136 = _1225 + _1191;
                            float _1227 = _7136;
                            float _1229 = fma(_1227, -0.0625, _445);
                            uint _1231 = packHalf2x16(vec2(_1229, _1215));
                            _1097 = _1231;
                            _1099 = _1205;
                            _539 = _1195;
                        }
                        uint _1233 = _1097;
                        uint _1235 = _1099;
                        uint _1237 = _539;
                        _1055 = _1233;
                        _1057 = _1235;
                        _1059 = _1237;
                    }
                    _1061 = false;
                    uint _1239 = _1055;
                    uint _1241 = _1057;
                    uint _1243 = _1059;
                    float _1245 = unpackHalf2x16(_1239).x;
                    float _1247 = -_1245;
                    float _7164 = _1247 + 1.0;
                    float _1249 = _7164;
                    _567 = _1249;
                    _759 = _1241;
                    _569 = _1243;
                    _761 = true;
                }
                else
                {
                    float _7172 = _156 * fp_c3_1._m0[35].x;
                    float _1251 = _7172;
                    float _1253 = _69[1].w;
                    float _7178 = _511 * fp_c3_1._m0[18].x;
                    float _1255 = _7178;
                    float _1257 = fma(_154, fp_c3_1._m0[34].x, _1251);
                    float _1259 = fma(_513, fp_c3_1._m0[18].y, _1255);
                    float _7191 = 3.0 * fp_c3_1._m0[38].x;
                    float _1261 = _7191;
                    float _7194 = 3.0 * fp_c3_1._m0[38].y;
                    float _1263 = _7194;
                    float _1265 = fma(_158, fp_c3_1._m0[36].x, _1257);
                    float _1267 = fma(_517, fp_c3_1._m0[18].z, _1259);
                    float _1269 = fma(_519, fp_c3_1._m0[18].w, _1267);
                    bool _1271 = _1269 > 0.0;
                    float _7215 = _156 * fp_c3_1._m0[35].w;
                    float _1273 = _7215;
                    float _1275 = fma(_1253, fp_c3_1._m0[37].x, _1265);
                    float _1277 = 0.0;
                    float _1279 = _1261;
                    float _1281 = _1263;
                    if (_1271)
                    {
                        float _1283 = _69[3].x;
                        _1277 = _1283;
                    }
                    float _1285 = _1277;
                    float _7233 = _156 * fp_c3_1._m0[35].y;
                    float _1287 = _7233;
                    float _1289 = 0.0;
                    float _1291 = _1285;
                    if (_1271)
                    {
                        float _1293 = _69[3].y;
                        _1289 = _1293;
                    }
                    float _1295 = _1289;
                    float _1297 = _1295;
                    if (!_1271)
                    {
                        _541 = 0.0;
                    }
                    float _1299 = _541;
                    float _1301 = 0.0;
                    if (_1271)
                    {
                        float _1303 = _69[3].z;
                        _1301 = _1303;
                    }
                    float _1305 = _1301;
                    float _1307 = fma(_154, fp_c3_1._m0[34].w, _1273);
                    float _1309 = _1305;
                    if (!_1271)
                    {
                        _1291 = _511;
                    }
                    float _1311 = _1291;
                    if (!_1271)
                    {
                        _1297 = _513;
                    }
                    float _1313 = _1297;
                    float _1315 = -fp_c3_1._m0[38].x;
                    float _1317 = fma(1.5, _1315, _1275);
                    float _1319 = fma(_154, fp_c3_1._m0[34].y, _1287);
                    bool _1321 = _1299 == 0.0;
                    float _1323 = fma(_158, fp_c3_1._m0[36].w, _1307);
                    float _1325 = _1323;
                    if (!_1271)
                    {
                        _1309 = _517;
                    }
                    float _1327 = _1309;
                    float _1329 = -_1261;
                    bool _1331 = _1317 <= _1329;
                    if (_1271)
                    {
                        float _1333 = _69[3].w;
                        _1279 = _1333;
                    }
                    float _1335 = _1279;
                    float _1337 = fma(_158, fp_c3_1._m0[36].y, _1319);
                    float _1339 = _1335;
                    if (!_1271)
                    {
                        _1339 = _519;
                    }
                    float _1341 = _1339;
                    float _1343 = fma(_1253, fp_c3_1._m0[37].y, _1337);
                    bool _1345 = _1317 >= 1.0;
                    bool _1347 = _1345 || _1331;
                    float _1349 = -fp_c3_1._m0[38].y;
                    float _1351 = fma(1.5, _1349, _1343);
                    float _7341 = _156 * fp_c3_1._m0[35].z;
                    float _1353 = _7341;
                    float _1355 = fma(_154, fp_c3_1._m0[34].z, _1353);
                    bool _1357 = _1351 >= 1.0;
                    bool _1359 = _1357 || _1347;
                    float _7353 = SAFE_DIV(1.0, _1341);
                    float _1361 = _7353;
                    float _1363 = fma(_158, fp_c3_1._m0[36].z, _1355);
                    float _1365 = fma(_1253, fp_c3_1._m0[37].z, _1363);
                    float _1367 = fma(_1253, fp_c3_1._m0[37].w, _1323);
                    float _1369 = -_1263;
                    bool _1371 = _1351 <= _1369;
                    bool _1373 = _1371 || _1359;
                    float _7379 = _1361 * _1311;
                    float _1375 = _7379;
                    float _7382 = _1361 * _1313;
                    float _1377 = _7382;
                    float _7385 = _1361 * _1327;
                    float _1379 = _7385;
                    uint _1381 = 0u;
                    float _1383 = _1367;
                    if (_1373)
                    {
                        uint _1385 = uint(int(uint(0) >> uint(16)));
                        int _1387 = int(_1385) << 16;
                        _1381 = uint(_1387);
                    }
                    uint _1389 = _1381;
                    uint _1391 = _1389;
                    uint _1393 = 0u;
                    if (!_1373)
                    {
                        float _1395 = min(_1365, _1367);
                        float _7406 = SAFE_DIV(1.0, _1367);
                        float _1397 = _7406;
                        float _7410 = _1317 + fp_c3_1._m0[38].x;
                        float _1399 = _7410;
                        float _7414 = _1351 + fp_c3_1._m0[38].y;
                        float _1401 = _7414;
                        float _1403 = min(_1367, _1395);
                        float _7421 = _1399 + fp_c3_1._m0[38].x;
                        float _1405 = _7421;
                        float _7424 = _1351 * _1397;
                        float _1407 = _7424;
                        float _7427 = _1399 * _1397;
                        float _1409 = _7427;
                        float _7430 = _1403 * _1397;
                        float _1411 = _7430;
                        float _7433 = _1317 * _1397;
                        float _1413 = _7433;
                        float _7437 = _1405 + fp_c3_1._m0[38].x;
                        float _1415 = _7437;
                        float _7440 = _1405 * _1397;
                        float _1417 = _7440;
                        float _1419 = texture(fp_t_tcb_16, vec3(vec2(_1409, _1407), _1411));
                        float _1421 = texture(fp_t_tcb_16, vec3(vec2(_1413, _1407), _1411));
                        float _1423 = texture(fp_t_tcb_16, vec3(vec2(_1417, _1407), _1411));
                        float _7461 = _1415 * _1397;
                        float _1425 = _7461;
                        float _7464 = _1401 * _1397;
                        float _1427 = _7464;
                        float _1429 = texture(fp_t_tcb_16, vec3(vec2(_1425, _1407), _1411));
                        float _1431 = texture(fp_t_tcb_16, vec3(vec2(_1413, _1427), _1411));
                        float _1433 = texture(fp_t_tcb_16, vec3(vec2(_1409, _1427), _1411));
                        uint _1435 = packHalf2x16(vec2(_1433, 0.0));
                        float _7489 = _1401 + fp_c3_1._m0[38].y;
                        float _1437 = _7489;
                        float _1439 = texture(fp_t_tcb_16, vec3(vec2(_1417, _1427), _1411));
                        uint _1441 = packHalf2x16(vec2(_1439, 0.0));
                        float _1443 = texture(fp_t_tcb_16, vec3(vec2(_1425, _1427), _1411));
                        float _7507 = _1437 * _1397;
                        float _1445 = _7507;
                        float _1447 = texture(fp_t_tcb_16, vec3(vec2(_1409, _1445), _1411));
                        float _1449 = texture(fp_t_tcb_16, vec3(vec2(_1413, _1445), _1411));
                        float _1451 = texture(fp_t_tcb_16, vec3(vec2(_1417, _1445), _1411));
                        float _1453 = texture(fp_t_tcb_16, vec3(vec2(_1425, _1445), _1411));
                        float _7535 = _1437 + fp_c3_1._m0[38].y;
                        float _1455 = _7535;
                        float _7538 = _1455 * _1397;
                        float _1457 = _7538;
                        float _1459 = texture(fp_t_tcb_16, vec3(vec2(_1413, _1457), _1411));
                        float _1461 = texture(fp_t_tcb_16, vec3(vec2(_1409, _1457), _1411));
                        float _1463 = texture(fp_t_tcb_16, vec3(vec2(_1417, _1457), _1411));
                        uint _1465 = packHalf2x16(vec2(_1463, 0.0));
                        float _1467 = texture(fp_t_tcb_16, vec3(vec2(_1425, _1457), _1411));
                        float _7568 = _1421 + _1419;
                        float _1469 = _7568;
                        float _7571 = _1469 + _1423;
                        float _1471 = _7571;
                        float _7574 = _1471 + _1429;
                        float _1473 = _7574;
                        float _7577 = _1473 + _1431;
                        float _1475 = _7577;
                        float _7580 = _1475 + _1433;
                        float _1477 = _7580;
                        float _7583 = _1477 + _1439;
                        float _1479 = _7583;
                        float _7586 = _1479 + _1443;
                        float _1481 = _7586;
                        uint _1483 = packHalf2x16(vec2(_1481, 0.0));
                        float _7592 = _1481 + _1449;
                        float _1485 = _7592;
                        float _7595 = _1485 + _1447;
                        float _1487 = _7595;
                        float _7598 = _1487 + _1451;
                        float _1489 = _7598;
                        float _7601 = _1489 + _1453;
                        float _1491 = _7601;
                        uint _1493 = packHalf2x16(vec2(_1491, 0.0));
                        float _7607 = _1491 + _1459;
                        float _1495 = _7607;
                        float _7610 = _1495 + _1461;
                        float _1497 = _7610;
                        float _7613 = _1497 + _1463;
                        float _1499 = _7613;
                        uint _1501 = packHalf2x16(vec2(_1485, _1499));
                        float _7620 = _1499 + _1467;
                        float _1503 = _7620;
                        float _1505 = fma(_1503, -0.0625, _445);
                        float _1507 = unpackHalf2x16(floatBitsToUint(_1411)).y;
                        uint _1509 = packHalf2x16(vec2(_1505, _1507));
                        _1391 = _1509;
                        _364 = _1409;
                        _1281 = uintBitsToFloat(_1483);
                        _366 = uintBitsToFloat(_1441);
                        _368 = uintBitsToFloat(_1493);
                        _543 = _1457;
                        _545 = uintBitsToFloat(_1465);
                        _1383 = uintBitsToFloat(_1501);
                        _1325 = _1425;
                        _1393 = _1435;
                    }
                    uint _1511 = _1391;
                    float _1513 = _364;
                    float _1515 = _1281;
                    float _1517 = _366;
                    float _1519 = _368;
                    float _1521 = _543;
                    float _1523 = _545;
                    float _1525 = _1383;
                    float _1527 = _1325;
                    uint _1529 = _1393;
                    float _1531 = _1525;
                    float _1533 = _1521;
                    float _1535 = _1527;
                    float _1537 = _1523;
                    float _1539 = _1515;
                    float _1541 = _1519;
                    float _1543 = _1513;
                    float _1545 = _1517;
                    uint _1547 = _1529;
                    uint _1549 = _1529;
                    if (_1271)
                    {
                        _1531 = fp_c3_1._m0[17].x;
                    }
                    float _1551 = _1531;
                    float _1553 = _1551;
                    if (_1271)
                    {
                        _1533 = fp_c3_1._m0[17].y;
                    }
                    float _1555 = _1533;
                    float _1557 = _1555;
                    if (_1271)
                    {
                        _1535 = fp_c3_1._m0[17].z;
                    }
                    float _1559 = _1535;
                    float _1561 = _1559;
                    if (_1271)
                    {
                        _1537 = fp_c3_1._m0[17].w;
                    }
                    float _1563 = _1537;
                    float _1565 = _1563;
                    if (_1271)
                    {
                        _1539 = fp_c3_1._m0[20].x;
                    }
                    float _1567 = _1539;
                    float _1569 = _1567;
                    if (_1271)
                    {
                        _1541 = fp_c3_1._m0[20].y;
                    }
                    float _1571 = _1541;
                    float _1573 = _1571;
                    if (_1271)
                    {
                        _1543 = fp_c3_1._m0[22].x;
                    }
                    float _1575 = _1543;
                    float _1577 = _1575;
                    if (_1271)
                    {
                        _1545 = fp_c3_1._m0[22].y;
                    }
                    float _1579 = _1545;
                    float _1581 = _1579;
                    if (!_1271)
                    {
                        _1553 = fp_c3_1._m0[16].x;
                    }
                    float _1583 = _1553;
                    if (!_1271)
                    {
                        _1557 = fp_c3_1._m0[16].y;
                    }
                    float _1585 = _1557;
                    uint _1587 = floatBitsToUint(_1585);
                    uint _1589 = floatBitsToUint(_1585);
                    if (!_1271)
                    {
                        _1561 = fp_c3_1._m0[16].z;
                    }
                    float _1591 = _1561;
                    if (!_1271)
                    {
                        _1565 = fp_c3_1._m0[16].w;
                    }
                    float _1593 = _1565;
                    if (!_1271)
                    {
                        _1569 = fp_c3_1._m0[19].x;
                    }
                    float _1595 = _1569;
                    if (!_1271)
                    {
                        _1573 = fp_c3_1._m0[19].y;
                    }
                    float _1597 = _1573;
                    if (!_1271)
                    {
                        _1577 = fp_c3_1._m0[21].x;
                    }
                    float _1599 = _1577;
                    if (!_1271)
                    {
                        _1581 = fp_c3_1._m0[21].y;
                    }
                    float _1601 = _1581;
                    float _1603 = unpackHalf2x16(_1511).x;
                    float _1605 = -_1603;
                    float _7790 = _1605 + 1.0;
                    float _1607 = _7790;
                    uint _1777;
                    uint _1779;
                    uint _1781;
                    if (_1321)
                    {
                        float _7795 = _1375 + _1599;
                        float _1609 = _7795;
                        float _7797 = _1595 * 3.0;
                        float _1611 = _7797;
                        float _7800 = _1377 + _1601;
                        float _1613 = _7800;
                        float _1615 = -_1611;
                        bool _1617 = _1609 <= _1615;
                        float _7807 = _1597 * 3.0;
                        float _1619 = _7807;
                        bool _1621 = _1609 >= 1.0;
                        bool _1623 = _1621 || _1617;
                        bool _1625 = _1613 >= 1.0;
                        bool _1627 = _1625 || _1623;
                        float _1629 = -_1619;
                        bool _1631 = _1613 <= _1629;
                        bool _1633 = _1631 || _1627;
                        uint _1635 = floatBitsToUint(_1619);
                        if (_1633)
                        {
                            uint _1637 = uint(int(uint(floatBitsToInt(_1619)) >> uint(16)));
                            int _1639 = int(_1637) << 16;
                            _1635 = uint(_1639);
                        }
                        uint _1641 = _1635;
                        uint _1643 = _1641;
                        if (!_1633)
                        {
                            float _7847 = _1609 + _1595;
                            float _1645 = _7847;
                            float _7850 = _1613 + _1597;
                            float _1647 = _7850;
                            float _7852 = _1613 + (-0.0);
                            float _1649 = _7852;
                            float _1651 = clamp(_1649, 0.0, 1.0);
                            float _7856 = _1609 + (-0.0);
                            float _1653 = _7856;
                            float _1655 = clamp(_1653, 0.0, 1.0);
                            float _1657 = min(_1379, 1.0);
                            float _7863 = _1645 + _1595;
                            float _1659 = _7863;
                            float _7865 = _1645 + (-0.0);
                            float _1661 = _7865;
                            float _1663 = clamp(_1661, 0.0, 1.0);
                            float _1665 = fma(_1651, _1585, _1593);
                            float _1667 = fma(_1655, _1583, _1591);
                            float _1669 = texture(fp_t_tcb_C, vec3(vec2(_1667, _1665), _1657));
                            float _7883 = _1659 + (-0.0);
                            float _1671 = _7883;
                            float _1673 = clamp(_1671, 0.0, 1.0);
                            float _1675 = fma(_1663, _1583, _1591);
                            float _7892 = _1659 + _1595;
                            float _1677 = _7892;
                            float _1679 = clamp(_1677, 0.0, 1.0);
                            float _1681 = texture(fp_t_tcb_C, vec3(vec2(_1675, _1665), _1657));
                            float _1683 = fma(_1673, _1583, _1591);
                            float _7906 = _1647 + (-0.0);
                            float _1685 = _7906;
                            float _1687 = clamp(_1685, 0.0, 1.0);
                            float _1689 = texture(fp_t_tcb_C, vec3(vec2(_1683, _1665), _1657));
                            float _1691 = fma(_1679, _1583, _1591);
                            float _1693 = texture(fp_t_tcb_C, vec3(vec2(_1691, _1665), _1657));
                            float _1695 = fma(_1687, _1585, _1593);
                            float _1697 = texture(fp_t_tcb_C, vec3(vec2(_1667, _1695), _1657));
                            float _1699 = texture(fp_t_tcb_C, vec3(vec2(_1675, _1695), _1657));
                            float _7943 = _1647 + _1597;
                            float _1701 = _7943;
                            float _7946 = _1701 + _1597;
                            float _1703 = _7946;
                            float _1705 = texture(fp_t_tcb_C, vec3(vec2(_1683, _1695), _1657));
                            float _7954 = _1701 + (-0.0);
                            float _1707 = _7954;
                            float _1709 = clamp(_1707, 0.0, 1.0);
                            float _1711 = texture(fp_t_tcb_C, vec3(vec2(_1691, _1695), _1657));
                            float _1713 = fma(_1709, _1585, _1593);
                            float _1715 = texture(fp_t_tcb_C, vec3(vec2(_1675, _1713), _1657));
                            float _1717 = texture(fp_t_tcb_C, vec3(vec2(_1667, _1713), _1657));
                            float _1719 = texture(fp_t_tcb_C, vec3(vec2(_1683, _1713), _1657));
                            float _7986 = _1703 + (-0.0);
                            float _1721 = _7986;
                            float _1723 = clamp(_1721, 0.0, 1.0);
                            float _1725 = fma(_1723, _1585, _1593);
                            float _1727 = texture(fp_t_tcb_C, vec3(vec2(_1691, _1713), _1657));
                            float _1729 = texture(fp_t_tcb_C, vec3(vec2(_1667, _1725), _1657));
                            float _1731 = texture(fp_t_tcb_C, vec3(vec2(_1675, _1725), _1657));
                            float _1733 = texture(fp_t_tcb_C, vec3(vec2(_1683, _1725), _1657));
                            float _1735 = texture(fp_t_tcb_C, vec3(vec2(_1691, _1725), _1657));
                            float _8025 = _1669 + _1681;
                            float _1737 = _8025;
                            float _8028 = _1737 + _1689;
                            float _1739 = _8028;
                            float _8031 = _1739 + _1693;
                            float _1741 = _8031;
                            float _8034 = _1741 + _1697;
                            float _1743 = _8034;
                            float _8037 = _1743 + _1699;
                            float _1745 = _8037;
                            float _8040 = _1745 + _1705;
                            float _1747 = _8040;
                            float _8043 = _1747 + _1711;
                            float _1749 = _8043;
                            float _8046 = _1749 + _1717;
                            float _1751 = _8046;
                            float _8049 = _1751 + _1715;
                            float _1753 = _8049;
                            float _8052 = _1753 + _1719;
                            float _1755 = _8052;
                            float _8055 = _1755 + _1727;
                            float _1757 = _8055;
                            float _8058 = _1757 + _1729;
                            float _1759 = _8058;
                            float _8061 = _1759 + _1731;
                            float _1761 = _8061;
                            float _8064 = _1761 + _1733;
                            float _1763 = _8064;
                            float _8067 = _1763 + _1735;
                            float _1765 = _8067;
                            float _1767 = fma(_1765, -0.0625, _445);
                            uint _1769 = packHalf2x16(vec2(_1767, 0.0));
                            _1643 = _1769;
                            _1547 = floatBitsToUint(_1723);
                            _1587 = floatBitsToUint(_1725);
                        }
                        uint _1771 = _1643;
                        uint _1773 = _1547;
                        uint _1775 = _1587;
                        _1777 = _1771;
                        _1779 = _1773;
                        _1781 = _1775;
                        _1783 = true;
                    }
                    else
                    {
                        float _8089 = _1375 + _1599;
                        float _1785 = _8089;
                        float _8091 = _1595 * 3.0;
                        float _1787 = _8091;
                        float _8094 = _1377 + _1601;
                        float _1789 = _8094;
                        float _1791 = -_1787;
                        bool _1793 = _1785 <= _1791;
                        float _8101 = _1597 * 3.0;
                        float _1795 = _8101;
                        bool _1797 = _1785 >= 1.0;
                        bool _1799 = _1797 || _1793;
                        bool _1801 = _1789 >= 1.0;
                        bool _1803 = _1801 || _1799;
                        float _1805 = -_1795;
                        bool _1807 = _1789 <= _1805;
                        bool _1809 = _1807 || _1803;
                        uint _1811 = floatBitsToUint(_1795);
                        if (_1809)
                        {
                            uint _1813 = uint(int(uint(floatBitsToInt(_1795)) >> uint(16)));
                            int _1815 = int(_1813) << 16;
                            _1811 = uint(_1815);
                        }
                        uint _1817 = _1811;
                        uint _1819 = _1817;
                        if (!_1809)
                        {
                            float _8141 = _1785 + _1595;
                            float _1821 = _8141;
                            float _8144 = _1789 + _1597;
                            float _1823 = _8144;
                            float _8146 = _1789 + (-0.0);
                            float _1825 = _8146;
                            float _1827 = clamp(_1825, 0.0, 1.0);
                            float _8150 = _1785 + (-0.0);
                            float _1829 = _8150;
                            float _1831 = clamp(_1829, 0.0, 1.0);
                            float _1833 = min(_1379, 1.0);
                            float _8157 = _1821 + _1595;
                            float _1835 = _8157;
                            float _8159 = _1821 + (-0.0);
                            float _1837 = _8159;
                            float _1839 = clamp(_1837, 0.0, 1.0);
                            float _1841 = fma(_1827, _1585, _1593);
                            float _1843 = fma(_1831, _1583, _1591);
                            float _1845 = texture(fp_t_tcb_E, vec3(vec2(_1843, _1841), _1833));
                            float _8177 = _1835 + (-0.0);
                            float _1847 = _8177;
                            float _1849 = clamp(_1847, 0.0, 1.0);
                            float _1851 = fma(_1839, _1583, _1591);
                            float _8186 = _1835 + _1595;
                            float _1853 = _8186;
                            float _1855 = clamp(_1853, 0.0, 1.0);
                            float _1857 = texture(fp_t_tcb_E, vec3(vec2(_1851, _1841), _1833));
                            float _1859 = fma(_1849, _1583, _1591);
                            float _8200 = _1823 + (-0.0);
                            float _1861 = _8200;
                            float _1863 = clamp(_1861, 0.0, 1.0);
                            float _1865 = texture(fp_t_tcb_E, vec3(vec2(_1859, _1841), _1833));
                            float _1867 = fma(_1855, _1583, _1591);
                            float _1869 = texture(fp_t_tcb_E, vec3(vec2(_1867, _1841), _1833));
                            float _1871 = fma(_1863, _1585, _1593);
                            float _1873 = texture(fp_t_tcb_E, vec3(vec2(_1843, _1871), _1833));
                            float _1875 = texture(fp_t_tcb_E, vec3(vec2(_1851, _1871), _1833));
                            uint _1877 = packHalf2x16(vec2(_1875, 0.0));
                            float _8240 = _1823 + _1597;
                            float _1879 = _8240;
                            float _1881 = texture(fp_t_tcb_E, vec3(vec2(_1859, _1871), _1833));
                            float _8249 = _1879 + _1597;
                            float _1883 = _8249;
                            float _8251 = _1879 + (-0.0);
                            float _1885 = _8251;
                            float _1887 = clamp(_1885, 0.0, 1.0);
                            float _1889 = texture(fp_t_tcb_E, vec3(vec2(_1867, _1871), _1833));
                            float _1891 = fma(_1887, _1585, _1593);
                            float _1893 = texture(fp_t_tcb_E, vec3(vec2(_1851, _1891), _1833));
                            float _1895 = texture(fp_t_tcb_E, vec3(vec2(_1843, _1891), _1833));
                            float _1897 = texture(fp_t_tcb_E, vec3(vec2(_1859, _1891), _1833));
                            float _1899 = texture(fp_t_tcb_E, vec3(vec2(_1867, _1891), _1833));
                            float _8289 = _1883 + (-0.0);
                            float _1901 = _8289;
                            float _1903 = clamp(_1901, 0.0, 1.0);
                            float _1905 = fma(_1903, _1585, _1593);
                            float _1907 = texture(fp_t_tcb_E, vec3(vec2(_1843, _1905), _1833));
                            float _1909 = texture(fp_t_tcb_E, vec3(vec2(_1851, _1905), _1833));
                            float _1911 = texture(fp_t_tcb_E, vec3(vec2(_1859, _1905), _1833));
                            float _1913 = texture(fp_t_tcb_E, vec3(vec2(_1867, _1905), _1833));
                            float _8322 = _1845 + _1857;
                            float _1915 = _8322;
                            float _8325 = _1915 + _1865;
                            float _1917 = _8325;
                            float _8328 = _1917 + _1869;
                            float _1919 = _8328;
                            float _8331 = _1919 + _1873;
                            float _1921 = _8331;
                            float _8334 = _1921 + _1875;
                            float _1923 = _8334;
                            float _8337 = _1923 + _1881;
                            float _1925 = _8337;
                            float _8340 = _1925 + _1889;
                            float _1927 = _8340;
                            float _8343 = _1927 + _1895;
                            float _1929 = _8343;
                            float _8346 = _1929 + _1893;
                            float _1931 = _8346;
                            float _8349 = _1931 + _1897;
                            float _1933 = _8349;
                            float _8352 = _1933 + _1899;
                            float _1935 = _8352;
                            float _8355 = _1935 + _1907;
                            float _1937 = _8355;
                            float _8358 = _1937 + _1909;
                            float _1939 = _8358;
                            float _8361 = _1939 + _1911;
                            float _1941 = _8361;
                            float _8364 = _1941 + _1913;
                            float _1943 = _8364;
                            float _1945 = fma(_1943, -0.0625, _445);
                            uint _1947 = packHalf2x16(vec2(_1945, 0.0));
                            _1819 = _1947;
                            _1549 = _1877;
                            _1589 = floatBitsToUint(_1905);
                        }
                        uint _1949 = _1819;
                        uint _1951 = _1549;
                        uint _1953 = _1589;
                        _1777 = _1949;
                        _1779 = _1951;
                        _1781 = _1953;
                    }
                    _1783 = false;
                    uint _1955 = _1777;
                    uint _1957 = _1779;
                    uint _1959 = _1781;
                    float _1961 = -_1607;
                    float _1963 = unpackHalf2x16(_1955).x;
                    float _1965 = -_1963;
                    float _8395 = _1961 + _1965;
                    float _1967 = _8395;
                    float _1969 = fma(_1967, _529, _529);
                    float _8402 = _1607 + _1969;
                    float _1971 = _8402;
                    _567 = _1971;
                    _759 = _1957;
                    _569 = _1959;
                    _761 = true;
                }
            }
        }
        else
        {
            bool _1973 = floatBitsToInt(fp_c3_1._m0[39].x) == 1;
            if (_1973)
            {
                float _8418 = _156 * fp_c3_1._m0[35].x;
                float _1975 = _8418;
                float _1977 = _69[1].w;
                float _8424 = _156 * fp_c3_1._m0[35].y;
                float _1979 = _8424;
                float _8428 = _156 * fp_c3_1._m0[35].z;
                float _1981 = _8428;
                bool _1983 = _529 > 0.0;
                float _1985 = fma(_154, fp_c3_1._m0[34].x, _1975);
                float _1987 = fma(_154, fp_c3_1._m0[34].y, _1979);
                float _1989 = fma(_158, fp_c3_1._m0[36].x, _1985);
                float _1991 = fma(_158, fp_c3_1._m0[36].y, _1987);
                float _1993 = fma(_1977, fp_c3_1._m0[37].x, _1989);
                float _8458 = 3.0 * fp_c3_1._m0[38].x;
                float _1995 = _8458;
                float _1997 = fma(_1977, fp_c3_1._m0[37].y, _1991);
                float _8466 = 3.0 * fp_c3_1._m0[38].y;
                float _1999 = _8466;
                float _2001 = -fp_c3_1._m0[38].x;
                float _2003 = fma(1.5, _2001, _1993);
                float _2005 = -fp_c3_1._m0[38].y;
                float _2007 = fma(1.5, _2005, _1997);
                float _8482 = _156 * fp_c3_1._m0[35].w;
                float _2009 = _8482;
                float _2011 = -_1995;
                bool _2013 = _2003 <= _2011;
                float _2015 = fma(_154, fp_c3_1._m0[34].z, _1981);
                float _2017 = fma(_154, fp_c3_1._m0[34].w, _2009);
                float _2019 = fma(_158, fp_c3_1._m0[36].z, _2015);
                bool _2021 = _2003 >= 1.0;
                bool _2023 = _2021 || _2013;
                float _2025 = fma(_1977, fp_c3_1._m0[37].z, _2019);
                bool _2027 = _2007 >= 1.0;
                bool _2029 = _2027 || _2023;
                float _2031 = -_1999;
                bool _2033 = _2007 <= _2031;
                bool _2035 = _2033 || _2029;
                float _2037 = fma(_158, fp_c3_1._m0[36].w, _2017);
                float _2039 = fma(_1977, fp_c3_1._m0[37].w, _2037);
                uint _2041 = 0u;
                float _2043 = _1981;
                float _2045 = _2017;
                float _2047 = _2025;
                if (_2035)
                {
                    uint _2049 = uint(int(uint(0) >> uint(16)));
                    int _2051 = int(_2049) << 16;
                    _2041 = uint(_2051);
                }
                uint _2053 = _2041;
                uint _2055 = _2053;
                float _2057 = 0.0;
                if (!_2035)
                {
                    float _2059 = min(_2025, _2039);
                    float _8558 = SAFE_DIV(1.0, _2039);
                    float _2061 = _8558;
                    float _8562 = _2003 + fp_c3_1._m0[38].x;
                    float _2063 = _8562;
                    float _2065 = min(_2039, _2059);
                    float _8569 = _2063 + fp_c3_1._m0[38].x;
                    float _2067 = _8569;
                    float _8572 = _2007 * _2061;
                    float _2069 = _8572;
                    float _8575 = _2063 * _2061;
                    float _2071 = _8575;
                    float _8578 = _2065 * _2061;
                    float _2073 = _8578;
                    float _8581 = _2003 * _2061;
                    float _2075 = _8581;
                    float _8585 = _2067 + fp_c3_1._m0[38].x;
                    float _2077 = _8585;
                    float _8588 = _2067 * _2061;
                    float _2079 = _8588;
                    float _2081 = texture(fp_t_tcb_16, vec3(vec2(_2071, _2069), _2073));
                    float _2083 = texture(fp_t_tcb_16, vec3(vec2(_2075, _2069), _2073));
                    float _2085 = texture(fp_t_tcb_16, vec3(vec2(_2079, _2069), _2073));
                    float _8609 = _2077 * _2061;
                    float _2087 = _8609;
                    float _2089 = texture(fp_t_tcb_16, vec3(vec2(_2087, _2069), _2073));
                    float _8619 = _2007 + fp_c3_1._m0[38].y;
                    float _2091 = _8619;
                    float _8622 = _2091 * _2061;
                    float _2093 = _8622;
                    float _2095 = texture(fp_t_tcb_16, vec3(vec2(_2075, _2093), _2073));
                    float _2097 = texture(fp_t_tcb_16, vec3(vec2(_2071, _2093), _2073));
                    float _2099 = texture(fp_t_tcb_16, vec3(vec2(_2079, _2093), _2073));
                    float _2101 = texture(fp_t_tcb_16, vec3(vec2(_2087, _2093), _2073));
                    float _8650 = _2091 + fp_c3_1._m0[38].y;
                    float _2103 = _8650;
                    float _8653 = _2103 * _2061;
                    float _2105 = _8653;
                    float _2107 = texture(fp_t_tcb_16, vec3(vec2(_2071, _2105), _2073));
                    uint _2109 = packHalf2x16(vec2(_2107, 0.0));
                    float _2111 = texture(fp_t_tcb_16, vec3(vec2(_2079, _2105), _2073));
                    float _2113 = texture(fp_t_tcb_16, vec3(vec2(_2075, _2105), _2073));
                    float _8678 = _2103 + fp_c3_1._m0[38].y;
                    float _2115 = _8678;
                    float _8681 = _2115 * _2061;
                    float _2117 = _8681;
                    float _2119 = texture(fp_t_tcb_16, vec3(vec2(_2087, _2105), _2073));
                    float _2121 = texture(fp_t_tcb_16, vec3(vec2(_2075, _2117), _2073));
                    float _2123 = texture(fp_t_tcb_16, vec3(vec2(_2071, _2117), _2073));
                    uint _2125 = packHalf2x16(vec2(_2123, 0.0));
                    float _2127 = texture(fp_t_tcb_16, vec3(vec2(_2079, _2117), _2073));
                    uint _2129 = packHalf2x16(vec2(_2127, 0.0));
                    float _2131 = texture(fp_t_tcb_16, vec3(vec2(_2087, _2117), _2073));
                    float _8720 = _2083 + _2081;
                    float _2133 = _8720;
                    float _8723 = _2133 + _2085;
                    float _2135 = _8723;
                    float _8726 = _2135 + _2089;
                    float _2137 = _8726;
                    float _8729 = _2137 + _2095;
                    float _2139 = _8729;
                    uint _2141 = packHalf2x16(vec2(_2139, 0.0));
                    float _8735 = _2139 + _2097;
                    float _2143 = _8735;
                    float _8738 = _2143 + _2099;
                    float _2145 = _8738;
                    float _8741 = _2145 + _2101;
                    float _2147 = _8741;
                    uint _2149 = packHalf2x16(vec2(_2147, 0.0));
                    float _8747 = _2147 + _2113;
                    float _2151 = _8747;
                    float _8750 = _2151 + _2107;
                    float _2153 = _8750;
                    float _8753 = _2153 + _2111;
                    float _2155 = _8753;
                    uint _2157 = packHalf2x16(vec2(_2155, 0.0));
                    float _8759 = _2155 + _2119;
                    float _2159 = _8759;
                    float _8762 = _2159 + _2121;
                    float _2161 = _8762;
                    float _8765 = _2161 + _2123;
                    float _2163 = _8765;
                    float _8768 = _2163 + _2127;
                    float _2165 = _8768;
                    float _8771 = _2165 + _2131;
                    float _2167 = _8771;
                    float _2169 = fma(_2167, -0.0625, _445);
                    float _2171 = unpackHalf2x16(floatBitsToUint(_2061)).y;
                    uint _2173 = packHalf2x16(vec2(_2169, _2171));
                    _2055 = _2173;
                    _370 = uintBitsToFloat(_2157);
                    _372 = uintBitsToFloat(_2109);
                    _2057 = uintBitsToFloat(_2141);
                    _2043 = uintBitsToFloat(_2125);
                    _2045 = _2117;
                    _374 = uintBitsToFloat(_2149);
                    _2047 = uintBitsToFloat(_2129);
                }
                uint _2175 = _2055;
                float _2177 = _370;
                float _2179 = _372;
                float _2181 = _2057;
                float _2183 = _2043;
                float _2185 = _2045;
                float _2187 = _374;
                float _2189 = _2047;
                float _2191 = unpackHalf2x16(_2175).x;
                float _2193 = -_2191;
                float _8812 = _2193 + 1.0;
                float _2195 = _8812;
                float _2197 = _2177;
                float _2199 = _2179;
                float _2201 = _2181;
                float _2203 = _2189;
                float _2205 = _2185;
                float _2207 = _2187;
                float _2209 = _2183;
                uint _2211 = floatBitsToUint(_2181);
                if (_1983)
                {
                    float _8827 = _511 * fp_c3_1._m0[18].x;
                    float _2213 = _8827;
                    float _2215 = fma(_513, fp_c3_1._m0[18].y, _2213);
                    float _2217 = fma(_517, fp_c3_1._m0[18].z, _2215);
                    float _2219 = fma(_519, fp_c3_1._m0[18].w, _2217);
                    bool _2221 = _2219 > 0.0;
                    float _2223 = _2213;
                    float _2225 = _2219;
                    if (_2221)
                    {
                        float _2227 = _69[3].w;
                        _2223 = _2227;
                    }
                    float _2229 = _2223;
                    float _2231 = _2229;
                    if (_2221)
                    {
                        float _2233 = _69[3].x;
                        _2197 = _2233;
                    }
                    float _2235 = _2197;
                    float _2237 = _2235;
                    if (_2221)
                    {
                        float _2239 = _69[3].y;
                        _2199 = _2239;
                    }
                    float _2241 = _2199;
                    float _2243 = _2241;
                    if (_2221)
                    {
                        float _2245 = _69[3].z;
                        _2201 = _2245;
                    }
                    float _2247 = _2201;
                    float _2249 = _2247;
                    if (!_2221)
                    {
                        _547 = 0.0;
                    }
                    float _2251 = _547;
                    float _2253 = _2251;
                    if (!_2221)
                    {
                        _2231 = _519;
                    }
                    float _2255 = _2231;
                    if (!_2221)
                    {
                        _2237 = _511;
                    }
                    float _2257 = _2237;
                    if (!_2221)
                    {
                        _2243 = _513;
                    }
                    float _2259 = _2243;
                    if (!_2221)
                    {
                        _2249 = _517;
                    }
                    float _2261 = _2249;
                    if (_2221)
                    {
                        _2225 = fp_c3_1._m0[17].x;
                    }
                    float _2263 = _2225;
                    bool _2265 = _2251 == 0.0;
                    float _2267 = _2263;
                    if (_2221)
                    {
                        _549 = fp_c3_1._m0[17].y;
                    }
                    float _2269 = _549;
                    float _2271 = _2269;
                    if (_2221)
                    {
                        _2203 = fp_c3_1._m0[17].z;
                    }
                    float _2273 = _2203;
                    float _2275 = _2273;
                    if (_2221)
                    {
                        _2253 = fp_c3_1._m0[17].w;
                    }
                    float _2277 = _2253;
                    float _2279 = _2277;
                    if (_2221)
                    {
                        _2205 = fp_c3_1._m0[20].x;
                    }
                    float _2281 = _2205;
                    float _2283 = _2281;
                    if (_2221)
                    {
                        _2207 = fp_c3_1._m0[20].y;
                    }
                    float _2285 = _2207;
                    float _2287 = _2285;
                    if (_2221)
                    {
                        _2209 = fp_c3_1._m0[22].x;
                    }
                    float _2289 = _2209;
                    float _2291 = _2289;
                    if (!_2221)
                    {
                        _2267 = fp_c3_1._m0[16].x;
                    }
                    float _2293 = _2267;
                    if (!_2221)
                    {
                        _2271 = fp_c3_1._m0[16].y;
                    }
                    float _2295 = _2271;
                    if (!_2221)
                    {
                        _2275 = fp_c3_1._m0[16].z;
                    }
                    float _2297 = _2275;
                    if (!_2221)
                    {
                        _2279 = fp_c3_1._m0[16].w;
                    }
                    float _2299 = _2279;
                    if (!_2221)
                    {
                        _2283 = fp_c3_1._m0[19].x;
                    }
                    float _2301 = _2283;
                    if (!_2221)
                    {
                        _2287 = fp_c3_1._m0[19].y;
                    }
                    float _2303 = _2287;
                    float _9003 = SAFE_DIV(1.0, _2255);
                    float _2305 = _9003;
                    float _2307 = _2305;
                    if (!_2221)
                    {
                        _2291 = fp_c3_1._m0[21].x;
                    }
                    float _2309 = _2291;
                    float _9014 = _2305 * _2257;
                    float _2311 = _9014;
                    float _9017 = _2305 * _2259;
                    float _2313 = _9017;
                    float _9020 = _2305 * _2261;
                    float _2315 = _9020;
                    uint _2317 = floatBitsToUint(_2315);
                    uint _2319 = floatBitsToUint(_2315);
                    if (_2221)
                    {
                        _2307 = fp_c3_1._m0[22].y;
                    }
                    float _2321 = _2307;
                    float _2323 = _2321;
                    if (!_2221)
                    {
                        _2323 = fp_c3_1._m0[21].y;
                    }
                    float _2325 = _2323;
                    uint _2495;
                    uint _2497;
                    uint _2499;
                    if (_2265)
                    {
                        float _9043 = _2311 + _2309;
                        float _2327 = _9043;
                        float _9045 = _2301 * 3.0;
                        float _2329 = _9045;
                        float _9048 = _2313 + _2325;
                        float _2331 = _9048;
                        float _9050 = _2303 * 3.0;
                        float _2333 = _9050;
                        float _2335 = -_2329;
                        bool _2337 = _2327 <= _2335;
                        bool _2339 = _2327 >= 1.0;
                        bool _2341 = _2339 || _2337;
                        bool _2343 = _2331 >= 1.0;
                        bool _2345 = _2343 || _2341;
                        float _2347 = -_2333;
                        bool _2349 = _2331 <= _2347;
                        bool _2351 = _2349 || _2345;
                        uint _2353 = floatBitsToUint(_2333);
                        if (_2351)
                        {
                            uint _2355 = uint(int(uint(floatBitsToInt(_2333)) >> uint(16)));
                            int _2357 = int(_2355) << 16;
                            _2353 = uint(_2357);
                        }
                        uint _2359 = _2353;
                        uint _2361 = _2359;
                        if (!_2351)
                        {
                            float _9095 = _2327 + _2301;
                            float _2363 = _9095;
                            float _9098 = _2331 + _2303;
                            float _2365 = _9098;
                            float _9100 = _2331 + (-0.0);
                            float _2367 = _9100;
                            float _2369 = clamp(_2367, 0.0, 1.0);
                            float _9104 = _2327 + (-0.0);
                            float _2371 = _9104;
                            float _2373 = clamp(_2371, 0.0, 1.0);
                            float _2375 = min(_2315, 1.0);
                            float _9111 = _2363 + _2301;
                            float _2377 = _9111;
                            float _9113 = _2363 + (-0.0);
                            float _2379 = _9113;
                            float _2381 = clamp(_2379, 0.0, 1.0);
                            float _2383 = fma(_2369, _2295, _2299);
                            float _2385 = fma(_2373, _2293, _2297);
                            float _2387 = texture(fp_t_tcb_C, vec3(vec2(_2385, _2383), _2375));
                            float _9131 = _2377 + (-0.0);
                            float _2389 = _9131;
                            float _2391 = clamp(_2389, 0.0, 1.0);
                            float _2393 = fma(_2381, _2293, _2297);
                            float _9140 = _2377 + _2301;
                            float _2395 = _9140;
                            float _2397 = clamp(_2395, 0.0, 1.0);
                            float _2399 = texture(fp_t_tcb_C, vec3(vec2(_2393, _2383), _2375));
                            float _2401 = fma(_2391, _2293, _2297);
                            float _9154 = _2365 + (-0.0);
                            float _2403 = _9154;
                            float _2405 = clamp(_2403, 0.0, 1.0);
                            float _2407 = texture(fp_t_tcb_C, vec3(vec2(_2401, _2383), _2375));
                            float _2409 = fma(_2397, _2293, _2297);
                            float _2411 = texture(fp_t_tcb_C, vec3(vec2(_2409, _2383), _2375));
                            float _2413 = fma(_2405, _2295, _2299);
                            float _2415 = texture(fp_t_tcb_C, vec3(vec2(_2385, _2413), _2375));
                            float _2417 = texture(fp_t_tcb_C, vec3(vec2(_2393, _2413), _2375));
                            float _9191 = _2365 + _2303;
                            float _2419 = _9191;
                            float _9194 = _2419 + _2303;
                            float _2421 = _9194;
                            float _2423 = texture(fp_t_tcb_C, vec3(vec2(_2401, _2413), _2375));
                            float _9202 = _2419 + (-0.0);
                            float _2425 = _9202;
                            float _2427 = clamp(_2425, 0.0, 1.0);
                            float _2429 = texture(fp_t_tcb_C, vec3(vec2(_2409, _2413), _2375));
                            float _2431 = fma(_2427, _2295, _2299);
                            float _2433 = texture(fp_t_tcb_C, vec3(vec2(_2393, _2431), _2375));
                            float _2435 = texture(fp_t_tcb_C, vec3(vec2(_2385, _2431), _2375));
                            float _2437 = texture(fp_t_tcb_C, vec3(vec2(_2401, _2431), _2375));
                            float _9234 = _2421 + (-0.0);
                            float _2439 = _9234;
                            float _2441 = clamp(_2439, 0.0, 1.0);
                            float _2443 = fma(_2441, _2295, _2299);
                            float _2445 = texture(fp_t_tcb_C, vec3(vec2(_2409, _2431), _2375));
                            float _2447 = texture(fp_t_tcb_C, vec3(vec2(_2385, _2443), _2375));
                            float _2449 = texture(fp_t_tcb_C, vec3(vec2(_2393, _2443), _2375));
                            float _2451 = texture(fp_t_tcb_C, vec3(vec2(_2401, _2443), _2375));
                            float _2453 = texture(fp_t_tcb_C, vec3(vec2(_2409, _2443), _2375));
                            float _9273 = _2387 + _2399;
                            float _2455 = _9273;
                            float _9276 = _2455 + _2407;
                            float _2457 = _9276;
                            float _9279 = _2457 + _2411;
                            float _2459 = _9279;
                            float _9282 = _2459 + _2415;
                            float _2461 = _9282;
                            float _9285 = _2461 + _2417;
                            float _2463 = _9285;
                            float _9288 = _2463 + _2423;
                            float _2465 = _9288;
                            float _9291 = _2465 + _2429;
                            float _2467 = _9291;
                            float _9294 = _2467 + _2435;
                            float _2469 = _9294;
                            float _9297 = _2469 + _2433;
                            float _2471 = _9297;
                            float _9300 = _2471 + _2437;
                            float _2473 = _9300;
                            float _9303 = _2473 + _2445;
                            float _2475 = _9303;
                            float _9306 = _2475 + _2447;
                            float _2477 = _9306;
                            float _9309 = _2477 + _2449;
                            float _2479 = _9309;
                            float _9312 = _2479 + _2451;
                            float _2481 = _9312;
                            float _9315 = _2481 + _2453;
                            float _2483 = _9315;
                            float _2485 = fma(_2483, -0.0625, _445);
                            uint _2487 = packHalf2x16(vec2(_2485, _2481));
                            _2361 = _2487;
                            _2317 = floatBitsToUint(_2375);
                            _551 = floatBitsToUint(_2443);
                        }
                        uint _2489 = _2361;
                        uint _2491 = _2317;
                        uint _2493 = _551;
                        _2495 = _2489;
                        _2497 = _2491;
                        _2499 = _2493;
                        _2501 = true;
                    }
                    else
                    {
                        float _9338 = _2311 + _2309;
                        float _2503 = _9338;
                        float _9340 = _2301 * 3.0;
                        float _2505 = _9340;
                        float _9343 = _2313 + _2325;
                        float _2507 = _9343;
                        float _9345 = _2303 * 3.0;
                        float _2509 = _9345;
                        float _2511 = -_2505;
                        bool _2513 = _2503 <= _2511;
                        bool _2515 = _2503 >= 1.0;
                        bool _2517 = _2515 || _2513;
                        bool _2519 = _2507 >= 1.0;
                        bool _2521 = _2519 || _2517;
                        float _2523 = -_2509;
                        bool _2525 = _2507 <= _2523;
                        bool _2527 = _2525 || _2521;
                        uint _2529 = floatBitsToUint(_2509);
                        if (_2527)
                        {
                            uint _2531 = uint(int(uint(floatBitsToInt(_2509)) >> uint(16)));
                            int _2533 = int(_2531) << 16;
                            _2529 = uint(_2533);
                        }
                        uint _2535 = _2529;
                        uint _2537 = _2535;
                        if (!_2527)
                        {
                            float _9390 = _2503 + _2301;
                            float _2539 = _9390;
                            float _9393 = _2507 + _2303;
                            float _2541 = _9393;
                            float _9395 = _2507 + (-0.0);
                            float _2543 = _9395;
                            float _2545 = clamp(_2543, 0.0, 1.0);
                            float _9399 = _2503 + (-0.0);
                            float _2547 = _9399;
                            float _2549 = clamp(_2547, 0.0, 1.0);
                            float _2551 = min(_2315, 1.0);
                            float _9406 = _2539 + _2301;
                            float _2553 = _9406;
                            float _9408 = _2539 + (-0.0);
                            float _2555 = _9408;
                            float _2557 = clamp(_2555, 0.0, 1.0);
                            float _2559 = fma(_2545, _2295, _2299);
                            float _2561 = fma(_2549, _2293, _2297);
                            float _9420 = _2541 + (-0.0);
                            float _2563 = _9420;
                            float _2565 = clamp(_2563, 0.0, 1.0);
                            float _9424 = _2553 + (-0.0);
                            float _2567 = _9424;
                            float _2569 = clamp(_2567, 0.0, 1.0);
                            float _9429 = _2553 + _2301;
                            float _2571 = _9429;
                            float _2573 = clamp(_2571, 0.0, 1.0);
                            float _2575 = fma(_2557, _2293, _2297);
                            float _2577 = fma(_2565, _2295, _2299);
                            float _2579 = fma(_2569, _2293, _2297);
                            float _2581 = fma(_2573, _2293, _2297);
                            float _2583 = texture(fp_t_tcb_E, vec3(vec2(_2561, _2559), _2551));
                            float _2585 = texture(fp_t_tcb_E, vec3(vec2(_2575, _2559), _2551));
                            float _2587 = texture(fp_t_tcb_E, vec3(vec2(_2579, _2559), _2551));
                            float _2589 = texture(fp_t_tcb_E, vec3(vec2(_2581, _2559), _2551));
                            float _2591 = texture(fp_t_tcb_E, vec3(vec2(_2561, _2577), _2551));
                            float _2593 = texture(fp_t_tcb_E, vec3(vec2(_2575, _2577), _2551));
                            uint _2595 = packHalf2x16(vec2(_2593, 0.0));
                            float _9489 = _2541 + _2303;
                            float _2597 = _9489;
                            float _9492 = _2597 + _2303;
                            float _2599 = _9492;
                            float _2601 = texture(fp_t_tcb_E, vec3(vec2(_2579, _2577), _2551));
                            float _2603 = texture(fp_t_tcb_E, vec3(vec2(_2581, _2577), _2551));
                            float _9506 = _2597 + (-0.0);
                            float _2605 = _9506;
                            float _2607 = clamp(_2605, 0.0, 1.0);
                            float _2609 = fma(_2607, _2295, _2299);
                            float _2611 = texture(fp_t_tcb_E, vec3(vec2(_2575, _2609), _2551));
                            float _2613 = texture(fp_t_tcb_E, vec3(vec2(_2561, _2609), _2551));
                            float _2615 = texture(fp_t_tcb_E, vec3(vec2(_2579, _2609), _2551));
                            float _9532 = _2599 + (-0.0);
                            float _2617 = _9532;
                            float _2619 = clamp(_2617, 0.0, 1.0);
                            float _2621 = fma(_2619, _2295, _2299);
                            float _2623 = texture(fp_t_tcb_E, vec3(vec2(_2581, _2609), _2551));
                            float _2625 = texture(fp_t_tcb_E, vec3(vec2(_2561, _2621), _2551));
                            float _2627 = texture(fp_t_tcb_E, vec3(vec2(_2575, _2621), _2551));
                            float _2629 = texture(fp_t_tcb_E, vec3(vec2(_2579, _2621), _2551));
                            float _2631 = texture(fp_t_tcb_E, vec3(vec2(_2581, _2621), _2551));
                            float _9571 = _2583 + _2585;
                            float _2633 = _9571;
                            float _9574 = _2633 + _2587;
                            float _2635 = _9574;
                            float _9577 = _2635 + _2589;
                            float _2637 = _9577;
                            float _9580 = _2637 + _2591;
                            float _2639 = _9580;
                            float _9583 = _2639 + _2593;
                            float _2641 = _9583;
                            float _9586 = _2641 + _2601;
                            float _2643 = _9586;
                            float _9589 = _2643 + _2603;
                            float _2645 = _9589;
                            float _9592 = _2645 + _2613;
                            float _2647 = _9592;
                            float _9595 = _2647 + _2611;
                            float _2649 = _9595;
                            float _9598 = _2649 + _2615;
                            float _2651 = _9598;
                            float _9601 = _2651 + _2623;
                            float _2653 = _9601;
                            float _9604 = _2653 + _2625;
                            float _2655 = _9604;
                            float _9607 = _2655 + _2627;
                            float _2657 = _9607;
                            float _9610 = _2657 + _2629;
                            float _2659 = _9610;
                            float _9613 = _2659 + _2631;
                            float _2661 = _9613;
                            float _2663 = fma(_2661, -0.0625, _445);
                            uint _2665 = packHalf2x16(vec2(_2663, _2659));
                            _2537 = _2665;
                            _2319 = _2595;
                            _553 = floatBitsToUint(_2621);
                        }
                        uint _2667 = _2537;
                        uint _2669 = _2319;
                        uint _2671 = _553;
                        _2495 = _2667;
                        _2497 = _2669;
                        _2499 = _2671;
                    }
                    _2501 = false;
                    uint _2673 = _2495;
                    uint _2675 = _2497;
                    uint _2677 = _2499;
                    float _2679 = unpackHalf2x16(_2673).x;
                    float _2681 = -_529;
                    float _2683 = fma(_2679, _2681, fp_c1_1._m0[0].y);
                    _555 = _2683;
                    _2211 = _2675;
                    _557 = _2677;
                }
                float _2685 = _555;
                uint _2687 = _2211;
                uint _2689 = _557;
                float _2691 = min(_2195, _2685);
                _567 = _2691;
                _759 = _2687;
                _569 = _2689;
                _761 = true;
            }
            else
            {
                bool _2693 = _529 > 0.0;
                _759 = 0u;
                if (_2693)
                {
                    float _9667 = _511 * fp_c3_1._m0[18].x;
                    float _2695 = _9667;
                    float _2697 = fma(_513, fp_c3_1._m0[18].y, _2695);
                    float _2699 = fma(_517, fp_c3_1._m0[18].z, _2697);
                    float _2701 = fma(_519, fp_c3_1._m0[18].w, _2699);
                    bool _2703 = _2701 > 0.0;
                    float _2705 = _2695;
                    float _2707 = _2701;
                    if (_2703)
                    {
                        float _2709 = _69[3].w;
                        _559 = _2709;
                    }
                    float _2711 = _559;
                    float _2713 = _2711;
                    if (_2703)
                    {
                        float _2715 = _69[3].x;
                        _376 = _2715;
                    }
                    float _2717 = _376;
                    float _2719 = _2717;
                    if (_2703)
                    {
                        float _2721 = _69[3].y;
                        _2705 = _2721;
                    }
                    float _2723 = _2705;
                    float _2725 = _2723;
                    if (_2703)
                    {
                        float _2727 = _69[3].z;
                        _2707 = _2727;
                    }
                    float _2729 = _2707;
                    float _2731 = _2729;
                    if (!_2703)
                    {
                        _561 = 0.0;
                    }
                    float _2733 = _561;
                    if (!_2703)
                    {
                        _2713 = _519;
                    }
                    float _2735 = _2713;
                    float _2737 = _2735;
                    if (!_2703)
                    {
                        _2719 = _511;
                    }
                    float _2739 = _2719;
                    if (!_2703)
                    {
                        _2725 = _513;
                    }
                    float _2741 = _2725;
                    float _2743 = _2741;
                    if (!_2703)
                    {
                        _2731 = _517;
                    }
                    float _2745 = _2731;
                    float _2747 = _2745;
                    if (_2703)
                    {
                        _563 = fp_c3_1._m0[17].y;
                    }
                    float _2749 = _563;
                    bool _2751 = _2733 == 0.0;
                    float _2753 = _2749;
                    if (_2703)
                    {
                        _565 = fp_c3_1._m0[17].w;
                    }
                    float _2755 = _565;
                    float _2757 = _2755;
                    if (_2703)
                    {
                        _378 = fp_c3_1._m0[20].x;
                    }
                    float _2759 = _378;
                    float _2761 = _2759;
                    if (_2703)
                    {
                        _380 = fp_c3_1._m0[20].y;
                    }
                    float _2763 = _380;
                    float _2765 = _2763;
                    if (_2703)
                    {
                        _382 = fp_c3_1._m0[22].x;
                    }
                    float _2767 = _382;
                    float _2769 = _2767;
                    if (!_2703)
                    {
                        _2753 = fp_c3_1._m0[16].y;
                    }
                    float _2771 = _2753;
                    uint _2773 = floatBitsToUint(_2771);
                    uint _2775 = floatBitsToUint(_2771);
                    if (!_2703)
                    {
                        _2757 = fp_c3_1._m0[16].w;
                    }
                    float _2777 = _2757;
                    if (!_2703)
                    {
                        _2761 = fp_c3_1._m0[19].x;
                    }
                    float _2779 = _2761;
                    if (!_2703)
                    {
                        _2765 = fp_c3_1._m0[19].y;
                    }
                    float _2781 = _2765;
                    if (!_2703)
                    {
                        _2769 = fp_c3_1._m0[21].x;
                    }
                    float _2783 = _2769;
                    float _9828 = SAFE_DIV(1.0, _2735);
                    float _2785 = _9828;
                    if (_2703)
                    {
                        _2737 = fp_c3_1._m0[17].z;
                    }
                    float _2787 = _2737;
                    float _2789 = _2787;
                    if (!_2703)
                    {
                        _2789 = fp_c3_1._m0[16].z;
                    }
                    float _2791 = _2789;
                    float _9845 = _2785 * _2739;
                    float _2793 = _9845;
                    float _9848 = _2785 * _2741;
                    float _2795 = _9848;
                    float _9851 = _2785 * _2745;
                    float _2797 = _9851;
                    uint _2799 = floatBitsToUint(_2797);
                    uint _2801 = floatBitsToUint(_2797);
                    if (_2703)
                    {
                        _2743 = fp_c3_1._m0[17].x;
                    }
                    float _2803 = _2743;
                    float _2805 = _2803;
                    if (_2703)
                    {
                        _2747 = fp_c3_1._m0[22].y;
                    }
                    float _2807 = _2747;
                    float _2809 = _2807;
                    if (!_2703)
                    {
                        _2805 = fp_c3_1._m0[16].x;
                    }
                    float _2811 = _2805;
                    if (!_2703)
                    {
                        _2809 = fp_c3_1._m0[21].y;
                    }
                    float _2813 = _2809;
                    uint _2983;
                    uint _2985;
                    uint _2987;
                    if (_2751)
                    {
                        float _9888 = _2793 + _2783;
                        float _2815 = _9888;
                        float _9890 = _2779 * 3.0;
                        float _2817 = _9890;
                        float _9893 = _2795 + _2813;
                        float _2819 = _9893;
                        float _9895 = _2781 * 3.0;
                        float _2821 = _9895;
                        float _2823 = -_2817;
                        bool _2825 = _2815 <= _2823;
                        bool _2827 = _2815 >= 1.0;
                        bool _2829 = _2827 || _2825;
                        bool _2831 = _2819 >= 1.0;
                        bool _2833 = _2831 || _2829;
                        float _2835 = -_2821;
                        bool _2837 = _2819 <= _2835;
                        bool _2839 = _2837 || _2833;
                        uint _2841 = floatBitsToUint(_2821);
                        if (_2839)
                        {
                            uint _2843 = uint(int(uint(floatBitsToInt(_2821)) >> uint(16)));
                            int _2845 = int(_2843) << 16;
                            _2841 = uint(_2845);
                        }
                        uint _2847 = _2841;
                        uint _2849 = _2847;
                        if (!_2839)
                        {
                            float _9940 = _2815 + _2779;
                            float _2851 = _9940;
                            float _9943 = _2819 + _2781;
                            float _2853 = _9943;
                            float _9945 = _2819 + (-0.0);
                            float _2855 = _9945;
                            float _2857 = clamp(_2855, 0.0, 1.0);
                            float _9949 = _2815 + (-0.0);
                            float _2859 = _9949;
                            float _2861 = clamp(_2859, 0.0, 1.0);
                            float _2863 = min(_2797, 1.0);
                            float _9956 = _2851 + _2779;
                            float _2865 = _9956;
                            float _9958 = _2851 + (-0.0);
                            float _2867 = _9958;
                            float _2869 = clamp(_2867, 0.0, 1.0);
                            float _2871 = fma(_2857, _2771, _2777);
                            float _2873 = fma(_2861, _2811, _2791);
                            float _2875 = texture(fp_t_tcb_C, vec3(vec2(_2873, _2871), _2863));
                            float _9976 = _2865 + (-0.0);
                            float _2877 = _9976;
                            float _2879 = clamp(_2877, 0.0, 1.0);
                            float _2881 = fma(_2869, _2811, _2791);
                            float _9985 = _2865 + _2779;
                            float _2883 = _9985;
                            float _2885 = clamp(_2883, 0.0, 1.0);
                            float _2887 = texture(fp_t_tcb_C, vec3(vec2(_2881, _2871), _2863));
                            float _2889 = fma(_2879, _2811, _2791);
                            float _9999 = _2853 + (-0.0);
                            float _2891 = _9999;
                            float _2893 = clamp(_2891, 0.0, 1.0);
                            float _2895 = texture(fp_t_tcb_C, vec3(vec2(_2889, _2871), _2863));
                            float _2897 = fma(_2885, _2811, _2791);
                            float _2899 = texture(fp_t_tcb_C, vec3(vec2(_2897, _2871), _2863));
                            float _2901 = fma(_2893, _2771, _2777);
                            float _2903 = texture(fp_t_tcb_C, vec3(vec2(_2873, _2901), _2863));
                            float _2905 = texture(fp_t_tcb_C, vec3(vec2(_2881, _2901), _2863));
                            float _10036 = _2853 + _2781;
                            float _2907 = _10036;
                            float _10039 = _2907 + _2781;
                            float _2909 = _10039;
                            float _2911 = texture(fp_t_tcb_C, vec3(vec2(_2889, _2901), _2863));
                            float _10047 = _2907 + (-0.0);
                            float _2913 = _10047;
                            float _2915 = clamp(_2913, 0.0, 1.0);
                            float _2917 = texture(fp_t_tcb_C, vec3(vec2(_2897, _2901), _2863));
                            float _2919 = fma(_2915, _2771, _2777);
                            float _2921 = texture(fp_t_tcb_C, vec3(vec2(_2881, _2919), _2863));
                            float _2923 = texture(fp_t_tcb_C, vec3(vec2(_2873, _2919), _2863));
                            float _2925 = texture(fp_t_tcb_C, vec3(vec2(_2889, _2919), _2863));
                            float _10079 = _2909 + (-0.0);
                            float _2927 = _10079;
                            float _2929 = clamp(_2927, 0.0, 1.0);
                            float _2931 = fma(_2929, _2771, _2777);
                            float _2933 = texture(fp_t_tcb_C, vec3(vec2(_2897, _2919), _2863));
                            float _2935 = texture(fp_t_tcb_C, vec3(vec2(_2873, _2931), _2863));
                            float _2937 = texture(fp_t_tcb_C, vec3(vec2(_2881, _2931), _2863));
                            float _2939 = texture(fp_t_tcb_C, vec3(vec2(_2889, _2931), _2863));
                            float _2941 = texture(fp_t_tcb_C, vec3(vec2(_2897, _2931), _2863));
                            float _10118 = _2875 + _2887;
                            float _2943 = _10118;
                            float _10121 = _2943 + _2895;
                            float _2945 = _10121;
                            float _10124 = _2945 + _2899;
                            float _2947 = _10124;
                            float _10127 = _2947 + _2903;
                            float _2949 = _10127;
                            float _10130 = _2949 + _2905;
                            float _2951 = _10130;
                            float _10133 = _2951 + _2911;
                            float _2953 = _10133;
                            float _10136 = _2953 + _2917;
                            float _2955 = _10136;
                            float _10139 = _2955 + _2923;
                            float _2957 = _10139;
                            float _10142 = _2957 + _2921;
                            float _2959 = _10142;
                            float _10145 = _2959 + _2925;
                            float _2961 = _10145;
                            float _10148 = _2961 + _2933;
                            float _2963 = _10148;
                            float _10151 = _2963 + _2935;
                            float _2965 = _10151;
                            float _10154 = _2965 + _2937;
                            float _2967 = _10154;
                            float _10157 = _2967 + _2939;
                            float _2969 = _10157;
                            float _10160 = _2969 + _2941;
                            float _2971 = _10160;
                            float _2973 = fma(_2971, -0.0625, _445);
                            uint _2975 = packHalf2x16(vec2(_2973, 0.0));
                            _2849 = _2975;
                            _2799 = floatBitsToUint(_2863);
                            _2773 = floatBitsToUint(_2931);
                        }
                        uint _2977 = _2849;
                        uint _2979 = _2799;
                        uint _2981 = _2773;
                        _2983 = _2977;
                        _2985 = _2979;
                        _2987 = _2981;
                        _2989 = true;
                    }
                    else
                    {
                        float _10182 = _2793 + _2783;
                        float _2991 = _10182;
                        float _10184 = _2779 * 3.0;
                        float _2993 = _10184;
                        float _10187 = _2795 + _2813;
                        float _2995 = _10187;
                        float _10189 = _2781 * 3.0;
                        float _2997 = _10189;
                        float _2999 = -_2993;
                        bool _3001 = _2991 <= _2999;
                        bool _3003 = _2991 >= 1.0;
                        bool _3005 = _3003 || _3001;
                        bool _3007 = _2995 >= 1.0;
                        bool _3009 = _3007 || _3005;
                        float _3011 = -_2997;
                        bool _3013 = _2995 <= _3011;
                        bool _3015 = _3013 || _3009;
                        uint _3017 = floatBitsToUint(_2997);
                        if (_3015)
                        {
                            uint _3019 = uint(int(uint(floatBitsToInt(_2997)) >> uint(16)));
                            int _3021 = int(_3019) << 16;
                            _3017 = uint(_3021);
                        }
                        uint _3023 = _3017;
                        uint _3025 = _3023;
                        if (!_3015)
                        {
                            float _10234 = _2991 + _2779;
                            float _3027 = _10234;
                            float _10237 = _2995 + _2781;
                            float _3029 = _10237;
                            float _10239 = _2995 + (-0.0);
                            float _3031 = _10239;
                            float _3033 = clamp(_3031, 0.0, 1.0);
                            float _10243 = _2991 + (-0.0);
                            float _3035 = _10243;
                            float _3037 = clamp(_3035, 0.0, 1.0);
                            float _3039 = min(_2797, 1.0);
                            float _10250 = _3027 + _2779;
                            float _3041 = _10250;
                            float _10252 = _3027 + (-0.0);
                            float _3043 = _10252;
                            float _3045 = clamp(_3043, 0.0, 1.0);
                            float _3047 = fma(_3033, _2771, _2777);
                            float _3049 = fma(_3037, _2811, _2791);
                            float _3051 = texture(fp_t_tcb_E, vec3(vec2(_3049, _3047), _3039));
                            float _10270 = _3041 + (-0.0);
                            float _3053 = _10270;
                            float _3055 = clamp(_3053, 0.0, 1.0);
                            float _3057 = fma(_3045, _2811, _2791);
                            float _10279 = _3041 + _2779;
                            float _3059 = _10279;
                            float _3061 = clamp(_3059, 0.0, 1.0);
                            float _3063 = texture(fp_t_tcb_E, vec3(vec2(_3057, _3047), _3039));
                            float _3065 = fma(_3055, _2811, _2791);
                            float _10293 = _3029 + (-0.0);
                            float _3067 = _10293;
                            float _3069 = clamp(_3067, 0.0, 1.0);
                            float _3071 = texture(fp_t_tcb_E, vec3(vec2(_3065, _3047), _3039));
                            float _3073 = fma(_3061, _2811, _2791);
                            float _3075 = texture(fp_t_tcb_E, vec3(vec2(_3073, _3047), _3039));
                            float _3077 = fma(_3069, _2771, _2777);
                            float _3079 = texture(fp_t_tcb_E, vec3(vec2(_3049, _3077), _3039));
                            float _3081 = texture(fp_t_tcb_E, vec3(vec2(_3057, _3077), _3039));
                            uint _3083 = packHalf2x16(vec2(_3081, 0.0));
                            float _10333 = _3029 + _2781;
                            float _3085 = _10333;
                            float _3087 = texture(fp_t_tcb_E, vec3(vec2(_3065, _3077), _3039));
                            float _10342 = _3085 + _2781;
                            float _3089 = _10342;
                            float _10344 = _3085 + (-0.0);
                            float _3091 = _10344;
                            float _3093 = clamp(_3091, 0.0, 1.0);
                            float _3095 = texture(fp_t_tcb_E, vec3(vec2(_3073, _3077), _3039));
                            float _3097 = fma(_3093, _2771, _2777);
                            float _3099 = texture(fp_t_tcb_E, vec3(vec2(_3057, _3097), _3039));
                            float _3101 = texture(fp_t_tcb_E, vec3(vec2(_3049, _3097), _3039));
                            float _3103 = texture(fp_t_tcb_E, vec3(vec2(_3065, _3097), _3039));
                            float _3105 = texture(fp_t_tcb_E, vec3(vec2(_3073, _3097), _3039));
                            float _10382 = _3089 + (-0.0);
                            float _3107 = _10382;
                            float _3109 = clamp(_3107, 0.0, 1.0);
                            float _3111 = fma(_3109, _2771, _2777);
                            float _3113 = texture(fp_t_tcb_E, vec3(vec2(_3049, _3111), _3039));
                            float _3115 = texture(fp_t_tcb_E, vec3(vec2(_3057, _3111), _3039));
                            float _3117 = texture(fp_t_tcb_E, vec3(vec2(_3065, _3111), _3039));
                            float _3119 = texture(fp_t_tcb_E, vec3(vec2(_3073, _3111), _3039));
                            float _10415 = _3051 + _3063;
                            float _3121 = _10415;
                            float _10418 = _3121 + _3071;
                            float _3123 = _10418;
                            float _10421 = _3123 + _3075;
                            float _3125 = _10421;
                            float _10424 = _3125 + _3079;
                            float _3127 = _10424;
                            float _10427 = _3127 + _3081;
                            float _3129 = _10427;
                            float _10430 = _3129 + _3087;
                            float _3131 = _10430;
                            float _10433 = _3131 + _3095;
                            float _3133 = _10433;
                            float _10436 = _3133 + _3101;
                            float _3135 = _10436;
                            float _10439 = _3135 + _3099;
                            float _3137 = _10439;
                            float _10442 = _3137 + _3103;
                            float _3139 = _10442;
                            float _10445 = _3139 + _3105;
                            float _3141 = _10445;
                            float _10448 = _3141 + _3113;
                            float _3143 = _10448;
                            float _10451 = _3143 + _3115;
                            float _3145 = _10451;
                            float _10454 = _3145 + _3117;
                            float _3147 = _10454;
                            float _10457 = _3147 + _3119;
                            float _3149 = _10457;
                            float _3151 = fma(_3149, -0.0625, _445);
                            uint _3153 = packHalf2x16(vec2(_3151, 0.0));
                            _3025 = _3153;
                            _2801 = _3083;
                            _2775 = floatBitsToUint(_3111);
                        }
                        uint _3155 = _3025;
                        uint _3157 = _2801;
                        uint _3159 = _2775;
                        _2983 = _3155;
                        _2985 = _3157;
                        _2987 = _3159;
                    }
                    _2989 = false;
                    uint _3161 = _2983;
                    uint _3163 = _2985;
                    uint _3165 = _2987;
                    float _3167 = unpackHalf2x16(_3161).x;
                    float _3169 = -_529;
                    float _3171 = fma(_3167, _3169, fp_c1_1._m0[0].y);
                    _567 = _3171;
                    _759 = _3163;
                    _569 = _3165;
                }
            }
        }
        _761 = false;
        float _3173 = _567;
        uint _3175 = _759;
        uint _3177 = _569;
        float _3179 = -fp_c3_1._m0[39].y;
        float _10503 = _3173 + _3179;
        float _3181 = _10503;
        float _3183 = clamp(_3181, 0.0, 1.0);
        _505 = _3183;
        _507 = _3175;
        _509 = _3177;
    }
    float _3185 = _505;
    uint _3187 = _507;
    uint _3189 = _509;
    float _3191 = -fp_c3_1._m0[0].x;
    float _10518 = _334 + _3191;
    float _3193 = _10518;
    float _3195 = gl_FragCoord.z;
    float _3197 = -fp_c3_1._m0[1].x;
    float _10526 = _334 + _3197;
    float _3199 = _10526;
    float _3201 = -fp_c3_1._m0[0].y;
    float _10532 = _332 + _3201;
    float _3203 = _10532;
    float _3205 = -fp_c3_1._m0[1].y;
    float _10538 = _332 + _3205;
    float _3207 = _10538;
    float _3209 = -fp_c3_1._m0[0].z;
    float _10544 = _336 + _3209;
    float _3211 = _10544;
    float _3213 = -fp_c3_1._m0[1].z;
    float _10550 = _336 + _3213;
    float _3215 = _10550;
    float _3217 = -fp_c3_1._m0[2].x;
    float _10556 = _334 + _3217;
    float _3219 = _10556;
    float _10559 = _3193 * _3193;
    float _3221 = _10559;
    float _10562 = _3199 * _3199;
    float _3223 = _10562;
    float _3225 = -fp_c3_1._m0[2].y;
    float _10568 = _332 + _3225;
    float _3227 = _10568;
    float _3229 = -fp_c3_1._m0[2].z;
    float _10574 = _336 + _3229;
    float _3231 = _10574;
    float _3233 = -fp_c3_1._m0[1].x;
    float _10580 = _342 * _3233;
    float _3235 = _10580;
    float _10583 = _3219 * _3219;
    float _3237 = _10583;
    float _3239 = fma(_3203, _3203, _3221);
    float _3241 = fma(_3207, _3207, _3223);
    float _3243 = -fp_c3_1._m0[0].x;
    float _10597 = _342 * _3243;
    float _3245 = _10597;
    float _10601 = _196 * fp_c3_1._m0[3].z;
    float _3247 = _10601;
    float _10606 = _344 * fp_c3_1._m0[4].x;
    float _3249 = _10606;
    float _10610 = _348 * fp_c3_1._m0[4].z;
    float _3251 = _10610;
    float _3253 = fma(_3227, _3227, _3237);
    float _3255 = fma(_3211, _3211, _3239);
    float _3257 = fma(_3215, _3215, _3241);
    float _3259 = SAFE_INVSQRT(_3255);
    float _3261 = -fp_c3_1._m0[0].y;
    float _3263 = fma(_338, _3261, _3245);
    float _3265 = SAFE_INVSQRT(_3257);
    float _3267 = fma(_3231, _3231, _3253);
    float _10641 = _194 * fp_c3_1._m0[3].y;
    float _3269 = _10641;
    float _3271 = SAFE_INVSQRT(_3267);
    float _10648 = _198 * fp_c3_1._m0[5].z;
    float _3273 = _10648;
    float _10650 = _3185 + (-0.0);
    float _3275 = _10650;
    float _3277 = -fp_c3_1._m0[1].y;
    float _3279 = fma(_338, _3277, _3235);
    float _3281 = fma(_3195, fp_c3_1._m0[26].x, fp_c3_1._m0[26].y);
    float _3283 = -fp_c3_1._m0[0].z;
    float _3285 = fma(_340, _3283, _3263);
    float _3287 = clamp(_3285, 0.0, 1.0);
    float _3289 = SAFE_LOG2(_3281);
    float _10679 = _188 * fp_c3_1._m0[5].x;
    float _3291 = _10679;
    float _10682 = _3259 * _3193;
    float _3293 = _10682;
    float _10685 = _3259 * _3203;
    float _3295 = _10685;
    float _10688 = _3265 * _3199;
    float _3297 = _10688;
    float _10691 = _3265 * _3207;
    float _3299 = _10691;
    float _10694 = _3259 * _3211;
    float _3301 = _10694;
    float _10697 = _3265 * _3215;
    float _3303 = _10697;
    float _10700 = _3271 * _3219;
    float _3305 = _10700;
    float _10703 = _3271 * _3227;
    float _3307 = _10703;
    float _10706 = _334 * _3293;
    float _3309 = _10706;
    float _10709 = _334 * _3297;
    float _3311 = _10709;
    float _10712 = _342 * _3293;
    float _3313 = _10712;
    float _10715 = _342 * _3297;
    float _3315 = _10715;
    float _10718 = _3271 * _3231;
    float _3317 = _10718;
    float _3319 = -fp_c3_1._m0[1].z;
    float _3321 = fma(_340, _3319, _3279);
    float _3323 = clamp(_3321, 0.0, 1.0);
    float _10730 = _334 * _3305;
    float _3325 = _10730;
    float _10733 = _342 * _3305;
    float _3327 = _10733;
    float _3329 = fma(_3289, fp_c3_1._m0[26].z, fp_c3_1._m0[26].w);
    float _3331 = fma(_332, _3295, _3309);
    float _3333 = fma(_332, _3299, _3311);
    float _3335 = fma(_338, _3295, _3313);
    float _3337 = fma(_338, _3299, _3315);
    float _3339 = -fp_c3_1._m0[2].x;
    float _10761 = _342 * _3339;
    float _3341 = _10761;
    float _10764 = _3249 * _3323;
    float _3343 = _10764;
    float _3345 = fma(_332, _3307, _3325);
    float _3347 = fma(_338, _3307, _3327);
    float _3349 = fma(_336, _3301, _3331);
    float _3351 = clamp(_3349, 0.0, 1.0);
    float _3353 = fma(_336, _3303, _3333);
    float _3355 = clamp(_3353, 0.0, 1.0);
    float _3357 = fma(_340, _3303, _3337);
    float _3359 = clamp(_3357, 0.0, 1.0);
    float _3361 = fma(_340, _3301, _3335);
    float _3363 = clamp(_3361, 0.0, 1.0);
    float _3365 = abs(_3359);
    float _3367 = SAFE_LOG2(_3365);
    float _3369 = fma(_336, _3317, _3345);
    float _3371 = clamp(_3369, 0.0, 1.0);
    float _3373 = abs(_3363);
    float _3375 = SAFE_LOG2(_3373);
    float _3377 = -_3351;
    float _10814 = _3377 + 1.0;
    float _3379 = _10814;
    float _3381 = -_3355;
    float _10818 = _3381 + 1.0;
    float _3383 = _10818;
    float _3385 = abs(_3379);
    float _3387 = SAFE_LOG2(_3385);
    float _3389 = -fp_c3_1._m0[2].y;
    float _3391 = fma(_338, _3389, _3341);
    float _3393 = abs(_3383);
    float _3395 = SAFE_LOG2(_3393);
    float _3397 = -_3371;
    float _10837 = _3397 + 1.0;
    float _3399 = _10837;
    float _10841 = _346 * fp_c3_1._m0[4].y;
    float _3401 = _10841;
    float _10845 = _192 * fp_c3_1._m0[3].x;
    float _3403 = _10845;
    float _10849 = _190 * fp_c3_1._m0[5].y;
    float _3405 = _10849;
    float _3407 = -fp_c3_1._m0[2].z;
    float _3409 = fma(_340, _3407, _3391);
    float _3411 = clamp(_3409, 0.0, 1.0);
    float _10861 = _3375 * _501;
    float _3413 = _10861;
    float _10864 = _3401 * _3323;
    float _3415 = _10864;
    float _10867 = _3251 * _3323;
    float _3417 = _10867;
    float _10870 = _3387 * 5.0;
    float _3419 = _10870;
    float _3421 = abs(_3399);
    float _3423 = SAFE_LOG2(_3421);
    float _10877 = _3403 * _3287;
    float _3425 = _10877;
    float _10879 = _3395 * 5.0;
    float _3427 = _10879;
    float _10882 = _3269 * _3287;
    float _3429 = _10882;
    float _10885 = _3273 * _3411;
    float _3431 = _10885;
    float _3433 = exp2(_3419);
    float _10890 = _3367 * _501;
    float _3435 = _10890;
    float _3437 = exp2(_3427);
    float _3439 = fma(_340, _3317, _3347);
    float _3441 = clamp(_3439, 0.0, 1.0);
    float _10900 = _3423 * 5.0;
    float _3443 = _10900;
    float _3445 = abs(_3441);
    float _3447 = SAFE_LOG2(_3445);
    float _10907 = _3247 * _3287;
    float _3449 = _10907;
    float _3451 = exp2(_3413);
    float _3453 = exp2(_3435);
    float _3455 = unpackHalf2x16(_439).y;
    float _3457 = fma(_463, _3433, _3455);
    float _3459 = exp2(_3443);
    float _3461 = unpackHalf2x16(_437).x;
    float _3463 = unpackHalf2x16(_437).y;
    float _3465 = fma(_455, _3433, _3461);
    float _3467 = fma(_457, _3433, _3463);
    float _3469 = unpackHalf2x16(_437).y;
    float _3471 = fma(_457, _3437, _3469);
    float _3473 = unpackHalf2x16(_439).y;
    float _3475 = fma(_463, _3437, _3473);
    float _3477 = unpackHalf2x16(_437).x;
    float _3479 = fma(_455, _3437, _3477);
    float _10958 = _3447 * _501;
    float _3481 = _10958;
    float _10961 = _503 * _3457;
    float _3483 = _10961;
    float _10964 = _503 * _3465;
    float _3485 = _10964;
    float _10967 = _503 * _3467;
    float _3487 = _10967;
    float _3489 = fma(_3449, _3275, _3417);
    float _10974 = _503 * _3471;
    float _3491 = _10974;
    float _10977 = _503 * _3475;
    float _3493 = _10977;
    float _10980 = _3483 * _3451;
    float _3495 = _10980;
    float _3497 = exp2(_3481);
    float _10985 = _3485 * _3451;
    float _3499 = _10985;
    float _10988 = _3487 * _3451;
    float _3501 = _10988;
    float _3503 = max(0.0, _3329);
    float _3505 = unpackHalf2x16(_439).y;
    float _3507 = fma(_463, _3459, _3505);
    float _3509 = trunc(_3503);
    float _3511 = max(_3509, 0.0);
    uint _3513 = uint(_3511);
    float _3515 = unpackHalf2x16(_437).x;
    float _3517 = unpackHalf2x16(_437).y;
    float _3519 = fma(_455, _3459, _3515);
    float _3521 = fma(_457, _3459, _3517);
    float _11020 = _3449 * _3495;
    float _3523 = _11020;
    float _11023 = _503 * _3479;
    float _3525 = _11023;
    float _11026 = _3491 * _3453;
    float _3527 = _11026;
    float _11029 = _3493 * _3453;
    float _3529 = _11029;
    float _3531 = fma(_3429, _3275, _3415);
    float _11036 = _3425 * _3499;
    float _3533 = _11036;
    float _11039 = _3429 * _3501;
    float _3535 = _11039;
    float _11042 = _3507 * _503;
    float _3537 = _11042;
    float _11045 = _3519 * _503;
    float _3539 = _11045;
    float _11048 = _3521 * _503;
    float _3541 = _11048;
    float _11051 = _3525 * _3453;
    float _3543 = _11051;
    float _11054 = _3415 * _3527;
    float _3545 = _11054;
    float _11057 = _3417 * _3529;
    float _3547 = _11057;
    float _3549 = fma(_3425, _3275, _3343);
    uint _3551 = packHalf2x16(vec2(_3549, _3531));
    float _11068 = _3291 * _3411;
    float _3553 = _11068;
    float _11071 = _3405 * _3411;
    float _3555 = _11071;
    float _11074 = _3539 * _3497;
    float _3557 = _11074;
    float _11077 = _3541 * _3497;
    float _3559 = _11077;
    // 强制跳过昂贵的循环
    bool _3561 = false;
    float _11083 = _3343 * _3543;
    float _3563 = _11083;
    float _11086 = _3537 * _3497;
    float _3565 = _11086;
    float _3567 = fma(_3275, _3535, _3545);
    float _3569 = fma(_3275, _3523, _3547);
    float _11097 = _3489 + _3431;
    float _3571 = _11097;
    float _3573 = unpackHalf2x16(_3187).y;
    uint _3575 = packHalf2x16(vec2(_3571, _3573));
    float _3577 = fma(_3275, _3533, _3563);
    float _11111 = _3549 + _3553;
    float _3579 = _11111;
    float _11114 = _3531 + _3555;
    float _3581 = _11114;
    uint _3583 = packHalf2x16(vec2(_3579, _3581));
    float _3585 = fma(_3431, _3565, _3569);
    uint _3587 = packHalf2x16(vec2(_3585, _503));
    float _3589 = fma(_3553, _3557, _3577);
    float _3591 = fma(_3555, _3559, _3567);
    uint _3593 = packHalf2x16(vec2(_3589, _3591));
    uint _3595 = _3575;
    uint _3597 = _3587;
    uint _3599 = _3583;
    uint _3601 = _3593;
    int _3603 = int(_3551);
    uint _3605 = _3575;
    uint _3607 = _3587;
    uint _3609 = _3583;
    uint _3611 = _3593;
    uint _3613 = _3189;
    uint _3615 = _3583;
    uint _3617 = _3575;
    uint _3619 = _3593;
    uint _3621 = _3587;
    if (_3561)
    {
        // 循环体被跳过，不会执行
    }
    uint _4383 = _3615;
    uint _4385 = _3617;
    uint _4387 = _3619;
    uint _4389 = _3621;
    float _12251 = _342 + (-0.0);
    float _4391 = _12251;
    float _12253 = _338 + (-0.0);
    float _4393 = _12253;
    float _12255 = _340 + (-0.0);
    float _4395 = _12255;
    bool _4397 = 0.0 == fp_c3_1._m0[29].x;
    float _12264 = _4391 * fp_c3_1._m0[28].y;
    float _4399 = _12264;
    float _12268 = _4393 * fp_c3_1._m0[28].y;
    float _4401 = _12268;
    float _12272 = _4395 * fp_c3_1._m0[28].y;
    float _4403 = _12272;
    float _12275 = _4399 * _4399;
    float _4405 = _12275;
    float _4407 = fma(_4401, _4401, _4405);
    float _4409 = fma(_4403, _4403, _4407);
    float _4411 = SAFE_INVSQRT(_4409);
    float _12288 = _4411 * _4401;
    float _4413 = _12288;
    float _12291 = _4411 * _4403;
    float _4415 = _12291;
    float _12294 = _4411 * _4399;
    float _4417 = _12294;
    float _12297 = _4413 * (-1.02332746982574462890625);
    float _4419 = _12297;
    float _12300 = _4415 * 1.02332746982574462890625;
    float _4421 = _12300;
    float _12302 = _4417 * (-1.02332746982574462890625);
    float _4423 = _12302;
    float _4425 = 0.0;
    float _4427 = 0.0;
    float _4429 = 0.0;
    float _4465;
    if (_4397)
    {
        float _4431 = _69[5].y;
        float _4433 = _69[5].z;
        float _4435 = _69[5].x;
        float _12313 = _4431 + (-0.5);
        float _4437 = _12313;
        float _12315 = _4433 + (-0.5);
        float _4439 = _12315;
        float _12317 = _4435 + (-0.5);
        float _4441 = _12317;
        float _4443 = abs(_4437);
        float _4445 = abs(_4439);
        float _4447 = max(_4443, _4445);
        float _4449 = abs(_4441);
        float _4451 = max(_4449, _4447);
        bool _4453 = _4451 <= 0.5;
        bool _4455 = isnan(_4451);
        bool _4457 = _4453 || _4455;
        bool _4459 = isnan(0.5);
        bool _4461 = _4457 || _4459;
        float _4463 = float(_4461);
        _4465 = _4463;
        _4467 = true;
    }
    else
    {
        float _4469 = _69[5].y;
        float _4471 = _69[5].z;
        float _4473 = _69[5].x;
        float _4475 = -_4469;
        float _12354 = _4475 + 1.0;
        float _4477 = _12354;
        float _4479 = min(_4469, fp_c3_1._m0[29].x);
        float _4481 = -_4471;
        float _12362 = _4481 + 1.0;
        float _4483 = _12362;
        float _4485 = min(_4477, fp_c3_1._m0[29].x);
        float _4487 = min(_4483, fp_c3_1._m0[29].x);
        float _4489 = min(_4485, _4479);
        float _4491 = min(_4471, fp_c3_1._m0[29].x);
        float _4493 = -_4473;
        float _12381 = _4493 + 1.0;
        float _4495 = _12381;
        float _4497 = min(_4473, fp_c3_1._m0[29].x);
        float _4499 = min(_4491, _4487);
        float _4501 = min(_4495, fp_c3_1._m0[29].x);
        float _12395 = SAFE_DIV(1.0, fp_c3_1._m0[29].x);
        float _4503 = _12395;
        float _4505 = min(_4489, _4499);
        float _4507 = min(_4501, _4497);
        float _4509 = min(_4505, _4507);
        float _12407 = _4509 * _4503;
        float _4511 = _12407;
        float _4513 = clamp(_4511, 0.0, 1.0);
        _4465 = _4513;
    }
    _4467 = false;
    float _4515 = _4465;
    float _4517 = abs(_4391);
    float _4519 = abs(_4393);
    float _4521 = max(_4517, _4519);
    float _4523 = abs(_4395);
    float _4525 = max(_4523, _4521);
    float _12426 = SAFE_DIV(1.0, _4525);
    float _4527 = _12426;
    float _12429 = _4395 * _4527;
    float _4529 = _12429;
    float _12432 = _4391 * _4527;
    float _4531 = _12432;
    float _12435 = _4393 * _4527;
    float _4533 = _12435;
    vec3 _4535 = texture(fp_t_tcb_18, vec3(_4531, _4533, _4529)).xyz;
    float _4537 = _4535.x;
    float _4539 = _4535.y;
    float _4541 = _4535.z;
    bool _4543 = _4515 != 0.0;
    bool _4545 = isnan(_4515);
    bool _4547 = _4543 || _4545;
    bool _4549 = isnan(0.0);
    bool _4551 = _4547 || _4549;
    bool _4553 = 0.0 > fp_c3_1._m0[30].z;
    if (_4551)
    {
        float _4555 = _69[4].z;
        int _4557 = floatBitsToInt(fp_c3_1._m0[27].w) + (-1);
        float _4559 = float(floatBitsToInt(fp_c3_1._m0[27].w));
        float _4561 = _69[4].x;
        float _4563 = _69[4].x;
        float _4565 = _69[4].x;
        float _4567 = _69[4].x;
        float _4569 = _69[4].x;
        float _12488 = _4559 * _4555;
        float _4571 = _12488;
        float _4573 = floor(_4571);
        int _4575 = int(_4573);
        int _4577 = _4575 + 1;
        float _4579 = float(_4575);
        int _4581 = min(_4577, _4557);
        float _4583 = _69[4].y;
        float _12504 = _4559 + _4579;
        float _4585 = _12504;
        float _4587 = float(_4581);
        float _4589 = -_4579;
        float _12511 = _4571 + _4589;
        float _4591 = _12511;
        float _4593 = _69[4].x;
        float _12516 = _4559 + _4585;
        float _4595 = _12516;
        float _4597 = roundEven(_4585);
        float _4599 = max(_4597, 0.0);
        uint _4601 = uint(_4599);
        uint _4603 = clamp(_4601, 0u, 65535u);
        float _12528 = _4559 + _4587;
        float _4605 = _12528;
        float _4607 = roundEven(_4595);
        float _4609 = max(_4607, 0.0);
        uint _4611 = uint(_4609);
        uint _4613 = clamp(_4611, 0u, 65535u);
        float _12539 = _4559 + _4605;
        float _4615 = _12539;
        float _4617 = roundEven(_4605);
        float _4619 = max(_4617, 0.0);
        uint _4621 = uint(_4619);
        uint _4623 = clamp(_4621, 0u, 65535u);
        float _4625 = -_4591;
        float _12551 = _4625 + 1.0;
        float _4627 = _12551;
        float _4629 = roundEven(_4615);
        float _4631 = max(_4629, 0.0);
        uint _4633 = uint(_4631);
        uint _4635 = clamp(_4633, 0u, 65535u);
        float _4637 = roundEven(_4587);
        float _4639 = max(_4637, 0.0);
        uint _4641 = uint(_4639);
        uint _4643 = clamp(_4641, 0u, 65535u);
        float _4645 = roundEven(_4579);
        float _4647 = max(_4645, 0.0);
        uint _4649 = uint(_4647);
        uint _4651 = clamp(_4649, 0u, 65535u);
        vec4 _4653 = texture(fp_t_tcb_14, vec3(_4561, _4583, float(int(_4635)))).xyzw;
        float _4655 = _4653.x;
        float _4657 = _4653.y;
        float _4659 = _4653.z;
        float _4661 = _4653.w;
        vec4 _4663 = texture(fp_t_tcb_14, vec3(_4563, _4583, float(int(_4613)))).xyzw;
        float _4665 = _4663.x;
        float _4667 = _4663.y;
        float _4669 = _4663.z;
        float _4671 = _4663.w;
        vec4 _4673 = texture(fp_t_tcb_14, vec3(_4565, _4583, float(int(_4623)))).xyzw;
        float _4675 = _4673.x;
        float _4677 = _4673.y;
        float _4679 = _4673.z;
        float _4681 = _4673.w;
        vec4 _4683 = texture(fp_t_tcb_14, vec3(_4567, _4583, float(int(_4643)))).xyzw;
        float _4685 = _4683.x;
        float _4687 = _4683.y;
        float _4689 = _4683.z;
        float _4691 = _4683.w;
        vec4 _4693 = texture(fp_t_tcb_14, vec3(_4569, _4583, float(int(_4603)))).xyzw;
        float _4695 = _4693.x;
        float _4697 = _4693.y;
        float _4699 = _4693.z;
        float _4701 = _4693.w;
        vec4 _4703 = texture(fp_t_tcb_14, vec3(_4593, _4583, float(int(_4651)))).xyzw;
        float _4705 = _4703.x;
        float _4707 = _4703.y;
        float _4709 = _4703.z;
        float _4711 = _4703.w;
        float _12680 = _4591 * _4655;
        float _4713 = _12680;
        float _12683 = _4591 * _4657;
        float _4715 = _12683;
        float _12686 = _4591 * _4675;
        float _4717 = _12686;
        float _12689 = _4591 * _4685;
        float _4719 = _12689;
        float _12692 = _4591 * _4677;
        float _4721 = _12692;
        float _12695 = _4591 * _4687;
        float _4723 = _12695;
        float _4725 = fma(_4665, _4627, _4713);
        float _12702 = _4591 * _4679;
        float _4727 = _12702;
        float _4729 = fma(_4695, _4627, _4717);
        float _4731 = fma(_4627, _4705, _4719);
        float _4733 = fma(_4697, _4627, _4721);
        float _4735 = fma(_4667, _4627, _4715);
        float _12721 = _4591 * _4689;
        float _4737 = _12721;
        float _12724 = _4591 * _4659;
        float _4739 = _12724;
        float _12727 = _4729 * 0.8862273693084716796875;
        float _4741 = _12727;
        float _4743 = fma(_4627, _4707, _4723);
        float _12733 = _4731 * 0.8862273693084716796875;
        float _4745 = _12733;
        float _12735 = _4725 * 0.8862273693084716796875;
        float _4747 = _12735;
        float _12738 = _4591 * _4681;
        float _4749 = _12738;
        float _12741 = _4591 * _4691;
        float _4751 = _12741;
        float _4753 = fma(_4699, _4627, _4727);
        float _4755 = fma(_4419, _4733, _4741);
        float _12752 = _4591 * _4661;
        float _4757 = _12752;
        float _4759 = fma(_4627, _4709, _4737);
        float _4761 = fma(_4419, _4743, _4745);
        float _4763 = fma(_4669, _4627, _4739);
        float _4765 = fma(_4419, _4735, _4747);
        float _4767 = fma(_4627, _4711, _4751);
        float _4769 = fma(_4701, _4627, _4749);
        float _4771 = fma(_4421, _4753, _4755);
        float _4773 = fma(_4421, _4759, _4761);
        float _4775 = fma(_4671, _4627, _4757);
        float _4777 = fma(_4421, _4763, _4765);
        float _4779 = fma(_4423, _4769, _4771);
        float _4781 = fma(_4423, _4767, _4773);
        float _4783 = fma(_4423, _4775, _4777);
        float _4785 = max(0.0, _4779);
        float _4787 = max(0.0, _4781);
        float _4789 = max(0.0, _4783);
        float _12813 = _4785 * _4515;
        float _4791 = _12813;
        float _12816 = _4787 * _4515;
        float _4793 = _12816;
        float _12819 = _4789 * _4515;
        float _4795 = _12819;
        _4425 = _4793;
        _4427 = _4791;
        _4429 = _4795;
    }
    float _4797 = _4425;
    float _4799 = _4427;
    float _4801 = _4429;
    float _12830 = _4797 * fp_c3_1._m0[28].x;
    float _4803 = _12830;
    float _12834 = _4799 * fp_c3_1._m0[28].x;
    float _4805 = _12834;
    float _12838 = _4801 * fp_c3_1._m0[28].x;
    float _4807 = _12838;
    float _12843 = _4537 * fp_c3_1._m0[31].x;
    float _4809 = _12843;
    float _12847 = _4539 * fp_c3_1._m0[31].x;
    float _4811 = _12847;
    float _12851 = _4541 * fp_c3_1._m0[31].x;
    float _4813 = _12851;
    float _4815 = _4803;
    float _4817 = _4805;
    float _4819 = _4807;
    if (_4553)
    {
        float _4821 = fma(_4809, fp_c3_1._m0[32].x, _4803);
        _4815 = _4821;
    }
    float _4823 = _4815;
    float _4825 = _4823;
    float _4827 = _4823;
    if (_4553)
    {
        float _4829 = fma(_4811, fp_c3_1._m0[32].y, _4805);
        _4817 = _4829;
    }
    float _4831 = _4817;
    float _4833 = _4831;
    float _4835 = _4831;
    if (_4553)
    {
        float _4837 = fma(_4813, fp_c3_1._m0[32].z, _4807);
        _4819 = _4837;
    }
    float _4839 = _4819;
    float _4841 = _4839;
    if (!_4553)
    {
        int _4843 = floatBitsToInt(fp_c3_1._m0[28].z) + (-1);
        int _4845 = _4843 << 4;
        int _4847 = _4845 + 208;
        int _4849 = _4845 + 212;
        int _4851 = _4845 + 216;
        int _4853 = _4847 - 128;
        uint _4855 = uint(int(uint(_4853) >> uint(4)));
        uint _4857 = uint(int(uint(_4853) >> uint(2)));
        int _4859 = int(_4857) & 3;
        float _4861 = _69[int(_4855)][_4859];
        bool _4863 = 1.0 > fp_c3_1._m0[30].z;
        int _4865 = _4849 - 128;
        uint _4867 = uint(int(uint(_4865) >> uint(4)));
        uint _4869 = uint(int(uint(_4865) >> uint(2)));
        int _4871 = int(_4869) & 3;
        float _4873 = _69[int(_4867)][_4871];
        float _12948 = _4809 * fp_c3_1._m0[32].x;
        float _4875 = _12948;
        int _4877 = _4851 - 128;
        uint _4879 = uint(int(uint(_4877) >> uint(4)));
        uint _4881 = uint(int(uint(_4877) >> uint(2)));
        int _4883 = int(_4881) & 3;
        float _4885 = _69[int(_4879)][_4883];
        float _12966 = _4861 + (-0.5);
        float _4887 = _12966;
        float _12968 = _4873 + (-0.5);
        float _4889 = _12968;
        float _12971 = _4887 * _4887;
        float _4891 = _12971;
        float _12973 = _4885 + (-0.5);
        float _4893 = _12973;
        float _4895 = fma(_4889, _4889, _4891);
        float _12981 = _4811 * fp_c3_1._m0[32].y;
        float _4897 = _12981;
        float _4899 = fma(_4893, _4893, _4895);
        float _4901 = SAFE_SQRT(_4899);
        float _4903 = -fp_c3_1._m0[30].y;
        float _4905 = fma(_4901, fp_c3_1._m0[30].x, _4903);
        float _4907 = clamp(_4905, 0.0, 1.0);
        float _13001 = _4813 * fp_c3_1._m0[32].z;
        float _4909 = _13001;
        if (_4863)
        {
            float _4911 = -_4803;
            float _4913 = fma(_4809, fp_c3_1._m0[32].x, _4911);
            float _4915 = -_4805;
            float _4917 = fma(_4811, fp_c3_1._m0[32].y, _4915);
            float _4919 = -_4807;
            float _4921 = fma(_4813, fp_c3_1._m0[32].z, _4919);
            float _4923 = fma(_4907, _4913, _4803);
            float _4925 = fma(_4907, _4917, _4805);
            float _4927 = fma(_4907, _4921, _4807);
            _4827 = _4923;
            _4835 = _4925;
            _4841 = _4927;
            _4929 = true;
        }
        else
        {
            bool _4931 = fp_c3_1._m0[30].z < 2.0;
            if (_4931)
            {
                float _4933 = fma(_4875, _4907, _4803);
                _4825 = _4933;
            }
            float _4935 = _4825;
            _4827 = _4935;
            if (_4931)
            {
                float _4937 = fma(_4897, _4907, _4805);
                _4833 = _4937;
            }
            float _4939 = _4833;
            _4835 = _4939;
            if (_4931)
            {
                float _4941 = fma(_4909, _4907, _4807);
                _4841 = _4941;
            }
        }
    }
    _4929 = false;
    float _4943 = _4827;
    float _4945 = _4835;
    float _4947 = _4841;
    float _4949 = -_334;
    float _13081 = _342 * _4949;
    float _4951 = _13081;
    float _4953 = unpackHalf2x16(_439).x;
    float _13086 = _4953 + (-0.0);
    float _4955 = _13086;
    float _4957 = -_332;
    float _4959 = fma(_338, _4957, _4951);
    float _4961 = -_336;
    float _4963 = fma(_340, _4961, _4959);
    float _13101 = _342 * _4963;
    float _4965 = _13101;
    float _13104 = _338 * _4963;
    float _4967 = _13104;
    float _13107 = _340 * _4963;
    float _4969 = _13107;
    float _4971 = -_334;
    float _4973 = fma(_4965, -2.0, _4971);
    float _4975 = -_332;
    float _4977 = fma(_4967, -2.0, _4975);
    float _4979 = -_336;
    float _4981 = fma(_4969, -2.0, _4979);
    float _4983 = abs(_4973);
    float _4985 = abs(_4977);
    float _4987 = max(_4983, _4985);
    float _4989 = abs(_4981);
    float _4991 = max(_4989, _4987);
    float _13136 = SAFE_DIV(1.0, _4991);
    float _4993 = _13136;
    float _13139 = _4977 * _4993;
    float _4995 = _13139;
    float _13142 = _4973 * _4993;
    float _4997 = _13142;
    float _13145 = _4981 * _4993;
    float _4999 = _13145;
    float _5001 = -fp_c3_1._m0[31].z;
    float _5003 = fma(_4955, _5001, fp_c3_1._m0[31].z);
    vec3 _5005 = textureLod(fp_t_tcb_1A, vec3(_4997, _4995, _4999), _5003).xyz;
    float _5007 = _5005.x;
    float _5009 = _5005.y;
    float _5011 = _5005.z;
    float _5013 = _69[0].w;
    float _5015 = -_499;
    float _13173 = _5015 + 1.0;
    float _5017 = _13173;
    float _5019 = abs(_5017);
    float _5021 = SAFE_LOG2(_5019);
    float _5023 = unpackHalf2x16(_439).y;
    float _13182 = _5023 + (-0.0);
    float _5025 = _13182;
    float _5027 = unpackHalf2x16(_437).x;
    float _13187 = _5027 + (-0.0);
    float _5029 = _13187;
    float _5031 = fma(_156, fp_c3_1._m0[10].x, fp_c3_1._m0[10].y);
    float _5033 = clamp(_5031, 0.0, 1.0);
    float _5035 = unpackHalf2x16(_437).y;
    float _13200 = _5035 + (-0.0);
    float _5037 = _13200;
    float _13204 = _4943 + fp_c3_1._m0[6].x;
    float _5039 = _13204;
    float _5041 = fma(_156, fp_c3_1._m0[11].x, fp_c3_1._m0[11].y);
    float _5043 = clamp(_5041, 0.0, 1.0);
    float _5045 = max(_4955, _5025);
    float _13220 = _4945 + fp_c3_1._m0[6].y;
    float _5047 = _13220;
    float _13223 = _5033 * _5033;
    float _5049 = _13223;
    float _5051 = max(_5029, _4955);
    float _13229 = _5043 * _5043;
    float _5053 = _13229;
    float _13231 = _5021 * 5.0;
    float _5055 = _13231;
    float _13235 = _4947 + fp_c3_1._m0[6].z;
    float _5057 = _13235;
    float _13238 = _5049 * (-1.44269502162933349609375);
    float _5059 = _13238;
    float _5061 = max(_4955, _5037);
    float _5063 = unpackHalf2x16(_439).y;
    float _5065 = -_5063;
    float _13249 = _5045 + _5065;
    float _5067 = _13249;
    float _13253 = (-0.0) + fp_c3_1._m0[8].w;
    float _5069 = _13253;
    float _5071 = clamp(_5069, 0.0, 1.0);
    float _13257 = _5053 * (-1.44269502162933349609375);
    float _5073 = _13257;
    float _5075 = exp2(_5055);
    float _5077 = exp2(_5059);
    float _5079 = unpackHalf2x16(_437).x;
    float _5081 = -_5079;
    float _13269 = _5051 + _5081;
    float _5083 = _13269;
    float _5085 = unpackHalf2x16(_437).y;
    float _5087 = -_5085;
    float _13277 = _5061 + _5087;
    float _5089 = _13277;
    float _5091 = _69[6].y;
    float _5093 = unpackHalf2x16(_4383).x;
    float _5095 = unpackHalf2x16(_4383).y;
    float _13288 = _5093 + _5039;
    float _5097 = _13288;
    float _13291 = _5095 + _5047;
    float _5099 = _13291;
    float _5101 = unpackHalf2x16(_4385).x;
    float _13297 = _5101 + _5057;
    float _5103 = _13297;
    float _5105 = exp2(_5073);
    float _5107 = unpackHalf2x16(_437).x;
    float _5109 = unpackHalf2x16(_437).y;
    float _5111 = fma(_5083, _5075, _5107);
    float _5113 = fma(_5089, _5075, _5109);
    float _5115 = unpackHalf2x16(_439).y;
    float _5117 = fma(_5067, _5075, _5115);
    float _5119 = -_5077;
    float _5121 = fma(_5071, _5119, _5071);
    float _5123 = fma(_5013, fp_c3_1._m0[10].z, fp_c3_1._m0[10].w);
    float _5125 = clamp(_5123, 0.0, 1.0);
    float _5127 = _69[8].y;
    float _5129 = fma(_5013, fp_c3_1._m0[11].z, fp_c3_1._m0[11].w);
    float _5131 = clamp(_5129, 0.0, 1.0);
    float _5133 = _69[8].x;
    float _13349 = _5125 * _5121;
    float _5135 = _13349;
    float _13352 = (-0.0) + fp_c3_1._m0[9].w;
    float _5137 = _13352;
    float _5139 = clamp(_5137, 0.0, 1.0);
    float _5141 = -_5105;
    float _5143 = fma(_5139, _5141, _5139);
    float _5145 = _69[6].x;
    float _13367 = _5007 * fp_c3_1._m0[33].x;
    float _5147 = _13367;
    float _13371 = _5009 * fp_c3_1._m0[33].x;
    float _5149 = _13371;
    float _13375 = _5011 * fp_c3_1._m0[33].x;
    float _5151 = _13375;
    float _13379 = _5147 * fp_c3_1._m0[31].y;
    float _5153 = _13379;
    float _13383 = _5149 * fp_c3_1._m0[31].y;
    float _5155 = _13383;
    float _13387 = _5151 * fp_c3_1._m0[31].y;
    float _5157 = _13387;
    float _5159 = unpackHalf2x16(_4387).x;
    float _5161 = fma(_5111, _5153, _5159);
    float _5163 = unpackHalf2x16(_4387).y;
    float _5165 = fma(_5113, _5155, _5163);
    float _5167 = unpackHalf2x16(_4389).x;
    float _5169 = fma(_5117, _5157, _5167);
    float _5171 = _69[8].z;
    float _13414 = (-1.0) + fp_c3_1._m0[40].y;
    float _5173 = _13414;
    float _5175 = min(1.0, fp_c3_1._m0[40].y);
    float _5177 = fma(_5097, _475, _5161);
    float _5179 = fma(_5099, _479, _5165);
    float _13428 = _5131 * _5143;
    float _5181 = _13428;
    float _5183 = _69[6].z;
    float _5185 = fma(_5103, _483, _5169);
    float _13437 = (-1.0) + fp_c3_1._m0[40].z;
    float _5187 = _13437;
    float _5189 = min(1.0, fp_c3_1._m0[40].x);
    float _5191 = -_5177;
    float _13446 = _5191 + fp_c3_1._m0[8].x;
    float _5193 = _13446;
    float _5195 = -_5179;
    float _13452 = _5195 + fp_c3_1._m0[8].y;
    float _5197 = _13452;
    float _5199 = -_5185;
    float _13458 = _5199 + fp_c3_1._m0[8].z;
    float _5201 = _13458;
    float _5203 = min(1.0, fp_c3_1._m0[40].z);
    float _5205 = min(1.0, fp_c3_1._m0[40].w);
    float _5207 = fma(_5135, _5193, _5177);
    float _5209 = fma(_5135, _5197, _5179);
    float _5211 = fma(_5135, _5201, _5185);
    float _13479 = (-1.0) + fp_c3_1._m0[40].x;
    float _5213 = _13479;
    float _5215 = -_5207;
    float _13485 = _5215 + fp_c3_1._m0[9].x;
    float _5217 = _13485;
    float _5219 = -_5209;
    float _13491 = _5219 + fp_c3_1._m0[9].y;
    float _5221 = _13491;
    float _5223 = -_5211;
    float _13497 = _5223 + fp_c3_1._m0[9].z;
    float _5225 = _13497;
    float _5227 = fma(_5181, _5217, _5207);
    float _5229 = fma(_5181, _5221, _5209);
    float _5231 = fma(_5181, _5225, _5211);
    float _13512 = (-1.0) + fp_c3_1._m0[40].w;
    float _5233 = _13512;
    float _5235 = max(0.0, _5213);
    float _5237 = max(0.0, _5173);
    float _5239 = -_5091;
    float _13521 = _5229 + _5239;
    float _5241 = _13521;
    float _5243 = -_5145;
    float _13526 = _5227 + _5243;
    float _5245 = _13526;
    float _5247 = -_5183;
    float _13531 = _5231 + _5247;
    float _5249 = _13531;
    float _5251 = max(0.0, _5187);
    float _5253 = max(0.0, _5233);
    float _5255 = fma(_5127, _5241, _5091);
    float _5257 = fma(_5133, _5245, _5145);
    float _5259 = fma(_5171, _5249, _5183);
    float _5261 = fma(_485, _5205, _5253);
    float _5263 = fma(_5255, _5175, _5237);
    float _5265 = fma(_5257, _5189, _5235);
    float _5267 = fma(_5259, _5203, _5251);
    _75.x = _5265;
    _75.y = _5263;
    _75.z = _5267;
    _75.w = _5261;

    // ========= 调试模式 =========
#if DEBUG_MODE == 1
    // 输出纹理 fp_t_tcb_8
    _75 = texture(fp_t_tcb_8, coord_7);
#elif DEBUG_MODE == 2
    // 输出纹理 fp_t_tcb_10 (xyw -> xyz)
    _75 = vec4(texture(fp_t_tcb_10, coord_7).xyw, 1.0);
#elif DEBUG_MODE == 3
    // 输出纹理 fp_t_tcb_A
    _75 = vec4(texture(fp_t_tcb_A, coord_7).xyz, 1.0);
#elif DEBUG_MODE == 4
    // 输出变量 _499
    _75 = vec4(_499, 0.0, 0.0, 1.0);
#elif DEBUG_MODE == 5
    // 输出最终颜色的红色通道
    _75 = vec4(_75.r, 0.0, 0.0, 1.0);
#endif
    // ===========================
}