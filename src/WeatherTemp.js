import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.conversion * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temp">{Math.round(props.conversion)}</span>
        <span className="units">
          °C |
          <a href="/" className="fahrenheit" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" className="fahrenheit" onClick={convertCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
