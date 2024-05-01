import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(prevState => !prevState);
    // You can perform actions based on the current state here
    if (isOn) {
      // Code to turn off
    } else {
      // Code to turn on
    }
  };

  return (
    <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      {isOn ? 'Turn Off' : 'Turn On'}
    </button>
  );
}

const Control = () => {
  return (
      <div className="home-banner-container1">
        <div className="home-text-section">
          <h1 className="primary-heading1">Leds Control Status</h1>
          <div className="container">
            <p className="primary-text1">
              Led 1
              <li>Status: on</li>
              <ToggleButton />
            </p>
          </div>
          <div className="container">
            <p className="primary-text1">
              Led 2
              <li>Status: on</li>
              <ToggleButton />
            </p>
          </div>
        </div>
        <div className="home-text-section1">
          <h1 className="primary-heading1">Sensor Status</h1>
          <div className="container">
            <p className="primary-text1">
              Temperature Room: 
            </p>
          </div>
          <div className="container">
            <p className="primary-text1">
              Humicity Room: 
            </p>
          </div>
          <div className="container">
            <p className="primary-text1">
              Light Room: 
            </p>
          </div>
        </div>
      </div>
  );
};

export default Control;
