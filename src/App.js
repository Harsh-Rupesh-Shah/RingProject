import React, { useState } from 'react';
import RingForm from './components/ringform';
// import RingCanvas3D from './components/ringcanvas3d';
import GLBViewer from './components/blend';
import './App.css';

function App() {
  const [ringProperties, setRingProperties] = useState({
    shankDesignStyle: '', // To store selected shank design
    ringSize: '',          // To store selected ring size
    shankDiameter: '',     // To store selected shank diameter
    solitaireShape: '',    // To store selected solitaire shape
    cut: '',               // To store selected cut
    color: '',             // To store selected color
    clarity: '',           // To store selected clarity
    solitaire: '',         // To store selected solitaire
    halo: '',              // To store selected halo type
    gold: '',              // To store selected gold type
    goldPurities: ''       // To store selected gold purity
  });

  const handleRingPropertyChange = (name, value) => {
    setRingProperties((prevProperties) => ({
      ...prevProperties,
      [name]: value,
    }));
  };

  return (
    <div className="app-container">
      <div className="form-side">
        <RingForm ringProperties={ringProperties} onChange={handleRingPropertyChange} />
      </div>
      <div className="canvas-side">
        {/* <RingCanvas3D ringProperties={ringProperties} /> */}
        <GLBViewer ringProperties={ringProperties} />
      </div>
    </div>
  );
}

export default App;
