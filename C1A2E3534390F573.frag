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

layout(set = 0, binding = 20, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(set = 0, binding = 24, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(set = 0, binding = 23, std140) uniform fp_c4
{
    vec4 _m0[4096];
} fp_c4_1;

layout(set = 0, binding = 22, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(set = 0, binding = 21, std140) uniform fp_c2
{
    vec4 _m0[4096];
} fp_c2_1;

layout(set = 2, binding = 128) uniform sampler2D fp_t_cb196610_10570064;
layout(set = 2, binding = 129) uniform sampler2D fp_t_cb196610_1057805C;
layout(set = 2, binding = 130) uniform sampler2D fp_t_cb196610_1056805A;
layout(set = 2, binding = 131) uniform sampler2D fp_t_cb196610_1018015C;
layout(set = 2, binding = 132) uniform sampler2D fp_t_cb196610_1017815C;
layout(set = 2, binding = 133) uniform sampler2D fp_t_cb196610_1019815C;
layout(set = 2, binding = 134) uniform sampler2D fp_t_cb196610_1018815C;

layout(location = 1) in vec4 _47;
layout(location = 0) in vec4 _49;
layout(location = 2) in vec4 _51;
layout(location = 0) out vec4 _54;
layout(location = 3) in vec4 _56;

// 替代原 _65 函数的确定性哈希函数
uint hash(uint x) {
    x = (x ^ 61) ^ (x >> 16);
    x = x * 0x85ebca6b;
    x = x ^ (x >> 13);
    return x;
}

int deterministic_shuffle(int val, int mask) {
    uint id = uint(gl_FragCoord.x * 1000.0 + gl_FragCoord.y);
    uint h = hash(id ^ uint(val));
    return int(h) & mask;
}

void main()
{
    float _1371 = 1.0 / fp_c3_1._m0[4].w;
    float _69 = _1371;
    bool _73 = 0.0 != fp_c3_1._m0[5].x;
    bool _75 = isnan(0.0);
    bool _77 = _73 || _75;
    bool _79 = isnan(fp_c3_1._m0[5].x);
    bool _81 = _77 || _79;
    float _1393 = fp_c3_1._m0[2].x * fp_c3_1._m0[9].z;
    float _83 = _1393;
    int _85 = floatBitsToInt(fp_c2_1._m0[25].x) | floatBitsToInt(fp_c2_1._m0[87].x);
    float _1405 = _83 * 3.0;
    float _87 = _1405;
    float _89 = _47.x;
    float _91 = _47.z;
    float _93 = _49.x;
    float _95 = _49.y;
    float _97 = -fp_c3_1._m0[4].x;
    float _1421 = _89 + _97;
    float _99 = _1421;
    float _101 = -fp_c3_1._m0[4].z;
    float _1427 = _91 + _101;
    float _103 = _1427;
    float _1430 = _99 * _69;
    float _105 = _1430;
    float _1433 = _103 * _69;
    float _107 = _1433;
    int _109 = floatBitsToInt(_69);
    float _111 = 0.5;
    float _113 = intBitsToFloat(_85);
    if (_81)
    {
        _109 = floatBitsToInt(fp_c2_1._m0[23].x);
    }
    int _115 = _109;
    float _117 = fma(_105, 0.5, 0.5);
    float _119 = fma(_107, 0.5, 0.5);
    float _121 = fma(_93, fp_c3_1._m0[9].x, _87);
    float _123 = fma(_95, fp_c3_1._m0[9].x, _87);
    float _125 = _117;
    float _127 = _119;
    if (_81)
    {
        int _129 = _115 | floatBitsToInt(fp_c2_1._m0[87].z);
        _111 = intBitsToFloat(_129);
    }
    float _131 = _111;
    vec2 _135 = texture(fp_t_cb196610_10570064, vec2(_121, _123)).xy;
    float _137 = _135.x;
    float _139 = _135.y;
    float _141 = _131;
    if (_81)
    {
        float _143 = texture(fp_t_cb196610_1057805C, vec2(_117, _119)).z;
        _141 = _143;
    }
    float _145 = _141;
    float _147 = fma(fp_c3_1._m0[2].y, 0.5, 1.05099999904632568359375);
    float _149 = _147;
    if (!_81)
    {
        _113 = 1.0;
    }
    float _151 = _113;
    float _153 = fma(_137, 5.0, fp_c3_1._m0[2].y);
    float _155 = _151;
    if (_81)
    {
        float _1516 = _145 * 5.0;
        float _157 = _1516;
        _149 = _157;
    }
    float _159 = _149;
    float _161 = _51.x;
    float _163 = sin(_147);
    float _165 = _159;
    if (_81)
    {
        float _167 = max(0.0, _159);
        _165 = _167;
    }
    float _169 = _165;
    float _171 = sin(_153);
    float _173 = _169;
    if (_81)
    {
        float _175 = min(_169, 2.0);
        _173 = _175;
    }
    float _177 = _173;
    if (_81)
    {
        float _179 = -_177;
        float _1548 = _179 + 1.0;
        float _181 = _1548;
        _155 = _181;
    }
    float _183 = _155;
    float _1554 = _163 + _171;
    float _185 = _1554;
    float _1558 = _137 * fp_c1_1._m0[4].y;
    float _187 = _1558;
    float _189 = fma(_185, fp_c1_1._m0[4].z, _187);
    float _1567 = _161 * fp_c1_1._m0[4].w;
    float _191 = _1567;
    float _1570 = _189 * _183;
    float _193 = _1570;
    float _1573 = _137 * _193;
    float _195 = _1573;
    float _1576 = _139 * _193;
    float _197 = _1576;
    float _1579 = _195 * _191;
    float _199 = _1579;
    float _1582 = _197 * _191;
    float _201 = _1582;
    float _1586 = _199 * fp_c3_1._m0[5].w;
    float _203 = _1586;
    float _1590 = _201 * fp_c3_1._m0[5].w;
    float _205 = _1590;
    float _1593 = _203 * _183;
    float _207 = _1593;
    float _1596 = _205 * _183;
    float _209 = _1596;
    float _1599 = _207 * 0.60000002384185791015625;
    float _211 = _1599;
    float _1601 = _209 * 0.60000002384185791015625;
    float _213 = _1601;
    if (_81)
    {
        float _215 = fma(_207, fp_c1_1._m0[5].x, _117);
        _125 = _215;
    }
    float _217 = _125;
    if (_81)
    {
        float _219 = fma(_209, fp_c1_1._m0[5].x, _119);
        _127 = _219;
    }
    float _221 = _127;
    float _223 = fma(_93, fp_c3_1._m0[5].y, _211);
    float _225 = fma(_95, fp_c3_1._m0[5].y, _213);
    float _1634 = _223 * (-1.99994122982025146484375);
    float _227 = _1634;
    float _1637 = _223 * 3.4639999866485595703125;
    float _229 = _1637;
    float _231 = floor(_229);
    float _233 = fma(_225, fp_c1_1._m0[5].y, _227);
    float _235 = floor(_233);
    float _237 = -_231;
    float _1651 = _229 + _237;
    float _239 = _1651;
    float _1653 = _231 + 1.0;
    float _241 = _1653;
    float _243 = -_235;
    float _1658 = _233 + _243;
    float _245 = _1658;
    float _1660 = _235 + 1.0;
    float _247 = _1660;
    float _249 = -_245;
    float _251 = -_239;
    float _1667 = _249 + _251;
    float _253 = _1667;
    bool _255 = _253 > (-1.0);
    float _257 = 0.0;
    float _259 = _233;
    float _261 = _241;
    float _263 = _235;
    float _265 = _235;
    float _267 = _231;
    float _269 = _231;
    float _271 = _247;
    float _273 = _245;
    float _275 = _239;
    if (!_255)
    {
        _257 = _241;
    }
    float _277 = _257;
    if (!_255)
    {
        _259 = _235;
    }
    float _279 = _259;
    if (!_255)
    {
        _261 = _231;
    }
    float _281 = _261;
    if (!_255)
    {
        _263 = _247;
    }
    float _283 = _263;
    if (!_255)
    {
        _265 = _247;
    }
    float _285 = _265;
    if (!_255)
    {
        _267 = _241;
    }
    float _287 = _267;
    if (!_255)
    {
        _269 = _277;
    }
    float _289 = _269;
    if (!_255)
    {
        _271 = _279;
    }
    float _291 = _271;
    float _293 = fma(_93, fp_c3_1._m0[5].y, _211);
    float _295 = sin(_281);
    int _297 = floatBitsToInt(_225);
    int _299 = 0;
    int _301 = 7171;
    // 原 _65 调用替换为确定性随机
    int _305 = deterministic_shuffle(_297, 0x7FFFFFFF);
    int _1738 = _305;
    int _303 = 0;
    int _305_final = _1738;
    float _307 = sin(_289);
    int _309 = floatBitsToInt(_293);
    int _311 = 0;
    int _313 = 7171;
    int _317 = deterministic_shuffle(_309, 0x7FFFFFFF);
    int _1743 = _317;
    int _315 = 0;
    int _317_final = _1743;
    float _319 = sin(_291);
    float _321 = sin(_283);
    float _1750 = _295 * 4.545300006866455078125;
    float _323 = _1750;
    float _325 = sin(_285);
    float _1754 = _307 * 4.545300006866455078125;
    float _327 = _1754;
    float _329 = floor(_323);
    float _1758 = _319 * 4.545300006866455078125;
    float _331 = _1758;
    float _333 = floor(_327);
    float _1762 = _321 * 4.545300006866455078125;
    float _335 = _1762;
    float _337 = floor(_331);
    // 替换 subgroup shuffle 为确定性随机
    uint _1777 = uint(int(gl_FragCoord.x * 4.0 + gl_FragCoord.y)) & 3u;
    float _339 = (intBitsToFloat(_305_final) * vec4(1.0, -1.0, 1.0, 0.0)[_1777]) + (_225 * vec4(1.0, 1.0, -1.0, 1.0)[_1777]);
    float _341 = sin(_287);
    float _1786 = _325 * 4.545300006866455078125;
    float _343 = _1786;
    float _345 = floor(_335);
    uint _1796 = uint(int(gl_FragCoord.x * 4.0 + gl_FragCoord.y + 1.0)) & 3u;
    float _347 = (intBitsToFloat(_317_final) * vec4(1.0, -1.0, 1.0, 0.0)[_1796]) + (_293 * vec4(1.0, 1.0, -1.0, 1.0)[_1796]);
    int _349 = floatBitsToInt(_339);
    int _351 = 1;
    int _353 = 7171;
    int _357 = deterministic_shuffle(_349, 0x7FFFFFFF);
    int _1804 = _357;
    int _355 = 0;
    int _357_final = _1804;
    float _359 = -_329;
    float _1809 = _323 + _359;
    float _361 = _1809;
    float _363 = -_333;
    float _1814 = _327 + _363;
    float _365 = _1814;
    int _367 = floatBitsToInt(_347);
    int _369 = 2;
    int _371 = 7171;
    int _375 = deterministic_shuffle(_367, 0x7FFFFFFF);
    int _1817 = _375;
    int _373 = 0;
    int _375_final = _1817;
    float _377 = -_337;
    float _1822 = _331 + _377;
    float _379 = _1822;
    float _381 = floor(_343);
    float _1826 = _341 * 4.545300006866455078125;
    float _383 = _1826;
    int _385 = floatBitsToInt(_339);
    int _387 = 2;
    int _389 = 7171;
    int _393 = deterministic_shuffle(_385, 0x7FFFFFFF);
    int _1829 = _393;
    int _391 = 0;
    int _393_final = _1829;
    float _395 = -_345;
    float _1834 = _335 + _395;
    float _397 = _1834;
    float _399 = floor(_383);
    float _1839 = _225 + _379;
    float _401 = _1839;
    int _403 = floatBitsToInt(_347);
    int _405 = 1;
    int _407 = 7171;
    int _411 = deterministic_shuffle(_403, 0x7FFFFFFF);
    int _1842 = _411;
    int _409 = 0;
    int _411_final = _1842;
    float _1845 = _225 + _397;
    float _413 = _1845;
    float _415 = -_381;
    float _1850 = _343 + _415;
    float _417 = _1850;
    float _1853 = _293 + _365;
    float _419 = _1853;
    float _421 = -_399;
    float _1858 = _383 + _421;
    float _423 = _1858;
    float _1861 = _225 + _417;
    float _425 = _1861;
    float _427 = _413;
    float _1865 = 1.0 * intBitsToFloat(_375_final);
    float _429 = _1865;
    float _1868 = 1.0 * intBitsToFloat(_393_final);
    float _431 = _1868;
    float _1870 = _429 * 1.0;
    float _433 = _1870;
    int _435 = floatBitsToInt(fp_c2_1._m0[22].z) | floatBitsToInt(fp_c2_1._m0[86].z);
    float _1881 = _431 * 1.0;
    float _437 = _1881;
    float _1884 = _293 + _361;
    float _439 = _1884;
    float _441 = textureGrad(fp_t_cb196610_1056805A, vec2(_419, _401), vec2(intBitsToFloat(_411_final), _433), vec2(intBitsToFloat(_357_final), _437)).x;
    float _1901 = _293 + _423;
    float _443 = _1901;
    float _445 = textureGrad(fp_t_cb196610_1056805A, vec2(_443, _425), vec2(intBitsToFloat(_411_final), _433), vec2(intBitsToFloat(_357_final), _437)).x;
    float _447 = textureGrad(fp_t_cb196610_1056805A, vec2(_439, _413), vec2(intBitsToFloat(_411_final), _433), vec2(intBitsToFloat(_357_final), _437)).x;
    float _449 = _439;
    float _451 = intBitsToFloat(_435);
    if (_81)
    {
        vec3 _455 = texture(fp_t_cb196610_1057805C, vec2(_217, _221)).xyz;
        float _457 = _455.x;
        float _459 = _455.y;
        float _461 = _455.z;
        _449 = _459;
        _427 = _461;
        _451 = _457;
    }
    float _463 = _449;
    float _465 = _427;
    float _467 = _451;
    float _469 = texture(fp_t_cb196610_1056805A, vec2(_223, _225)).x;
    float _471 = fma(_209, fp_c1_1._m0[5].w, _95);
    float _473 = fma(_207, fp_c1_1._m0[5].w, _93);
    float _475 = texture(fp_t_cb196610_1018015C, vec2(_473, _471)).x;
    float _477 = fma(_209, fp_c1_1._m0[5].z, _95);
    float _479 = fma(_207, fp_c1_1._m0[5].z, _93);
    vec4 _482 = texture(fp_t_cb196610_1017815C, vec2(_479, _477)).xyzw;
    float _484 = _482.x;
    float _486 = _482.y;
    float _488 = _482.z;
    float _490 = _482.w;
    float _492 = _47.y;
    float _494 = _463;
    float _496 = _467;
    if (!_255)
    {
        float _498 = -_245;
        float _2010 = _498 + 1.0;
        float _500 = _2010;
        _273 = _500;
    }
    float _502 = _273;
    float _2015 = _253 + 1.0;
    float _504 = _2015;
    float _506 = -_89;
    float _2021 = _506 + fp_c3_1._m0[3].x;
    float _508 = _2021;
    float _510 = -_91;
    float _2027 = _510 + fp_c3_1._m0[3].z;
    float _512 = _2027;
    float _514 = _504;
    if (!_255)
    {
        float _516 = -_239;
        float _2035 = _516 + 1.0;
        float _518 = _2035;
        _275 = _518;
    }
    float _520 = _275;
    float _522 = _520;
    if (!_81)
    {
        _494 = 0.0;
    }
    float _524 = _494;
    float _2046 = _207 * 3.0;
    float _526 = _2046;
    float _528 = _524;
    if (!_255)
    {
        float _530 = -_504;
        float _2055 = _530 + (-0.0);
        float _532 = _2055;
        _514 = _532;
    }
    float _534 = _514;
    float _536 = -_492;
    float _2064 = _536 + fp_c3_1._m0[3].y;
    float _538 = _2064;
    float _2067 = _441 * _502;
    float _540 = _2067;
    float _542 = fma(_445, _534, _540);
    float _2074 = _508 * _508;
    float _544 = _2074;
    if (_81)
    {
        float _546 = -_524;
        float _2080 = _546 + (-0.0);
        float _548 = _2080;
        _528 = _548;
    }
    float _550 = _528;
    float _552 = fma(_447, _520, _542);
    float _554 = fma(_538, _538, _544);
    if (_81)
    {
        float _556 = -_465;
        float _2098 = _556 + 0.25;
        float _558 = _2098;
        _522 = _558;
    }
    float _560 = _522;
    float _562 = _560;
    if (!_81)
    {
        _562 = 0.25;
    }
    float _564 = _562;
    float _566 = -_469;
    float _2112 = _552 + _566;
    float _568 = _2112;
    float _570 = fma(_512, _512, _554);
    float _572 = sqrt(_570);
    float _574 = max(fp_c3_1._m0[13].z, fp_c1_1._m0[4].x);
    float _576 = -fp_c3_1._m0[13].y;
    float _2130 = _572 + _576;
    float _578 = _2130;
    float _2132 = 1.0 / _574;
    float _580 = _2132;
    float _2135 = _578 * _580;
    float _582 = _2135;
    float _584 = clamp(_582, 0.0, 1.0);
    float _586 = _51.y;
    float _2142 = _475 + _550;
    float _588 = _2142;
    float _590 = clamp(_588, 0.0, 1.0);
    float _592 = _51.x;
    float _2149 = _486 + _484;
    float _594 = _2149;
    float _596 = fma(_584, _568, _469);
    float _2156 = _488 + _594;
    float _598 = _2156;
    float _2158 = _564 + 1.0;
    float _600 = _2158;
    float _2161 = _596 + _598;
    float _602 = _2161;
    float _2163 = _600 + (-0.0);
    float _604 = _2163;
    float _606 = clamp(_604, 0.0, 1.0);
    float _2169 = _602 * fp_c3_1._m0[9].w;
    float _608 = _2169;
    float _2172 = _606 * _606;
    float _610 = _2172;
    float _612 = -_586;
    float _2177 = _612 + _590;
    float _614 = _2177;
    float _616 = clamp(_614, 0.0, 1.0);
    float _618 = -_592;
    float _2183 = _618 + 2.0;
    float _620 = _2183;
    float _622 = -_592;
    float _2187 = _622 + 1.0;
    float _624 = _2187;
    bool _626 = _592 >= fp_c1_1._m0[6].y;
    float _2195 = _596 * _616;
    float _628 = _2195;
    float _2198 = _616 * _620;
    float _630 = _2198;
    float _2201 = _596 * _630;
    float _632 = _2201;
    float _634 = fma(_564, _616, fp_c1_1._m0[6].x);
    float _2209 = _608 * _632;
    float _636 = _2209;
    float _2212 = _624 * _600;
    float _638 = _2212;
    float _2215 = _624 * _628;
    float _640 = _2215;
    float _642 = -_610;
    float _644 = fma(_636, _642, fp_c1_1._m0[0].x);
    float _2225 = _628 * _638;
    float _646 = _2225;
    float _648 = -_616;
    float _2230 = _634 * _648;
    float _650 = _2230;
    float _2235 = _640 * fp_c3_1._m0[10].y;
    float _652 = _2235;
    float _654 = -_526;
    float _656 = fma(_646, fp_c3_1._m0[9].w, _654);
    float _658 = _646;
    int _660 = floatBitsToInt(_634);
    int _662 = floatBitsToInt(_656);
    if (_81)
    {
        float _664 = -_467;
        float _2254 = _467 * _664;
        float _666 = _2254;
        _658 = _666;
    }
    float _668 = _658;
    float _670 = fma(_652, _650, _652);
    float _672 = _668;
    if (!_81)
    {
        _672 = 0.0;
    }
    float _674 = _672;
    bool _676 = _656 >= _644;
    float _678 = float(_676);
    float _2275 = _670 + _678;
    float _680 = _2275;
    float _682 = fma(_680, _674, _680);
    float _684 = -_592;
    float _2284 = _684 + _682;
    float _686 = _2284;
    bool _688 = _686 < fp_c1_1._m0[6].z;
    bool _690 = _688 && _626;
    bool _692 = _686 < fp_c1_1._m0[6].z;
    bool _694 = (_692 ? (-1) : 0) == 0;
    bool _696 = (_692 ? (-1) : 0) < 0;
    int _698 = floatBitsToInt(_680);
    int _700 = floatBitsToInt(_686);
    if (_690)
    {
        discard;
    }
    if (_690)
    {
        _698 = 0;
    }
    int _702 = _698;
    if (_690)
    {
        _700 = 0;
    }
    int _704 = _700;
    if (_690)
    {
        _660 = 0;
    }
    int _706 = _660;
    if (_690)
    {
        _662 = 0;
    }
    int _708 = _662;
    if (_626)
    {
        bool _710 = !_694;
        bool _712 = _696 || _710;
        if (_712)
        {
            _54.x = intBitsToFloat(_702);
            _54.y = intBitsToFloat(_704);
            _54.z = intBitsToFloat(_706);
            _54.w = intBitsToFloat(_708);
            return;
        }
    }
    float _714 = fma(_95, fp_c3_1._m0[5].z, _213);
    float _716 = fma(_93, fp_c3_1._m0[5].z, _211);
    float _718 = texture(fp_t_cb196610_1019815C, vec2(_716, _714)).x;
    vec3 _720 = texture(fp_t_cb196610_1018815C, vec2(_473, _471)).xyz;
    float _722 = _720.x;
    float _724 = _720.y;
    float _726 = _720.z;
    float _728 = _56.x;
    float _730 = _56.y;
    float _732 = inversesqrt(_570);
    float _734 = _56.z;
    float _736 = abs(_484);
    float _738 = log2(_736);
    float _740 = abs(_488);
    float _742 = log2(_740);
    float _744 = abs(_486);
    float _746 = log2(_744);
    if (!_81)
    {
        _496 = 0.0;
    }
    float _748 = _496;
    float _750 = abs(_592);
    float _752 = log2(_750);
    bool _754 = _592 <= fp_c1_1._m0[6].y;
    float _756 = -_616;
    float _2414 = _756 + 1.0;
    float _758 = _2414;
    float _2417 = _508 * _732;
    float _760 = _2417;
    float _2420 = _538 * _732;
    float _762 = _2420;
    float _2423 = _512 * _732;
    float _764 = _2423;
    float _2428 = _738 * fp_c3_1._m0[12].z;
    float _766 = _2428;
    float _2432 = _742 * fp_c3_1._m0[12].z;
    float _768 = _2432;
    float _2436 = _752 * fp_c1_1._m0[6].w;
    float _770 = _2436;
    float _772 = exp2(_768);
    float _2441 = _760 * _728;
    float _774 = _2441;
    float _2445 = _746 * fp_c3_1._m0[12].z;
    float _776 = _2445;
    float _778 = exp2(_766);
    float _2450 = 2.0 * fp_c3_1._m0[6].x;
    float _780 = _2450;
    float _782 = fma(_762, _730, _774);
    float _784 = fma(_764, _734, _782);
    float _786 = clamp(_784, 0.0, 1.0);
    float _2465 = _592 + fp_c1_1._m0[7].x;
    float _788 = _2465;
    float _790 = clamp(_788, 0.0, 1.0);
    float _792 = -fp_c3_1._m0[12].w;
    float _2474 = _792 + fp_c3_1._m0[13].x;
    float _794 = _2474;
    float _2478 = _772 * fp_c3_1._m0[12].z;
    float _796 = _2478;
    float _2480 = 1.0 / _794;
    float _798 = _2480;
    float _800 = -_786;
    float _2484 = _800 + 1.0;
    float _802 = _2484;
    float _804 = log2(_802);
    float _806 = -_790;
    float _2490 = _806 + 1.0;
    float _808 = _2490;
    float _810 = exp2(_776);
    float _2495 = _780 * _564;
    float _812 = _2495;
    float _814 = -_748;
    float _2500 = _808 * _814;
    float _816 = _2500;
    float _2504 = _778 * fp_c3_1._m0[12].z;
    float _818 = _2504;
    float _2507 = 2.0 * fp_c3_1._m0[6].y;
    float _820 = _2507;
    float _822 = fma(_812, fp_c1_1._m0[7].y, _780);
    float _2516 = _804 * fp_c3_1._m0[12].x;
    float _824 = _2516;
    float _2520 = _810 * fp_c3_1._m0[12].z;
    float _826 = _2520;
    float _2523 = _820 * _564;
    float _828 = _2523;
    float _2526 = _818 * _780;
    float _830 = _2526;
    float _2529 = 2.0 * fp_c3_1._m0[6].z;
    float _832 = _2529;
    float _2532 = _826 * _820;
    float _834 = _2532;
    float _836 = exp2(_824);
    float _838 = fma(_828, fp_c1_1._m0[7].y, _820);
    float _840 = exp2(_770);
    float _2544 = _832 * _564;
    float _842 = _2544;
    float _844 = fma(_842, fp_c1_1._m0[7].y, _832);
    float _2552 = _796 * _832;
    float _846 = _2552;
    float _848 = -fp_c3_1._m0[12].w;
    float _2558 = _836 + _848;
    float _850 = _2558;
    float _852 = -fp_c3_1._m0[7].y;
    float _854 = fma(_840, _852, _840);
    float _2568 = _850 * _798;
    float _856 = _2568;
    float _858 = clamp(_856, 0.0, 1.0);
    float _860 = -fp_c3_1._m0[7].x;
    float _862 = fma(_840, _860, _840);
    float _864 = -fp_c3_1._m0[7].z;
    float _866 = fma(_840, _864, _840);
    float _2587 = _858 * _858;
    float _868 = _2587;
    float _2591 = _862 + fp_c3_1._m0[7].x;
    float _870 = _2591;
    float _2595 = _718 * fp_c3_1._m0[12].y;
    float _872 = _2595;
    float _2598 = _211 * _872;
    float _874 = _2598;
    float _2601 = _874 + _874;
    float _876 = _2601;
    float _878 = fma(_858, -2.0, 3.0);
    float _2608 = _866 + fp_c3_1._m0[7].z;
    float _880 = _2608;
    float _2612 = _854 + fp_c3_1._m0[7].y;
    float _882 = _2612;
    float _884 = -_876;
    float _886 = fma(_600, fp_c3_1._m0[10].x, _884);
    float _2622 = _868 * _878;
    float _888 = _2622;
    float _890 = log2(_888);
    float _2627 = _886 + _870;
    float _892 = _2627;
    float _2630 = _886 + _882;
    float _894 = _2630;
    float _2633 = _886 + _880;
    float _896 = _2633;
    float _2636 = _758 + _892;
    float _898 = _2636;
    float _2641 = fp_c3_1._m0[0].x + fp_c3_1._m0[0].y;
    float _900 = _2641;
    float _2644 = _758 + _894;
    float _902 = _2644;
    float _2647 = _758 + _896;
    float _904 = _2647;
    float _2651 = _890 * fp_c3_1._m0[12].x;
    float _906 = _2651;
    float _2656 = fp_c3_1._m0[0].x + fp_c3_1._m0[0].z;
    float _908 = _2656;
    float _910 = -_876;
    float _2661 = _910 + _898;
    float _912 = _2661;
    float _914 = clamp(_912, 0.0, 1.0);
    float _2667 = _900 + fp_c3_1._m0[0].z;
    float _916 = _2667;
    float _918 = -_876;
    float _2672 = _918 + _902;
    float _920 = _2672;
    float _922 = clamp(_920, 0.0, 1.0);
    float _924 = -_876;
    float _2679 = _924 + _904;
    float _926 = _2679;
    float _928 = clamp(_926, 0.0, 1.0);
    float _2686 = _758 * fp_c3_1._m0[8].x;
    float _930 = _2686;
    float _2690 = _908 + fp_c3_1._m0[0].y;
    float _932 = _2690;
    float _2693 = _830 * _914;
    float _934 = _2693;
    bool _936 = _916 > 0.0;
    float _2698 = _834 * _922;
    float _938 = _2698;
    float _2701 = _846 * _928;
    float _940 = _2701;
    float _2705 = _930 * fp_c3_1._m0[8].x;
    float _942 = _2705;
    float _2709 = _758 * fp_c3_1._m0[8].y;
    float _944 = _2709;
    float _2712 = _934 * _822;
    float _946 = _2712;
    float _2716 = _758 * fp_c3_1._m0[8].z;
    float _948 = _2716;
    float _2719 = _938 * _838;
    float _950 = _2719;
    float _2722 = _940 * _844;
    float _952 = _2722;
    float _2725 = _722 * _942;
    float _954 = _2725;
    float _2729 = _944 * fp_c3_1._m0[8].y;
    float _956 = _2729;
    float _958 = fma(_946, _816, _946);
    float _2737 = _948 * fp_c3_1._m0[8].z;
    float _960 = _2737;
    float _962 = fma(_950, _816, _950);
    float _964 = fma(_952, _816, _952);
    float _2748 = _724 * _956;
    float _966 = _2748;
    float _2751 = _726 * _960;
    float _968 = _2751;
    float _970 = exp2(_906);
    float _972 = -_958;
    float _974 = fma(_954, 2.0, _972);
    float _976 = -_962;
    float _978 = fma(_966, 2.0, _976);
    float _2767 = _932 * fp_c1_1._m0[7].z;
    float _980 = _2767;
    float _982 = -_964;
    float _984 = fma(_968, 2.0, _982);
    float _986 = min(fp_c3_1._m0[1].x, fp_c5_1._m0[11].y);
    float _988 = _958;
    float _990 = _962;
    float _992 = _964;
    if (_754)
    {
        float _994 = fma(_758, _974, _958);
        _988 = _994;
    }
    float _996 = _988;
    if (_754)
    {
        float _998 = fma(_758, _978, _962);
        _990 = _998;
    }
    float _1000 = _990;
    if (_754)
    {
        float _1002 = fma(_758, _984, _964);
        _992 = _1002;
    }
    float _1004 = _992;
    float _2810 = _986 + (-0.0);
    float _1006 = _2810;
    float _1008 = fma(_970, fp_c3_1._m0[11].x, _996);
    float _1010 = trunc(_1006);
    int _1012 = int(_1010);
    float _1014 = fma(_970, fp_c3_1._m0[11].y, _1000);
    float _1016 = fma(_970, fp_c3_1._m0[11].z, _1004);
    float _1018 = -fp_c3_1._m0[9].y;
    float _1020 = fma(_1008, _1018, _1008);
    float _2840 = _1008 * fp_c3_1._m0[9].y;
    float _1022 = _2840;
    float _1024 = -fp_c3_1._m0[9].y;
    float _1026 = fma(_1014, _1024, _1014);
    float _2851 = _1014 * fp_c3_1._m0[9].y;
    float _1028 = _2851;
    float _1030 = -fp_c3_1._m0[9].y;
    float _1032 = fma(_1016, _1030, _1016);
    float _2862 = _1016 * fp_c3_1._m0[9].y;
    float _1034 = _2862;
    bool _1036 = _1012 <= 0;
    float _1038 = fma(_1020, _980, _1022);
    float _1040 = fma(_1026, _980, _1028);
    int _1042 = floatBitsToInt(_1038);
    int _1044 = floatBitsToInt(_1040);
    if (!_936)
    {
        _1042 = floatBitsToInt(_1008);
    }
    int _1046 = _1042;
    float _1048 = fma(_1032, _980, _1034);
    int _1050 = floatBitsToInt(_1048);
    float _1052 = intBitsToFloat(_1046);
    if (!_936)
    {
        _1044 = floatBitsToInt(_1014);
    }
    int _1054 = _1044;
    float _1056 = intBitsToFloat(_1054);
    if (!_936)
    {
        _1050 = floatBitsToInt(_1016);
    }
    int _1058 = _1050;
    float _1060 = intBitsToFloat(_1058);
    if (_1036)
    {
        _54.x = intBitsToFloat(_1046);
        _54.y = intBitsToFloat(_1054);
        _54.z = intBitsToFloat(_1058);
        _54.w = _490;
        return;
    }
    uint _1063 = 0u;
    bool _1065;
    float _1359;
    float _1361;
    float _1363;
    do
    {
        uint _1067 = _1063;
        float _1069 = _1052;
        float _1071 = _1056;
        float _1073 = _1060;
        uint _1075 = uint(int(uint(int(_1067)) >> uint(2)));
        int _1077 = int(bitfieldInsert(0u, _1067, int(4u), int(2u)));
        int _1079 = int(_1067) + 1;
        uint _1081 = uint(int(uint(_1077) >> uint(2)));
        uint _1083 = uint(int(uint(int(_1081)) >> uint(2)));
        int _1085 = int(_1081) & 3;
        float _1087 = fp_c1_1._m0[int(_1083)][_1085];
        int _1089 = int(_1081) + 1;
        uint _1091 = uint(int(uint(_1089) >> uint(2)));
        int _1093 = _1089 & 3;
        float _1095 = fp_c1_1._m0[int(_1091)][_1093];
        int _1097 = int(_1075) << 4;
        int _1099 = _1077 + 8;
        uint _1101 = uint(int(uint(_1099) >> uint(2)));
        uint _1103 = uint(int(uint(int(_1101)) >> uint(2)));
        int _1105 = int(_1101) & 3;
        float _1107 = fp_c1_1._m0[int(_1103)][_1105];
        int _1109 = int(_1101) + 1;
        uint _1111 = uint(int(uint(_1109) >> uint(2)));
        int _1113 = _1109 & 3;
        float _1115 = fp_c1_1._m0[int(_1111)][_1113];
        _1065 = _1079 >= _1012;
        int _1117 = _1097 + 192;
        uint _1119 = uint(int(uint(_1117) >> uint(2)));
        uint _1121 = uint(int(uint(int(_1119)) >> uint(2)));
        int _1123 = int(_1119) & 3;
        float _1125 = fp_c5_1._m0[int(_1121)][_1123];
        int _1127 = int(_1119) + 1;
        uint _1129 = uint(int(uint(_1127) >> uint(2)));
        int _1131 = _1127 & 3;
        float _1133 = fp_c5_1._m0[int(_1129)][_1131];
        int _1135 = _1097 + 200;
        uint _1137 = uint(int(uint(_1135) >> uint(2)));
        uint _1139 = uint(int(uint(int(_1137)) >> uint(2)));
        int _1141 = int(_1137) & 3;
        float _1143 = fp_c5_1._m0[int(_1139)][_1141];
        int _1145 = int(_1137) + 1;
        uint _1147 = uint(int(uint(_1145) >> uint(2)));
        int _1149 = _1145 & 3;
        float _1151 = fp_c5_1._m0[int(_1147)][_1149];
        float _3071 = _1125 * _1087;
        float _1153 = _3071;
        float _1155 = fma(_1133, _1095, _1153);
        float _1157 = fma(_1143, _1107, _1155);
        float _1159 = fma(_1151, _1115, _1157);
        float _1161 = trunc(_1159);
        int _1163 = int(_1161);
        int _1165 = _1163 << 4;
        uint _1167 = uint(int(uint(_1165) >> uint(2)));
        uint _1169 = uint(int(uint(int(_1167)) >> uint(2)));
        int _1171 = int(_1167) & 3;
        float _1173 = fp_c4_1._m0[int(_1169)][_1171];
        int _1175 = int(_1167) + 1;
        uint _1177 = uint(int(uint(_1175) >> uint(2)));
        int _1179 = _1175 & 3;
        float _1181 = fp_c4_1._m0[int(_1177)][_1179];
        int _1183 = _1165 + 8;
        uint _1185 = uint(int(uint(_1183) >> uint(2)));
        uint _1187 = uint(int(uint(int(_1185)) >> uint(2)));
        int _1189 = int(_1185) & 3;
        float _1191 = fp_c4_1._m0[int(_1187)][_1189];
        int _1193 = int(_1185) + 1;
        uint _1195 = uint(int(uint(_1193) >> uint(2)));
        int _1197 = _1193 & 3;
        float _1199 = fp_c4_1._m0[int(_1195)][_1197];
        int _1201 = _1165 + 8192;
        uint _1203 = uint(int(uint(_1201) >> uint(2)));
        uint _1205 = uint(int(uint(int(_1203)) >> uint(2)));
        int _1207 = int(_1203) & 3;
        float _1209 = fp_c4_1._m0[int(_1205)][_1207];
        int _1211 = _1165 + 12296;
        uint _1213 = uint(int(uint(_1211) >> uint(2)));
        uint _1215 = uint(int(uint(int(_1213)) >> uint(2)));
        int _1217 = int(_1213) & 3;
        float _1219 = fp_c4_1._m0[int(_1215)][_1217];
        float _1221 = -_1199;
        float _1223 = fma(_89, _1221, _1173);
        float _1225 = -_1199;
        float _1227 = fma(_492, _1225, _1181);
        float _1229 = -_1199;
        float _1231 = fma(_91, _1229, _1191);
        float _3204 = _1223 * _1223;
        float _1233 = _3204;
        float _1235 = fma(_1227, _1227, _1233);
        float _1237 = fma(_1231, _1231, _1235);
        int _1239 = _1165 + 12288;
        uint _1241 = uint(int(uint(_1239) >> uint(2)));
        uint _1243 = uint(int(uint(int(_1241)) >> uint(2)));
        int _1245 = int(_1241) & 3;
        float _1247 = fp_c4_1._m0[int(_1243)][_1245];
        int _1249 = int(_1241) + 1;
        uint _1251 = uint(int(uint(_1249) >> uint(2)));
        int _1253 = _1249 & 3;
        float _1255 = fp_c4_1._m0[int(_1251)][_1253];
        float _1257 = max(_1237, 6.103515625e-05);
        float _1259 = inversesqrt(_1257);
        float _3251 = _1257 * _1209;
        float _1261 = _3251;
        float _3253 = 1.0 / _1257;
        float _1263 = _3253;
        float _1265 = -_1261;
        float _1267 = fma(_1261, _1265, fp_c1_1._m0[0].x);
        float _3263 = _1223 * _1259;
        float _1269 = _3263;
        int _1271 = _1165 + 8200;
        uint _1273 = uint(int(uint(_1271) >> uint(2)));
        uint _1275 = uint(int(uint(int(_1273)) >> uint(2)));
        int _1277 = int(_1273) & 3;
        float _1279 = fp_c4_1._m0[int(_1275)][_1277];
        int _1281 = int(_1273) + 1;
        uint _1283 = uint(int(uint(_1281) >> uint(2)));
        int _1285 = _1281 & 3;
        float _1287 = fp_c4_1._m0[int(_1283)][_1285];
        float _3297 = _1227 * _1259;
        float _1289 = _3297;
        float _3300 = _1231 * _1259;
        float _1291 = _3300;
        int _1293 = _1165 + 4104;
        uint _1295 = uint(int(uint(_1293) >> uint(2)));
        uint _1297 = uint(int(uint(int(_1295)) >> uint(2)));
        int _1299 = int(_1295) & 3;
        float _1301 = fp_c4_1._m0[int(_1297)][_1299];
        float _1303 = max(0.0, _1267);
        float _3323 = _1269 * _1247;
        float _1305 = _3323;
        float _1307 = fma(_1289, _1255, _1305);
        float _3330 = _1303 * _1303;
        float _1309 = _3330;
        float _1311 = fma(_1291, _1219, _1307);
        int _1313 = _1165 + 4096;
        uint _1315 = uint(int(uint(_1313) >> uint(2)));
        uint _1317 = uint(int(uint(int(_1315)) >> uint(2)));
        int _1319 = int(_1315) & 3;
        float _1321 = fp_c4_1._m0[int(_1317)][_1319];
        int _1323 = int(_1315) + 1;
        uint _1325 = uint(int(uint(_1323) >> uint(2)));
        int _1327 = _1323 & 3;
        float _1329 = fp_c4_1._m0[int(_1325)][_1327];
        float _3368 = _1309 * _1263;
        float _1331 = _3368;
        float _1333 = fma(_1279, _1311, _1287);
        float _1335 = clamp(_1333, 0.0, 1.0);
        float _3377 = _1335 * _1335;
        float _1337 = _3377;
        float _3380 = _1331 * _1337;
        float _1339 = _3380;
        float _3383 = _1339 * _1321;
        float _1341 = _3383;
        float _3386 = _1339 * _1329;
        float _1343 = _3386;
        float _3389 = _1339 * _1301;
        float _1345 = _3389;
        float _3393 = _1341 * fp_c3_1._m0[13].w;
        float _1347 = _3393;
        float _3397 = _1343 * fp_c3_1._m0[13].w;
        float _1349 = _3397;
        float _3401 = _1345 * fp_c3_1._m0[13].w;
        float _1351 = _3401;
        float _3404 = _1347 * _1069;
        float _1353 = _3404;
        float _3407 = _1349 * _1071;
        float _1355 = _3407;
        float _3410 = _1351 * _1073;
        float _1357 = _3410;
        _1359 = fma(_1353, 7.0, _1069);
        _1361 = fma(_1355, 7.0, _1071);
        _1363 = fma(_1357, 7.0, _1073);
        _1063 = uint(_1079);
        _1052 = _1359;
        _1056 = _1361;
        _1060 = _1363;
    } while (!_1065);
    _54.x = _1359;
    _54.y = _1361;
    _54.z = _1363;
    _54.w = _490;
}