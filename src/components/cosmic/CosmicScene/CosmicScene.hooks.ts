import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GLOW_VERT, GLOW_FRAG } from '../shaders';

/* ─── Star sprite texture ────────────────────────────────────────────── */
function createStarSprite(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.15, 'rgba(255,255,255,0.85)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.25)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/* ─── Galaxy params ──────────────────────────────────────────────────── */
interface GalaxyParams {
  armParticles: number;
  coreParticles: number;
  bgStars: number;
  arms: number;
  armSpread: number;
  radius: number;
  coreRadius: number;
  thickness: number;
  tiltAngle: number;
}

const DESKTOP_PARAMS: GalaxyParams = {
  armParticles: 65000,
  coreParticles: 55000,
  bgStars: 50000,
  arms: 2,
  armSpread: 0.75,
  radius: 8.0,
  coreRadius: 1.0,
  thickness: 0.22,
  tiltAngle: (15 * Math.PI) / 180,
};

const MOBILE_PARAMS: GalaxyParams = {
  armParticles: 25000,
  coreParticles: 25000,
  bgStars: 20000,
  arms: 2,
  armSpread: 0.75,
  radius: 8.0,
  coreRadius: 1.0,
  thickness: 0.22,
  tiltAngle: (15 * Math.PI) / 180,
};

/* ─── Generate galaxy geometry with scatter attributes ───────────────── */
function generateGalaxy(p: GalaxyParams) {
  const total = p.armParticles + p.coreParticles + p.bgStars;
  const positions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);
  // Scatter direction — random unit vector for explosion
  const dirs = new Float32Array(total * 3);
  // Random values per particle for staggering/variation
  const rands = new Float32Array(total * 4);

  let idx = 0;

  function gauss() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  // lumScale exists because the brightness curve below floors out at 0.3, which
  // is too bright to pack particles densely under additive blending — the core
  // would accumulate into a solid white blob. It lets a dense population be
  // dimmed per-particle so overlap blends into haze instead of blowing out.
  function addParticle(x: number, y: number, z: number, brightness: number, lumScale = 1.0) {
    positions[idx * 3] = x;
    positions[idx * 3 + 1] = y;
    positions[idx * 3 + 2] = z;

    // Monochrome color based on brightness
    const lum = (0.3 + brightness * 0.7) * lumScale;
    colors[idx * 3] = lum;
    colors[idx * 3 + 1] = lum;
    colors[idx * 3 + 2] = lum;

    // Random scatter direction (unit sphere)
    const u = Math.random() * 2 - 1;
    const th = Math.random() * Math.PI * 2;
    const sq = Math.sqrt(1 - u * u);
    const jitter = 0.6 + Math.random() * 0.8;
    dirs[idx * 3] = sq * Math.cos(th) * jitter;
    dirs[idx * 3 + 1] = sq * Math.sin(th) * (0.5 + Math.random() * 0.7);
    dirs[idx * 3 + 2] = u * jitter;

    // Random values for staggering
    rands[idx * 4] = Math.random();
    rands[idx * 4 + 1] = Math.random();
    rands[idx * 4 + 2] = Math.random();
    rands[idx * 4 + 3] = Math.random();

    idx++;
  }

  // ── Spiral arm particles ──
  for (let i = 0; i < p.armParticles; i++) {
    const armIdx = i % p.arms;
    const armAngle = (armIdx / p.arms) * Math.PI * 2;
    const r = Math.pow(Math.random(), 0.65) * p.radius;
    const spiralAngle = armAngle + Math.log(1 + r * 2.5) * 1.8;
    const spread = gauss() * p.armSpread * (0.15 + r / p.radius * 0.85);
    const angle = spiralAngle + spread;

    const x = Math.cos(angle) * r;
    const y = gauss() * p.thickness * (0.3 + 0.7 * (r / p.radius));
    const z = Math.sin(angle) * r;

    const distNorm = r / p.radius;
    const brightness = Math.max(0.05, 1.0 - distNorm * 0.8 + Math.random() * 0.15);
    addParticle(x, y, z, brightness);
  }

  // ── Core/bulge particles ──
  // Dense and dim: roughly 3x the population at ~1/3 the per-particle
  // luminance, which holds total core brightness about where it was while
  // closing the gaps that made the bulge read as separate dots.
  const CORE_LUM_SCALE = 0.32;
  for (let i = 0; i < p.coreParticles; i++) {
    // Slight outward bias vs a raw |gauss()|, which piles almost everything at
    // r≈0 where the glow billboard already covers it. Pushing particles into
    // the surrounding halo is what actually fills the visible gaps.
    const r = Math.pow(Math.abs(gauss()), 0.85) * p.coreRadius * 0.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.cos(phi) * 0.35;
    const z = r * Math.sin(phi) * Math.sin(theta);

    const brightness = 0.4 + Math.random() * 0.3;
    addParticle(x, y, z, brightness, CORE_LUM_SCALE);
  }

  // ── Background stars ──
  for (let i = 0; i < p.bgStars; i++) {
    const r = i < p.bgStars * 0.4
      ? 4 + Math.random() * 8
      : 12 + Math.random() * 43;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    const brightness = 0.03 + Math.random() * 0.18;
    addParticle(x, y, z, brightness);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aDir', new THREE.BufferAttribute(dirs, 3));
  geometry.setAttribute('aRand', new THREE.BufferAttribute(rands, 4));

  return geometry;
}

/* ─── Track whether intro has played this session ────────────────────── */
let globalHasPlayedIntro = false;

/* ─── Main hook ──────────────────────────────────────────────────────── */

export function useCosmicScene(hostRef: React.RefObject<HTMLDivElement | null>) {
  const sceneRef = useRef<{ cleanup: () => void } | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (sceneRef.current) {
      sceneRef.current.cleanup();
      sceneRef.current = null;
    }

    /* ── Renderer setup ── */
    const checkMobile = () => window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024);
    let isMobileDevice = checkMobile();
    const params = isMobileDevice ? MOBILE_PARAMS : DESKTOP_PARAMS;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 500);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobileDevice,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    host.appendChild(renderer.domElement);

    /* ── Post-processing ── */
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.3, 0.5, 0.82
    );
    if (!isMobileDevice) composer.addPass(bloomPass);

    /* ── Galaxy particles ── */
    const starSprite = createStarSprite();
    const galaxyGeometry = generateGalaxy(params);

    // Uniforms injected into PointsMaterial via onBeforeCompile
    const uProgress = { value: globalHasPlayedIntro ? 1.0 : 0.0 };
    const uTime = { value: 0.0 };

    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.025,
      sizeAttenuation: true,
      map: starSprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.75,
    });

    // Inject custom vertex shader for the explosion → scatter → formation animation
    galaxyMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uP = uProgress;
      shader.uniforms.uTime = uTime;

      // Declare attributes and uniforms
      shader.vertexShader = `
        attribute vec3 aDir;
        attribute vec4 aRand;
        uniform float uP;
        uniform float uTime;
        ${shader.vertexShader}
      `;

      // Replace vertex transform
      shader.vertexShader = shader.vertexShader.replace(
        `#include <begin_vertex>`,
        `
        vec3 transformed = vec3(position);
        float p = uP;

        // ─── BEAT 1: CHARGING SINGULARITY (p 0.00 → 0.18) ───
        // A tight seed that breathes, then implodes just before it blows.
        float pulse = 0.5 + 0.5 * sin(uTime * 5.0 + aRand.w * 6.2831);
        float implode = 1.0 - 0.6 * smoothstep(0.09, 0.18, p);
        float coreRadius = 0.17 * (0.20 + aRand.y) * (0.78 + 0.40 * pulse) * implode;

        // ─── BEAT 2/3: DETONATION → EXPANSION (p 0.18 → 0.62) ───
        // Per-particle ignition delay gives the shockwave a thickness instead
        // of every particle leaving on the exact same frame.
        float delay = aRand.x * 0.05;
        float tb = clamp((p - 0.18 - delay) / 0.44, 0.0, 1.0);

        // Ballistic burst: near-instant launch, then drag bleeds off the speed.
        float burst = 1.0 - exp(-4.5 * tb);

        // Wide velocity spread — a fast leading shell that clears the frame
        // plus slow stragglers that keep the screen populated behind it.
        float speedVar = 0.18 + 1.30 * pow(aRand.z, 1.5);
        float explosionRadius = coreRadius + burst * speedVar * 15.0;

        vec3 scatteredPos = aDir * explosionRadius;

        // Turbulence: held to ~10% of the blast radius so the debris curls
        // without losing the outward direction that reads as an explosion.
        float turb = burst * (0.6 + 0.8 * aRand.y);
        scatteredPos += turb * vec3(
          sin(uTime * 0.90 + aRand.w * 20.0),
          cos(uTime * 0.75 + aRand.x * 17.0),
          sin(uTime * 0.60 + aRand.y * 23.0)
        ) * 1.8;

        // ─── BEAT 4: ACCRETION INTO THE GALAXY (p 0.62 → 1.00) ───
        // Staggered by target radius: the core knits together first, the arms
        // sweep in behind it, and the background field settles in last.
        float tm = clamp((p - 0.62) / 0.38, 0.0, 1.0);
        float stagger = clamp(length(position) / 12.0, 0.0, 1.0);
        float m = clamp((tm - stagger * 0.38) / 0.62, 0.0, 1.0);
        m = m * m * (3.0 - 2.0 * m);

        vec3 infall = mix(scatteredPos, position, m);

        // Swirl the in-fall around the galactic axis so particles spiral home
        // instead of sliding along a straight line. Decays to zero on arrival.
        float swirl = (1.0 - m) * 2.4 * (0.55 + 0.55 * aRand.z);
        float cs = cos(swirl);
        float sn = sin(swirl);
        transformed = vec3(
          infall.x * cs - infall.z * sn,
          infall.y,
          infall.x * sn + infall.z * cs
        );
        `
      );

      // Ignition flash + thermal falloff
      shader.vertexShader = shader.vertexShader.replace(
        `#include <color_vertex>`,
        `
        #include <color_vertex>

        // A short white-out at the instant of detonation.
        float ignite = exp(-26.0 * abs(uP - 0.20));
        // Debris cools as it flies, then brightens back as the galaxy knits together.
        float cool = mix(1.0, 0.72, smoothstep(0.20, 0.42, uP))
          + 0.28 * smoothstep(0.62, 0.95, uP);
        vColor *= cool * (1.0 + 3.2 * ignite);
        `
      );

      // Adjust point size based on phase
      shader.vertexShader = shader.vertexShader.replace(
        `#include <fog_vertex>`,
        `
        #include <fog_vertex>

        // During the charge, show only a sparse subset of the seed so 130k
        // stacked sprites read as one dense glowing point instead of a
        // blown-out white disc. Everything ignites at detonation.
        float seedMask = step(aRand.y, 0.15);
        float ignited = smoothstep(0.17, 0.23, p);
        float visibility = max(seedMask * smoothstep(0.0, 0.06, p), ignited);

        // Sprites flare at the blast and cool back to their resting size.
        float flare = exp(-16.0 * abs(p - 0.21));
        float sizeBoost = 1.0 + 2.4 * (1.0 - smoothstep(0.20, 0.80, p)) + 3.0 * flare;
        gl_PointSize *= sizeBoost * visibility;
        `
      );
    };

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxyPoints.rotation.x = params.tiltAngle;
    galaxyPoints.position.y = -0.8; // Shift galaxy down to sit behind countdown, clearing the text
    scene.add(galaxyPoints);

    /* ── Core glow ──────────────────────────────────────────────────────
       Point sprites always resolve into individual dots at the centre, no
       matter how many are stacked. A continuous additive billboard is what
       reads as a star, so the particles become the haze around it rather
       than the light source itself. */
    const glowUniforms = {
      uIntensity: { value: 0.0 },
      uCore: { value: 1.0 },
      uSpike: { value: 0.0 },
    };
    const glowMaterial = new THREE.ShaderMaterial({
      vertexShader: GLOW_VERT,
      fragmentShader: GLOW_FRAG,
      uniforms: glowUniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const glowGeometry = new THREE.PlaneGeometry(1, 1);
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.position.copy(galaxyPoints.position);
    glowMesh.renderOrder = 2;
    scene.add(glowMesh);

    /* ── Camera ── */
    const cameraDistance = 8.5;
    const cameraHeight = 0.3;
    camera.position.set(0, cameraHeight, cameraDistance);
    camera.lookAt(0, -0.4, 0); // Look slightly down to keep it centered nicely

    /* ── Animation state ── */
    let autoProgress = globalHasPlayedIntro ? 1.0 : 0.0;
    let introComplete = globalHasPlayedIntro;
    let lastFrameTime = performance.now();
    let animId = 0;
    let lastUiFade = '';
    const root = document.documentElement;
    let targetSpinAngle = 0;
    let currentSpinAngle = 0;
    let ambientRotation = 0;
    let mouseX = 0;
    let mouseY = 0;
    let disposed = false;

    /* ── FOV helper ── */
    function updateCameraFov() {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.near = 0.1;
      camera.far = 500;
      if (aspect < 1.4) {
        const refFovRad = (55 * Math.PI) / 180;
        const refAspect = 1.4;
        const hFovRad = 2 * Math.atan(Math.tan(refFovRad / 2) * refAspect);
        const targetFovRad = 2 * Math.atan(Math.tan(hFovRad / 2) / aspect);
        camera.fov = Math.min(82, (targetFovRad * 180) / Math.PI);
      } else {
        camera.fov = 55;
      }
      camera.updateProjectionMatrix();
    }
    updateCameraFov();

    /* ── Events ── */
    const onResize = () => {
      isMobileDevice = checkMobile();
      updateCameraFov();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    const onScroll = () => {
      if (!introComplete) return;
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollFrac = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      targetSpinAngle = scrollFrac * Math.PI * 6;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      if (isMobileDevice) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    /* ─── Smoothstep helper ─── */
    function smoothstep(a: number, b: number, x: number) {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    }
    function bump(x: number, a: number, b: number) {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return Math.sin(t * Math.PI) ** 2 * (t > 0 && t < 1 ? 1 : 0);
    }
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    /* ─── Intro pacing ───────────────────────────────────────────────────
       Progress advances at different rates per beat so the sequence has
       rhythm: a slow charge, a held breath, a snap detonation, a drifting
       expansion, and a long dramatic accretion. */
    function introSpeed(x: number) {
      if (x < 0.14) return 0.20;  // charge
      if (x < 0.18) return 0.09;  // anticipation — the inhale before the bang
      if (x < 0.34) return 0.62;  // detonation
      if (x < 0.62) return 0.30;  // expansion
      return lerp(0.22, 0.12, (x - 0.62) / 0.38); // accretion, decelerating
    }

    /* The core glow has three overlapping lifetimes: the star seed that
       carries the charge, the flash that consumes it at detonation, and the
       galactic core that reassembles at the end. Summing them means each
       hands off to the next without any explicit phase branching. */
    function glowState(x: number, t: number) {
      const breath = 0.5 + 0.5 * Math.sin(t * 0.7);

      const seed = 1.0 - smoothstep(0.16, 0.26, x);
      // Narrow window: a wide bump reads as a long white wash that hides the
      // debris entirely rather than as a detonation.
      const flash = bump(x, 0.17, 0.32);
      const galaxy = smoothstep(0.66, 1.0, x);

      // The quad carries the spikes, so it stays wider than the bright core.
      const seedScale = lerp(0.7, 1.6, smoothstep(0.0, 0.16, x));

      return {
        // Resting core is kept deliberately modest: it sits directly behind the
        // white hero copy, so a hotter or wider bulge costs text legibility.
        scale: seedScale * seed + 3.6 * flash + (2.5 + 0.12 * breath) * galaxy,
        intensity:
          0.95 * smoothstep(0.0, 0.08, x) * seed +
          1.6 * flash +
          (0.62 + 0.06 * breath) * galaxy,
        // A star has spikes; a galactic bulge does not.
        spike: seed * 0.9 + flash * 0.5,
      };
    }

    /* Camera pulls tight on the seed, is shoved back by the blast, then
       settles into the resting frame as the galaxy forms. */
    function introCameraDistance(x: number) {
      const shoved = lerp(5.6, 10.0, smoothstep(0.17, 0.36, x));
      return lerp(shoved, cameraDistance, smoothstep(0.5, 1.0, x));
    }

    /* ── Render loop ── */
    function renderFrame() {
      if (disposed) return;
      const now = performance.now();
      const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
      lastFrameTime = now;

      uTime.value += dt;

      // ── Auto-progress: 0 → 1 over ~4.7 seconds ──
      if (!introComplete) {
        autoProgress = Math.min(1.0, autoProgress + dt * introSpeed(autoProgress));
        uProgress.value = autoProgress;

        if (autoProgress >= 1.0) {
          introComplete = true;
          globalHasPlayedIntro = true;
          onScroll(); // sync scroll position
        }
      }

      const p = uProgress.value;

      // ── Detonation flash: bloom and exposure spike with the blast ──
      if (!introComplete) {
        const flash = bump(p, 0.15, 0.36);
        bloomPass.strength = 0.3 + 1.9 * flash;
        renderer.toneMappingExposure = 0.9 + 0.5 * bump(p, 0.15, 0.32);
      }

      // ── UI fade: show after galaxy is mostly formed ──
      const uiFade = smoothstep(0.78, 0.97, p).toFixed(4);
      if (uiFade !== lastUiFade) {
        root.style.setProperty('--ui-fade', uiFade);
        lastUiFade = uiFade;
      }

      // ── Scroll-driven spin (only after intro) ──
      if (introComplete) {
        const spinDiff = targetSpinAngle - currentSpinAngle;
        currentSpinAngle += spinDiff * Math.min(dt * 4.0, 1.0);
      }
      ambientRotation += dt * 0.08;

      galaxyPoints.rotation.x = params.tiltAngle;
      galaxyPoints.rotation.y = currentSpinAngle + ambientRotation;

      // ── Core glow: size and brightness follow the phase ──
      const glow = glowState(p, uTime.value);
      glowMesh.scale.set(glow.scale, glow.scale, 1);
      glowUniforms.uIntensity.value = glow.intensity;
      glowUniforms.uSpike.value = glow.spike;

      // ── Camera with parallax, intro dolly and blast shake ──
      const px = isMobileDevice ? 0 : mouseX * 0.15;
      const py = isMobileDevice ? 0 : -mouseY * 0.12;

      let dolly = cameraDistance;
      let shakeX = 0;
      let shakeY = 0;
      if (!introComplete) {
        dolly = introCameraDistance(p);
        // Sharp jolt on detonation, damped out within a few tenths of progress.
        const jolt = p < 0.18 ? 0 : 0.22 * Math.exp(-16.0 * (p - 0.18));
        shakeX = Math.sin(uTime.value * 47.0) * jolt;
        shakeY = Math.cos(uTime.value * 39.0) * jolt;
      }

      camera.position.set(px + shakeX, cameraHeight + py + shakeY, dolly);
      camera.lookAt(0, -0.4, 0);

      // Billboard the glow after the camera has settled this frame, otherwise
      // it inherits last frame's orientation and lags during the blast shake.
      glowMesh.quaternion.copy(camera.quaternion);

      // ── Render ──
      if (isMobileDevice) {
        renderer.render(scene, camera);
      } else {
        composer.render();
      }

      animId = requestAnimationFrame(renderFrame);
    }

    renderFrame();

    /* ── Cleanup ── */
    const cleanup = () => {
      disposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();

      starSprite.dispose();
      if (host.contains(renderer.domElement)) {
        host.removeChild(renderer.domElement);
      }
    };

    sceneRef.current = { cleanup };
    return cleanup;
  }, [hostRef]);
}
