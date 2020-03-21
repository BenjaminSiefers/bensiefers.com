var fragShader = 
`
uniform float time;
uniform vec2 resolution;
float N21(vec2 p, float amp1, float amp2, float amp3){
    return fract(sin(p.x * amp1 + p.y * amp2) * amp3);
}
//Creates a base noise that SmoothNoise2 then interpolates to appear like a cloud
float SmoothNoise(vec2 uv, float amp1, float amp2, float amp3){
    vec2 lv = fract(uv);
    vec2 id = floor(uv);
    lv = lv * lv * (3.0 - 2.0 * lv);
    float bl = N21(id, amp1, amp2, amp3);
    float br = N21(id + vec2(1, 0), amp1, amp2, amp3);
    float b = mix(bl, br, lv.x);
    float tl = N21(id + vec2(0, 1), amp1, amp2, amp3);
    float tr = N21(id + vec2(1, 1), amp1, amp2, amp3);
    float t = mix(tl, tr, lv.x);
    return mix(b, t, lv.y);
}
//Smooths Noise and overlays them to give a softer noise field
float SmoothNoise2(vec2 uv){
    float amp1 = 100.0;
    float amp2 = 2000.0;
    float amp3 = 3000.0;
    float c = SmoothNoise(uv*4.0 ,amp1, amp2, amp3);
    c += SmoothNoise(uv*8.0, amp1, amp2, amp3)*0.5;
    c += SmoothNoise(uv*16.0, amp1, amp2, amp3)*0.25;
    c += SmoothNoise(uv*32.0, amp1, amp2, amp3)*0.125;
    c += SmoothNoise(uv*64.0, amp1, amp2, amp3)*0.0625;
    return c /= 1.9375;
}
void main() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = vec2(gl_FragCoord)/resolution.xy;
    vec2 layer1 = uv;
    vec2 layer2 = vec2(uv) + vec2(1000);
    vec2 layer3 = vec2(uv) + vec2(2000);
    layer1.x += time *.075;
    layer2.x += time *.05;
    layer3.x += time *.01;
    layer1.y += sin(time *.075);
    layer2.y += sin(time *.05);
    layer3.y += sin(time *.01);
    float c1 = SmoothNoise2(layer1);
    float c2 = SmoothNoise2(layer2);
    float c3 = SmoothNoise2(layer3);
    vec4 col = (vec4(c3)*.65)-(uv.y*1.25) + (vec4(c2)*.5)-(uv.y*.75) + (vec4(c1)*.25)-(uv.y*.25);
    // Output to screen
    gl_FragColor = vec4(col.xyz*100.0, col.w*2.0);
}
`
export default fragShader;