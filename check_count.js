import fs from 'fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const buffer = fs.readFileSync('/home/vyshak/cosmic-reveal-main/public/models/hero.glb');
const arrayBuffer = new Uint8Array(buffer).buffer;

const loader = new GLTFLoader();
loader.parse(arrayBuffer, '', (gltf) => {
  let totalPoints = 0;
  gltf.scene.traverse((child) => {
    if (child.isPoints) {
      totalPoints += child.geometry.attributes.position.count;
    }
  });
  console.log("Total particles in hero.glb:", totalPoints);
});
