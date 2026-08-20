export const GLOW_VERT = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Pure monochrome core glow — white bloom at centre
export const GLOW_FRAG = /* glsl */ `
precision highp float;

varying vec2 vUv;
uniform float uIntensity;
uniform float uCore;
uniform float uSpike;

void main() {
  vec2 q = (vUv - 0.5) * 2.0;
  float d = length(q);
  float halo = pow(max(0.0, 1.0 - d), 3.6);
  float core = pow(max(0.0, 1.0 - d * 3.0), 8.0) * uCore;

  // Diffraction spikes — what actually makes a point of light read as a star
  // rather than a blob. Driven by uSpike so the galactic bulge, which should
  // not have them, can fade them out entirely.
  float fade = pow(max(0.0, 1.0 - d), 1.5);
  float sx = pow(max(0.0, 1.0 - abs(q.y) * 16.0), 2.0);
  float sy = pow(max(0.0, 1.0 - abs(q.x) * 16.0), 2.0);
  float spikes = (sx + sy) * fade * uSpike;

  float a = (halo * 0.45 + core + spikes * 0.5) * uIntensity;
  gl_FragColor = vec4(vec3(1.0), clamp(a, 0.0, 1.0));
}
`;
