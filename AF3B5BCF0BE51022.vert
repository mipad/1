#version 450

layout(location = 0) out vec4 _27;  // 虽然不用，但保持输出
layout(location = 1) out vec4 _16;

void main()
{
    // 生成一个覆盖 NDC 的大三角形，确保任何位置都能被看见
    const vec4 positions[3] = vec4[](
        vec4(-1.0, -1.0, 0.0, 1.0),
        vec4( 3.0, -1.0, 0.0, 1.0),
        vec4(-1.0,  3.0, 0.0, 1.0)
    );
    int idx = gl_VertexIndex;
    if (idx < 0 || idx >= 3) idx = 0;
    gl_Position = positions[idx];
    
    // 输出任意值（不影响红色）
    _16 = vec4(0.0);
    _27 = vec4(0.0);
}