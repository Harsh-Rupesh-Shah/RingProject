import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function RingForm({ ringProperties, onChange }) {
  const handleDropdownSelect = (name, eventKey) => {
    onChange(name, eventKey);
    console.log(`Selected ${name}: ${eventKey}`);
    console.log('Current Ring Properties:', {
      ...ringProperties,
      [name]: eventKey,
    });
  };

  return (
    <form>
      <div className='mb-3'>
      <Dropdown onSelect={(eventKey) => handleDropdownSelect('shankDesign', eventKey)}>
      <Dropdown.Toggle variant="secondary" id="dropdown-ring-size">
            {ringProperties.shankDesignStyle || "Select Shank Design"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="No Eternity">No Eternity</Dropdown.Item>
            <Dropdown.Item eventKey="Half Eternity">Half Eternity</Dropdown.Item>
            <Dropdown.Item eventKey="Full Eternity">Full Eternity</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('ringSize', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-ring-size">
            {ringProperties.ringSize || "Select Ring Size"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('shankDiameter', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-shank-diameter">
            {ringProperties.shankDiameter || "Select Shank Diameter"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1.5mm">1.5mm</Dropdown.Item>
            <Dropdown.Item eventKey="2mm">2mm</Dropdown.Item>
            <Dropdown.Item eventKey="2.5mm">2.5mm</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('solitaireShape', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-solitaire-shape">
            {ringProperties.solitaireShape || "Select Solitaire Shape"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Round">Round</Dropdown.Item>
            <Dropdown.Item eventKey="Princess">Princess</Dropdown.Item>
            <Dropdown.Item eventKey="Oval">Oval</Dropdown.Item>
            <Dropdown.Item eventKey="Cushion">Cushion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('cut', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-cut">
            {ringProperties.cut || "Select Cut"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Excellent">Excellent</Dropdown.Item>
            <Dropdown.Item eventKey="Very Good">Very Good</Dropdown.Item>
            <Dropdown.Item eventKey="Good">Good</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('color', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-color">
            {ringProperties.color || "Select Color"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="D">D</Dropdown.Item>
            <Dropdown.Item eventKey="E">E</Dropdown.Item>
            <Dropdown.Item eventKey="F">F</Dropdown.Item>
            <Dropdown.Item eventKey="G">G</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('clarity', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-clarity">
            {ringProperties.clarity || "Select Clarity"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="IF">IF</Dropdown.Item>
            <Dropdown.Item eventKey="VVS1">VVS1</Dropdown.Item>
            <Dropdown.Item eventKey="VVS2">VVS2</Dropdown.Item>
            <Dropdown.Item eventKey="VS1">VS1</Dropdown.Item>
            <Dropdown.Item eventKey="VS2">VS2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('solitaire', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-solitaire">
            {ringProperties.solitaire || "Select Solitaire"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1ct">1ct</Dropdown.Item>
            <Dropdown.Item eventKey="2ct">2ct</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('halo', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-halo">
            {ringProperties.halo || "Select Halo"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Single Halo">Single Halo</Dropdown.Item>
            <Dropdown.Item eventKey="Double Halo">Double Halo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('gold', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-gold">
            {ringProperties.gold || "Select Gold Type"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Rose Gold">Rose Gold</Dropdown.Item>
            <Dropdown.Item eventKey="Yellow Gold">Yellow Gold</Dropdown.Item>
            <Dropdown.Item eventKey="White Gold">White Gold</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3">
        <Dropdown onSelect={(eventKey) => handleDropdownSelect('goldPurities', eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-gold-purities">
            {ringProperties.goldPurities || "Select Gold Purity"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="14k">14k</Dropdown.Item>
            <Dropdown.Item eventKey="18k">18k</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </form>
  );
}

export default RingForm;