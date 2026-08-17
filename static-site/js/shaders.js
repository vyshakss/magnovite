/**
 * Cosmic Experience Shaders
 * Handles pulsar core, butterfly particle field, central glow, and shockwaves.
 */

export const PARTICLE_VERT =  `
precision highp float;

// Attributes
attribute vec3 aDir;
attribute vec4 aRand;
attribute vec3 aDust;

// Uniforms
uniform float uTime;
uniform float uP;
uniform float uTravel;
uniform float uSize;
uniform float uDpr;

// Varyings to Fragment Shader
varying float vAlpha;
varying float vRot;
varying vec3 vColor;

void main() {
  float p = uP;

  // ---------------------------------------------------------------------------
  // 1. DENSE PULSAR CORE (Initial state before explosion)
  // ---------------------------------------------------------------------------
  float pulse = 0.5 + 0.5 * sin(uTime * 2.6 + aRand.w * 6.2831);
  float tension = smoothstep(0.06, 0.30, p);
  float coreRadius = 0.10 * (0.25 + aRand.y) * (1.0 + 0.35 * pulse + 1.6 * tension);

  // ---------------------------------------------------------------------------
  // 2. STELLAR EXPLOSION & BUTTERFLY FLIGHT
  // ---------------------------------------------------------------------------
  float e1 = pow(smoothstep(0.30, 0.52, p), 0.55);
  float e2 = pow(smoothstep(0.52, 0.78, p), 0.65);

  float explosionRadius = coreRadius
    + e1 * (2.5 + 8.0 * aRand.x)
    + e2 * (16.0 + 55.0 * aRand.z);

  vec3 explPos = aDir * explosionRadius;

  // Organic butterfly fluttering & orbital drift
  float flap = sin(uTime * 14.0 + aRand.w * 18.0);
  float flutterFactor = 0.75 * e2 + 0.25 * e1;
  explPos += flutterFactor * vec3(
    sin(uTime * 1.8 + aRand.w * 12.0) * 2.0 + flap * 0.6,
    cos(uTime * 1.5 + aRand.x * 11.0) * 1.8 + flap * 0.4,
    sin(uTime * 1.2 + aRand.y * 9.0) * 1.4
  );
  explPos.z -= 24.0;

  // ---------------------------------------------------------------------------
  // 3. DEEP SPACE DUST TUNNEL (Endless forward flight)
  // ---------------------------------------------------------------------------
  float dm = smoothstep(0.80, 1.0, p);
  vec3 dustPos = aDust;
  float span = 420.0;
  dustPos.xy *= 1.0 + 0.25 * sin(aRand.w * 20.0);
  dustPos.z = -mod(aDust.z + uTravel * 26.0, span) + 12.0;
  dustPos.x += 5.0 * sin(uTime * 0.09 + aRand.w * 6.28);
  dustPos.y += 5.0 * cos(uTime * 0.07 + aRand.x * 6.28);

  // Interpolate between radial explosion and deep-space flight
  vec3 finalPos = mix(explPos, dustPos, dm);

  vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  

  // ---------------------------------------------------------------------------
  // 4. PARTICLE SIZING
  // ---------------------------------------------------------------------------
  float sizeBase = uSize * (0.65 + 1.25 * aRand.y);
  sizeBase *= mix(1.0, 1.25, dm);
  gl_PointSize = sizeBase * uDpr * (280.0 / max(-mvPosition.z, 0.4));
  gl_PointSize = clamp(gl_PointSize, 3.5 * uDpr, 160.0 * uDpr);

  // ---------------------------------------------------------------------------
  // 5. BRIGHTNESS & OPACITY
  // ---------------------------------------------------------------------------
  float coreGlow = 1.0 - smoothstep(0.0, 0.34, p);
  float alpha = mix(0.40, 1.0, coreGlow * (0.55 + 0.45 * pulse));
  alpha = max(alpha, 0.25 + 0.65 * e1 * (1.0 - e2 * 0.35));
  alpha = mix(alpha, (0.10 + 0.6 * pow(aRand.y, 2.2)) * (0.5 + 0.9 * aRand.z), dm);

  // Distance fading in tunnel mode
  float depthFade = smoothstep(-span, -span * 0.72, mvPosition.z) * (1.0 - smoothstep(-6.0, 4.0, mvPosition.z));
  alpha *= mix(1.0, depthFade, dm);
  vAlpha = clamp(alpha, 0.0, 1.0);

  // Individual butterfly rotation & banking in flight
  vRot = aRand.w * 6.2831 + uTime * (aRand.z - 0.5) * 1.8;

  // ---------------------------------------------------------------------------
  // 6. SHIMMERING COLOR PALETTE (White/Silver with subtle Gold & Cyan highlights)
  // ---------------------------------------------------------------------------
  float warm = step(0.80, aRand.x);
  float blueGlow = step(0.70, aRand.y);
  vec3 silver = mix(vec3(0.88, 0.90, 0.95), vec3(1.0), aRand.y);
  vec3 gold = mix(silver, vec3(1.0, 0.90, 0.72), warm * 0.8);
  vec3 baseColor = mix(gold, vec3(0.70, 0.88, 1.0), blueGlow * 0.5);
  vec3 butterflyColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.85, 0.92, 1.0), aRand.w);
  vColor = mix(baseColor, butterflyColor, 0.7);
}
`;

export const PARTICLE_FRAG =  `
precision highp float;

uniform sampler2D uTex;
uniform float uAspect;

varying float vAlpha;
varying float vRot;
varying vec3 vColor;

void main() {
  // Point-sprite coordinates centered at (0, 0)
  vec2 uv = gl_PointCoord - 0.5;

  // Rotate sprite
  float c = cos(vRot);
  float s = sin(vRot);
  uv = mat2(c, -s, s, c) * uv;

  // Map to texture space with aspect ratio correction
  vec2 tuv = vec2(uv.x, uv.y / uAspect) * 1.05 + 0.5;
  float inside = step(0.0, tuv.x) * step(tuv.x, 1.0) * step(0.0, tuv.y) * step(tuv.y, 1.0);

  // Sample butterfly logo alpha
  vec4 texColor = texture2D(uTex, clamp(tuv, 0.0, 1.0));
  float texA = max(texColor.a, max(texColor.r, max(texColor.g, texColor.b))) * inside;

  if (texA < 0.01) discard;

  float finalAlpha = texA * vAlpha;
  gl_FragColor = vec4(vColor, finalAlpha);
}
`;

export const GLOW_VERT =  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const GLOW_FRAG =  `
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

export const RING_FRAG =  `
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
