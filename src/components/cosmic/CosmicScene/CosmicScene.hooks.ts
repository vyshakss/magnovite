import { useEffect } from "react";
import * as THREE from "three";
import { ASSETS } from "./CosmicScene.data";
import { PARTICLE_FRAG, PARTICLE_VERT, GLOW_FRAG, GLOW_VERT, RING_FRAG } from "../shaders";

/**
 * Sample opaque pixels from the butterfly logo to create formation target positions.
 * Returns a Float32Array of (x, y, z) positions in world space.
 */
/**
 * Compute the world-space width for the butterfly formation so it
 * always fits fully inside the camera frustum at the given depth,
 * while preserving the image's aspect ratio.
 *
 * Camera: FOV=58°, target depth = FORMATION_Z = 60 units away.
 * The image is landscape (1536×1024 → imageAspect = 1.5).
 * We fit the image to 88% of the smaller of visible-width or
 * height-derived width, so it never clips on any screen size.
 */
const CAMERA_FOV_DEG = 58;
const FORMATION_DEPTH = 60; // |z| of the formation plane
const IMAGE_ASPECT = 1536 / 1024; // width / height of butterfly-pattern.png
const FILL = 0.88; // fraction of frustum to occupy

function responsiveWorldWidth(): number {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const halfFovY = Math.tan((CAMERA_FOV_DEG / 2) * (Math.PI / 180));
  // Visible half-extents at the formation plane
  const visibleHalfH = halfFovY * FORMATION_DEPTH;
  const visibleHalfW = visibleHalfH * (vw / vh);
  const visibleFullW = visibleHalfW * 2;
  const visibleFullH = visibleHalfH * 2;

  // Max width so image fits horizontally
  const maxByW = visibleFullW * FILL;
  // Max width so image fits vertically (height = worldWidth / IMAGE_ASPECT)
  const maxByH = visibleFullH * FILL * IMAGE_ASPECT;

  return Math.min(maxByW, maxByH);
}

function sampleLogoTargets(
  image: HTMLImageElement,
  count: number,
  worldWidth: number,
  worldZ: number,
): Float32Array {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(image, 0, 0, image.width, image.height);
  const data = ctx.getImageData(0, 0, image.width, image.height).data;

  // Collect all opaque pixel coordinates
  const opaquePixels: [number, number][] = [];
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const alpha = data[(y * image.width + x) * 4 + 3];
      if (alpha > 80) opaquePixels.push([x, y]);
    }
  }

  const targets = new Float32Array(count * 3);
  const aspect = image.height / image.width;
  const halfW = worldWidth / 2;
  const halfH = halfW * aspect;

  if (opaquePixels.length === 0) {
    // Fallback: no opaque pixels found, fill with sentinel
    for (let i = 0; i < count; i++) {
      targets[i * 3] = 0;
      targets[i * 3 + 1] = 0;
      targets[i * 3 + 2] = -9999;
    }
    return targets;
  }

  for (let i = 0; i < count; i++) {
    // Pick a random opaque pixel and map to world coords
    const px = opaquePixels[Math.floor(Math.random() * opaquePixels.length)]!;
    // Add sub-pixel jitter for organic feel
    const jx = (Math.random() - 0.5) * 1.2;
    const jy = (Math.random() - 0.5) * 1.2;
    const nx = (px[0] + jx) / image.width; // 0..1
    const ny = (px[1] + jy) / image.height; // 0..1
    targets[i * 3] = (nx - 0.5) * worldWidth; // centered X
    targets[i * 3 + 1] = -(ny - 0.5) * worldWidth * aspect; // centered Y (flip)
    targets[i * 3 + 2] = worldZ + (Math.random() - 0.5) * 2; // slight Z scatter
  }

  return targets;
}

