const fs = require('fs');
const file = '/home/vyshak/cosmic-reveal-main/src/components/cosmic/CosmicScene/CosmicScene.hooks.ts';
let code = fs.readFileSync(file, 'utf8');

// 1. Add imports
code = code.replace(
  `import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';`,
  `import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';\nimport { GLOW_VERT, GLOW_FRAG, RING_FRAG } from "../shaders";`
);

// 2. Setup meshes and uniforms
code = code.replace(
  `let scatterUniform = { value: 1.0 };`,
  `let progressUniform = { value: 0.0 };
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
    glow.position.z = -1;
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
    ring.position.z = -1;
    scene.add(ring);`
);

// 3. Replace aScatterPos with aDir and aRand
code = code.replace(
  `const scatterPos = new Float32Array(count * 3);`,
  `const dirs = new Float32Array(count * 3);
            const rands = new Float32Array(count * 4);`
);

code = code.replace(
  `// Generate scattered explosion position
              const dirX = (Math.random() - 0.5) * 2;
              const dirY = (Math.random() - 0.5) * 2;
              const dirZ = (Math.random() - 0.5) * 2;
              const explodeDist = 20 + Math.random() * 80;
              scatterPos[i * 3 + 0] = dirX * explodeDist;
              scatterPos[i * 3 + 1] = dirY * explodeDist;
              scatterPos[i * 3 + 2] = dirZ * explodeDist;`,
  `const u = Math.random() * 2 - 1;
              const th = Math.random() * Math.PI * 2;
              const sq = Math.sqrt(1 - u * u);
              const jitter = 0.55 + Math.random() * 0.75;
              dirs[i * 3] = sq * Math.cos(th) * jitter;
              dirs[i * 3 + 1] = sq * Math.sin(th) * (0.65 + Math.random() * 0.7);
              dirs[i * 3 + 2] = u * jitter;

              rands[i * 4] = Math.random();
              rands[i * 4 + 1] = Math.random();
              rands[i * 4 + 2] = Math.random();
              rands[i * 4 + 3] = Math.random();`
);

code = code.replace(
  `child.geometry.setAttribute('aScatterPos', new THREE.BufferAttribute(scatterPos, 3));`,
  `child.geometry.setAttribute('aDir', new THREE.BufferAttribute(dirs, 3));
            child.geometry.setAttribute('aRand', new THREE.BufferAttribute(rands, 4));`
);

// 4. Update the shader
code = code.replace(
  `mat.onBeforeCompile = (shader) => {
            shader.uniforms.uScatterAmount = scatterUniform;
            shader.vertexShader = \`
              attribute vec3 aScatterPos;
              uniform float uScatterAmount;
              \${shader.vertexShader}
            \`.replace(
              \`#include <begin_vertex>\`,
              \`
              vec3 transformed = vec3(position);
              
              // Add a staggering effect so they don't all move at the exact same speed
              float sDist = length(aScatterPos);
              float individualProgress = clamp((1.0 - uScatterAmount) * 1.5 - (sDist / 200.0), 0.0, 1.0);
              float eased = smoothstep(0.0, 1.0, individualProgress);
              
              transformed = mix(aScatterPos, position, eased);
              \`
            );
          };`,
  `mat.onBeforeCompile = (shader) => {
            shader.uniforms.uP = progressUniform;
            shader.uniforms.uTime = timeUniform;
            shader.vertexShader = \`
              attribute vec3 aDir;
              attribute vec4 aRand;
              uniform float uP;
              uniform float uTime;
              \${shader.vertexShader}
            \`.replace(
              \`#include <begin_vertex>\`,
              \`
              vec3 transformed = vec3(position);
              
              float p = uP;
              
              // 1. DENSE PULSAR CORE
              float pulse = 0.5 + 0.5 * sin(uTime * 2.6 + aRand.w * 6.2831);
              float tension = smoothstep(0.06, 0.30, p);
              float coreRadius = 0.10 * (0.25 + aRand.y) * (1.0 + 0.35 * pulse + 1.6 * tension);
              
              // 2. STELLAR EXPLOSION
              float e1 = pow(smoothstep(0.30, 0.52, p), 0.55);
              float e2 = pow(smoothstep(0.52, 0.78, p), 0.65);
              float explosionRadius = coreRadius
                + e1 * (2.5 + 8.0 * aRand.x)
                + e2 * (16.0 + 55.0 * aRand.z);
                
              explosionRadius *= 0.6; // Scale down for galaxy size
                
              vec3 explPos = aDir * explosionRadius;
              
              // Organic drift
              float flap = sin(uTime * 14.0 + aRand.w * 18.0);
              float flutterFactor = 0.75 * e2 + 0.25 * e1;
              explPos += flutterFactor * vec3(
                sin(uTime * 1.8 + aRand.w * 12.0) * 2.0 + flap * 0.6,
                cos(uTime * 1.5 + aRand.x * 11.0) * 1.8 + flap * 0.4,
                sin(uTime * 1.2 + aRand.y * 9.0) * 1.4
              ) * 0.5;
              
              // 3. MORPH INTO GALAXY
              float morph = smoothstep(0.70, 0.95, p);
              float morphStagger = clamp((morph - (aRand.x * 0.2)) * 1.2, 0.0, 1.0);
              
              transformed = mix(explPos, position, smoothstep(0.0, 1.0, morphStagger));
              \`
            );
          };`
);

fs.writeFileSync(file, code);
