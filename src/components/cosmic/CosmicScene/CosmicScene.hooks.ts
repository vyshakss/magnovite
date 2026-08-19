import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GLOW_VERT, GLOW_FRAG, RING_FRAG } from "../shaders";

function createStarSprite(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const half = size / 2;

  ctx.beginPath();
  ctx.arc(half, half, half - 1, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

const sections = [
  // 0: HERO - Wide orbital start
  { angle: 0, radius: 6.5, height: 1.2 },
  // 1: INTRODUCING - Sweep inward
  { angle: Math.PI * 1.0, radius: 4.2, height: 0.5 },
  // 2: MAGNOVITE - Zooms close into galaxy core
  { angle: Math.PI * 1.8, radius: 2.2, height: 0.15 },
  // 3: VIDEO - Scroll-controlled steps start here
  { angle: Math.PI * 2.5, radius: 2.6, height: -0.2 },
  // 4: CHRIS
  { angle: Math.PI * 3.2, radius: 2.8, height: 0.4 },
  // 5: SPEAKER
  { angle: Math.PI * 3.9, radius: 2.5, height: 0.6 },
  // 6: EXITED
  { angle: Math.PI * 4.6, radius: 2.3, height: -0.3 },
  // 7: COUNTDOWN
  { angle: Math.PI * 5.2, radius: 2.0, height: 0.1 }
];

function smootherStep(t: number): number {
  t = Math.max(0, Math.min(1, t));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

let globalHasPlayedExplosion = false;

export function useCosmicScene(hostRef: React.RefObject<HTMLDivElement | null>) {
  const mountRef = useRef<boolean>(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || mountRef.current) return;
    mountRef.current = true;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040404);
    scene.fog = new THREE.FogExp2(0x060606, 0.0075);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const checkMobile = () => window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024);
    let isMobileDevice = checkMobile();

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobileDevice,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.65;

    host.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.14,
      0.35,
      0.85
    );
    if (!isMobileDevice) {
      composer.addPass(bloomPass);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.22);
    scene.add(ambientLight);

    const starSprite = createStarSprite();
    let baseStarSize = 0.012;
    let activePointsMat: THREE.PointsMaterial | null = null;
    let activeAmbientGlowMat: THREE.PointsMaterial | null = null;

    let progressUniform = { value: 0.0 };
    let timeUniform = { value: 0.0 };

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
      })
    );
    glow.position.set(0, 0, 0);
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
      })
    );
    ring.position.set(0, 0, 0);
    scene.add(ring);

    let isModelLoaded = false;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/models/hero.glb', (gltf) => {
      const heroModel = gltf.scene;

      const box = new THREE.Box3().setFromObject(heroModel);
      const worldCenter = box.getCenter(new THREE.Vector3());
      heroModel.position.sub(worldCenter);

      const sphere = box.getBoundingSphere(new THREE.Sphere());
      const clusterRadius = sphere.radius;
      baseStarSize = Math.max(clusterRadius * 0.0018, 0.012);

      heroModel.traverse((child) => {
        if (child instanceof THREE.Points) {
          const posAttr = child.geometry.attributes.position;
          const colorAttr = child.geometry.attributes.color;

          if (posAttr && colorAttr) {
            const count = posAttr.count;
            const tempColor = new THREE.Color();
            const hsl = { h: 0, s: 0, l: 0 };
            
            const dirs = new Float32Array(count * 3);
            const rands = new Float32Array(count * 4);

            for (let i = 0; i < count; i++) {
              const x = posAttr.getX(i);
              const y = posAttr.getY(i);
              const z = posAttr.getZ(i);
              const dist = Math.sqrt(x * x + y * y + z * z);
              
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

              tempColor.setRGB(colorAttr.getX(i), colorAttr.getY(i), colorAttr.getZ(i));
              tempColor.getHSL(hsl);
              hsl.s = Math.min(hsl.s * 1.1, 1.0);
              tempColor.setHSL(hsl.h, hsl.s, hsl.l);

              if (dist > 12) {
                const fade = Math.max(1.0 - (dist - 12) / 12.0, 0.12);
                tempColor.r *= fade;
                tempColor.g *= fade;
                tempColor.b *= fade;
              }

              colorAttr.setXYZ(i, tempColor.r, tempColor.g, tempColor.b);
            }
            colorAttr.needsUpdate = true;
            child.geometry.setAttribute('aDir', new THREE.BufferAttribute(dirs, 3));
            child.geometry.setAttribute('aRand', new THREE.BufferAttribute(rands, 4));
          }

          const mat = child.material as THREE.PointsMaterial;
          activePointsMat = mat;

          mat.color = new THREE.Color(0xffffff);
          mat.vertexColors = true;
          mat.map = starSprite;
          mat.size = baseStarSize;
          mat.sizeAttenuation = true;
          mat.transparent = true;
          mat.depthWrite = false;
          mat.blending = THREE.AdditiveBlending;
          mat.opacity = 0.85;
          mat.needsUpdate = true;
          
          child.geometry.computeBoundingSphere();
          const localCenter = child.geometry.boundingSphere!.center;

          mat.onBeforeCompile = (shader) => {
            shader.uniforms.uP = progressUniform;
            shader.uniforms.uTime = timeUniform;
            shader.uniforms.uCenter = { value: localCenter };
            shader.vertexShader = `
              attribute vec3 aDir;
              attribute vec4 aRand;
              uniform float uP;
              uniform float uTime;
              uniform vec3 uCenter;
              ${shader.vertexShader}
            `.replace(
              `#include <begin_vertex>`,
              `
              vec3 transformed = vec3(position);
              
              float p = uP;
              
              // 1. DENSE PULSAR CORE
              float pulse = 0.5 + 0.5 * sin(uTime * 2.6 + aRand.w * 6.2831);
              float tension = smoothstep(0.05, 0.20, p);
              float coreRadius = 0.10 * (0.25 + aRand.y) * (1.0 + 0.35 * pulse + 1.6 * tension);
              
              // 2. STELLAR EXPLOSION
              float e1 = pow(smoothstep(0.20, 0.40, p), 0.55);
              float e2 = pow(smoothstep(0.40, 0.60, p), 0.65);
              float explosionRadius = coreRadius
                + e1 * (2.5 + 8.0 * aRand.x)
                + e2 * (16.0 + 55.0 * aRand.z);
                
              // The GLTF model is scaled down by ~0.01 internally.
              // To keep particles densely visible on screen without flying too far out,
              // we scale the local explosion radius by ~12x.
              explosionRadius *= 12.0;
                
              vec3 explPos = uCenter + aDir * explosionRadius;
              
              // Organic drift while scattered
              float flap = sin(uTime * 14.0 + aRand.w * 18.0);
              float flutterFactor = 0.75 * e2 + 0.25 * e1;
              explPos += flutterFactor * vec3(
                sin(uTime * 1.8 + aRand.w * 12.0) * 8.0 + flap * 2.0,
                cos(uTime * 1.5 + aRand.x * 11.0) * 8.0 + flap * 2.0,
                sin(uTime * 1.2 + aRand.y * 9.0) * 6.0
              ) * 4.0;
              
              // 3. MORPH INTO GALAXY (starts later, so particles hang in the air scattered)
              float morph = smoothstep(0.75, 1.0, p);
              float morphStagger = clamp((morph - (aRand.x * 0.2)) * 1.2, 0.0, 1.0);
              
              transformed = mix(explPos, position, smoothstep(0.0, 1.0, morphStagger));
              `
            ).replace(
              `#include <fog_vertex>`,
              `
              #include <fog_vertex>
              
              // Hide particles completely during the initial pulsing core phase (p < 0.2)
              // so they don't form a glitchy aliased ball.
              float visibility = smoothstep(0.15, 0.25, p);
              
              // Slightly scale up particles during the blast and scatter phase
              // so they are highly visible as they fly inward.
              float blastScale = mix(3.0, 1.0, smoothstep(0.85, 1.0, p));
              gl_PointSize *= blastScale * visibility;
              `
            );
          };

          // Removed ambientGlowPoints to ensure crisp, distinct particles
        }
      });

      scene.add(heroModel);
      isModelLoaded = true; // Wait for model before starting sequence
    });

    const currentCamPos = new THREE.Vector3();
    const currentCamTarget = new THREE.Vector3(0, 0, 0);

    let ambientSpin = 0;
    let currentSmoothRawIndex = globalHasPlayedExplosion ? 2.0 : 0;
    let targetScrollIndex = 2.0;
    let autoProgress = globalHasPlayedExplosion ? 2.0 : 0;
    let autoSequenceComplete = globalHasPlayedExplosion;

    let lastFrameTime = performance.now();
    let animId = 0;
    
    let lastUiFade = '';
    const root = document.documentElement;

    function updateCameraFov() {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.near = 0.1;
      camera.far = 1000;
  
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

    const onResize = () => {
      isMobileDevice = checkMobile();
      updateCameraFov();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    const onScroll = () => {
      if (!autoSequenceComplete) return;

      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollFrac = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Map scroll progress from section 2.0 to 7.0
      targetScrollIndex = 2.0 + scrollFrac * 5.0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (isMobileDevice) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    function renderFrame() {
      const now = performance.now();
      const deltaSeconds = Math.min((now - lastFrameTime) / 1000, 0.1); // Cap to prevent massive jumps when model parses
      lastFrameTime = now;

      ambientSpin += deltaSeconds * 0.12;
      timeUniform.value += deltaSeconds;

      // Update the progress uniform based on autoProgress
      // autoProgress goes 0 -> 2 over ~6 seconds.
      // We want uP to go 0 -> 1 over the first 4 seconds.
      let p = Math.min(1.0, autoProgress * 0.75);
      progressUniform.value = p;

      // Update glow and ring based on uP (progress)
      function bump(x: number, a: number, b: number) {
        const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
        return Math.sin(t * Math.PI) ** 2 * (t > 0 && t < 1 ? 1 : 0);
      }
      function smoothstep(a: number, b: number, x: number) {
        const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
        return t * t * (3 - 2 * t);
      }

      const pulse = 0.5 + 0.5 * Math.sin(timeUniform.value * 2.6);
      const preBlast = 1 - smoothstep(0.28, 0.36, p);
      const blast1 = bump(p, 0.3, 0.42);
      const blast2 = bump(p, 0.56, 0.68);

      glowU.uIntensity.value =
        preBlast * (0.45 + 0.6 * pulse + 1.8 * smoothstep(0.05, 0.3, p)) +
        bump(p, 0.32, 0.4) * 3.0 +
        bump(p, 0.58, 0.66) * 1.8;
      glowU.uCore.value = preBlast * 1.4 + blast1 * 2.2 + blast2 * 1.2;

      // Dim the central glow during wordmark reveal (p=0.4 to 0.6)
      const revealDim = 1 - bump(p, 0.38, 0.56) * 0.7;
      glowU.uIntensity.value *= revealDim;
      glowU.uCore.value *= revealDim;

      // Keep scale appropriate for our closer camera (e.g. 5 to 40 instead of 12 to 102)
      const glowScale = 3 + 12 * smoothstep(0.1, 0.34, p) + 30 * blast1;
      glow.scale.setScalar(glowScale);

      const ringP = Math.max(smoothstep(0.3, 0.56, p), smoothstep(0.56, 0.84, p));
      ringU.uProgress.value = ringP;
      ringU.uIntensity.value = (blast1 * 2.2 + blast2 * 1.6) * (1 - smoothstep(0.9, 1.0, p));
      ring.scale.setScalar(15 + 80 * ringP);

      const fade = 1 - smoothstep(0.82, 0.98, p);
      glow.visible = glowU.uIntensity.value * fade > 0.002;
      glowU.uIntensity.value *= fade;

      // Fade in the UI (MAGNOVITE text, countdown) after the explosion peaks
      const uiFade = smoothstep(0.65, 0.95, p).toFixed(4);
      if (uiFade !== lastUiFade) {
          root.style.setProperty('--ui-fade', uiFade);
          lastUiFade = uiFade;
      }

      if (!autoSequenceComplete && isModelLoaded) {
        let stepSpeed = 0.167;

        if (autoProgress > 0.5 && autoProgress <= 1.25) {
          stepSpeed = 0.35;
        } else if (autoProgress > 1.25) {
          const decelFactor = 1.0 - ((autoProgress - 1.25) / 0.75);
          stepSpeed = 0.12 + (0.23 * Math.max(decelFactor, 0));
        }

        autoProgress += deltaSeconds * stepSpeed;

        if (autoProgress >= 2.0) {
          autoProgress = 2.0;
          if (!autoSequenceComplete) {
            autoSequenceComplete = true;
            globalHasPlayedExplosion = true;
          }
          // Synchronize target with current scroll when startup finishes
          onScroll();
        }
        currentSmoothRawIndex = autoProgress;
      } else {
        const diff = targetScrollIndex - currentSmoothRawIndex;
        currentSmoothRawIndex += diff * Math.min(deltaSeconds * 6.0, 1.0);
      }

      const totalSections = sections.length - 1;
      const safeRawIndex = Math.max(0, Math.min(currentSmoothRawIndex, totalSections));

      const fromIdx = Math.floor(safeRawIndex);
      const toIdx = Math.min(fromIdx + 1, totalSections);
      const stepFrac = safeRawIndex - fromIdx;

      const from = sections[fromIdx];
      const to = sections[toIdx];

      const t = smootherStep(stepFrac);

      const baseAngle = from.angle + (to.angle - from.angle) * t;
      const currentRadius = from.radius + (to.radius - from.radius) * t;
      const currentHeight = from.height + (to.height - from.height) * t;

      const totalAngle = baseAngle + ambientSpin;

      currentCamPos.set(
        Math.sin(totalAngle) * currentRadius,
        currentHeight,
        Math.cos(totalAngle) * currentRadius
      );
      currentCamTarget.set(0, 0, 0);

      if (activePointsMat) {
        const scrollFrac = Math.min(safeRawIndex / totalSections, 1);
        const cp = Math.max((scrollFrac - 0.5) / 0.5, 0);
        const sz = 1.0 - cp * 0.45;
        const op = 1.0 - cp * 0.35;
        activePointsMat.size = baseStarSize * sz * 0.35; // Significantly reduce size to match the old tiny butterfly particles
        activePointsMat.opacity = 1.0 * op; // Make fully opaque for maximum clarity
      }

      const interactiveCamPos = currentCamPos.clone();
      if (!isMobileDevice) {
        interactiveCamPos.x += mouseX * 0.006;
        interactiveCamPos.y += -mouseY * 0.006;
      }

      camera.position.copy(interactiveCamPos);
      camera.lookAt(currentCamTarget);

      // Make the glow and ring always perfectly face the camera (billboarding)
      // This MUST happen after camera.lookAt so there is no 1-frame lag jitter
      glow.quaternion.copy(camera.quaternion);
      ring.quaternion.copy(camera.quaternion);

      if (isMobileDevice) {
        renderer.render(scene, camera);
      } else {
        composer.render();
      }

      animId = requestAnimationFrame(renderFrame);
    }

    renderFrame();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, [hostRef]);
}
