'use client';

import { Canvas } from '@react-three/fiber';
import FallingGrains from './FallingGrains';
import Lighting from './Lighting';

interface SectionGrainsProps {
  count?: number;
  color1?: string;
  color2?: string;
}

export default function SectionGrains({ count = 60, color1, color2 }: SectionGrainsProps) {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }} camera={{ position: [0, 0, 15], fov: 45 }}>
        <Lighting />
        <FallingGrains count={count} color1={color1} color2={color2} />
      </Canvas>
    </div>
  );
}
