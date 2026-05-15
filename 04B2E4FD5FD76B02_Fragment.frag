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

layout(set = 2, binding = 128) uniform sampler2D fp_t_tcb_A;
layout(set = 2, binding = 129) uniform sampler2D fp_t_tcb_10;
layout(set = 2, binding = 130) uniform sampler2D fp_t_tcb_12;
layout(set = 2, binding = 131) uniform sampler2D fp_t_tcb_14;
layout(set = 2, binding = 132) uniform sampler2D fp_t_tcb_C;
layout(set = 2, binding = 133) uniform sampler2D fp_t_tcb_E;
layout(set = 2, binding = 134) uniform sampler2DShadow fp_t_tcb_8;
layout(set = 2, binding = 199) uniform samplerBuffer fp_t_tcb_28;
layout(set = 2, binding = 200) uniform samplerBuffer fp_t_tcb_2A;
layout(set = 2, binding = 201) uniform samplerBuffer fp_t_tcb_2E;
layout(set = 2, binding = 202) uniform samplerBuffer fp_t_tcb_2C;
layout(set = 2, binding = 203) uniform samplerBuffer fp_t_tcb_30;
layout(set = 2, binding = 204) uniform samplerBuffer fp_t_tcb_32;
layout(set = 2, binding = 141) uniform samplerCube fp_t_tcb_16;
layout(set = 2, binding = 142) uniform samplerCube fp_t_tcb_18;

layout(location = 0) out vec4 _69;
layout(location = 0) in vec4 _71;

int _77(int _10464, int _10465, int _10466)
{
    int _10469 = 1 + _10465;
    float _10471 = support_buffer_1._m5[_10469];
    if (_10471 == 1.0)
        return _10464;
    if (_10471 < 0.0)
    {
        float _10477 = -_10471;
        float _10479 = float(_10464);
        float _10521 = _10479 * _10477;
        float _10481 = _10521;
        float _10483 = gl_FragCoord.x;
        float _10485 = gl_FragCoord.y;
        float _10487 = (_10466 != 0) ? _10485 : _10483;
        float _10489 = mod(_10487, _10477);
        float _10536 = _10481 + _10489;
        return int(_10536);
    }
    float _10495 = float(_10464);
    float _10545 = _10495 * _10471;
    return int(_10545);
}

