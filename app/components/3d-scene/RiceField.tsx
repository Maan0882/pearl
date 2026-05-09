import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RiceFieldProps {
  count?: number;
  position?: [number, number, number];
}

export default function RiceField({ count = 3000, position = [0, 0, 0] }: RiceFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const stalks = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 25;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = 0.9 + Math.random() * 0.4;
      const phase = Math.random() * Math.PI * 2;
      temp.push({ x, z, scale, phase });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    
    stalks.forEach((stalk, i) => {
      const sway = Math.sin(time * 1.5 + stalk.x * 0.4 + stalk.z * 0.4 + stalk.phase) * 0.25;
      dummy.position.set(stalk.x, 0, stalk.z);
      dummy.rotation.set(sway, 0, sway * 0.3);
      dummy.scale.set(1, stalk.scale, 1);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.015, 0.05, 1.8, 5);
    geo.translate(0, 0.9, 0); 
    return geo;
  }, []);

  return (
    <group position={position}>
      <instancedMesh ref={meshRef} args={[geometry, undefined, count]} castShadow receiveShadow>
        <meshStandardMaterial color="#c9a7f0" roughness={0.8} metalness={0.1} side={THREE.DoubleSide} />
      </instancedMesh>
    </group>
  );
}
