import fs from 'fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const buffer = fs.readFileSync('/home/vyshak/cosmic-reveal-main/public/models/hero.glb');
const arrayBuffer = new Uint8Array(buffer).buffer;

const loader = new GLTFLoader();
loader.parse(arrayBuffer, '', (gltf) => {
  gltf.scene.updateMatrixWorld(true);
  console.log("Root position:", gltf.scene.position);
  
  const box = new THREE.Box3().setFromObject(gltf.scene);
  console.log("World Bounding Box Center:", box.getCenter(new THREE.Vector3()));
  
  gltf.scene.traverse((child) => {
    if (child.isPoints) {
      console.log("Points mesh found:", child.name);
      console.log(" - Local position:", child.position);
      console.log(" - Local scale:", child.scale);
      console.log(" - Local rotation:", child.rotation);
      
      child.geometry.computeBoundingSphere();
      console.log(" - Geometry bounding sphere center:", child.geometry.boundingSphere.center);
    }
  });
});
