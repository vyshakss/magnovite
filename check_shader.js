import * as THREE from 'three';
const renderer = new THREE.WebGLRenderer({ gl: require('gl')(1,1) } || null); // this might not work if gl is not installed.
