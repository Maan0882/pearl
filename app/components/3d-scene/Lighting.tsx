import { Environment } from '@react-three/drei';

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, -5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      {/* Sunrise warm fill light */}
      <pointLight position={[-10, 5, 10]} color="#ffaa55" intensity={2} />
      {/* Cool ambient fill */}
      <pointLight position={[10, 5, 10]} color="#55aaff" intensity={0.5} />
      
      {/* Optional volumetric environment */}
      <Environment preset="sunset" />
      <fog attach="fog" args={['#1a1525', 5, 35]} />
    </>
  );
}
