import { useEffect, useRef } from "react";
import * as THREE from "three";
import butterflyAsset from "@/assets/butterfly.png.asset.json";
import {
  PARTICLE_FRAG,
  PARTICLE_VERT,
  GLOW_FRAG,
  GLOW_VERT,
  RING_FRAG,
} from "./shaders";

/**
 * One continuous WebGL universe:
 * pulsar -> explosion -> MAGNOVITE 2026 -> second explosion ->
 * butterfly swarm -> cosmic dust -> permanent scroll-travelled environment.
 *
 * The whole timeline is driven by `progress` (0..1) which is the max of a gentle
 * auto-play timeline and the user's scroll position, so the opening plays even
 * without scrolling but can be pushed forward by the wheel.
 */

function qualityTier() {
  if (typeof navigator === "undefined") return 1;
  const cores = navigator.hardwareConcurrency ?? 4;
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (mobile) return 0;
  if (cores >= 8 && window.devicePixelRatio <= 2) return 2;
  return 1;
}

export function CosmicScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const tier = qualityTier();
    const COUNT = [45000, 130000, 240000][tier] ?? 130000;
    const dpr = Math.min(window.devicePixelRatio || 1, tier === 0 ? 1.5 : 2);

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

    for (let i = 0; i < COUNT; i++) {
      // filamentary (non-uniform) direction so the blast looks astronomical
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

      // dust volume: a wide, deep tunnel of cosmic matter
      const rr = Math.pow(Math.random(), 0.55) * 95;
      const a = Math.random() * Math.PI * 2;
      dust[i * 3] = Math.cos(a) * rr;
      dust[i * 3 + 1] = Math.sin(a) * rr * 0.72;
      dust[i * 3 + 2] = Math.random() * 420;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aDir", new THREE.BufferAttribute(dirs, 3));
    geo.setAttribute("aRand", new THREE.BufferAttribute(rands, 4));
    geo.setAttribute("aDust", new THREE.BufferAttribute(dust, 3));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);

    const tex = new THREE.TextureLoader().load(butterflyAsset.url);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;

    const uniforms = {
      uTime: { value: 0 },
      uP: { value: 0 },
      uTravel: { value: 0 },
      uSize: { value: tier === 0 ? 0.09 : 0.07 },
      uDpr: { value: dpr },
      uTex: { value: tex },
      uAspect: { value: 1896 / 1352 },
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
    const glowU = { uIntensity: { value: 0 }, uCore: { value: 1 } };
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

    const ringU = { uProgress: { value: 0 }, uIntensity: { value: 0 } };
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

    const openingLength = () =>
      Math.max(1, (root.querySelector("[data-cinematic-scroll]") as HTMLElement | null)?.offsetHeight ??
        window.innerHeight * 3.2) - window.innerHeight;

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
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
    window.addEventListener("pointermove", onMove);

    function tick(now: number) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      // gentle auto-play so the opening is felt without frantic scrolling
      auto = Math.min(0.86, auto + dt / 13);

      const scrolled = window.scrollY;
      const scrollP = Math.min(1, Math.max(0, scrolled / openingLength()));
      const target = Math.max(auto, scrollP);
      progress += (target - progress) * Math.min(1, dt * 4.5);

      // camera travel keeps accumulating with scroll depth
      smoothScroll += (scrolled - smoothScroll) * Math.min(1, dt * 3.2);
      travel = smoothScroll / window.innerHeight;

      uniforms.uTime.value += dt;
      uniforms.uP.value = progress;
      uniforms.uTravel.value = travel;

      // pulsar tension + explosion flashes
      const pulse = 0.5 + 0.5 * Math.sin(uniforms.uTime.value * 2.6);
      const preBlast = 1 - smoothstep(0.28, 0.36, progress);
      const blast1 = bump(progress, 0.3, 0.42);
      const blast2 = bump(progress, 0.56, 0.68);
      glowU.uIntensity.value =
        preBlast * (0.5 + 0.7 * pulse + 2.6 * smoothstep(0.05, 0.3, progress)) +
        blast1 * 5.5 +
        blast2 * 3.2;
      glowU.uCore.value = preBlast * 1.4 + blast1 * 2.2 + blast2 * 1.2;
      const glowScale = 14 + 60 * smoothstep(0.1, 0.34, progress) + 120 * blast1;
      glow.scale.setScalar(glowScale);

      const ringP = Math.max(
        smoothstep(0.3, 0.56, progress),
        smoothstep(0.56, 0.84, progress),
      );
      ringU.uProgress.value = ringP;
      ringU.uIntensity.value =
        (blast1 * 2.2 + blast2 * 1.6) * (1 - smoothstep(0.9, 1, progress));
      ring.scale.setScalar(60 + 320 * ringP);

      const fade = 1 - smoothstep(0.82, 0.98, progress);
      glow.visible = glowU.uIntensity.value * fade > 0.002;
      glowU.uIntensity.value *= fade;

      // camera: settles then travels forward through the cloud
      pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 2);
      pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 2);
      const dm = smoothstep(0.8, 1, progress);
      camera.position.x =
        pointer.x * 1.6 * dm + Math.sin(travel * 0.35) * 3.2 * dm;
      camera.position.y =
        -pointer.y * 1.1 * dm + Math.cos(travel * 0.27) * 2.4 * dm;
      camera.position.z = 6 * (1 - dm);
      camera.rotation.z = Math.sin(travel * 0.18) * 0.02;
      camera.lookAt(camera.position.x * 0.4, camera.position.y * 0.4, -60);

      // expose timeline to the DOM overlays (header, wordmark, flash)
      root.style.setProperty("--cine", progress.toFixed(4));
      root.style.setProperty(
        "--flash",
        (blast1 * 0.95 + blast2 * 0.5).toFixed(4),
      );
      root.style.setProperty(
        "--reveal",
        (
          smoothstep(0.4, 0.47, progress) * (1 - smoothstep(0.56, 0.62, progress))
        ).toFixed(4),
      );
      root.style.setProperty(
        "--chrome",
        smoothstep(0.78, 0.92, progress).toFixed(4),
      );

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
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function bump(x: number, a: number, b: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return Math.sin(t * Math.PI) ** 2 * (t > 0 && t < 1 ? 1 : 0);
}
