import React from "react";
import axios from "axios";

import WeatherIcons from "./WeatherIcons";

import "./Forecast.css";

export default function Forecast(props) {
  function handleCoordinates(response) {
    console.log(response.data);
  }

  let apiKey = `b1075effe9bc0e836b23229ae5c92544`;
  let units = `metric`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleCoordinates);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Wednesday</div>
          <div className="sun-icon">
            <WeatherIcons />
          </div>
          <div>
            <span className="Forecast-high">19°|</span>
            <span className="Forecast-low">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