void main()
{
    bool _3533 = false;
    bool _2885 = false;
    bool _2229 = false;
    bool _1957 = false;
    bool _1689 = false;
    bool _1273 = false;
    bool _561 = false;
    float _81 = gl_FragCoord.x;
    float _83 = support_buffer_1._m5[0];
    float _4191 = _81 / _83;
    float _85 = _4191;
    float _87 = gl_FragCoord.y;
    float _89 = support_buffer_1._m5[0];
    float _4199 = _87 / _89;
    float _91 = _4199;
    float _4202 = _85 + (-0.0);
    float _93 = _4202;
    float _4204 = _91 + (-0.0);
    float _95 = _4204;
    float _97 = trunc(_93);
    int _99 = int(_97);
    float _101 = trunc(_95);
    int _103 = int(_101);
    int _105 = _99;
    int _107 = 0;
    int _109 = 0;
    int _111 = _77(_105, _107, _109);
    int _113 = _103;
    int _115 = 0;
    int _117 = 1;
    int _119 = _77(_113, _115, _117);
    float _121 = texelFetch(fp_t_tcb_A, ivec2(_111, _119), 0).x;
    bool _125 = _121 == 0.0;
    if (_125)
    {
        discard;
    }
    int _129 = _99;
    int _131 = 1;
    int _133 = 0;
    int _135 = _77(_129, _131, _133);
    int _137 = _103;
    int _139 = 1;
    int _141 = 1;
    int _143 = _77(_137, _139, _141);
    vec4 _146 = texelFetch(fp_t_tcb_10, ivec2(_135, _143), 0).xyzw;
    float _148 = _146.x;
    float _150 = _146.y;
    float _152 = _146.z;
    float _154 = _146.w;
    int _156 = _99;
    int _158 = 2;
    int _160 = 0;
    int _162 = _77(_156, _158, _160);
    int _164 = _103;
    int _166 = 2;
    int _168 = 1;
    int _170 = _77(_164, _166, _168);
    vec4 _172 = texelFetch(fp_t_tcb_12, ivec2(_162, _170), 0).xyzw;
    float _174 = _172.x;
    float _176 = _172.y;
    float _178 = _172.z;
    float _180 = _172.w;
    uint _183 = packHalf2x16(vec2(_174, _176));
    uint _185 = packHalf2x16(vec2(_178, _180));
    int _187 = 0;
    int _189 = int(_183);
    if (_125)
    {
        _187 = 0;
    }
    int _191 = _187;
    int _193 = 0;
    if (_125)
    {
        _193 = 0;
    }
    int _195 = _193;
    int _197 = 0;
    if (_125)
    {
        _197 = 0;
    }
    int _199 = _197;
    int _201 = 0;
    if (_125)
    {
        _201 = 0;
    }
    int _203 = _201;
    if (_125)
    {
        _69.x = intBitsToFloat(_191);
        _69.y = intBitsToFloat(_195);
        _69.z = intBitsToFloat(_199);
        _69.w = intBitsToFloat(_203);
        return;
    }
    float _4318 = (-0.0) + fp_c1_1._m0[0].y;
    float _205 = _4318;
    vec2 _4320 = unpackHalf2x16(0u);
    float _207 = _4320.x;
    uint _209 = packHalf2x16(vec2(_207, 1.0));
    float _211 = fma(_154, fp_c1_1._m0[0].x, _205);
    float _213 = fma(_148, 2.0, -1.0);
    float _215 = fma(_150, 2.0, -1.0);
    float _217 = trunc(_211);
    int _219 = int(_217);
    float _221 = fma(_152, 2.0, -1.0);
    int _223 = _219 & 1;
    bool _225 = _223 != 0;
    int _227 = _219 & 64;
    bool _229 = _227 != 0;
    float _231 = _71.y;
    float _233 = _71.x;
    float _4360 = _231 * fp_c3_1._m0[158].x;
    float _235 = _4360;
    float _4364 = _231 * fp_c3_1._m0[158].y;
    float _237 = _4364;
    float _4368 = _231 * fp_c3_1._m0[158].z;
    float _239 = _4368;
    float _4372 = _231 * fp_c3_1._m0[158].w;
    float _241 = _4372;
    uint _243 = floatBitsToUint(_231);
    uint _245 = _209;
    bool _247 = _225;
    if (_225)
    {
        uint _249 = uint(int(uint(floatBitsToInt(_231)) >> uint(16)));
        int _251 = int(_249) << 16;
        _243 = uint(_251);
    }
    uint _253 = _243;
    int _255 = int(_253);
    if (!_225)
    {
        uint _257 = uint(int(uint(int(_253)) >> uint(16)));
        int _259 = int(_257) << 16;
        int _261 = int(_183) & 65535;
        int _263 = _259 + _261;
        _255 = _263;
    }
    int _265 = _255;
    float _267 = fma(_233, fp_c3_1._m0[157].x, _235);
    float _269 = fma(_233, fp_c3_1._m0[157].y, _237);
    float _271 = fma(_233, fp_c3_1._m0[157].z, _239);
    float _273 = fma(_233, fp_c3_1._m0[157].w, _241);
    int _275 = _265;
    if (_225)
    {
        uint _277 = uint(int(uint(int(_209)) >> uint(16)));
        int _279 = int(_277) << 16;
        int _281 = _265 & 65535;
        int _283 = _279 + _281;
        _275 = _283;
    }
    int _285 = _275;
    uint _287 = uint(_285);
    if (!_225)
    {
        uint _289 = uint(int(uint(int(_183)) >> uint(16)));
        int _291 = int(_289) << 16;
        int _293 = _285 & 65535;
        int _295 = _291 + _293;
        _287 = uint(_295);
    }
    uint _297 = _287;
    float _299 = fma(_121, fp_c3_1._m0[159].x, _267);
    float _301 = fma(_121, fp_c3_1._m0[159].y, _269);
    float _303 = fma(_121, fp_c3_1._m0[159].z, _271);
    float _305 = fma(_121, fp_c3_1._m0[159].w, _273);
    uint _307 = _297;
    if (_225)
    {
        uint _309 = uint(int(uint(int(_297)) >> uint(16)));
        int _311 = int(_309) << 16;
        _307 = uint(_311);
    }
    uint _313 = _307;
    uint _315 = _313;
    if (!_225)
    {
        uint _317 = uint(int(uint(int(_313)) >> uint(16)));
        int _319 = int(_317) << 16;
        int _321 = int(_185) & 65535;
        int _323 = _319 + _321;
        _315 = uint(_323);
    }
    uint _325 = _315;
    float _4531 = _213 * _213;
    float _327 = _4531;
    float _329 = unpackHalf2x16(_325).x;
    float _4539 = _305 + fp_c3_1._m0[160].w;
    float _331 = _4539;
    float _4543 = _299 + fp_c3_1._m0[160].x;
    float _333 = _4543;
    float _4545 = 1.0 / _331;
    float _335 = _4545;
    float _337 = unpackHalf2x16(_297).x;
    float _339 = unpackHalf2x16(_297).y;
    float _341 = fma(_337, 2.0, -1.0);
    float _343 = fma(_339, 2.0, -1.0);
    float _345 = fma(_329, 2.0, -1.0);
    float _4561 = _301 + fp_c3_1._m0[160].y;
    float _347 = _4561;
    float _4565 = _303 + fp_c3_1._m0[160].z;
    float _349 = _4565;
    if (_229)
    {
        uint _351 = uint(int(uint(int(_209)) >> uint(16)));
        int _353 = int(_351) << 16;
        uint _355 = uint(int(uint(int(_185)) >> uint(16)));
        int _357 = _353 + int(_355);
        _245 = uint(_357);
    }
    uint _359 = _245;
    uint _361 = _359;
    if (!_229)
    {
        uint _363 = uint(int(uint(int(_359)) >> uint(16)));
        int _365 = int(_363) << 16;
        uint _367 = uint(int(uint(int(_359)) >> uint(16)));
        int _369 = _365 + int(_367);
        _361 = uint(_369);
    }
    uint _371 = _361;
    float _4612 = _341 * _341;
    float _373 = _4612;
    float _375 = fma(_343, _343, _373);
    float _377 = fma(_215, _215, _327);
    float _4623 = _333 * _335;
    float _379 = _4623;
    float _4626 = _331 * _335;
    float _381 = _4626;
    float _4629 = _347 * _335;
    float _383 = _4629;
    float _4632 = _349 * _335;
    float _385 = _4632;
    float _387 = fma(_345, _345, _375);
    float _389 = fma(_221, _221, _377);
    float _391 = inversesqrt(_387);
    float _393 = -_379;
    float _4649 = _393 + fp_c3_1._m0[164].x;
    float _395 = _4649;
    float _397 = inversesqrt(_389);
    float _399 = -_383;
    float _4657 = _399 + fp_c3_1._m0[164].y;
    float _401 = _4657;
    float _4662 = _395 * fp_c3_1._m0[163].x;
    float _403 = _4662;
    float _4665 = _391 * _345;
    float _405 = _4665;
    float _4668 = _391 * _343;
    float _407 = _4668;
    float _4671 = _397 * _213;
    float _409 = _4671;
    float _4674 = _397 * _215;
    float _411 = _4674;
    float _4677 = _397 * _221;
    float _413 = _4677;
    float _415 = fma(_401, fp_c3_1._m0[163].y, _403);
    float _4685 = _391 * _341;
    float _417 = _4685;
    float _4690 = _407 * fp_c3_1._m0[162].x;
    float _419 = _4690;
    float _4694 = _407 * fp_c3_1._m0[162].z;
    float _421 = _4694;
    float _4698 = _411 * fp_c3_1._m0[162].x;
    float _423 = _4698;
    float _4702 = _411 * fp_c3_1._m0[162].z;
    float _425 = _4702;
    float _4706 = _411 * fp_c3_1._m0[162].y;
    float _427 = _4706;
    float _4710 = _407 * fp_c3_1._m0[162].y;
    float _429 = _4710;
    float _431 = fma(_417, fp_c3_1._m0[161].x, _419);
    float _433 = fma(_417, fp_c3_1._m0[161].z, _421);
    float _435 = fma(_409, fp_c3_1._m0[161].x, _423);
    float _437 = fma(_409, fp_c3_1._m0[161].z, _425);
    float _439 = fma(_409, fp_c3_1._m0[161].y, _427);
    float _441 = fma(_417, fp_c3_1._m0[161].y, _429);
    float _443 = fma(_405, fp_c3_1._m0[163].x, _431);
    float _445 = fma(_405, fp_c3_1._m0[163].z, _433);
    float _447 = -_385;
    float _4757 = _447 + fp_c3_1._m0[164].z;
    float _449 = _4757;
    float _451 = fma(_413, fp_c3_1._m0[163].z, _437);
    float _453 = fma(_413, fp_c3_1._m0[163].y, _439);
    float _455 = fma(_413, fp_c3_1._m0[163].x, _435);
    float _457 = fma(_405, fp_c3_1._m0[163].y, _441);
    float _4779 = _443 + (-0.0);
    float _459 = _4779;
    float _4781 = _445 + (-0.0);
    float _461 = _4781;
    uint _463 = packHalf2x16(vec2(_461, _459));
    float _4787 = _451 + (-0.0);
    float _465 = _4787;
    float _4789 = _453 + (-0.0);
    float _467 = _4789;
    uint _469 = packHalf2x16(vec2(_467, _465));
    float _4795 = _455 + (-0.0);
    float _471 = _4795;
    float _473 = unpackHalf2x16(floatBitsToUint(_441)).x;
    uint _475 = packHalf2x16(vec2(_473, _471));
    float _4805 = _457 + (-0.0);
    float _477 = _4805;
    float _479 = unpackHalf2x16(floatBitsToUint(_457)).y;
    uint _481 = packHalf2x16(vec2(_477, _479));
    float _483 = fma(_449, fp_c3_1._m0[163].z, _415);
    float _4821 = _461 * _467;
    float _485 = _4821;
    float _4824 = _459 * _465;
    float _487 = _4824;
    uint _489 = uint(int(uint(int(_475)) >> uint(16)));
    int _491 = int(_489) << 16;
    uint _493 = uint(int(uint(int(_469)) >> uint(16)));
    int _495 = _491 + int(_493);
    int _497 = int(_463) & 65535;
    int _499 = _497 << 16;
    int _501 = int(_481) & 65535;
    int _503 = _499 + _501;
    float _505 = fma(_483, fp_c3_1._m0[147].x, fp_c3_1._m0[147].y);
    float _507 = unpackHalf2x16(uint(_495)).y;
    float _4864 = _477 * _507;
    float _509 = _4864;
    float _511 = unpackHalf2x16(uint(_503)).x;
    float _513 = unpackHalf2x16(uint(_503)).y;
    float _515 = unpackHalf2x16(uint(_495)).x;
    float _517 = unpackHalf2x16(uint(_495)).y;
    float _519 = -_485;
    float _521 = -_487;
    float _523 = fma(_511, _515, _519);
    float _525 = fma(_513, _517, _521);
    float _527 = -_509;
    float _529 = fma(_459, _467, _527);
    uint _531 = _371;
    if (_229)
    {
        float _533 = unpackHalf2x16(_371).x;
        float _4908 = _533 * fp_c1_1._m0[0].x;
        float _535 = _4908;
        float _4911 = _535 * 0.0625;
        float _537 = _4911;
        float _539 = floor(_537);
        float _541 = fma(_539, -16.0, _535);
        float _4920 = _535 * 0.0041666668839752674102783203125;
        float _543 = _4920;
        float _545 = clamp(_543, 0.0, 1.0);
        float _4925 = _541 * 0.066666670143604278564453125;
        float _547 = _4925;
        float _549 = clamp(_547, 0.0, 1.0);
        float _4930 = _545 * 3.75;
        float _551 = _4930;
        float _4932 = _549 * 3.75;
        float _553 = _4932;
        float _4934 = _551 + (-0.0);
        float _555 = _4934;
        float _4936 = _553 + (-0.0);
        float _557 = _4936;
        uint _559 = packHalf2x16(vec2(_557, _555));
        _531 = _559;
        _561 = true;
    }
    else
    {
        _561 = false;
    }
    uint _563 = _531;
    int _565 = _99;
    int _567 = 3;
    int _569 = 0;
    int _571 = _77(_565, _567, _569);
    int _573 = _103;
    int _575 = 3;
    int _577 = 1;
    int _579 = _77(_573, _575, _577);
    vec3 _583 = texelFetch(fp_t_tcb_14, ivec2(_571, _579), 0).xzw;
    float _585 = _583.x;
    float _587 = _583.y;
    float _589 = _583.z;
    int _591 = _99;
    int _593 = 4;
    int _595 = 0;
    int _597 = _77(_591, _593, _595);
    int _599 = _103;
    int _601 = 4;
    int _603 = 1;
    int _605 = _77(_599, _601, _603);
    vec4 _607 = texelFetch(fp_t_tcb_C, ivec2(_597, _605), 0).xyzw;
    float _609 = _607.x;
    float _611 = _607.y;
    float _613 = _607.z;
    float _615 = _607.w;
    uint _617 = packHalf2x16(vec2(_613, _615));
    int _619 = _99;
    int _621 = 5;
    int _623 = 0;
    int _625 = _77(_619, _621, _623);
    int _627 = _103;
    int _629 = 5;
    int _631 = 1;
    int _633 = _77(_627, _629, _631);
    vec4 _635 = texelFetch(fp_t_tcb_E, ivec2(_625, _633), 0).xyzw;
    float _637 = _635.x;
    float _639 = _635.y;
    float _641 = _635.z;
    float _643 = _635.w;
    float _5010 = _383 * fp_c3_1._m0[138].w;
    float _645 = _5010;
    float _5014 = _383 * fp_c3_1._m0[138].z;
    float _647 = _5014;
    float _649 = fma(_379, fp_c3_1._m0[137].w, _645);
    float _651 = fma(_379, fp_c3_1._m0[137].z, _647);
    float _5029 = _383 * fp_c3_1._m0[138].x;
    float _653 = _5029;
    float _5033 = _383 * fp_c3_1._m0[138].y;
    float _655 = _5033;
    float _657 = fma(_385, fp_c3_1._m0[139].w, _649);
    float _659 = fma(_385, fp_c3_1._m0[139].z, _651);
    float _661 = fma(_379, fp_c3_1._m0[137].x, _653);
    float _663 = fma(_379, fp_c3_1._m0[137].y, _655);
    float _665 = fma(_381, fp_c3_1._m0[140].w, _657);
    float _667 = fma(_381, fp_c3_1._m0[140].z, _659);
    float _5067 = 1.0 / _665;
    float _669 = _5067;
    float _671 = fma(_385, fp_c3_1._m0[139].x, _661);
    float _673 = fma(_385, fp_c3_1._m0[139].y, _663);
    float _675 = min(_667, _665);
    float _677 = fma(_381, fp_c3_1._m0[140].x, _671);
    float _679 = fma(_381, fp_c3_1._m0[140].y, _673);
    float _5093 = _675 * _669;
    float _681 = _5093;
    float _5096 = _677 * _669;
    float _683 = _5096;
    float _5099 = _679 * _669;
    float _685 = _5099;
    float _687 = texture(fp_t_tcb_8, vec3(vec2(_683, _685), _681));
    float _689 = -_379;
    float _5112 = _689 + fp_c3_1._m0[8].x;
    float _691 = _5112;
    float _693 = -_383;
    float _5118 = _693 + fp_c3_1._m0[8].y;
    float _695 = _5118;
    float _697 = -_385;
    float _5124 = _697 + fp_c3_1._m0[8].z;
    float _699 = _5124;
    float _5129 = _677 * fp_c3_1._m0[141].x;
    float _701 = _5129;
    float _5132 = (-0.0) + fp_c1_1._m0[0].w;
    float _703 = _5132;
    uint _705 = uint(int(uint(0) >> uint(16)));
    int _707 = int(_705) << 16;
    float _5140 = _691 * _691;
    float _709 = _5140;
    float _711 = uintBitsToFloat(_563);
    if (!_225)
    {
        uint _713 = uint(int(uint(int(_183)) >> uint(16)));
        int _715 = int(_713) << 16;
        _189 = _715;
    }
    int _717 = _189;
    int _719 = 0 & 65535;
    float _721 = fma(_679, fp_c3_1._m0[141].y, _701);
    int _723 = _707 & 65535;
    float _725 = fma(_695, _695, _709);
    uint _727 = uint(_717);
    int _729 = _723;
    uint _731 = uint(_719);
    if (!_225)
    {
        int _733 = _717 & 65535;
        _727 = uint(_733);
    }
    uint _735 = _727;
    float _737 = fma(_667, fp_c3_1._m0[141].z, _721);
    float _739 = fma(_699, _699, _725);
    float _741 = inversesqrt(_739);
    float _743 = fma(_665, fp_c3_1._m0[141].w, _737);
    float _745 = clamp(_743, 0.0, 1.0);
    float _5202 = _691 * _741;
    float _747 = _5202;
    float _5205 = _695 * _741;
    float _749 = _5205;
    float _5208 = _699 * _741;
    float _751 = _5208;
    int _753 = floatBitsToInt(_741);
    if (_229)
    {
        _753 = 15;
    }
    int _755 = _753;
    int _757 = _755;
    if (!_229)
    {
        _757 = 33;
    }
    int _759 = _757;
    float _5225 = _747 * _747;
    float _761 = _5225;
    float _5227 = _749 + (-0.0);
    float _763 = _5227;
    float _765 = unpackHalf2x16(floatBitsToUint(_667)).x;
    uint _767 = packHalf2x16(vec2(_765, _763));
    bool _769 = _759 != 33;
    float _771 = fma(_749, _749, _761);
    float _773 = -fp_c3_1._m0[0].y;
    float _5247 = _763 + _773;
    float _775 = _5247;
    uint _777 = uint(int(uint(int(_767)) >> uint(16)));
    int _779 = int(_777) << 16;
    int _781 = int(_469) & 65535;
    int _783 = _779 + _781;
    float _785 = fma(_751, _751, _771);
    float _787 = inversesqrt(_785);
    float _5269 = _747 * _787;
    float _789 = _5269;
    float _5272 = _749 * _787;
    float _791 = _5272;
    float _5274 = _747 + (-0.0);
    float _793 = _5274;
    float _795 = unpackHalf2x16(floatBitsToUint(_747)).x;
    uint _797 = packHalf2x16(vec2(_795, _793));
    float _799 = unpackHalf2x16(uint(_495)).y;
    float _5289 = _799 * _789;
    float _801 = _5289;
    float _803 = -fp_c3_1._m0[0].x;
    float _5295 = _793 + _803;
    float _805 = _5295;
    uint _807 = uint(int(uint(int(_797)) >> uint(16)));
    int _809 = int(_807) << 16;
    uint _811 = uint(int(uint(_495) >> uint(16)));
    int _813 = _809 + int(_811);
    uint _815 = uint(int(uint(_495) >> uint(16)));
    int _817 = int(_815) << 16;
    float _819 = fma(_467, _791, _801);
    float _5322 = _751 * _787;
    float _821 = _5322;
    float _5324 = _751 + (-0.0);
    float _823 = _5324;
    float _825 = unpackHalf2x16(floatBitsToUint(_751)).y;
    uint _827 = packHalf2x16(vec2(_823, _825));
    float _829 = fma(_465, _821, _819);
    float _831 = clamp(_829, 0.0, 1.0);
    uint _833 = _827;
    uint _835 = uint(_817);
    if (_225)
    {
        int _837 = int(_185) & 65535;
        int _839 = _837 << 16;
        int _841 = int(_827) & 65535;
        int _843 = _839 + _841;
        _833 = uint(_843);
    }
    uint _845 = _833;
    float _5361 = _805 * _805;
    float _847 = _5361;
    float _849 = unpackHalf2x16(_845).x;
    float _851 = -fp_c3_1._m0[0].z;
    float _5370 = _849 + _851;
    float _853 = _5370;
    float _855 = fma(_775, _775, _847);
    float _857 = fma(_853, _853, _855);
    float _859 = fma(_587, fp_c1_1._m0[0].x, _205);
    uint _861 = packHalf2x16(vec2(_585, _859));
    float _863 = inversesqrt(_857);
    float _5391 = _615 + (-0.0);
    float _865 = _5391;
    float _867 = trunc(_859);
    int _869 = int(_867);
    float _871 = fma(_643, 10.0, _703);
    float _873 = -_641;
    float _5403 = _873 + 1.0;
    float _875 = _5403;
    int _877 = int(_861) & 65535;
    float _879 = exp2(_871);
    float _5411 = _863 * _805;
    float _881 = _5411;
    float _5414 = _863 * _775;
    float _883 = _5414;
    uint _885 = packHalf2x16(vec2(_881, _883));
    float _5421 = _863 * _853;
    float _887 = _5421;
    int _889 = min(_869, 63);
    int _891 = int(_885) & 65535;
    int _893 = _891 << 16;
    uint _895 = uint(int(uint(_813) >> uint(16)));
    int _897 = _893 + int(_895);
    int _899 = _889 << 4;
    int _901 = _899 + 152;
    uint _903 = uint(int(uint(_901) >> uint(2)));
    uint _905 = uint(int(uint(int(_903)) >> uint(2)));
    int _907 = int(_903) & 3;
    float _909 = fp_c3_1._m0[int(_905)][_907];
    int _911 = int(_903) + 1;
    uint _913 = uint(int(uint(_911) >> uint(2)));
    int _915 = _911 & 3;
    float _917 = fp_c3_1._m0[int(_913)][_915];
    int _919 = _899 + 1172;
    uint _921 = uint(int(uint(_919) >> uint(2)));
    uint _923 = uint(int(uint(int(_921)) >> uint(2)));
    int _925 = int(_921) & 3;
    float _927 = fp_c3_1._m0[int(_923)][_925];
    int _929 = _899 + 144;
    uint _931 = uint(int(uint(_929) >> uint(2)));
    uint _933 = uint(int(uint(int(_931)) >> uint(2)));
    int _935 = int(_931) & 3;
    float _937 = fp_c3_1._m0[int(_933)][_935];
    int _939 = int(_931) + 1;
    uint _941 = uint(int(uint(_939) >> uint(2)));
    int _943 = _939 & 3;
    float _945 = fp_c3_1._m0[int(_941)][_943];
    float _947 = unpackHalf2x16(uint(_813)).x;
    float _949 = unpackHalf2x16(uint(_813)).y;
    float _951 = unpackHalf2x16(uint(_897)).x;
    float _953 = unpackHalf2x16(uint(_897)).y;
    float _5537 = _947 * _951;
    float _955 = _5537;
    float _5540 = _949 * _953;
    float _957 = _5540;
    float _959 = -_831;
    float _5544 = _959 + 1.0;
    float _961 = _5544;
    uint _963 = uint(int(uint(_813) >> uint(16)));
    int _965 = int(_963) << 16;
    float _967 = abs(_961);
    float _969 = log2(_967);
    uint _971 = uint(int(uint(int(_885)) >> uint(16)));
    int _973 = int(_971) << 16;
    uint _975 = uint(int(uint(_783) >> uint(16)));
    int _977 = _973 + int(_975);
    float _979 = unpackHalf2x16(uint(_783)).x;
    float _981 = unpackHalf2x16(uint(_783)).y;
    float _983 = unpackHalf2x16(uint(_977)).x;
    float _985 = unpackHalf2x16(uint(_977)).y;
    float _987 = fma(_979, _983, _955);
    float _989 = fma(_981, _985, _957);
    float _5595 = (-0.0) + fp_c1_1._m0[1].x;
    float _991 = _5595;
    float _993 = unpackHalf2x16(uint(_783)).y;
    float _995 = unpackHalf2x16(_845).x;
    float _997 = fma(_995, _887, _989);
    float _999 = clamp(_997, 0.0, 1.0);
    float _1001 = unpackHalf2x16(_845).x;
    float _1003 = fma(_465, _1001, _987);
    float _1005 = clamp(_1003, 0.0, 1.0);
    uint _1007 = _845;
    uint _1009 = uint(_965);
    uint _1011 = uint(_877);
    if (!_225)
    {
        int _1013 = int(_845) & 65535;
        _1007 = uint(_1013);
    }
    uint _1015 = _1007;
    if (_769)
    {
        _247 = true;
    }
    bool _1017 = _247;
    float _1019 = -_999;
    float _5640 = _1019 + 1.0;
    float _1021 = _5640;
    float _1023 = abs(_1021);
    float _1025 = log2(_1023);
    float _5647 = _969 * _917;
    float _1027 = _5647;
    bool _1029 = floatBitsToInt(_927) != 0;
    float _5653 = _1005 + _865;
    float _1031 = _5653;
    float _5655 = _879 + (-0.0);
    float _1033 = _5655;
    float _1035 = fma(_879, 0.125, _991);
    float _1037 = unpackHalf2x16(uint(_817)).y;
    float _1039 = -fp_c3_1._m0[0].x;
    float _5669 = _1037 * _1039;
    float _1041 = _5669;
    float _1043 = exp2(_1027);
    float _1045 = fma(_1031, _1031, fp_c1_1._m0[0].z);
    float _1047 = -_745;
    float _1049 = fma(_687, _1047, _745);
    float _1051 = -fp_c3_1._m0[0].y;
    float _1053 = fma(_467, _1051, _1041);
    float _5692 = _865 + _1045;
    float _1055 = _5692;
    float _1057 = clamp(_1055, 0.0, 1.0);
    float _1059 = -_589;
    float _1061 = fma(_1049, _1059, _589);
    uint _1063 = packHalf2x16(vec2(_1061, _1053));
    float _5707 = _937 * _1043;
    float _1065 = _5707;
    float _1067 = unpackHalf2x16(floatBitsToUint(_937)).y;
    uint _1069 = packHalf2x16(vec2(_1065, _1067));
    float _5718 = _909 * _1043;
    float _1071 = _5718;
    float _1073 = unpackHalf2x16(floatBitsToUint(_909)).y;
    uint _1075 = packHalf2x16(vec2(_1071, _1073));
    float _5729 = _945 * _1043;
    float _1077 = _5729;
    float _1079 = unpackHalf2x16(floatBitsToUint(_945)).y;
    uint _1081 = packHalf2x16(vec2(_1077, _1079));
    float _5739 = _1057 + (-0.0);
    float _1083 = _5739;
    float _1085 = -_637;
    float _1087 = -_639;
    float _5745 = _1085 + 1.0;
    float _1089 = _5745;
    float _5747 = _1087 + 1.0;
    float _1091 = _5747;
    int _1093 = int(_1081);
    bool _1095 = _1017;
    uint _1097 = _1063;
    if (_1029)
    {
        uint _1099 = uint(int(uint(_817) >> uint(16)));
        int _1101 = int(_1099) << 16;
        int _1103 = int(_1069) & 65535;
        int _1105 = _1101 + _1103;
        _835 = uint(_1105);
    }
    uint _1107 = _835;
    if (!_1029)
    {
        uint _1109 = uint(int(uint(_965) >> uint(16)));
        int _1111 = int(_1109) << 16;
        int _1113 = int(_1069) & 65535;
        int _1115 = _1111 + _1113;
        _1009 = uint(_1115);
    }
    uint _1117 = _1009;
    float _5791 = _1025 * 5.0;
    float _1119 = _5791;
    if (_1029)
    {
        uint _1121 = uint(int(uint(_723) >> uint(16)));
        int _1123 = int(_1121) << 16;
        int _1125 = int(_1075) & 65535;
        int _1127 = _1123 + _1125;
        _729 = _1127;
    }
    int _1129 = _729;
    uint _1131 = uint(_1129);
    if (!_1029)
    {
        int _1133 = int(_1075) & 65535;
        int _1135 = _1133 << 16;
        int _1137 = _1129 & 65535;
        int _1139 = _1135 + _1137;
        _1131 = uint(_1139);
    }
    uint _1141 = _1131;
    float _1143 = -fp_c3_1._m0[0].z;
    float _1145 = fma(_465, _1143, _1053);
    float _1147 = clamp(_1145, 0.0, 1.0);
    uint _1149 = packHalf2x16(vec2(_1147, _1073));
    uint _1151 = _1149;
    if (_1029)
    {
        int _1153 = int(_1081) & 65535;
        int _1155 = _1153 << 16;
        int _1157 = _877 & 65535;
        int _1159 = _1155 + _1157;
        _1011 = uint(_1159);
    }
    uint _1161 = _1011;
    if (!_1029)
    {
        int _1163 = int(_1081) & 65535;
        int _1165 = _1163 << 16;
        int _1167 = _719 & 65535;
        int _1169 = _1165 + _1167;
        _731 = uint(_1169);
    }
    uint _1171 = _731;
    float _1173 = exp2(_1119);
    float _5880 = _1147 * fp_c3_1._m0[4].z;
    float _1175 = _5880;
    float _5884 = _1147 * fp_c3_1._m0[4].x;
    float _1177 = _5884;
    float _5888 = _1147 * fp_c3_1._m0[4].y;
    float _1179 = _5888;
    uint _1181 = _1171;
    uint _1183 = _1171;
    if (!_769)
    {
        if (_229)
        {
            _1093 = 35;
        }
        int _1185 = _1093;
        int _1187 = _1185;
        if (!_229)
        {
            _1187 = 33;
        }
        int _1189 = _1187;
        bool _1191 = _1189 != 33;
        _1095 = _1191;
    }
    bool _1193 = _1095;
    float _1195 = fma(_875, _1173, _641);
    float _1197 = fma(_1089, _1173, _637);
    float _1199 = fma(_1091, _1173, _639);
    bool _1201 = _1193;
    uint _1269;
    uint _1271;
    if (_1193)
    {
        float _5927 = _881 * _459;
        float _1203 = _5927;
        float _5930 = _881 * _523;
        float _1205 = _5930;
        float _1207 = fma(_883, _477, _1203);
        float _1209 = fma(_883, _525, _1205);
        float _1211 = fma(_887, _461, _1207);
        float _1213 = fma(_887, _529, _1209);
        float _1215 = unpackHalf2x16(_563).x;
        float _1217 = unpackHalf2x16(_563).y;
        float _5955 = _1215 * _1217;
        float _1219 = _5955;
        float _1221 = unpackHalf2x16(_563).x;
        float _1223 = unpackHalf2x16(_563).y;
        float _5964 = _1221 * _1213;
        float _1225 = _5964;
        float _5967 = _1223 * _1211;
        float _1227 = _5967;
        float _5970 = _1033 * _1219;
        float _1229 = _5970;
        float _5973 = _1225 * _1225;
        float _1231 = _5973;
        float _1233 = fma(_1229, 0.125, _991);
        uint _1235 = packHalf2x16(vec2(_1061, _1233));
        float _1237 = fma(_1227, _1227, _1231);
        float _1239 = -_1237;
        float _5988 = _1239 + 1.0;
        float _1241 = _5988;
        float _1243 = clamp(_1241, 0.0, 1.0);
        float _1245 = sqrt(_1243);
        float _1247 = abs(_1245);
        float _1249 = log2(_1247);
        float _5999 = _1249 * _1033;
        float _1251 = _5999;
        float _1253 = exp2(_1251);
        float _6004 = _1233 * _1253;
        float _1255 = _6004;
        uint _1257 = packHalf2x16(vec2(_1147, _1255));
        float _6011 = _1197 * _1255;
        float _1259 = _6011;
        float _6014 = _1199 * _1255;
        float _1261 = _6014;
        uint _1263 = packHalf2x16(vec2(_1259, _1261));
        float _6021 = _1195 * _1255;
        float _1265 = _6021;
        uint _1267 = packHalf2x16(vec2(_1265, _1083));
        _1097 = _1235;
        _1151 = _1257;
        _1269 = _1263;
        _1271 = _1267;
        _1273 = true;
    }
    else
    {
        float _1275 = unpackHalf2x16(_1107).y;
        float _6036 = _1275 * _881;
        float _1277 = _6036;
        float _6039 = _1197 * _1035;
        float _1279 = _6039;
        float _6042 = _1199 * _1035;
        float _1281 = _6042;
        float _6045 = _1195 * _1035;
        float _1283 = _6045;
        float _1285 = fma(_467, _883, _1277);
        float _1287 = fma(_465, _887, _1285);
        float _1289 = clamp(_1287, 0.0, 1.0);
        float _1291 = abs(_1289);
        float _1293 = log2(_1291);
        float _6062 = _1293 * _1033;
        float _1295 = _6062;
        float _1297 = exp2(_1295);
        float _6067 = _1279 * _1297;
        float _1299 = _6067;
        float _6070 = _1281 * _1297;
        float _1301 = _6070;
        uint _1303 = packHalf2x16(vec2(_1299, _1301));
        float _6077 = _1283 * _1297;
        float _1305 = _6077;
        uint _1307 = packHalf2x16(vec2(_1305, _1083));
        _1269 = _1303;
        _1271 = _1307;
    }
    _1273 = false;
    uint _1309 = _1097;
    uint _1311 = _1151;
    uint _1313 = _1269;
    uint _1315 = _1271;
    float _1317 = unpackHalf2x16(_1117).y;
    float _1319 = -fp_c3_1._m0[1].x;
    float _6097 = _1317 + _1319;
    float _1321 = _6097;
    float _1323 = -fp_c3_1._m0[1].y;
    float _6103 = _993 + _1323;
    float _1325 = _6103;
    float _1327 = unpackHalf2x16(_1107).y;
    float _6110 = _1327 * fp_c3_1._m0[0].x;
    float _1329 = _6110;
    float _1331 = unpackHalf2x16(_1309).x;
    float _1333 = unpackHalf2x16(_1015).x;
    float _1335 = -fp_c3_1._m0[1].z;
    float _6122 = _1333 + _1335;
    float _1337 = _6122;
    float _1339 = unpackHalf2x16(_1311).x;
    uint _1341 = uint(int(uint(int(_1117)) >> uint(16)));
    int _1343 = int(_1341) << 16;
    uint _1345 = uint(int(uint(int(_617)) >> uint(16)));
    int _1347 = _1343 + int(_1345);
    float _1349 = unpackHalf2x16(_1313).x;
    float _1351 = unpackHalf2x16(_1313).y;
    float _6149 = _1177 * _1349;
    float _1353 = _6149;
    float _6152 = _1179 * _1351;
    float _1355 = _6152;
    uint _1357 = packHalf2x16(vec2(_1353, _1355));
    float _6159 = _1321 * _1321;
    float _1359 = _6159;
    float _1361 = fma(_467, fp_c3_1._m0[0].y, _1329);
    float _1363 = fma(_1325, _1325, _1359);
    uint _1365 = packHalf2x16(vec2(_1175, _1363));
    float _1367 = fma(_465, fp_c3_1._m0[0].z, _1361);
    float _1369 = clamp(_1367, 0.0, 1.0);
    float _1371 = fma(_1337, _1337, _1363);
    int _1373 = int(_1357) & 65535;
    int _1375 = _1373 << 16;
    int _1377 = int(_1365) & 65535;
    int _1379 = _1375 + _1377;
    float _1381 = inversesqrt(_1371);
    float _1383 = unpackHalf2x16(_1161).x;
    float _1385 = fma(_1369, _1383, _1339);
    uint _1387 = packHalf2x16(vec2(_1331, _1385));
    float _1389 = unpackHalf2x16(uint(_1379)).x;
    float _1391 = unpackHalf2x16(uint(_1379)).y;
    float _1393 = unpackHalf2x16(_1315).x;
    float _1395 = unpackHalf2x16(_1315).y;
    float _6224 = _1389 * _1393;
    float _1397 = _6224;
    float _6227 = _1391 * _1395;
    float _1399 = _6227;
    uint _1401 = packHalf2x16(vec2(_1397, _1399));
    float _6235 = _1385 * fp_c3_1._m0[4].z;
    float _1403 = _6235;
    uint _1405 = packHalf2x16(vec2(_1403, _1337));
    float _6243 = _1385 * fp_c3_1._m0[4].x;
    float _1407 = _6243;
    float _6247 = _1385 * fp_c3_1._m0[4].y;
    float _1409 = _6247;
    int _1411 = int(_1401) & 65535;
    int _1413 = _1411 << 16;
    uint _1415 = uint(int(uint(int(_1357)) >> uint(16)));
    int _1417 = _1413 + int(_1415);
    float _6263 = _1381 * _1321;
    float _1419 = _6263;
    float _6266 = _1381 * _1325;
    float _1421 = _6266;
    uint _1423 = packHalf2x16(vec2(_1419, _1421));
    float _6273 = _1381 * _1337;
    float _1425 = _6273;
    float _6276 = _1407 * _615;
    float _1427 = _6276;
    float _6279 = _1409 * _615;
    float _1429 = _6279;
    uint _1431 = packHalf2x16(vec2(_1427, _1429));
    float _1433 = unpackHalf2x16(uint(_1417)).x;
    float _1435 = unpackHalf2x16(uint(_1417)).y;
    float _1437 = unpackHalf2x16(_1315).y;
    float _1439 = unpackHalf2x16(_1315).y;
    float _6300 = _1433 * _1437;
    float _1441 = _6300;
    float _6303 = _1435 * _1439;
    float _1443 = _6303;
    uint _1445 = packHalf2x16(vec2(_1441, _1443));
    int _1447 = int(_1423) & 65535;
    int _1449 = _1447 << 16;
    int _1451 = int(_1405) & 65535;
    int _1453 = _1449 + _1451;
    int _1455 = int(_1445) & 65535;
    int _1457 = _1455 << 16;
    uint _1459 = uint(int(uint(int(_1401)) >> uint(16)));
    int _1461 = _1457 + int(_1459);
    float _1463 = unpackHalf2x16(uint(_1453)).x;
    float _1465 = unpackHalf2x16(uint(_1453)).y;
    float _1467 = unpackHalf2x16(uint(_1347)).x;
    float _1469 = unpackHalf2x16(uint(_1347)).y;
    float _6350 = _1463 * _1467;
    float _1471 = _6350;
    float _6353 = _1465 * _1469;
    float _1473 = _6353;
    uint _1475 = packHalf2x16(vec2(_1471, _1473));
    int _1477 = _1347;
    if (_229)
    {
        _1477 = 15;
    }
    int _1479 = _1477;
    int _1481 = _1479;
    if (!_229)
    {
        _1481 = 33;
    }
    int _1483 = _1481;
    float _1485 = fma(_1421, _993, _1473);
    int _1487 = int(_1475) & 65535;
    int _1489 = _1487 << 16;
    uint _1491 = uint(int(uint(int(_1431)) >> uint(16)));
    int _1493 = _1489 + int(_1491);
    bool _1495 = _1483 != 33;
    int _1497 = int(_1387) & 65535;
    int _1499 = _1497 << 16;
    uint _1501 = uint(int(uint(int(_1445)) >> uint(16)));
    int _1503 = _1499 + int(_1501);
    int _1505 = int(_1431) & 65535;
    int _1507 = _1505 << 16;
    int _1509 = int(_1387) & 65535;
    int _1511 = _1507 + _1509;
    float _1513 = unpackHalf2x16(_1015).x;
    float _1515 = fma(_1425, _1513, _1485);
    float _1517 = clamp(_1515, 0.0, 1.0);
    float _1519 = unpackHalf2x16(uint(_1511)).x;
    float _1521 = unpackHalf2x16(uint(_1511)).y;
    float _1523 = unpackHalf2x16(uint(_1503)).x;
    float _1525 = unpackHalf2x16(uint(_1503)).y;
    float _6439 = _1519 * _1523;
    float _1527 = _6439;
    float _6442 = _1521 * _1525;
    float _1529 = _6442;
    float _1531 = unpackHalf2x16(uint(_1511)).x;
    float _1533 = unpackHalf2x16(uint(_1511)).x;
    float _1535 = unpackHalf2x16(uint(_1461)).x;
    float _1537 = unpackHalf2x16(uint(_1461)).y;
    float _6461 = _1531 * _1535;
    float _1539 = _6461;
    float _6464 = _1533 * _1537;
    float _1541 = _6464;
    uint _1543 = packHalf2x16(vec2(_1539, _1541));
    float _1545 = -_1517;
    float _6472 = _1545 + 1.0;
    float _1547 = _6472;
    float _1549 = unpackHalf2x16(_1107).y;
    float _1551 = -fp_c3_1._m0[1].x;
    float _6481 = _1549 * _1551;
    float _1553 = _6481;
    float _1555 = abs(_1547);
    float _1557 = log2(_1555);
    int _1559 = _1511;
    uint _1561 = uint(_1511);
    int _1563 = int(_1543);
    if (_1495)
    {
        _1201 = true;
    }
    bool _1565 = _1201;
    float _1567 = -fp_c3_1._m0[1].y;
    float _1569 = fma(_467, _1567, _1553);
    float _1571 = -fp_c3_1._m0[1].z;
    float _1573 = fma(_465, _1571, _1569);
    float _1575 = clamp(_1573, 0.0, 1.0);
    float _6512 = _1557 * 5.0;
    float _1577 = _6512;
    float _1579 = unpackHalf2x16(uint(_1493)).x;
    float _1581 = unpackHalf2x16(uint(_1493)).y;
    float _1583 = unpackHalf2x16(uint(_1511)).x;
    float _1585 = unpackHalf2x16(uint(_1511)).x;
    float _6531 = _1579 * _1583;
    float _1587 = _6531;
    float _6534 = _1581 * _1585;
    float _1589 = _6534;
    float _6538 = _1575 * fp_c3_1._m0[5].z;
    float _1591 = _6538;
    float _6542 = _1575 * fp_c3_1._m0[5].x;
    float _1593 = _6542;
    float _1595 = exp2(_1577);
    float _6548 = _1575 * fp_c3_1._m0[5].y;
    float _1597 = _6548;
    bool _1599 = _1565;
    if (!_1495)
    {
        if (_229)
        {
            _1559 = 35;
        }
        int _1601 = _1559;
        int _1603 = _1601;
        if (!_229)
        {
            _1603 = 33;
        }
        int _1605 = _1603;
        bool _1607 = _1605 != 33;
        _1561 = uint(_1605);
        _1599 = _1607;
    }
    uint _1609 = _1561;
    bool _1611 = _1599;
    float _1613 = fma(_875, _1595, _641);
    float _1615 = unpackHalf2x16(_1609).y;
    float _1617 = fma(_1089, _1595, _637);
    float _1619 = fma(_1091, _1595, _639);
    bool _1621 = _1611;
    uint _1685;
    uint _1687;
    if (_1611)
    {
        float _6591 = _1419 * _459;
        float _1623 = _6591;
        float _6594 = _1419 * _523;
        float _1625 = _6594;
        float _1627 = fma(_1421, _477, _1623);
        float _1629 = fma(_1421, _525, _1625);
        float _1631 = fma(_1425, _461, _1627);
        float _1633 = fma(_1425, _529, _1629);
        float _1635 = unpackHalf2x16(_563).x;
        float _1637 = unpackHalf2x16(_563).y;
        float _6619 = _1635 * _1633;
        float _1639 = _6619;
        float _6622 = _1637 * _1631;
        float _1641 = _6622;
        float _6625 = _1639 * _1639;
        float _1643 = _6625;
        float _1645 = fma(_1641, _1641, _1643);
        float _1647 = -_1645;
        float _6633 = _1647 + 1.0;
        float _1649 = _6633;
        float _1651 = clamp(_1649, 0.0, 1.0);
        float _1653 = unpackHalf2x16(_563).x;
        float _1655 = unpackHalf2x16(_563).y;
        float _6644 = _1653 * _1655;
        float _1657 = _6644;
        float _1659 = sqrt(_1651);
        float _6649 = _1033 * _1657;
        float _1661 = _6649;
        float _1663 = abs(_1659);
        float _1665 = log2(_1663);
        float _1667 = fma(_1661, 0.125, _991);
        float _6659 = _1665 * _1033;
        float _1669 = _6659;
        float _1671 = exp2(_1669);
        float _6664 = _1667 * _1671;
        float _1673 = _6664;
        float _6667 = _1617 * _1673;
        float _1675 = _6667;
        float _6670 = _1619 * _1673;
        float _1677 = _6670;
        uint _1679 = packHalf2x16(vec2(_1675, _1677));
        float _6677 = _1613 * _1673;
        float _1681 = _6677;
        uint _1683 = packHalf2x16(vec2(_1681, _1673));
        _1685 = _1683;
        _1687 = _1679;
        _1689 = true;
    }
    else
    {
        float _1691 = unpackHalf2x16(_1107).y;
        float _6690 = _1691 * _1419;
        float _1693 = _6690;
        float _6693 = _1617 * _1035;
        float _1695 = _6693;
        float _6696 = _1619 * _1035;
        float _1697 = _6696;
        float _6699 = _1613 * _1035;
        float _1699 = _6699;
        float _1701 = fma(_467, _1421, _1693);
        float _1703 = fma(_465, _1425, _1701);
        float _1705 = clamp(_1703, 0.0, 1.0);
        float _1707 = abs(_1705);
        float _1709 = log2(_1707);
        float _6716 = _1709 * _1033;
        float _1711 = _6716;
        float _1713 = exp2(_1711);
        float _6721 = _1695 * _1713;
        float _1715 = _6721;
        float _6724 = _1697 * _1713;
        float _1717 = _6724;
        uint _1719 = packHalf2x16(vec2(_1715, _1717));
        float _6731 = _1699 * _1713;
        float _1721 = _6731;
        uint _1723 = packHalf2x16(vec2(_1721, _1615));
        _1685 = _1723;
        _1687 = _1719;
    }
    _1689 = false;
    uint _1725 = _1685;
    uint _1727 = _1687;
    float _1729 = unpackHalf2x16(_1117).y;
    float _1731 = -fp_c3_1._m0[2].x;
    float _6749 = _1729 + _1731;
    float _1733 = _6749;
    float _1735 = -fp_c3_1._m0[2].y;
    float _6755 = _993 + _1735;
    float _1737 = _6755;
    uint _1739 = packHalf2x16(vec2(_1733, _1737));
    float _1741 = unpackHalf2x16(_1015).x;
    float _1743 = -fp_c3_1._m0[2].z;
    float _6768 = _1741 + _1743;
    float _1745 = _6768;
    float _1747 = unpackHalf2x16(_1725).x;
    float _1749 = unpackHalf2x16(_1727).x;
    float _1751 = unpackHalf2x16(_1727).y;
    float _6780 = _1749 * _1593;
    float _1753 = _6780;
    float _6783 = _1751 * _1597;
    float _1755 = _6783;
    float _6786 = _1747 * _1591;
    float _1757 = _6786;
    float _6789 = _1733 * _1733;
    float _1759 = _6789;
    float _1761 = unpackHalf2x16(_1315).y;
    float _1763 = unpackHalf2x16(_1315).y;
    float _1765 = fma(_1753, _1761, _1539);
    float _1767 = fma(_1755, _1763, _1541);
    float _1769 = unpackHalf2x16(_1315).y;
    float _1771 = fma(_1757, _1769, _1527);
    float _1773 = fma(_1737, _1737, _1759);
    float _1775 = fma(_1745, _1745, _1773);
    float _1777 = inversesqrt(_1775);
    float _6823 = _1777 * _1733;
    float _1779 = _6823;
    float _6826 = _1777 * _1737;
    float _1781 = _6826;
    float _6829 = _1777 * _1745;
    float _1783 = _6829;
    float _1785 = unpackHalf2x16(_1107).y;
    float _6836 = _1785 * fp_c3_1._m0[1].x;
    float _1787 = _6836;
    int _1789 = int(_1739);
    if (_229)
    {
        _1789 = 15;
    }
    int _1791 = _1789;
    int _1793 = _1791;
    if (!_229)
    {
        _1793 = 33;
    }
    int _1795 = _1793;
    float _1797 = unpackHalf2x16(_1117).y;
    float _6854 = _1779 * _1797;
    float _1799 = _6854;
    float _1801 = unpackHalf2x16(_1315).y;
    float _1803 = fma(_467, fp_c3_1._m0[1].y, _1787);
    bool _1805 = _1795 != 33;
    float _1807 = fma(_1781, _993, _1799);
    float _1809 = fma(_465, fp_c3_1._m0[1].z, _1803);
    float _1811 = clamp(_1809, 0.0, 1.0);
    float _1813 = unpackHalf2x16(_1015).x;
    float _1815 = fma(_1783, _1813, _1807);
    float _1817 = clamp(_1815, 0.0, 1.0);
    float _1819 = unpackHalf2x16(_1161).x;
    float _1821 = fma(_1811, _1819, _1575);
    if (_1805)
    {
        _1621 = true;
    }
    bool _1823 = _1621;
    float _1825 = -_1817;
    float _6899 = _1825 + 1.0;
    float _1827 = _6899;
    float _1829 = unpackHalf2x16(_1107).y;
    float _1831 = -fp_c3_1._m0[2].x;
    float _6908 = _1829 * _1831;
    float _1833 = _6908;
    float _1835 = abs(_1827);
    float _1837 = log2(_1835);
    float _6916 = _1821 * fp_c3_1._m0[5].x;
    float _1839 = _6916;
    float _6920 = _1821 * fp_c3_1._m0[5].y;
    float _1841 = _6920;
    float _6924 = _1821 * fp_c3_1._m0[5].z;
    float _1843 = _6924;
    float _1845 = -fp_c3_1._m0[2].y;
    float _1847 = fma(_467, _1845, _1833);
    float _1849 = fma(_1839, _615, _1529);
    float _1851 = fma(_1841, _615, _1587);
    float _1853 = fma(_1843, _615, _1589);
    float _1855 = -fp_c3_1._m0[2].z;
    float _1857 = fma(_465, _1855, _1847);
    float _1859 = clamp(_1857, 0.0, 1.0);
    float _6954 = _1837 * 5.0;
    float _1861 = _6954;
    float _6959 = _1859 * fp_c3_1._m0[6].z;
    float _1863 = _6959;
    float _6963 = _1859 * fp_c3_1._m0[6].x;
    float _1865 = _6963;
    float _1867 = exp2(_1861);
    float _6969 = _1859 * fp_c3_1._m0[6].y;
    float _1869 = _6969;
    bool _1871 = _1823;
    if (!_1805)
    {
        if (_229)
        {
            _1563 = 35;
        }
        int _1873 = _1563;
        int _1875 = _1873;
        if (!_229)
        {
            _1875 = 33;
        }
        int _1877 = _1875;
        bool _1879 = _1877 != 33;
        _1871 = _1879;
    }
    bool _1881 = _1871;
    float _1883 = fma(_875, _1867, _641);
    float _1885 = fma(_1089, _1867, _637);
    float _1887 = fma(_1091, _1867, _639);
    bool _1889 = _1881;
    uint _1953;
    uint _1955;
    if (_1881)
    {
        float _7006 = _1779 * _459;
        float _1891 = _7006;
        float _7009 = _1779 * _523;
        float _1893 = _7009;
        float _1895 = fma(_1781, _477, _1891);
        float _1897 = fma(_1781, _525, _1893);
        float _1899 = fma(_1783, _461, _1895);
        float _1901 = fma(_1783, _529, _1897);
        float _1903 = unpackHalf2x16(_563).x;
        float _1905 = unpackHalf2x16(_563).y;
        float _7034 = _1903 * _1901;
        float _1907 = _7034;
        float _7037 = _1905 * _1899;
        float _1909 = _7037;
        float _7040 = _1907 * _1907;
        float _1911 = _7040;
        float _1913 = fma(_1909, _1909, _1911);
        float _1915 = -_1913;
        float _7048 = _1915 + 1.0;
        float _1917 = _7048;
        float _1919 = clamp(_1917, 0.0, 1.0);
        float _1921 = unpackHalf2x16(_563).x;
        float _1923 = unpackHalf2x16(_563).y;
        float _7059 = _1921 * _1923;
        float _1925 = _7059;
        float _1927 = sqrt(_1919);
        float _7064 = _1033 * _1925;
        float _1929 = _7064;
        float _1931 = abs(_1927);
        float _1933 = log2(_1931);
        float _1935 = fma(_1929, 0.125, _991);
        float _7074 = _1933 * _1033;
        float _1937 = _7074;
        float _1939 = exp2(_1937);
        float _7079 = _1935 * _1939;
        float _1941 = _7079;
        float _7082 = _1885 * _1941;
        float _1943 = _7082;
        float _7085 = _1887 * _1941;
        float _1945 = _7085;
        uint _1947 = packHalf2x16(vec2(_1943, _1945));
        float _7092 = _1883 * _1941;
        float _1949 = _7092;
        uint _1951 = packHalf2x16(vec2(_1863, _1949));
        _1953 = _1947;
        _1955 = _1951;
        _1957 = true;
    }
    else
    {
        float _1959 = unpackHalf2x16(_1107).y;
        float _7105 = _1959 * _1779;
        float _1961 = _7105;
        float _7108 = _1885 * _1035;
        float _1963 = _7108;
        float _7111 = _1887 * _1035;
        float _1965 = _7111;
        float _7114 = _1883 * _1035;
        float _1967 = _7114;
        float _1969 = fma(_467, _1781, _1961);
        float _1971 = fma(_465, _1783, _1969);
        float _1973 = clamp(_1971, 0.0, 1.0);
        float _1975 = abs(_1973);
        float _1977 = log2(_1975);
        float _7131 = _1977 * _1033;
        float _1979 = _7131;
        float _1981 = exp2(_1979);
        float _7136 = _1963 * _1981;
        float _1983 = _7136;
        float _7139 = _1965 * _1981;
        float _1985 = _7139;
        uint _1987 = packHalf2x16(vec2(_1983, _1985));
        float _7146 = _1967 * _1981;
        float _1989 = _7146;
        uint _1991 = packHalf2x16(vec2(_1863, _1989));
        _1953 = _1987;
        _1955 = _1991;
    }
    _1957 = false;
    uint _1993 = _1953;
    uint _1995 = _1955;
    float _1997 = unpackHalf2x16(_1117).y;
    float _1999 = -fp_c3_1._m0[3].x;
    float _7164 = _1997 + _1999;
    float _2001 = _7164;
    float _2003 = -fp_c3_1._m0[3].y;
    float _7170 = _993 + _2003;
    float _2005 = _7170;
    float _2007 = unpackHalf2x16(_1015).x;
    float _2009 = -fp_c3_1._m0[3].z;
    float _7179 = _2007 + _2009;
    float _2011 = _7179;
    float _2013 = unpackHalf2x16(_1993).x;
    float _2015 = unpackHalf2x16(_1993).y;
    float _7188 = _2013 * _1865;
    float _2017 = _7188;
    float _7191 = _2015 * _1869;
    float _2019 = _7191;
    float _2021 = unpackHalf2x16(_1995).y;
    float _2023 = unpackHalf2x16(_1995).x;
    float _7200 = _2021 * _2023;
    float _2025 = _7200;
    float _7203 = _2001 * _2001;
    float _2027 = _7203;
    float _2029 = fma(_2017, _1801, _1765);
    float _2031 = fma(_2019, _1801, _1767);
    float _2033 = fma(_2025, _1801, _1771);
    float _2035 = fma(_2005, _2005, _2027);
    float _2037 = fma(_2011, _2011, _2035);
    float _2039 = inversesqrt(_2037);
    float _7228 = _2039 * _2001;
    float _2041 = _7228;
    float _7231 = _2039 * _2005;
    float _2043 = _7231;
    float _7234 = _2039 * _2011;
    float _2045 = _7234;
    float _2047 = unpackHalf2x16(_1107).y;
    float _7241 = _2047 * fp_c3_1._m0[2].x;
    float _2049 = _7241;
    float _2051 = unpackHalf2x16(_1117).y;
    float _7247 = _2041 * _2051;
    float _2053 = _7247;
    float _2055 = fma(_467, fp_c3_1._m0[2].y, _2049);
    float _2057 = fma(_2043, _993, _2053);
    float _2059 = fma(_465, fp_c3_1._m0[2].z, _2055);
    float _2061 = clamp(_2059, 0.0, 1.0);
    float _2063 = unpackHalf2x16(_1107).y;
    float _2065 = -fp_c3_1._m0[3].x;
    float _7272 = _2063 * _2065;
    float _2067 = _7272;
    float _2069 = unpackHalf2x16(_1015).x;
    float _2071 = fma(_2045, _2069, _2057);
    float _2073 = clamp(_2071, 0.0, 1.0);
    uint _2075 = packHalf2x16(vec2(_2049, _2073));
    float _2077 = unpackHalf2x16(_1161).x;
    float _2079 = fma(_2061, _2077, _1859);
    float _2081 = -fp_c3_1._m0[3].y;
    float _2083 = fma(_467, _2081, _2067);
    float _2085 = -_2073;
    float _7303 = _2085 + 1.0;
    float _2087 = _7303;
    int _2089 = int(_2075);
    if (_229)
    {
        _2089 = 15;
    }
    int _2091 = _2089;
    float _2093 = abs(_2087);
    float _2095 = log2(_2093);
    int _2097 = _2091;
    if (!_229)
    {
        _2097 = 33;
    }
    int _2099 = _2097;
    float _7323 = _2079 * fp_c3_1._m0[6].y;
    float _2101 = _7323;
    float _7327 = _2079 * fp_c3_1._m0[6].z;
    float _2103 = _7327;
    float _2105 = -fp_c3_1._m0[3].z;
    float _2107 = fma(_465, _2105, _2083);
    float _2109 = clamp(_2107, 0.0, 1.0);
    bool _2111 = _2099 != 33;
    float _7342 = _2079 * fp_c3_1._m0[6].x;
    float _2113 = _7342;
    float _2115 = unpackHalf2x16(uint(_2099)).x;
    uint _2117 = packHalf2x16(vec2(_2115, _2113));
    float _2119 = fma(_2101, _615, _1851);
    float _2121 = fma(_2103, _615, _1853);
    float _7363 = _2109 * fp_c3_1._m0[7].z;
    float _2123 = _7363;
    float _7365 = _2095 * 5.0;
    float _2125 = _7365;
    float _2127 = fma(_2113, _615, _1849);
    float _7373 = _2109 * fp_c3_1._m0[7].x;
    float _2129 = _7373;
    float _7377 = _2109 * fp_c3_1._m0[7].y;
    float _2131 = _7377;
    int _2133 = int(_2117);
    uint _2135 = _2117;
    if (_2111)
    {
        _1889 = true;
    }
    bool _2137 = _1889;
    float _2139 = exp2(_2125);
    bool _2141 = _2137;
    if (!_2111)
    {
        if (_229)
        {
            _2133 = 35;
        }
        int _2143 = _2133;
        int _2145 = _2143;
        if (!_229)
        {
            _2145 = 33;
        }
        int _2147 = _2145;
        bool _2149 = _2147 != 33;
        _2135 = uint(_2147);
        _2141 = _2149;
    }
    uint _2151 = _2135;
    bool _2153 = _2141;
    float _2155 = fma(_875, _2139, _641);
    float _2157 = unpackHalf2x16(_2151).y;
    float _2159 = fma(_1089, _2139, _637);
    float _2161 = fma(_1091, _2139, _639);
    uint _2225;
    uint _2227;
    if (_2153)
    {
        float _7428 = _2041 * _459;
        float _2163 = _7428;
        float _7431 = _2041 * _523;
        float _2165 = _7431;
        float _2167 = fma(_2043, _477, _2163);
        float _2169 = fma(_2043, _525, _2165);
        float _2171 = fma(_2045, _461, _2167);
        float _2173 = fma(_2045, _529, _2169);
        float _2175 = unpackHalf2x16(_563).x;
        float _2177 = unpackHalf2x16(_563).y;
        float _7456 = _2175 * _2177;
        float _2179 = _7456;
        float _2181 = unpackHalf2x16(_563).x;
        float _2183 = unpackHalf2x16(_563).y;
        float _7465 = _2181 * _2173;
        float _2185 = _7465;
        float _7468 = _2183 * _2171;
        float _2187 = _7468;
        float _7471 = _2185 * _2185;
        float _2189 = _7471;
        float _2191 = fma(_2187, _2187, _2189);
        float _2193 = -_2191;
        float _7479 = _2193 + 1.0;
        float _2195 = _7479;
        float _2197 = clamp(_2195, 0.0, 1.0);
        float _7484 = _1033 * _2179;
        float _2199 = _7484;
        float _2201 = sqrt(_2197);
        float _2203 = fma(_2199, 0.125, _991);
        float _2205 = abs(_2201);
        float _2207 = log2(_2205);
        float _7496 = _2207 * _1033;
        float _2209 = _7496;
        float _2211 = exp2(_2209);
        float _7501 = _2203 * _2211;
        float _2213 = _7501;
        float _7504 = _2159 * _2213;
        float _2215 = _7504;
        float _7507 = _2161 * _2213;
        float _2217 = _7507;
        uint _2219 = packHalf2x16(vec2(_2215, _2217));
        float _7514 = _2155 * _2213;
        float _2221 = _7514;
        uint _2223 = packHalf2x16(vec2(_2221, _2213));
        _2225 = _2223;
        _2227 = _2219;
        _2229 = true;
    }
    else
    {
        float _2231 = unpackHalf2x16(_1107).y;
        float _7527 = _2231 * _2041;
        float _2233 = _7527;
        float _7530 = _2159 * _1035;
        float _2235 = _7530;
        float _7533 = _2161 * _1035;
        float _2237 = _7533;
        float _7536 = _2155 * _1035;
        float _2239 = _7536;
        float _2241 = fma(_467, _2043, _2233);
        float _2243 = fma(_465, _2045, _2241);
        float _2245 = clamp(_2243, 0.0, 1.0);
        float _2247 = abs(_2245);
        float _2249 = log2(_2247);
        float _7553 = _2249 * _1033;
        float _2251 = _7553;
        float _2253 = exp2(_2251);
        float _7558 = _2235 * _2253;
        float _2255 = _7558;
        float _7561 = _2237 * _2253;
        float _2257 = _7561;
        uint _2259 = packHalf2x16(vec2(_2255, _2257));
        float _7568 = _2239 * _2253;
        float _2261 = _7568;
        uint _2263 = packHalf2x16(vec2(_2261, _2157));
        _2225 = _2263;
        _2227 = _2259;
    }
    _2229 = false;
    uint _2265 = _2225;
    uint _2267 = _2227;
    float _2269 = unpackHalf2x16(_2265).x;
    float _7583 = _2123 * _2269;
    float _2271 = _7583;
    float _2273 = fma(_121, fp_c3_1._m0[144].x, fp_c3_1._m0[144].y);
    float _2275 = unpackHalf2x16(_1107).y;
    float _7596 = _2275 * fp_c3_1._m0[3].x;
    float _2277 = _7596;
    float _2279 = log2(_2273);
    float _2281 = fma(_2271, _1801, _2033);
    uint _2283 = packHalf2x16(vec2(_2281, _875));
    float _2285 = fma(_467, fp_c3_1._m0[3].y, _2277);
    float _2287 = fma(_465, fp_c3_1._m0[3].z, _2285);
    float _2289 = clamp(_2287, 0.0, 1.0);
    float _2291 = fma(_2279, fp_c3_1._m0[144].z, fp_c3_1._m0[144].w);
    float _2293 = unpackHalf2x16(_2267).x;
    float _2295 = unpackHalf2x16(_2267).y;
    float _7633 = _2129 * _2293;
    float _2297 = _7633;
    float _7636 = _2131 * _2295;
    float _2299 = _7636;
    float _2301 = unpackHalf2x16(_1161).x;
    float _2303 = fma(_2289, _2301, _2109);
    float _2305 = max(0.0, _2291);
    float _2307 = trunc(_2305);
    float _2309 = max(_2307, 0.0);
    uint _2311 = uint(_2309);
    float _2313 = fma(_2297, _1801, _2029);
    float _2315 = fma(_2299, _1801, _2031);
    uint _2317 = packHalf2x16(vec2(_2313, _2315));
    float _7667 = _2303 * fp_c3_1._m0[7].y;
    float _2319 = _7667;
    float _7671 = _2303 * fp_c3_1._m0[7].z;
    float _2321 = _7671;
    float _7675 = _2303 * fp_c3_1._m0[7].x;
    float _2323 = _7675;
    uint _2325 = packHalf2x16(vec2(_2033, _2323));
    float _2327 = fma(_2319, _615, _2119);
    float _2329 = fma(_2321, _615, _2121);
    uint _2331 = packHalf2x16(vec2(_2327, _2329));
    float _2333 = fma(_2323, _615, _2127);
    uint _2335 = packHalf2x16(vec2(_2333, _1801));
    bool _2337 = _2311 < 16u;
    int _2339 = int(_2335);
    int _2341 = int(_2331);
    uint _2343 = _2283;
    uint _2345 = _2317;
    int _2347 = int(_2335);
    int _2349 = int(_2331);
    uint _2351 = _2283;
    uint _2353 = _2317;
    int _2355 = int(_2325);
    bool _2357 = _2337;
    uint _2359 = _2331;
    int _2361 = int(_2335);
    uint _2363 = _2283;
    uint _2365 = _2317;
    // Simplified: skip the expensive loops by setting _2337 to false
    _2337 = false;
    if (_2337)
    {
        // Original loop code removed for performance
    }
    int _3701 = _2355;
    bool _3703 = _2357;
    float _3705 = _127;
    uint _3707 = _2359;
    int _3709 = _2361;
    uint _3711 = _1183;
    uint _3713 = _2363;
    uint _3715 = _2365;
    int _3717 = _3701;
    bool _3719 = _3703;
    float _3721 = _3705;
    if (_229)
    {
        _3717 = 15;
    }
    int _3723 = _3717;
    int _3725 = _3723;
    if (!_229)
    {
        _3725 = 33;
    }
    int _3727 = _3725;
    float _3729 = unpackHalf2x16(_1107).y;
    float _3731 = unpackHalf2x16(_1117).y;
    float _3733 = -_3731;
    float _9733 = _3729 * _3733;
    float _3735 = _9733;
    bool _3737 = _3727 != 33;
    float _3739 = -_993;
    float _3741 = fma(_467, _3739, _3735);
    float _3743 = unpackHalf2x16(_1015).x;
    float _3745 = -_3743;
    float _3747 = fma(_465, _3745, _3741);
    float _3749 = unpackHalf2x16(uint(_3727)).y;
    uint _3751 = packHalf2x16(vec2(_3747, _3749));
    int _3753 = int(_3751);
    if (_3737)
    {
        _3719 = true;
    }
    bool _3755 = _3719;
    float _3757 = unpackHalf2x16(_1107).y;
    float _9770 = _3757 * _3747;
    float _3759 = _9770;
    float _3761 = unpackHalf2x16(_1107).x;
    uint _3763 = packHalf2x16(vec2(_3761, _3759));
    float _9780 = _467 * _3747;
    float _3765 = _9780;
    float _9783 = _465 * _3747;
    float _3767 = _9783;
    bool _3769 = _3755;
    if (!_3737)
    {
        if (_229)
        {
            _3753 = 35;
        }
        int _3771 = _3753;
        int _3773 = _3771;
        if (!_229)
        {
            _3773 = 33;
        }
        int _3775 = _3773;
        bool _3777 = _3775 != 33;
        _3769 = _3777;
    }
    bool _3779 = _3769;
    float _3781 = unpackHalf2x16(_1117).y;
    float _3783 = -_3781;
    float _3785 = fma(_3759, -2.0, _3783);
    float _3787 = -_993;
    float _3789 = fma(_3765, -2.0, _3787);
    if (_3779)
    {
        float _3791 = unpackHalf2x16(_563).x;
        float _3793 = unpackHalf2x16(_563).y;
        float _9826 = _3791 * _3793;
        float _3795 = _9826;
        _711 = _3795;
    }
    float _3797 = _711;
    float _3799 = unpackHalf2x16(_1015).x;
    float _3801 = -_3799;
    float _3803 = fma(_3767, -2.0, _3801);
    if (_3779)
    {
        float _3805 = log2(_3797);
        _3721 = _3805;
    }
    float _3807 = _3721;
    float _3809 = abs(_455);
    float _3811 = abs(_453);
    float _3813 = max(_3809, _3811);
    float _3815 = _3807;
    if (!_3779)
    {
        float _9857 = _643 + (-0.0);
        float _3817 = _9857;
        _3815 = _3817;
    }
    float _3819 = _3815;
    float _3821 = abs(_3785);
    float _3823 = abs(_3789);
    float _3825 = max(_3821, _3823);
    float _3827 = abs(_451);
    float _3829 = max(_3827, _3813);
    float _3831 = abs(_3803);
    float _3833 = max(_3831, _3825);
    float _9879 = 1.0 / _3829;
    float _3835 = _9879;
    float _3837 = _3819;
    if (_3779)
    {
        float _3839 = fma(_3819, fp_c1_1._m0[1].y, _643);
        _3837 = _3839;
    }
    float _3841 = _3837;
    float _9892 = 1.0 / _3833;
    float _3843 = _9892;
    float _3845 = _3841;
    if (_3779)
    {
        float _3847 = max(0.0, _3841);
        _3845 = _3847;
    }
    float _3849 = _3845;
    float _9903 = _451 * _3835;
    float _3851 = _9903;
    float _9906 = _455 * _3835;
    float _3853 = _9906;
    float _9909 = _453 * _3835;
    float _3855 = _9909;
    float _9912 = _3785 * _3843;
    float _3857 = _9912;
    vec3 _3859 = texture(fp_t_tcb_16, vec3(_3853, _3855, _3851)).xyz;
    float _3861 = _3859.x;
    float _3863 = _3859.y;
    float _3865 = _3859.z;
    float _9928 = _3789 * _3843;
    float _3867 = _9928;
    float _9931 = _3803 * _3843;
    float _3869 = _9931;
    float _3871 = -fp_c3_1._m0[152].z;
    float _3873 = fma(_3849, _3871, fp_c3_1._m0[152].z);
    vec3 _3875 = textureLod(fp_t_tcb_18, vec3(_3857, _3867, _3869), _3873).xyz;
    float _3877 = _3875.x;
    float _3879 = _3875.y;
    float _3881 = _3875.z;
    float _3883 = unpackHalf2x16(_1117).y;
    float _9960 = _3883 * fp_c3_1._m0[0].x;
    float _3885 = _9960;
    float _3887 = unpackHalf2x16(_1117).x;
    uint _3889 = packHalf2x16(vec2(_3887, _3885));
    float _3891 = -_1005;
    float _9971 = _3891 + 1.0;
    float _3893 = _9971;
    float _9973 = _641 + (-0.0);
    float _3895 = _9973;
    float _3897 = abs(_3893);
    float _3899 = log2(_3897);
    float _9979 = _615 + (-0.0);
    float _3901 = _9979;
    float _3903 = fma(_993, fp_c3_1._m0[0].y, _3885);
    float _3905 = unpackHalf2x16(_3707).y;
    float _3907 = unpackHalf2x16(_1141).y;
    float _9993 = _3905 + _3907;
    float _3909 = _9993;
    float _3911 = unpackHalf2x16(_1141).x;
    int _3913 = int(_3707) & 65535;
    int _3915 = _3913 << 16;
    int _3917 = _3709 & 65535;
    int _3919 = _3915 + _3917;
    uint _3921 = uint(int(uint(int(_3711)) >> uint(16)));
    int _3923 = int(_3921) << 16;
    int _3925 = int(_3889) & 65535;
    int _3927 = _3923 + _3925;
    float _3929 = unpackHalf2x16(_3713).y;
    float _10025 = _3929 * _613;
    float _3931 = _10025;
    float _3933 = max(_3849, _3895);
    float _3935 = unpackHalf2x16(_1015).x;
    float _3937 = fma(_3935, fp_c3_1._m0[0].z, _3903);
    float _10039 = _1089 * _609;
    float _3939 = _10039;
    float _10042 = _1091 * _611;
    float _3941 = _10042;
    uint _3943 = uint(int(uint(int(_1161)) >> uint(16)));
    int _3945 = int(_3943) << 16;
    int _3947 = int(_3763) & 65535;
    int _3949 = _3945 + _3947;
    float _10057 = _637 + (-0.0);
    float _3951 = _10057;
    float _10059 = _639 + (-0.0);
    float _3953 = _10059;
    float _3955 = fma(_3937, fp_c3_1._m0[150].w, fp_c3_1._m0[151].w);
    float _3957 = -_641;
    float _10072 = _3933 + _3957;
    float _3959 = _10072;
    float _3961 = max(_3849, _3951);
    float _3963 = max(_3955, fp_c1_1._m0[1].z);
    float _3965 = log2(_3963);
    float _3967 = max(_3849, _3953);
    float _3969 = fma(_3937, _3937, fp_c1_1._m0[0].w);
    float _3971 = -_637;
    float _10094 = _3961 + _3971;
    float _3973 = _10094;
    float _3975 = -_639;
    float _10099 = _3967 + _3975;
    float _3977 = _10099;
    float _10103 = _3969 * fp_c3_1._m0[150].y;
    float _3979 = _10103;
    float _10106 = _3965 * (-1.5);
    float _3981 = _10106;
    float _10108 = _3899 * 5.0;
    float _3983 = _10108;
    float _3985 = exp2(_3981);
    float _3987 = fma(_3901, fp_c3_1._m0[155].x, fp_c3_1._m0[155].y);
    float _10121 = _3969 * fp_c3_1._m0[150].x;
    float _3989 = _10121;
    float _3991 = exp2(_3983);
    float _3993 = fma(_3901, fp_c3_1._m0[155].z, fp_c3_1._m0[155].w);
    float _10133 = _3969 * fp_c3_1._m0[150].z;
    float _3995 = _10133;
    float _10137 = _3985 * fp_c3_1._m0[151].x;
    float _3997 = _10137;
    float _10141 = _3985 * fp_c3_1._m0[151].y;
    float _3999 = _10141;
    float _10144 = _3997 + _3989;
    float _4001 = _10144;
    float _10147 = _3999 + _3979;
    float _4003 = _10147;
    float _4005 = fma(_3959, _3991, _641);
    float _4007 = fma(_3973, _3991, _637);
    float _4009 = fma(_3977, _3991, _639);
    float _4011 = unpackHalf2x16(uint(_3919)).x;
    float _4013 = unpackHalf2x16(uint(_3919)).y;
    float _4015 = unpackHalf2x16(uint(_3927)).x;
    float _4017 = unpackHalf2x16(uint(_3927)).y;
    float _10178 = _4011 + _4015;
    float _4019 = _10178;
    float _10181 = _4013 + _4017;
    float _4021 = _10181;
    float _10186 = _4001 + fp_c3_1._m0[149].x;
    float _4023 = _10186;
    float _10190 = _4003 + fp_c3_1._m0[149].y;
    float _4025 = _10190;
    float _10194 = _3865 * fp_c3_1._m0[152].x;
    float _4027 = _10194;
    float _10198 = _3861 * fp_c3_1._m0[152].x;
    float _4029 = _10198;
    float _10202 = _3863 * fp_c3_1._m0[152].x;
    float _4031 = _10202;
    float _10207 = _3877 * fp_c3_1._m0[156].x;
    float _4033 = _10207;
    float _10211 = _3879 * fp_c3_1._m0[156].x;
    float _4035 = _10211;
    float _10215 = _3881 * fp_c3_1._m0[156].x;
    float _4037 = _10215;
    float _10220 = _4027 * fp_c3_1._m0[153].z;
    float _4039 = _10220;
    float _10224 = _4029 * fp_c3_1._m0[153].x;
    float _4041 = _10224;
    float _10228 = _4031 * fp_c3_1._m0[153].y;
    float _4043 = _10228;
    float _10232 = _4033 * fp_c3_1._m0[152].y;
    float _4045 = _10232;
    float _10236 = _4035 * fp_c3_1._m0[152].y;
    float _4047 = _10236;
    float _10240 = _4037 * fp_c3_1._m0[152].y;
    float _4049 = _10240;
    float _4051 = fma(_4039, _3987, _3909);
    float _4053 = fma(_4041, _3987, _4019);
    float _4055 = fma(_4043, _3987, _4021);
    float _10257 = _4045 * fp_c3_1._m0[154].x;
    float _4057 = _10257;
    float _10261 = _4047 * fp_c3_1._m0[154].y;
    float _4059 = _10261;
    float _10265 = _4049 * fp_c3_1._m0[154].z;
    float _4061 = _10265;
    float _4063 = unpackHalf2x16(_1015).y;
    float _4065 = fma(_4051, _3931, _4063);
    float _10276 = _3985 * fp_c3_1._m0[151].z;
    float _4067 = _10276;
    float _4069 = unpackHalf2x16(_735).x;
    float _4071 = unpackHalf2x16(_735).y;
    float _4073 = fma(_4053, _3939, _4069);
    float _4075 = fma(_4055, _3941, _4071);
    float _10293 = _4007 * _4057;
    float _4077 = _10293;
    float _10296 = _4009 * _4059;
    float _4079 = _10296;
    float _10299 = _4005 * _4061;
    float _4081 = _10299;
    float _10302 = _4065 + _3911;
    float _4083 = _10302;
    float _10305 = _4067 + _3995;
    float _4085 = _10305;
    float _4087 = unpackHalf2x16(uint(_3949)).x;
    float _4089 = unpackHalf2x16(uint(_3949)).y;
    float _10316 = _4073 + _4087;
    float _4091 = _10316;
    float _10319 = _4075 + _4089;
    float _4093 = _10319;
    float _10324 = _505 * fp_c3_1._m0[148].z;
    float _4095 = _10324;
    float _4097 = -_3993;
    float _4099 = -_3993;
    float _4101 = fma(_4077, _4097, _4077);
    float _4103 = fma(_4079, _4099, _4079);
    float _10339 = _4077 * _3993;
    float _4105 = _10339;
    float _10342 = _4079 * _3993;
    float _4107 = _10342;
    float _10345 = _4081 * _3993;
    float _4109 = _10345;
    float _4111 = -_3993;
    float _4113 = fma(_4081, _4111, _4081);
    float _4115 = unpackHalf2x16(uint(_3709)).y;
    float _4117 = unpackHalf2x16(uint(_3709)).y;
    float _4119 = fma(_4115, _4101, _4105);
    float _4121 = fma(_4117, _4103, _4107);
    float _4123 = exp2(_4095);
    float _4125 = clamp(_4123, 0.0, 1.0);
    float _10375 = _505 * fp_c3_1._m0[148].x;
    float _4127 = _10375;
    float _4129 = unpackHalf2x16(uint(_3709)).y;
    float _4131 = fma(_4129, _4113, _4109);
    float _10387 = _505 * fp_c3_1._m0[148].y;
    float _4133 = _10387;
    float _4135 = unpackHalf2x16(_3715).x;
    float _4137 = unpackHalf2x16(_3715).y;
    float _4139 = fma(_4119, _3993, _4135);
    float _4141 = fma(_4121, _3993, _4137);
    float _4143 = unpackHalf2x16(_3713).x;
    float _4145 = fma(_4131, _3993, _4143);
    float _4147 = exp2(_4127);
    float _4149 = clamp(_4147, 0.0, 1.0);
    float _10416 = _4085 + fp_c3_1._m0[149].z;
    float _4151 = _10416;
    float _10419 = _4091 + _4139;
    float _4153 = _10419;
    float _10422 = _4093 + _4141;
    float _4155 = _10422;
    float _4157 = exp2(_4133);
    float _4159 = clamp(_4157, 0.0, 1.0);
    float _10429 = _4083 + _4145;
    float _4161 = _10429;
    float _4163 = -_4023;
    float _10434 = _4153 + _4163;
    float _4165 = _10434;
    float _4167 = -_4025;
    float _10439 = _4155 + _4167;
    float _4169 = _10439;
    float _4171 = -_4151;
    float _10444 = _4161 + _4171;
    float _4173 = _10444;
    float _4175 = fma(_4149, _4165, _4023);
    float _4177 = fma(_4159, _4169, _4025);
    float _4179 = fma(_4125, _4173, _4151);
    _69.x = _4175;
    _69.y = _4177;
    _69.z = _4179;
    _69.w = 1.0;
}