import React from "react";
import { sendMessage } from "./mqttService";

function ToggleButton({ topic, initialStatus }) {
  const [isOn, setIsOn] = React.useState(initialStatus);

  const handleClick = () => {
    const newStatus = !isOn;
    setIsOn(newStatus);
    const message = { out: newStatus ? 1 : 0 };
    sendMessage(topic, JSON.stringify(message));
  };

  return (
    <button
      className={`toggle-button ${isOn ? "on" : "off"}`}
      onClick={handleClick}
    >
      {isOn ? "Turn Off" : "Turn On"}
    </button>
  );
}

const Control = () => {
  return (
    <div className="home-banner-container1">
      <div className="home-text-section">
        <h1 className="primary-heading1">LEDs Control Status</h1>
        <div className="container">
          <p className="primary-text1">
            Led 1<li>Status: on</li>
            <ToggleButton topic="esp8266/client1" initialStatus={false} />
          </p>
        </div>
        <div className="container">
          <p className="primary-text1">
            Led 2<li>Status: on</li>
            <ToggleButton topic="esp8266/client2" initialStatus={false} />
          </p>
        </div>
      </div>
      <div className="home-text-section1">
        <h1 className="primary-heading1">Sensor Status</h1>
        <div className="container">
          <p className="primary-text1">Temperature Room:</p>
        </div>
        <div className="container">
          <p className="primary-text1">Humidity Room:</p>
        </div>
        <div className="container">
          <p className="primary-text1">Light Room:</p>
        </div>
      </div>
    </div>
  );
};

export default Control;
