'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import FallingGrains from './FallingGrains';
import Lighting from './Lighting';

export default function Global3DGrains() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show grains after scrolling past 50% of the viewport (hero section)
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[1] pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }} camera={{ position: [0, 0, 15], fov: 45 }}>
        <Lighting />
        {/* Reduce count to 200 for better mobile performance while maintaining the effect */}
        <FallingGrains count={220} />
      </Canvas>
    </div>
  );
}
