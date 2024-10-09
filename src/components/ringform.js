import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./ringform.css";

function RingForm({ ringProperties, onChange }) {
  const handleDropdownSelect = (name, eventKey) => {
    onChange(name, eventKey);
    console.log(`Selected ${name}: ${eventKey}`);
    console.log("Current Ring Properties:", {
      ...ringProperties,
      [name]: eventKey,
    });
  };

  return (
    <>
    <div className="ringform-title card my-card">
      <h2 className="ringform-title-header">Ring Estimation</h2>
      <form>
        <div className="input-form">
          <label className="form-label bold" htmlFor="dropdown-shank-design">
            Shank Design Style
          </label>
          <Dropdown
            onSelect={(eventKey) =>
              handleDropdownSelect("shankDesignStyle", eventKey)
            }
          >
            <Dropdown.Toggle id="dropdown-shank-design">
              {ringProperties.shankDesignStyle || "Select"}
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
        </div>
      </form>
    </div>
    <div className="card">
    <div id="submit-btn">
          <button className="btn btn-primary me-4 w-100">Submit</button>
          <button className="btn btn-primary w-100">Reset</button>
        </div>
    </div>
    </>
  );
}

export default RingForm;
