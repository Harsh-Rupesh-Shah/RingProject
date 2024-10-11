import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const DiamondModel = ({ color, position }) => {
  const { scene, materials } = useGLTF('/models/ring3.glb');

  if (materials && materials.__DEFAULT) {
    materials.__DEFAULT.color.set(color);
  } else {
    console.warn("Diamond material not found");
  }

  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} position={position} />;
};

const RimModel = ({ color, position }) => {
  const { scene, materials } = useGLTF('/models/ring3.glb');

  if (materials && materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df']) {
    materials['/Yellow Gold-82779c7d-36d2-42c2-aa39-32f9be2e94df'].color.set(color);
  } else {
    console.warn("Rim material not found");
  }

  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} position={position} />;
};

const SecondModel = ({ position }) => {
  const { scene } = useGLTF('/models/d1.glb');

  return <primitive object={scene} position={position} />;
};

const GLBViewer = () => {
  const [diamondColor, setDiamondColor] = useState('#ffffff');
  const [rimColor, setRimColor] = useState('#ffcc00');
  const [diamondPosition, setDiamondPosition] = useState([0, 0, 0]);
  const [rimPosition, setRimPosition] = useState([0, 0, 0]);
  const [secondModelPosition, setSecondModelPosition] = useState([0, 0, 0]);

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

  const handleSecondModelPositionChange = (e) => {
    const [x, y, z] = e.target.value.split(',').map(Number);
    setSecondModelPosition([x, y, z]);
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

      {/* Input fields for diamond position */}
      <label>Diamond Position (x, y, z):</label>
      <input
        type="text"
        value={diamondPosition.join(',')}
        onChange={handleDiamondPositionChange}
        style={{ marginBottom: '10px' }}
      />

      {/* Input fields for rim position */}
      <label>Rim Position (x, y, z):</label>
      <input
        type="text"
        value={rimPosition.join(',')}
        onChange={handleRimPositionChange}
        style={{ marginBottom: '10px' }}
      />

      {/* Input fields for second model position */}
      <label>Second Model Position (x, y, z):</label>
      <input
        type="text"
        value={secondModelPosition.join(',')}
        onChange={handleSecondModelPositionChange}
        style={{ marginBottom: '10px' }}
      />

      {/* Canvas for rendering the 3D models */}
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

        {/* Render diamond and rim models separately */}
        <DiamondModel color={diamondColor} position={diamondPosition} />
        <RimModel color={rimColor} position={rimPosition} />
        <SecondModel position={secondModelPosition} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLBViewer;