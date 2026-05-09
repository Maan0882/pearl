'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree, Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Lighting from './Lighting';

interface HeapGrainsProps {
  count?: number;
  color1?: string;
  color2?: string;
}

function HeapGrains({ count = 800, color1 = "#8fb339", color2 = "#e8ecd7" }: HeapGrainsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    
    // Define the different heaps (cx/cz: center position, radius: spread, height: max height, weight: probability)
    const heaps = [
      { cx: 0, cz: 0, radius: 0.15, height: 0.3, weight: 5 },          // Center (Big)
      { cx: -0.28, cz: 0.05, radius: 0.1, height: 0.18, weight: 3 },   // Left (Medium)
      { cx: 0.32, cz: -0.05, radius: 0.12, height: 0.22, weight: 4 },  // Right (Medium-Big)
      { cx: -0.15, cz: -0.1, radius: 0.08, height: 0.12, weight: 1 },  // Left-back (Small)
      { cx: 0.18, cz: 0.1, radius: 0.08, height: 0.12, weight: 1 },    // Right-front (Small)
      { cx: -0.38, cz: -0.02, radius: 0.06, height: 0.09, weight: 1 }, // Far-left (Tiny)
      { cx: 0.45, cz: 0.02, radius: 0.07, height: 0.1, weight: 1 },    // Far-right (Tiny)
    ];
    
    const totalWeight = heaps.reduce((sum, h) => sum + h.weight, 0);

    for (let i = 0; i < count; i++) {
      // Pick a random heap based on weights
      let rand = Math.random() * totalWeight;
      let selectedHeap = heaps[0];
      for (const h of heaps) {
        rand -= h.weight;
        if (rand <= 0) {
          selectedHeap = h;
          break;
        }
      }

      // Create a heap distribution for the selected heap
      const angle = Math.random() * Math.PI * 2;
      // Random radius biased heavily towards the center
      const r = Math.random() * selectedHeap.radius * Math.random(); 
      const finalPx = selectedHeap.cx + Math.cos(angle) * r;
      const finalPz = selectedHeap.cz + Math.sin(angle) * r;
      
      // Calculate height of the heap at this radius
      const normalizedR = r / selectedHeap.radius; // 0 at center, 1 at edge
      const heightCurve = Math.pow(1 - normalizedR, 1.5); // curved slope
      const finalPy = -0.48 + (selectedHeap.height * heightCurve) + (Math.random() * 0.04); // add slight noise
      
      // Start them high up, scattered randomly so they don't fall all at once
      const currentPy = 1.0 + Math.random() * 3.0;
      
      const rx = Math.random() * Math.PI;
      const ry = Math.random() * Math.PI;
      const rz = Math.random() * Math.PI;
      
      const speed = 0.005 + Math.random() * 0.005; 
      const rotXSpeed = (Math.random() - 0.5) * 0.1;
      const rotYSpeed = (Math.random() - 0.5) * 0.1;
      const rotZSpeed = (Math.random() - 0.5) * 0.1;
      
      const isWheat = Math.random() > 0.5;
      const baseScale = 0.6 + Math.random() * 0.6; // Slightly smaller to look like a huge pile

      temp.push({ 
        px: finalPx, 
        py: currentPy, 
        pz: finalPz, 
        finalPy, 
        rx, ry, rz, 
        speed, rotXSpeed, rotYSpeed, rotZSpeed, 
        isWheat, baseScale,
        hasLanded: false
      });
    }
    return temp;
  }, [count]);

  const colorArray = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const c1 = new THREE.Color(color1);
    const c2 = new THREE.Color(color2);
    
    for (let i = 0; i < count; i++) {
      const baseColor = particles[i].isWheat ? c1.clone() : c2.clone();
      const hsl = { h: 0, s: 0, l: 0 };
      baseColor.getHSL(hsl);
      baseColor.setHSL(hsl.h, hsl.s, hsl.l + (Math.random() * 0.1 - 0.05));
      baseColor.toArray(colors, i * 3);
    }
    return colors;
  }, [count, particles, color1, color2]);

  useFrame(() => {
    if (!meshRef.current) return;
    
    const width = Math.max(viewport.width * 2, 40); 
    const height = Math.max(viewport.height * 2, 30);
    const depth = width;

    particles.forEach((particle, i) => {
      if (!particle.hasLanded) {
        particle.py -= particle.speed;
        particle.rx += particle.rotXSpeed;
        particle.ry += particle.rotYSpeed;
        particle.rz += particle.rotZSpeed;
        
        // Check collision with their specific final resting spot on the heap
        if (particle.py <= particle.finalPy) {
          particle.py = particle.finalPy;
          particle.hasLanded = true; // Stop moving permanently
        }
      }
      
      // Map percentages directly to viewport dimensions
      // py = -0.5 is exactly the bottom edge, py = 0.5 is exactly the top edge
      const actualX = particle.px * viewport.width;
      const actualY = particle.py * viewport.height;
      const actualZ = particle.pz * viewport.width;

      dummy.position.set(actualX, actualY, actualZ);
      dummy.rotation.set(particle.rx, particle.ry, particle.rz);
      
      if (particle.isWheat) {
        dummy.scale.set(0.8 * particle.baseScale, 1.3 * particle.baseScale, 0.8 * particle.baseScale);
      } else {
        dummy.scale.set(0.35 * particle.baseScale, 1.6 * particle.baseScale, 0.35 * particle.baseScale);
      }
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(0.06, 16, 16);
    geo.setAttribute('color', new THREE.InstancedBufferAttribute(colorArray, 3));
    return geo;
  }, [colorArray]);

  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, count]}>
      <meshStandardMaterial vertexColors roughness={0.7} metalness={0.1} />
    </instancedMesh>
  );
}

export default function CTAGrains() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }} camera={{ position: [0, 0, 15], fov: 45 }}>
        <Lighting />
        <HeapGrains count={800} color1="#8fb339" color2="#e8ecd7" />
      </Canvas>
    </div>
  );
}
