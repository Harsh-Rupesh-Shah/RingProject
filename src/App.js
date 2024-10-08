import React, { useState } from 'react';
import RingForm from './components/ringform';
import RingCanvas3D from './components/ringcanvas3d';
import './App.css';

function App() {
  const [ringProperties, setRingProperties] = useState({
    size: 5,
    bandThickness: 2,
    color: '#FFD700',  // Default gold color for the ring
    gemColor: '#00FFFF', // Default gemstone color (cyan)
  });

  const handleInputChange = (name, value) => {
    setRingProperties({
      ...ringProperties,
      [name]: value
    });
  };

  return (
    <div className="app-container">
      <div className="form-side">
        <RingForm ringProperties={ringProperties} onChange={handleInputChange} />
      </div>
      <div className="canvas-side">
        <RingCanvas3D ringProperties={ringProperties} />
      </div>
    </div>
  );
}

export default App;
