export const GLOW_VERT = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const GLOW_FRAG = /* glsl */ `
precision highp float;

varying vec2 vUv;
uniform float uIntensity;
uniform float uCore;

void main() {
  float d = length(vUv - 0.5) * 2.0;
  float halo = pow(max(0.0, 1.0 - d), 3.2);
  float core = pow(max(0.0, 1.0 - d * 3.4), 6.0) * uCore;
  float a = (halo * 0.55 + core) * uIntensity;
  vec3 col = mix(vec3(0.86, 0.89, 0.95), vec3(1.0), core);
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
}
`;

export const RING_FRAG = /* glsl */ `
precision highp float;

varying vec2 vUv;
uniform float uProgress;
uniform float uIntensity;

void main() {
  float d = length(vUv - 0.5) * 2.0;
  float edge = 1.0 - abs(d - uProgress) / max(0.06 + uProgress * 0.35, 0.001);
  float ring = pow(max(edge, 0.0), 2.4) * smoothstep(1.05, 0.85, d);
  gl_FragColor = vec4(vec3(1.0, 0.97, 0.93), ring * uIntensity);
}
`;
