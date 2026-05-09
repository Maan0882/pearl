import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WheatFieldProps {
  count?: number;
  color?: string;
  position?: [number, number, number];
}

export default function WheatField({ count = 3000, color = "#9b6dd7", position = [0, 0, 0] }: WheatFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const stalks = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 25;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = 0.8 + Math.random() * 0.6;
      const phase = Math.random() * Math.PI * 2;
      temp.push({ x, z, scale, phase });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    
    stalks.forEach((stalk, i) => {
      const sway = Math.sin(time * 1.2 + stalk.x * 0.3 + stalk.z * 0.3 + stalk.phase) * 0.2;
      dummy.position.set(stalk.x, 0, stalk.z);
      dummy.rotation.set(sway, 0, sway * 0.5);
      dummy.scale.set(1, stalk.scale, 1);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.01, 0.04, 2, 4);
    geo.translate(0, 1, 0); 
    return geo;
  }, []);

  return (
    <group position={position}>
      <instancedMesh ref={meshRef} args={[geometry, undefined, count]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} side={THREE.DoubleSide} />
      </instancedMesh>
    </group>
  );
}
