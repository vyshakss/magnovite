import { useEffect } from "react";
import * as THREE from "three";
import { ASSETS } from "./CosmicScene.data";
import { PARTICLE_FRAG, PARTICLE_VERT, GLOW_FRAG, GLOW_VERT, RING_FRAG } from "../shaders";

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
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);

    const tex = new THREE.TextureLoader().load(ASSETS.butterfly, (t) => {
      if (t.image && t.image.width > 0) {
        uniforms.uAspect.value = t.image.height / t.image.width;
      }
    });
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;

    const uniforms: Record<string, THREE.IUniform> = {
      uTime: { value: 0 },
      uP: { value: 0 },
      uTravel: { value: 0 },
      uSize: { value: tier === 0 ? 0.085 : 0.068 },
      uDpr: { value: dpr },
      uTex: { value: tex },
      uAspect: { value: 813 / 1187 },
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
    const glowU: Record<string, THREE.IUniform> = {
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

    const ringU: Record<string, THREE.IUniform> = {
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

      uniforms.uTime.value += dt;
      uniforms.uP.value = progress;
      uniforms.uTravel.value = travel;

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
      const dm = smoothstep(0.8, 1.0, progress);
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