export function useCosmicScene(hostRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    function qualityTier() {
      if (typeof navigator === "undefined") return 1;
      const mobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
      if (mobile) return 0;
      return 1;
    }

    const tier = qualityTier();
    const COUNT = tier === 0 ? 4000 : 7000;
    const dpr = Math.min(window.devicePixelRatio || 1, tier === 0 ? 1.5 : 2.0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / window.innerHeight,
      0.1,
      2000,
    );
    camera.position.set(0, 0, 0);

    // ---- particles ---------------------------------------------------------
    const positions = new Float32Array(COUNT * 3);
    const dirs = new Float32Array(COUNT * 3);
    const rands = new Float32Array(COUNT * 4);
    const dust = new Float32Array(COUNT * 3);

    // Placeholder target positions — will be filled once logo image loads
    const targetPositions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      targetPositions[i * 3] = 0;
      targetPositions[i * 3 + 1] = 0;
      targetPositions[i * 3 + 2] = -9999; // sentinel: "no target"
    }

    const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
    const clusters: [number, number, number][] = [];
    for (let i = 0; i < 90; i++) {
      const rr = Math.pow(Math.random(), 0.7) * 78;
      const a = Math.random() * Math.PI * 2;
      clusters.push([Math.cos(a) * rr, Math.sin(a) * rr * 0.7, Math.random() * 420]);
    }

    for (let i = 0; i < COUNT; i++) {
      const u = Math.random() * 2 - 1;
      const th = Math.random() * Math.PI * 2;
      const sq = Math.sqrt(1 - u * u);
      const jitter = 0.55 + Math.random() * 0.75;
      dirs[i * 3] = sq * Math.cos(th) * jitter;
      dirs[i * 3 + 1] = sq * Math.sin(th) * (0.65 + Math.random() * 0.7);
      dirs[i * 3 + 2] = u * jitter;

      rands[i * 4] = Math.random();
      rands[i * 4 + 1] = Math.random();
      rands[i * 4 + 2] = Math.random();
      rands[i * 4 + 3] = Math.random();

      const c = clusters[(Math.random() * clusters.length) | 0]!;
      const spread = 6 + Math.pow(Math.random(), 2) * 34;
      dust[i * 3] = c[0] + gauss() * spread;
      dust[i * 3 + 1] = c[1] + gauss() * spread * 0.7;
      dust[i * 3 + 2] = (c[2] + gauss() * 55 + 420) % 420;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aDir", new THREE.BufferAttribute(dirs, 3));
    geo.setAttribute("aRand", new THREE.BufferAttribute(rands, 4));
    geo.setAttribute("aDust", new THREE.BufferAttribute(dust, 3));
    const targetAttr = new THREE.BufferAttribute(targetPositions, 3);
    geo.setAttribute("aTarget", targetAttr);
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);

    const tex = new THREE.TextureLoader().load(ASSETS.butterfly, (t) => {
      if (t.image && t.image.width > 0) {
        uniforms.uAspect.value = t.image.height / t.image.width;
      }
    });

    // Load the starry reference image to use as the formation map
    let patternImage: HTMLImageElement | null = null;
    const resampleTargets = () => {
      if (!patternImage) return;
      const worldWidth = responsiveWorldWidth();
      const sampled = sampleLogoTargets(patternImage, COUNT, worldWidth, -60);
      targetPositions.set(sampled);
      targetAttr.needsUpdate = true;
    };
    const img = new Image();
    img.src = "/images/butterfly-pattern.png";
    img.onload = () => {
      patternImage = img;
      resampleTargets();
    };
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;

    const uniforms = {
      uTime: { value: 0 },
      uP: { value: 0 },
      uTravel: { value: 0 },
      uSize: { value: tier === 0 ? 0.085 : 0.068 },
      uDpr: { value: dpr },
      uTex: { value: tex },
      uAspect: { value: 813 / 1187 },
      uFormation: { value: 0 },
      uScrollVel: { value: 0 },
      uViewScale: { value: Math.min(window.innerWidth, window.innerHeight) / 600 },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(geo, mat));

    // ---- central glow + shockwave -----------------------------------------
    const glowU = {
      uIntensity: { value: 0 },
      uCore: { value: 1 },
    };
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        uniforms: glowU,
        vertexShader: GLOW_VERT,
        fragmentShader: GLOW_FRAG,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    glow.position.z = -24;
    scene.add(glow);

    const ringU = {
      uProgress: { value: 0 },
      uIntensity: { value: 0 },
    };
    const ring = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        uniforms: ringU,
        vertexShader: GLOW_VERT,
        fragmentShader: RING_FRAG,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    ring.position.z = -24;
    scene.add(ring);

    // ---- scroll / timeline -------------------------------------------------
    const root = document.documentElement;
    let auto = 0;
    let progress = 0;
    let travel = 0;
    let smoothScroll = 0;
    let raf = 0;
    let last = performance.now();
    let running = true;

    // Formation control
    let formationTarget = 0;
    let formationCurrent = 0;

    // Scroll velocity tracking
    let lastScrollY = 0;
    let scrollVelocity = 0;
    let smoothScrollVel = 0;

    // Cache opening length — recalculated only on resize, not every frame
    let cachedOpeningLen = 0;
    const recalcOpeningLength = () => {
      const el = document.querySelector("[data-cinematic-scroll]") as HTMLElement | null;
      cachedOpeningLen = el
        ? Math.max(1, el.offsetHeight - window.innerHeight)
        : Math.max(1, window.innerHeight * 2.8);
    };
    recalcOpeningLength();

    // Debounced resize — avoid hundreds of setSize calls during drag-resize
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        recalcOpeningLength();
        // Responsive particle scale
        uniforms.uViewScale.value = Math.min(window.innerWidth, window.innerHeight) / 600;
        // Resample formation so wings fit the new viewport
        resampleTargets();
      }, 100);
    };
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      last = performance.now();
      if (running) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVisibility);

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // Track last CSS variable values to skip unnecessary style writes
    let lastCine = '';
    let lastFlash = '';
    let lastReveal = '';
    let lastChrome = '';

    function smoothstep(a: number, b: number, x: number) {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    }

    function bump(x: number, a: number, b: number) {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return Math.sin(t * Math.PI) ** 2 * (t > 0 && t < 1 ? 1 : 0);
    }

    function tick(now: number) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      // Auto-play opening animation sequence to completion
      auto = Math.min(1.0, auto + dt / 10.0);

      const scrolled = window.scrollY;
      const scrollP = Math.min(1, Math.max(0, scrolled / cachedOpeningLen));
      const target = Math.max(auto, scrollP);

      progress += (target - progress) * Math.min(1, dt * 4.5);
      smoothScroll += (scrolled - smoothScroll) * Math.min(1, dt * 3.2);
      travel = smoothScroll / window.innerHeight;

      // --- Scroll velocity tracking ---
      scrollVelocity = Math.abs(scrolled - lastScrollY) / Math.max(dt, 0.001);
      lastScrollY = scrolled;
      // Normalise: ~500px/s = full disruption
      const rawVel = Math.min(1, scrollVelocity / 500);
      // Smooth it: fast attack, slow decay
      if (rawVel > smoothScrollVel) {
        smoothScrollVel += (rawVel - smoothScrollVel) * Math.min(1, dt * 12);
      } else {
        smoothScrollVel += (rawVel - smoothScrollVel) * Math.min(1, dt * 4.0); // Recover faster
      }

      // --- Formation control ---
      // Once the opening cinematic is complete (deep mode), start formation
      const dm = smoothstep(0.8, 1.0, progress);
      // Formation engages when scroll is slow and we're in deep mode
      formationTarget = dm * (1 - Math.min(1, smoothScrollVel * 0.4)); // Scatter less aggressively
      // Smooth lerp: slow build-up (2s), faster scatter
      const formRate = formationTarget > formationCurrent ? dt * 1.5 : dt * 3.0; // Build up faster
      formationCurrent += (formationTarget - formationCurrent) * Math.min(1, formRate);

      uniforms.uTime.value += dt;
      uniforms.uP.value = progress;
      uniforms.uTravel.value = travel;
      uniforms.uFormation.value = formationCurrent;
      uniforms.uScrollVel.value = smoothScrollVel;

      // Pulsar tension + explosion flashes
      const pulse = 0.5 + 0.5 * Math.sin(uniforms.uTime.value * 2.6);
      const preBlast = 1 - smoothstep(0.28, 0.36, progress);
      const blast1 = bump(progress, 0.3, 0.42);
      const blast2 = bump(progress, 0.56, 0.68);

      glowU.uIntensity.value =
        preBlast * (0.45 + 0.6 * pulse + 1.8 * smoothstep(0.05, 0.3, progress)) +
        bump(progress, 0.32, 0.4) * 3.0 +
        bump(progress, 0.58, 0.66) * 1.8;
      glowU.uCore.value = preBlast * 1.4 + blast1 * 2.2 + blast2 * 1.2;

      // Dim the central glow during the wordmark reveal window so text stays readable
      const revealDim = 1 - bump(progress, 0.38, 0.56) * 0.7;
      glowU.uIntensity.value *= revealDim;
      glowU.uCore.value *= revealDim;

      const glowScale = 12 + 40 * smoothstep(0.1, 0.34, progress) + 90 * blast1;
      glow.scale.setScalar(glowScale);

      const ringP = Math.max(smoothstep(0.3, 0.56, progress), smoothstep(0.56, 0.84, progress));
      ringU.uProgress.value = ringP;
      ringU.uIntensity.value = (blast1 * 2.2 + blast2 * 1.6) * (1 - smoothstep(0.9, 1.0, progress));
      ring.scale.setScalar(60 + 320 * ringP);

      const fade = 1 - smoothstep(0.82, 0.98, progress);
      glow.visible = glowU.uIntensity.value * fade > 0.002;
      glowU.uIntensity.value *= fade;

      // Camera: settles then travels forward through the cloud
      pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 2.0);
      pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 2.0);
      camera.position.x = pointer.x * 1.6 * dm + Math.sin(travel * 0.35) * 3.2 * dm;
      camera.position.y = -pointer.y * 1.1 * dm + Math.cos(travel * 0.27) * 2.4 * dm;
      camera.position.z = 6 * (1 - dm);
      camera.rotation.z = Math.sin(travel * 0.18) * 0.02;
      camera.lookAt(camera.position.x * 0.4, camera.position.y * 0.4, -60);

      // Expose timeline to DOM overlays — only write when value actually changed
      const cineV = progress.toFixed(4);
      const flashV = (bump(progress, 0.31, 0.39) * 0.8 + bump(progress, 0.575, 0.655) * 0.4).toFixed(4);
      const revealV = (smoothstep(0.39, 0.45, progress) * (1 - smoothstep(0.55, 0.6, progress))).toFixed(4);
      const chromeV = smoothstep(0.7, 0.88, progress).toFixed(4);
      if (cineV !== lastCine) { root.style.setProperty("--cine", cineV); lastCine = cineV; }
      if (flashV !== lastFlash) { root.style.setProperty("--flash", flashV); lastFlash = flashV; }
      if (revealV !== lastReveal) { root.style.setProperty("--reveal", revealV); lastReveal = revealV; }
      if (chromeV !== lastChrome) { root.style.setProperty("--chrome", chromeV); lastChrome = chromeV; }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      geo.dispose();
      mat.dispose();
      tex.dispose();
      renderer.dispose();
      if (host.contains(renderer.domElement)) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [hostRef]);
}
