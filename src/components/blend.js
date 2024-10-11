import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = ({ diamondColor, rimColor }) => {
  // Load the model
  const { scene, materials } = useGLTF('/models/ring2.glb');

  // Debugging output to check materials
  console.log(materials); // Check which materials are loaded

  // Apply diamond color if the material is present
  if (materials && materials.__DEFAULT) {
    materials.__DEFAULT.color.set(diamondColor); // Set the diamond's color dynamically
  } else {
    console.warn("Diamond material not found");
  }

  // Apply rim color if the material is present
  if (materials && materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df']) {
    materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df'].color.set(rimColor); // Set the rim's color dynamically
  } else {
    console.warn("Rim material not found");
  }

  // Apply scaling to reduce the model size
  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} />;
};

const GLBViewer = () => {
  const [diamondColor, setDiamondColor] = useState('#ffffff'); // Default diamond color
  const [rimColor, setRimColor] = useState('#ffcc00'); // Default rim color (e.g., gold)

  const handleDiamondColorChange = (event) => {
    setDiamondColor(event.target.value);
  };

  const handleRimColorChange = (event) => {
    setRimColor(event.target.value);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#808080' }}>
      {/* Color picker for diamond color */}
      <input 
        type="color" 
        value={diamondColor} 
        onChange={handleDiamondColorChange} 
        style={{ marginBottom: '10px' }} 
        title="Change Diamond Color"
      />
      
      {/* Color picker for rim color */}
      <input 
        type="color" 
        value={rimColor} 
        onChange={handleRimColorChange} 
        style={{ marginBottom: '30px' }} 
        title="Change Rim Color"
      />

      {/* Canvas for rendering the 3D model */}
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 25 }}
        style={{ background: 'transparent' }} 
        gl={{ alpha: false }} 
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} />
        
        {/* Environment map for realistic reflections */}
        <Environment preset="city" />

        {/* Model with dynamic diamond and rim color */}
        <Model diamondColor={diamondColor} rimColor={rimColor} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLBViewer;
