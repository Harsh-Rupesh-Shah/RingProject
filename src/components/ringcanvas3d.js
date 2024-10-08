import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function Ring({ ringProperties }) {
  const { ringSize, shankDiameter, gold } = ringProperties;

  const ringRef = useRef();

  // Adjust ring dimensions based on properties
  const bandThickness = parseFloat(shankDiameter) || 2; // Default thickness if not set
  const gemSize = 0.2; // Fixed diamond size
  const ringColor = gold === 'White Gold' ? '#F5F5F5' : (gold === 'Rose Gold' ? '#B76E79' : '#FFD700'); // Select color based on input
  const diamondColor = '#e0e0e0'; // Platinum-like diamond color

  // Adjust ring size based on input from size dropdown
  const sizeScale = ringSize === '1' ? 0.3 : (ringSize === '2' ? 0.35 : 0.4);

  return (
    <group ref={ringRef} scale={sizeScale}>
      {/* Jewelry Ring Band */}
      <mesh>
        <torusGeometry args={[0.5, bandThickness * 0.05, 30, 100]} />
        <meshStandardMaterial color={ringColor} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Diamond Gemstone */}
      <Octahedron
        args={[gemSize, 0]}  // Fixed size for simplicity
        position={[0, 0.75, 0]}  // Adjusted position for better centering
      >
        <meshStandardMaterial
          color={diamondColor}
          roughness={0.05}  // Low roughness for a shiny effect
          metalness={1}
          transparent={true}
          opacity={0.95}
          reflectivity={1}
        />
      </Octahedron>

      {/* Four Prongs to hold the diamond */}
      {[-0.2, 0.2].map((x) => (
        <Cylinder
          key={x}
          args={[bandThickness * 0.02, bandThickness * 0.02, 0.2, 32]}
          position={[x, 0.6, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color={ringColor} />
        </Cylinder>
      ))}
      {[-0.2, 0.2].map((z) => (
        <Cylinder
          key={z}
          args={[bandThickness * 0.02, bandThickness * 0.02, 0.2, 32]}
          position={[0, 0.6, z]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color={ringColor} />
        </Cylinder>
      ))}
    </group>
  );
}

function RingCanvas3D({ ringProperties }) {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Ring ringProperties={ringProperties} />
      
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

export default RingCanvas3D;

