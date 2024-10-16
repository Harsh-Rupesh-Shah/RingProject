import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./ringform.css";

function RingForm({ ringProperties, onChange, onReset }) {
  // State to keep track of the dummy costs
  const initialCosts = {
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
  };

  const [costs, setCosts] = useState(initialCosts);

  // Dummy cost mapping for each property
  const costMapping = {
    shankDesign: {
      "No Eternity": 100,
      "Half Eternity": 200,
      "Full Eternity": 300,
    },
    ringSize: { 1: 50, 2: 75, 3: 100 },
    shankDiameter: { "1.5mm": 150, "2mm": 175, "2.5mm": 200 },
    solitaireShape: { Round: 300, Princess: 350, Oval: 400, Cushion: 450 },
    cut: { Excellent: 500, "Very Good": 400, Good: 300 },
    color: { D: 600, E: 500, F: 400, G: 300 },
    clarity: { IF: 700, VVS1: 600, VVS2: 500, VS1: 400, VS2: 300 },
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
    setCosts((prevCosts) => ({
      ...prevCosts,
      [name]: newCost,
    }));
  };

  const handleReset = () => {
    setCosts(initialCosts);
    onChange("shankDesign", "");
    onChange("ringSize", "");
    onChange("shankDiameter", "");
    onChange("solitaireShape", "");
    onChange("cut", "");
    onChange("color", "");
    onChange("clarity", "");
    onChange("solitaire", "");
    onChange("halo", "");
    onChange("gold", "");
    onChange("goldPurities", "");
    onReset();
  };

  // Calculate total cost
  const totalCost = Object.values(costs).reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div className="ringform-title card my-card">
        <div className="header-with-reset">
          <h2 className="ringform-title-header">Ring Estimation</h2>
          <button
            className="btn reset-button"
            onClick={handleReset}
          >
            Reset
          </button>
          <div className="cost-summary">
            <h2>Total Cost: ₹{totalCost}</h2>
          </div>
        </div>
        <form>
        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-shank-design">
            Shank Design Style
          </label>
          <Dropdown
            onSelect={(eventKey) =>
              handleDropdownSelect("shankDesign", eventKey)
            }
          >
            <Dropdown.Toggle id="dropdown-shank-design">
              {ringProperties.shankDesign || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="No Eternity">No Eternity</Dropdown.Item>
              <Dropdown.Item eventKey="Half Eternity">
                Half Eternity
              </Dropdown.Item>
              <Dropdown.Item eventKey="Full Eternity">
                Full Eternity
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.shankDesign}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-ring-size">
            Ring Size
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("ringSize", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-ring-size">
              {ringProperties.ringSize || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.ringSize}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-shank-diameter">
            Shank Diameter
          </label>
          <Dropdown
            onSelect={(eventKey) =>
              handleDropdownSelect("shankDiameter", eventKey)
            }
          >
            <Dropdown.Toggle id="dropdown-shank-diameter">
              {ringProperties.shankDiameter || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="1.5mm">1.5mm</Dropdown.Item>
              <Dropdown.Item eventKey="2mm">2mm</Dropdown.Item>
              <Dropdown.Item eventKey="2.5mm">2.5mm</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.shankDiameter}</p>
        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-solitaire-shape">
            Solitaire Shape
          </label>
          <Dropdown
            onSelect={(eventKey) =>
              handleDropdownSelect("solitaireShape", eventKey)
            }
          >
            <Dropdown.Toggle id="dropdown-solitaire-shape">
              {ringProperties.solitaireShape || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="Round">Round</Dropdown.Item>
              <Dropdown.Item eventKey="Princess">Princess</Dropdown.Item>
              <Dropdown.Item eventKey="Oval">Oval</Dropdown.Item>
              <Dropdown.Item eventKey="Cushion">Cushion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.solitaireShape}</p>
        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-cut">
            Cut
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("cut", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-cut">
              {ringProperties.cut || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="Excellent">Excellent</Dropdown.Item>
              <Dropdown.Item eventKey="Very Good">Very Good</Dropdown.Item>
              <Dropdown.Item eventKey="Good">Good</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.cut}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-color">
            Color
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("color", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-color">
              {ringProperties.color || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="D">D</Dropdown.Item>
              <Dropdown.Item eventKey="E">E</Dropdown.Item>
              <Dropdown.Item eventKey="F">F</Dropdown.Item>
              <Dropdown.Item eventKey="G">G</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.color}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-clarity">
            Clarity
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("clarity", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-clarity">
              {ringProperties.clarity || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="IF">IF</Dropdown.Item>
              <Dropdown.Item eventKey="VVS1">VVS1</Dropdown.Item>
              <Dropdown.Item eventKey="VVS2">VVS2</Dropdown.Item>
              <Dropdown.Item eventKey="VS1">VS1</Dropdown.Item>
              <Dropdown.Item eventKey="VS2">VS2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.clarity}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-solitaire">
            Solitaire
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("solitaire", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-solitaire">
              {ringProperties.solitaire || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="1ct">1ct</Dropdown.Item>
              <Dropdown.Item eventKey="2ct">2ct</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.solitaire}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-halo">
            Halo
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("halo", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-halo">
              {ringProperties.halo || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="Single Halo">Single Halo</Dropdown.Item>
              <Dropdown.Item eventKey="Double Halo">Double Halo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.halo}</p>

        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-gold">
            Gold Type
          </label>
          <Dropdown
            onSelect={(eventKey) => handleDropdownSelect("gold", eventKey)}
          >
            <Dropdown.Toggle id="dropdown-gold">
              {ringProperties.gold || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="Rose Gold">Rose Gold</Dropdown.Item>
              <Dropdown.Item eventKey="Yellow Gold">Yellow Gold</Dropdown.Item>
              <Dropdown.Item eventKey="White Gold">White Gold</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.gold}</p>
        </div>

        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-gold-purities">
            Gold Purity
          </label>
          <Dropdown
            onSelect={(eventKey) =>
              handleDropdownSelect("goldPurities", eventKey)
            }
          >
            <Dropdown.Toggle id="dropdown-gold-purities">
              {ringProperties.goldPurities || "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="show-dropdown">
              <Dropdown.Item eventKey="14k">14k</Dropdown.Item>
              <Dropdown.Item eventKey="18k">18k</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id='cost-p'>Cost: ₹{costs.goldPurities}</p>

        </div>
        </form>
      </div>
      {/* <div className="card">
    <div id="submit-btn">
          <button className="btn btn-primary me-4 w-100">Reset</button>
          <button className="btn btn-primary w-100">Submit</button>
        </div>
    </div> */}
    </>
  );
}

export default RingForm;
