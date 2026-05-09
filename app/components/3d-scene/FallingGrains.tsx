import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface FallingGrainsProps {
  count?: number;
}

export default function FallingGrains({ count = 1000 }: FallingGrainsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Store percentages (0 to 1 or -0.5 to 0.5) instead of fixed units
      const px = Math.random() - 0.5;
      const pz = Math.random() - 0.5;
      const py = Math.random() * 2; // initial height percentage
      const rx = Math.random() * Math.PI;
      const ry = Math.random() * Math.PI;
      const rz = Math.random() * Math.PI;
      const speed = 0.001 + Math.random() * 0.003; // percentage per frame
      const rotSpeed = 0.01 + Math.random() * 0.03;
      const isWheat = Math.random() > 0.5;
      temp.push({ px, py, pz, rx, ry, rz, speed, rotSpeed, isWheat });
    }
    return temp;
  }, [count]);

  const colorArray = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const colorWheat = new THREE.Color("#9b6dd7"); // theme purple
    const colorRice = new THREE.Color("#c9a7f0");  // theme light purple
    
    for (let i = 0; i < count; i++) {
      const color = particles[i].isWheat ? colorWheat : colorRice;
      color.toArray(colors, i * 3);
    }
    return colors;
  }, [count, particles]);

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Calculate bounds dynamically based on current viewport
    const width = Math.max(viewport.width * 2, 40); // ensure minimum spread
    const height = Math.max(viewport.height * 2, 30);
    const depth = width;

    particles.forEach((particle, i) => {
      particle.py -= particle.speed;
      particle.rx += particle.rotSpeed;
      particle.ry += particle.rotSpeed;
      
      // Reset to top when it falls below screen
      if (particle.py < -0.5) {
        particle.py = 1.0 + Math.random() * 0.5; 
      }
      
      // Convert percentages to actual 3D coordinates based on viewport
      const actualX = particle.px * width;
      const actualY = particle.py * height - (height * 0.25);
      const actualZ = particle.pz * depth;

      dummy.position.set(actualX, actualY, actualZ);
      dummy.rotation.set(particle.rx, particle.ry, particle.rz);
      
      // slightly diff scale for rice vs wheat
      const scale = particle.isWheat ? 1.2 : 0.8;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    // simple capsule for a grain
    const geo = new THREE.CapsuleGeometry(0.03, 0.1, 4, 8);
    // add color attribute for instances
    geo.setAttribute('color', new THREE.InstancedBufferAttribute(colorArray, 3));
    return geo;
  }, [colorArray]);

  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, count]} castShadow>
      <meshStandardMaterial vertexColors roughness={0.4} metalness={0.2} />
    </instancedMesh>
  );
}
