import React, { useState } from "react";
import axios from "axios";

import WeatherIcons from "./WeatherIcons";

import "./Forecast.css";

export default function Forecast(props) {
  const [dataLoading, setDataLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleCoordinates(response) {
    setForecast(response.data.daily);
    setDataLoading(true);
  }

  if (dataLoading) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">{forecast[0].dt}</div>
            <div className="sun-icon">
              <WeatherIcons code={forecast[0].weather[0].icon} />
            </div>
            <div>
              <span className="Forecast-high">{forecast[0].temp.max}°|</span>
              <span className="Forecast-low">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `b1075effe9bc0e836b23229ae5c92544`;
    let units = `metric`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleCoordinates);

    return null;
  }
}
