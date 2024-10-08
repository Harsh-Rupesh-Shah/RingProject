import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Cylinder, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function Ring({ ringProperties }) {
  const { size, bandThickness, color, gemColor } = ringProperties;

  // Load textures for metal and gemstone
  const [metalTexture, gemTexture] = useTexture([
    '/textures/Metal048A_2K-JPG_Color.jpg',    // Gold or other metal texture for ring
    '/textures/Metal049C_2K-JPG_Color.jpg'  // Diamond texture for the gemstone
  ]);

  const ringRef = useRef();

  return (
    <group ref={ringRef}>
      {/* Jewelry Ring Band */}
      <mesh>
        {/* A torus geometry with smooth shading to represent the band */}
        <torusGeometry args={[size * 0.5, bandThickness * 0.1, 30, 100]} />
        <meshStandardMaterial map={metalTexture} color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Diamond Gemstone */}
      <Octahedron
        args={[size * 0.25, 0]}  // Diamond shape
        position={[0, bandThickness * 0.6, 0]}
        rotation={[Math.PI / 2, 0, 0]}  // Rotate to align facets properly
      >
        <meshStandardMaterial
          color={gemColor}
          map={gemTexture}
          roughness={0.05}  // Low roughness for shiny appearance
          metalness={0.8}
          transparent={true}
          opacity={0.9}
          reflectivity={1}
        />
      </Octahedron>

      {/* Prongs (Cylinders) holding the diamond */}
      <Cylinder args={[bandThickness * 0.05, bandThickness * 0.05, bandThickness * 0.6, 32]} position={[size * 0.35, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial map={metalTexture} />
      </Cylinder>
      <Cylinder args={[bandThickness * 0.05, bandThickness * 0.05, bandThickness * 0.6, 32]} position={[-size * 0.35, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial map={metalTexture} />
      </Cylinder>
      <Cylinder args={[bandThickness * 0.05, bandThickness * 0.05, bandThickness * 0.6, 32]} position={[0, 0.6, size * 0.35]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <meshStandardMaterial map={metalTexture} />
      </Cylinder>
      <Cylinder args={[bandThickness * 0.05, bandThickness * 0.05, bandThickness * 0.6, 32]} position={[0, 0.6, -size * 0.35]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <meshStandardMaterial map={metalTexture} />
      </Cylinder>
    </group>
  );
}

function RingCanvas3D({ ringProperties }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Ring ringProperties={ringProperties} />
      
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

export default RingCanvas3D;
