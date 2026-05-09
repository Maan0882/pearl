import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface FallingGrainsProps {
  count?: number;
  color1?: string;
  color2?: string;
}

export default function FallingGrains({ count = 1000, color1 = "#9b6dd7", color2 = "#c9a7f0" }: FallingGrainsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Position percentages
      const px = Math.random() - 0.5;
      const pz = Math.random() - 0.5;
      const py = Math.random() * 2; 
      
      // Rotations
      const rx = Math.random() * Math.PI;
      const ry = Math.random() * Math.PI;
      const rz = Math.random() * Math.PI;
      
      // Speeds
      const speed = 0.001 + Math.random() * 0.003; 
      const rotXSpeed = (Math.random() - 0.5) * 0.05;
      const rotYSpeed = (Math.random() - 0.5) * 0.05;
      const rotZSpeed = (Math.random() - 0.5) * 0.05;
      
      // Sway parameters
      const swaySpeed = 0.5 + Math.random() * 1.5;
      const swayAmp = 0.02 + Math.random() * 0.08;
      const seed = Math.random() * 100;
      
      // Appearance
      const isWheat = Math.random() > 0.5;
      // Vary size significantly for depth of field effect (some very close, some far)
      const baseScale = 0.5 + Math.random() * 1.5;

      temp.push({ px, py, pz, rx, ry, rz, speed, rotXSpeed, rotYSpeed, rotZSpeed, swaySpeed, swayAmp, seed, isWheat, baseScale });
    }
    return temp;
  }, [count]);

  const colorArray = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const c1 = new THREE.Color(color1);
    const c2 = new THREE.Color(color2);
    
    for (let i = 0; i < count; i++) {
      // Give each grain slight color variation for realism
      const baseColor = particles[i].isWheat ? c1.clone() : c2.clone();
      
      // Randomize lightness slightly
      const hsl = { h: 0, s: 0, l: 0 };
      baseColor.getHSL(hsl);
      baseColor.setHSL(hsl.h, hsl.s, hsl.l + (Math.random() * 0.1 - 0.05));
      
      baseColor.toArray(colors, i * 3);
    }
    return colors;
  }, [count, particles, color1, color2]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const width = Math.max(viewport.width * 2, 40); 
    const height = Math.max(viewport.height * 2, 30);
    const depth = width;

    particles.forEach((particle, i) => {
      particle.py -= particle.speed;
      particle.rx += particle.rotXSpeed;
      particle.ry += particle.rotYSpeed;
      particle.rz += particle.rotZSpeed;
      
      if (particle.py < -0.5) {
        particle.py = 1.0 + Math.random() * 0.5; 
      }
      
      // Add natural wind sway using sine wave
      const swayOffset = Math.sin(time * particle.swaySpeed + particle.seed) * particle.swayAmp * width;
      
      const actualX = (particle.px * width) + swayOffset;
      const actualY = particle.py * height - (height * 0.25);
      const actualZ = particle.pz * depth;

      dummy.position.set(actualX, actualY, actualZ);
      dummy.rotation.set(particle.rx, particle.ry, particle.rz);
      
      // Realistic grain scaling:
      // Rice is long and slender. Wheat is thick and oval.
      if (particle.isWheat) {
        // Wheat: plumper
        dummy.scale.set(0.8 * particle.baseScale, 1.3 * particle.baseScale, 0.8 * particle.baseScale);
      } else {
        // Rice: thinner and longer
        dummy.scale.set(0.35 * particle.baseScale, 1.6 * particle.baseScale, 0.35 * particle.baseScale);
      }
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    // Sphere scaled into an oval looks much more like organic grains than a cylinder/capsule
    const geo = new THREE.SphereGeometry(0.06, 16, 16);
    geo.setAttribute('color', new THREE.InstancedBufferAttribute(colorArray, 3));
    return geo;
  }, [colorArray]);

  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, count]}>
      {/* High roughness, low metalness gives a natural, organic matte look to the grains */}
      <meshStandardMaterial vertexColors roughness={0.7} metalness={0.1} />
    </instancedMesh>
  );
}
