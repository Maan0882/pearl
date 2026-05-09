'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WheatField from './WheatField';
import RiceField from './RiceField';
import FallingGrains from './FallingGrains';
import Lighting from './Lighting';

gsap.registerPlugin(ScrollTrigger);

function CameraRig() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    if (!cameraRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#farm-scene-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    // Move camera slowly through the field
    tl.to(cameraRef.current.position, {
      z: 5,
      y: 1.5,
      ease: "power1.inOut"
    }, 0);
    
    // Slight pan
    tl.to(cameraRef.current.rotation, {
      y: 0.2,
      ease: "power1.inOut"
    }, 0);

  }, []);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 3, 15]} fov={45} />;
}

// Floor
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#1a1525" roughness={1} />
    </mesh>
  );
}

export default function FarmScene() {
  return (
    <div id="farm-scene-container" className="absolute inset-0 z-0 pointer-events-none opacity-30">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <CameraRig />
        <Lighting />
        <Ground />
        
        {/* Wheat Field on the right/back */}
        <WheatField count={4000} position={[5, 0, -5]} />
        
        {/* Rice Field on the left/front */}
        <RiceField count={4000} position={[-5, 0, 2]} />
      </Canvas>
    </div>
  );
}
