import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model1 = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/d1.glb'); // Replace with the path to your first .glb file

  // Set position for the first model
  return <primitive ref={modelRef} object={scene} position={[-2, 0, 0]} />;
};

const GLB2 = () => {
  return (
    <Canvas
      camera={{ position: [5, 2, 10], fov: 50 }}
      style={{ background: 'black' }} // Set the background color to black
    >
      <ambientLight intensity={1.0} />  {/* Increase the ambient light intensity */}
      <directionalLight position={[5, 5, 5]} intensity={2} />  {/* Increase directional light intensity */}
      <Suspense fallback={null}>
        <Model1 />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default GLB2;
