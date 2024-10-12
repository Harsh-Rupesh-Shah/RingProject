import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = ({ ringProperties }) => {
  const { scene, materials } = useGLTF('/models/ring2.glb');

  // Handle gold color change based on the selected gold type
  const goldColorMapping = {
    "Rose Gold": '#E0BFB8',
    "Yellow Gold": '#ffd700',
    "White Gold": '#d7d7d7',
  };

  const selectedGoldColor = goldColorMapping[ringProperties.gold] || '#ffd700'; // Default to white gold

  // Apply gold (rim) color if the material is present
  if (materials && materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df']) {
    materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df'].color.set(selectedGoldColor);
  }

  // Apply additional properties like solitaire shape, size, etc. as needed
  // You can add more mappings for the solitaire shape, clarity, etc.

  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} />;
};

const GLBViewer = ({ ringProperties }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000000' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 25 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} />

        {/* Environment map for realistic reflections */}
        <Environment preset="city" />

        {/* Pass ringProperties to the model to update dynamically */}
        <Model ringProperties={ringProperties} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLBViewer;