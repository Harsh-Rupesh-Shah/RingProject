import React, { useState } from 'react';
import RingForm from './components/ringform';
// import RingCanvas3D from './components/ringcanvas3d';
import GLBViewer from './components/blend';
import GLB2 from './components/blend2';
import './App.css';

function App() {
  const initialRingProperties = {
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
  };

  const [ringProperties, setRingProperties] = useState(initialRingProperties);
  const [ringDisplay, setRingDisplay] = useState(false);

  const handleRingPropertyChange = (name, value) => {
    setRingProperties((prevProperties) => ({
      ...prevProperties,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setRingProperties(initialRingProperties);
  }

  return (
    <div className="app-container">
      <div className="form-side">
        <RingForm ringProperties={ringProperties} onChange={handleRingPropertyChange} onReset={handleReset} />
      </div>
      <div className='options'>
        <button className="btn-primary" onClick={() => setRingDisplay(false)}>
          Diamond
        </button>
        <button className="btn-primary" onClick={() => setRingDisplay(true)}>
          Ring
        </button>
      </div>
      <div className="canvas-side">
      
        {ringDisplay ? <GLBViewer ringProperties={ringProperties} /> : <GLB2 />}
        {/* <RingCanvas3D ringProperties={ringProperties} /> */}
        {/* <GLBViewer ringProperties={ringProperties} /> */}
        {/* <GLB2/> */}
      </div>
    </div>
  );
}

export default App;
