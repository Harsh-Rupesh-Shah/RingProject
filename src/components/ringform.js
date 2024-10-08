import React from 'react';

function RingForm({ ringProperties, onChange }) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <form>
      <div>
        <label>Ring Size:</label>
        <input
          type="range"
          name="size"
          min="1"
          max="15"
          value={ringProperties.size}
          onChange={handleInput}
        />
      </div>

      <div>
        <label>Band Thickness:</label>
        <input
          type="range"
          name="bandThickness"
          min="1"
          max="10"
          value={ringProperties.bandThickness}
          onChange={handleInput}
        />
      </div>

      <div>
        <label>Ring Color:</label>
        <input
          type="color"
          name="color"
          value={ringProperties.color}
          onChange={handleInput}
        />
      </div>

      <div>
        <label>Gemstone Color:</label>
        <input
          type="color"
          name="gemColor"
          value={ringProperties.gemColor}
          onChange={handleInput}
        />
      </div>
    </form>
  );
}

export default RingForm;
