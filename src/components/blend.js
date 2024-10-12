import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = ({ ringProperties }) => {
  const { scene, materials } = useGLTF('/models/ring2.glb');
  console.log(materials);

  // Gold color change based on the selected gold type
  const goldColorMapping = {
    "Rose Gold": '#E0BFB8',
    "Yellow Gold": '#ffd700',
    "White Gold": '#d7d7d7',
  };
  const selectedGoldColor = goldColorMapping[ringProperties.gold] || '#ffd700'; // Default to Yellow Gold

  // Apply gold (rim) color if the material is present
  if (materials && materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df']) {
    materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df'].color.set(selectedGoldColor);
  }

  // Diamond color change based on the selected color (D, E, F, G)
  const diamondColorMapping = {
    "D": 'red',  // Pure white
    "E": 'blue',  // Slightly tinted
    "F": 'cyan',  // Light tint
    "G": 'green',  // Noticeable tint
  };
  const selectedDiamondColor = diamondColorMapping[ringProperties.color] || '#ffffff'; // Default to D color

  // Apply diamond color if the material is present
  if (materials && materials.__DEFAULT) {
    materials.__DEFAULT.color.set(selectedDiamondColor); // Set diamond color dynamically
  } else {
    console.warn("Diamond material not found");
  }
  

  // Ring size scaling based on the selected size (1, 2, 3)
  const ringSizeMapping = {
    "1": [0.05, 0.05, 0.05], 
    "2": [0.06, 0.06, 0.06], 
    "3": [0.07, 0.07, 0.07],
  };
  const selectedScale = ringSizeMapping[ringProperties.ringSize] || [0.05, 0.05, 0.05]; // Default to size 1

  return <primitive object={scene} scale={selectedScale} />;
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
