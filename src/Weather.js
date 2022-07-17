import React, { useState } from "react";
import DailyWeather from "./DailyWeather";
import Forcast from "./Forcast";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [daily, setDaily] = useState({});

  function showTemperature(response) {
    setDaily({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      location: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `b1075effe9bc0e836b23229ae5c92544`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="transparent-box">
        <div className="weather-app">
          <h1>{daily.location}</h1>
          <form className="search-bar" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search City.."
                  onChange={updateCity}
                  className="w-100"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-success w-100"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Current"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <p>Temp: {Math.round(daily.temperature)}°C</p>
          <p>Humidity: {Math.round(daily.humidity)}%</p>
          <p>Feels Like: {Math.round(daily.feelsLike)}°C</p>
        </div>

        <DailyWeather />
        <Forcast />
      </div>
    </div>
  );
}
