import React, { useState } from 'react';
import RingForm from './ringform';  // Assuming the ring form is in a separate file
import RingCanvas3D from './ringcanvas3d';  // The 3D rendering file

function RingConfigurator() {
  // State to store ring properties
  const [ringProperties, setRingProperties] = useState({
    gold: 'Yellow Gold', // default value
    ringSize: '2',       // default size
    shankDiameter: '2',  // default shank diameter
  });

  // Handler for updating ring properties
  const handleDropdownSelect = (field, value) => {
    setRingProperties((prevProps) => ({
      ...prevProps,
      [field]: value,
    }));
  };

  return (
    <div>
      <RingForm ringProperties={ringProperties} handleDropdownSelect={handleDropdownSelect} />
      <RingCanvas3D ringProperties={ringProperties} />
    </div>
  );
}

export default RingConfigurator;
