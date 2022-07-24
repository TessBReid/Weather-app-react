import React, { useState } from "react";
import DailyWeather from "./DailyWeather";
import Forcast from "./Forcast";
import Location from "./Loction";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      time: "6:35PM",
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `b1075effe9bc0e836b23229ae5c92544`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="transparent-box">
          <div className="weather-app">
            <Location data={weatherData} />
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
          </div>

          <DailyWeather data={weatherData} />
          <Forcast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
