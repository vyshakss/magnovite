export const PARTICLE_VERT = /* glsl */ `
precision highp float;

attribute vec3 aDir;
attribute vec4 aRand;
attribute vec3 aDust;

uniform float uTime;
uniform float uP;
uniform float uTravel;
uniform float uSize;
uniform float uDpr;

varying float vAlpha;
varying float vRot;
varying float vMix;
varying vec3 vColor;

void main() {
  float p = uP;

  // ---- 1. dense pulsar core -------------------------------------------------
  float pulse = 0.5 + 0.5 * sin(uTime * 2.6 + aRand.w * 6.2831);
  float tension = smoothstep(0.06, 0.30, p);
  float coreR = 0.10 * (0.25 + aRand.y) * (1.0 + 0.35 * pulse + 1.6 * tension);

  // ---- 2. first stellar explosion ------------------------------------------
  float e1 = pow(smoothstep(0.30, 0.52, p), 0.55);
  // ---- 3. second explosion -> butterfly swarm ------------------------------
  float e2 = pow(smoothstep(0.56, 0.80, p), 0.65);

  float r = coreR
    + e1 * (2.0 + 7.0 * aRand.x)
    + e2 * (14.0 + 46.0 * aRand.z);

  vec3 expl = aDir * r;

  // fluttering / turbulence, strongest in the butterfly stage
  float flut = 0.55 * e2 + 0.15 * e1;
  expl += flut * vec3(
    sin(uTime * 1.7 + aRand.w * 12.0),
    cos(uTime * 1.4 + aRand.x * 11.0),
    sin(uTime * 1.15 + aRand.y * 9.0)
  );
  expl.z -= 24.0;

  // ---- 4. dust cloud (endless tunnel) --------------------------------------
  float dm = smoothstep(0.80, 1.0, p);
  vec3 dust = aDust;
  float span = 420.0;
  dust.xy *= 1.0 + 0.25 * sin(aRand.w * 20.0);
  dust.z = -mod(aDust.z + uTravel * 26.0, span) + 12.0;
  dust.x += 1.6 * sin(uTime * 0.09 + aRand.w * 6.28);
  dust.y += 1.6 * cos(uTime * 0.07 + aRand.x * 6.28);

  vec3 pos = mix(expl, dust, dm);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  // ---- appearance -----------------------------------------------------------
  // a large subset of the swarm literally becomes the Magnovite butterfly
  float isBf = step(0.42, aRand.z);
  float butterfly = isBf * smoothstep(0.56, 0.68, p) * (1.0 - 0.9 * smoothstep(0.84, 0.99, p));
  vMix = butterfly;

  float sizeBase = uSize * (0.45 + 1.35 * aRand.y);
  sizeBase *= mix(1.0, 4.5 + 4.5 * aRand.y, butterfly);
  sizeBase *= mix(1.0, 1.25, dm);
  gl_PointSize = sizeBase * uDpr * (260.0 / max(-mv.z, 0.4));
  gl_PointSize = min(gl_PointSize, 190.0 * uDpr);

  // brightness: blinding in the core, calm in the dust
  float core = 1.0 - smoothstep(0.0, 0.34, p);
  float a = mix(0.30, 1.0, core * (0.55 + 0.45 * pulse));
  a = max(a, 0.16 + 0.55 * e1 * (1.0 - e2 * 0.35));
  a = mix(a, (0.05 + 0.5 * pow(aRand.y, 2.2)) * (0.5 + 0.9 * aRand.z), dm);

  // fade the very close and very far dust
  float depthFade = smoothstep(-span, -span * 0.72, mv.z) * (1.0 - smoothstep(-6.0, 4.0, mv.z));
  a *= mix(1.0, depthFade, dm);
  a *= mix(1.0, 0.45, butterfly);
  vAlpha = clamp(a, 0.0, 1.0);

  vRot = aRand.w * 6.2831 + uTime * (aRand.z - 0.5) * 1.4;

  // white / silver with faint warm highlights (no blue or purple nebula)
  float warm = step(0.86, aRand.x);
  vec3 silver = mix(vec3(0.78, 0.80, 0.84), vec3(1.0), aRand.y);
  vColor = mix(silver, vec3(1.0, 0.86, 0.68), warm * 0.75);
}
`;

export const PARTICLE_FRAG = /* glsl */ `
precision highp float;

uniform sampler2D uTex;
uniform float uAspect;

varying float vAlpha;
varying float vRot;
varying float vMix;
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float c = cos(vRot);
  float s = sin(vRot);
  uv = mat2(c, -s, s, c) * uv;

  float d = length(uv);
  float dotShape = smoothstep(0.5, 0.02, d);
  dotShape *= dotShape;

  float shape = dotShape;
  if (vMix > 0.001) {
    vec2 tuv = vec2(uv.x, uv.y * uAspect) * 1.05 + 0.5;
    float inside = step(0.0, tuv.x) * step(tuv.x, 1.0) * step(0.0, tuv.y) * step(tuv.y, 1.0);
    float wing = texture2D(uTex, clamp(tuv, 0.0, 1.0)).a * inside;
    shape = mix(dotShape, wing, vMix);
  }

  float a = shape * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor, a);
}
`;

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
