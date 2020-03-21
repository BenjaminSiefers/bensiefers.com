var vertShader = `
uniform float time;
uniform vec2 resolution;
void main(){
    vec3 p = position;
    vec4 modelViewPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}
` 
export default vertShader;