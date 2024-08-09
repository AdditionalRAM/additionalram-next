"use client";

import styles from './ThreeCRT.module.css';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { useEffect, useRef } from 'react';

export default function ThreeCRT({elementID}) {
  const canvasRef = useRef(null);
  const crtRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.3, window.innerHeight * 0.3);
    camera.position.setZ(30);
    scene.background = null;

    const loader = new GLTFLoader();
    // load CRT 
    loader.load(
      '/crt-head.glb',
      (gltf) => {
        const loadedCrt = gltf.scene;
        loadedCrt.scale.set(10, 10, 10);
        loadedCrt.position.y = -1;
        scene.add(loadedCrt);
        crtRef.current = loadedCrt;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 0.7;
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 0, 10);
    pointLight.intensity = 30;
    pointLight.distance = 100;
    scene.add(pointLight);
    scene.add(ambientLight);

    // animation loop (kinda like Update in Unity)
    const animate = () => {
      requestAnimationFrame(animate);

      if (crtRef.current) {
        let targetRotation = calculateTargetRotation(mousePos.current.x, mousePos.current.y, renderer.domElement.getBoundingClientRect());
        crtRef.current.rotation.x = targetRotation.x;
        crtRef.current.rotation.y = targetRotation.y;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (event) => {
      mousePos.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleResize = () => {
      const width = window.innerWidth * 0.3;
      const height = window.innerHeight * 0.3;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initial resize to make sure everything is set up correctly
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.canvasContainer} id={elementID}>
      <canvas ref={canvasRef} id="bg" className={styles.canvas}></canvas>
    </div>
  );
}

function calculateTargetRotation(mouseX, mouseY, rendererRect){
  let rendererWidth = rendererRect.width, 
  rendererHeight = rendererRect.height;

  let canvasX = rendererRect.left + rendererWidth / 2;
  let canvasY = rendererRect.top + rendererHeight / 2;

  let maxMouseX = rendererHeight;
  let maxMouseY = rendererWidth;

  // get mouse pos
  let clampedMouseX = clamp(mouseX - canvasX, -maxMouseX, maxMouseX);
  let clampedMouseY = clamp(mouseY - canvasY, -maxMouseY, maxMouseY);

  let crtTargetRotationX = (clampedMouseY / maxMouseY) * 0.5;
  let crtTargetRotationY = (clampedMouseX / maxMouseX) * 0.8;

  return {x: crtTargetRotationX, y: crtTargetRotationY};
}

// clamp helper function
function clamp(num, min, max){
  return num <= min ? min : num >= max ? max : num;
}
