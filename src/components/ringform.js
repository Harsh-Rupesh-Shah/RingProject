import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ringform.css';

function RingForm({ ringProperties, onChange }) {
  // State to keep track of the dummy costs
  const [costs, setCosts] = useState({
    shankDesign: 0,
    ringSize: 0,
    shankDiameter: 0,
    solitaireShape: 0,
    cut: 0,
    color: 0,
    clarity: 0,
    solitaire: 0,
    halo: 0,
    gold: 0,
    goldPurities: 0,
  });

  // Dummy cost mapping for each property
  const costMapping = {
    shankDesign: { "No Eternity": 100, "Half Eternity": 200, "Full Eternity": 300 },
    ringSize: { "1": 50, "2": 75, "3": 100 },
    shankDiameter: { "1.5mm": 150, "2mm": 175, "2.5mm": 200 },
    solitaireShape: { "Round": 300, "Princess": 350, "Oval": 400, "Cushion": 450 },
    cut: { "Excellent": 500, "Very Good": 400, "Good": 300 },
    color: { "D": 600, "E": 500, "F": 400, "G": 300 },
    clarity: { "IF": 700, "VVS1": 600, "VVS2": 500, "VS1": 400, "VS2": 300 },
    solitaire: { "1ct": 1000, "2ct": 1500 },
    halo: { "Single Halo": 200, "Double Halo": 400 },
    gold: { "Rose Gold": 500, "Yellow Gold": 400, "White Gold": 450 },
    goldPurities: { "14k": 200, "18k": 300 },
  };

  // Handle dropdown selection and update cost
  const handleDropdownSelect = (name, eventKey) => {
    onChange(name, eventKey);

    // Update cost for the selected property
    const newCost = costMapping[name][eventKey] || 0;
    setCosts(prevCosts => ({
      ...prevCosts,
      [name]: newCost,
    }));
  };

  // Calculate total cost
  const totalCost = Object.values(costs).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className='ringform-container'>
      <div className='ringform-title'>
        <form style={{ textAlign: 'center', width: '100px' }}>
          {/* Dropdown for Shank Design */}
          <div className='mb-3 input-form'>
            <Dropdown onSelect={(eventKey) => handleDropdownSelect('shankDesign', eventKey)}>
              <Dropdown.Toggle variant="secondary" id="dropdown-shank-design">
                {ringProperties.shankDesignStyle || "Select Shank Design"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="No Eternity">No Eternity</Dropdown.Item>
                <Dropdown.Item eventKey="Half Eternity">Half Eternity</Dropdown.Item>
                <Dropdown.Item eventKey="Full Eternity">Full Eternity</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p id='cost-p'>Cost: ₹{costs.shankDesign}</p> {/* Displaying Shank Design Cost */}
          </div>

          {/* Dropdown for Ring Size */}
          <div className='mb-3 input-form'>
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
            <p id='cost-p'>Cost: ₹{costs.ringSize}</p> {/* Displaying Ring Size Cost */}
          </div>

          {/* Continue similarly for the rest of the dropdowns */}
          <div className='mb-3 input-form'>
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
            <p id='cost-p'>Cost: ₹{costs.shankDiameter}</p> {/* Displaying Shank Diameter Cost */}
          </div>

          {/* Continue for solitaireShape, cut, color, clarity, solitaire, halo, gold, goldPurities */}



          <div className="mb-3 input-form">
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
            <p id='cost-p'>Cost: ₹{costs.solitaireShape}</p>
          </div>

          <div className="mb-3 input-form">
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
            <p id='cost-p'>Cost: ₹{costs.cut}</p>

          </div>

          <div className="mb-3 input-form">
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
            <p id='cost-p'>Cost: ₹{costs.color}</p>

          </div>

          <div className="mb-3 input-form">
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
            <p id='cost-p'>Cost: ₹{costs.clarity}</p>

          </div>

          <div className="mb-3 input-form">
            <Dropdown onSelect={(eventKey) => handleDropdownSelect('solitaire', eventKey)}>
              <Dropdown.Toggle variant="secondary" id="dropdown-solitaire">
                {ringProperties.solitaire || "Select Solitaire"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1ct">1ct</Dropdown.Item>
                <Dropdown.Item eventKey="2ct">2ct</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p id='cost-p'>Cost: ₹{costs.solitaire}</p>

          </div>

          <div className="mb-3 input-form">
            <Dropdown onSelect={(eventKey) => handleDropdownSelect('halo', eventKey)}>
              <Dropdown.Toggle variant="secondary" id="dropdown-halo">
                {ringProperties.halo || "Select Halo"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Single Halo">Single Halo</Dropdown.Item>
                <Dropdown.Item eventKey="Double Halo">Double Halo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p id='cost-p'>Cost: ₹{costs.halo}</p>

          </div>

          <div className="mb-3 input-form">
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
            <p id='cost-p'>Cost: ₹{costs.gold}</p>
          </div>

          <div className="mb-3 input-form">
            <Dropdown onSelect={(eventKey) => handleDropdownSelect('goldPurities', eventKey)}>
              <Dropdown.Toggle variant="secondary" id="dropdown-gold-purities">
                {ringProperties.goldPurities || "Select Gold Purity"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="14k">14k</Dropdown.Item>
                <Dropdown.Item eventKey="18k">18k</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p id='cost-p'>Cost: ₹{costs.goldPurities}</p>
          </div>
        </form>
      </div>

      <div className="cost-summary">
        <h2>Total Cost: ₹{totalCost}</h2>
      </div>
    </div>
  );
}

export default RingForm;
