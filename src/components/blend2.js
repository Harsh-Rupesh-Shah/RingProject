import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const DiamondModel = ({ color, position }) => {
  const { scene, materials } = useGLTF('/models/d1.glb');
  if (materials && materials['Material.001']) {
    materials['Material.001'].color.set(color);
  } else {
    console.warn("Diamond material not found");
  }
  return <primitive object={scene} position={position} scale={[0.6, 0.6, 0.6]} />;
};

const RimModel = ({ color, position }) => {
  const { scene, materials } = useGLTF('/models/ring3.glb');
  const rimMaterialName = Object.keys(materials).find((name) => name.includes('Yellow Gold') || name.includes('Rim'));
  if (materials && rimMaterialName) {
    materials[rimMaterialName].color.set(color);
  } else {
    console.warn("Rim material not found");
  }
  return <primitive object={scene} position={position} scale={[0.05, 0.05, 0.05]} />;
};

const GLBViewer = () => {
  const [diamondColor, setDiamondColor] = useState('#FFD700'); // Golden color for diamond
  const [rimColor, setRimColor] = useState('#FFD700'); // Golden color for rim
  const [diamondPosition, setDiamondPosition] = useState([0, 0.2, 0]); // Slightly above the ring
  const [rimPosition, setRimPosition] = useState([0, 0, 0]);

  const handleDiamondColorChange = (e) => setDiamondColor(e.target.value);
  const handleRimColorChange = (e) => setRimColor(e.target.value);
  const handleDiamondPositionChange = (e) => {
    const [x, y, z] = e.target.value.split(',').map(Number);
    setDiamondPosition([x, y, z]);
  };
  const handleRimPositionChange = (e) => {
    const [x, y, z] = e.target.value.split(',').map(Number);
    setRimPosition([x, y, z]);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#808080' }}>
      <input
        type="color"
        value={diamondColor}
        onChange={handleDiamondColorChange}
        style={{ marginBottom: '10px' }}
        title="Change Diamond Color"
      />
      {/* <input
        type="color"
        value={rimColor}
        onChange={handleRimColorChange}
        style={{ marginBottom: '10px' }}
        title="Change Rim Color"
      /> */}
      <label>Diamond Position (x, y, z):</label>
      <input
        type="text"
        value={diamondPosition.join(',')}
        onChange={handleDiamondPositionChange}
        style={{ marginBottom: '10px' }}
      />
      {/* <label>Rim Position (x, y, z):</label>
      <input
        type="text"
        value={rimPosition.join(',')}
        onChange={handleRimPositionChange}
        style={{ marginBottom: '10px' }}
      /> */}
      <Canvas camera={{ position: [0, 2, 5], fov: 25 }} style={{ background: 'transparent' }} gl={{ alpha: false }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} />
        <Environment preset="city" />
        <group position={[0, 0, 0]}>
          <DiamondModel color={diamondColor} position={diamondPosition} />
          {/* <RimModel color={rimColor} position={rimPosition} /> */}
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLBViewer;
