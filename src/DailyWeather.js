import React from "react";

import "./DailyWeather.css";

export default function DailyWeather(props) {
  return (
    <div className="DailyWeather">
      <div className="row">
        <div className="col-4">
          <div className="today-temperature">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="units">
              <a href="/" className="celcius">
                °C
              </a>
              |
              <a href="/" className="fahrenheit">
                °F
              </a>
            </span>
          </div>
          <div className="today-date">Friday July 15th</div>
          <div className="current-time">4:00PM</div>
          <div className="weather-description text-capitalize">
            {props.data.description}
          </div>
        </div>
        <div className="col-4">
          <div className="day-icon">
            <img src="images/sun.png" className="icon" alt="sun" />
          </div>
          <div className="day-info">
            Feels Like: {Math.round(props.data.feelsLike)}
          </div>
          <div className="humidity">
            Humidity: {Math.round(props.data.humidity)}%
          </div>
          <div className="wind">Wind: {Math.round(props.data.wind)}km/h</div>
        </div>
        <div className="col-4">
          <div className="sun">
            <img src="images/sunrise 2.png" className="icon" alt="sun" />
          </div>
          <div className="sunrise-time">Sunrise: {props.data.sunrise}</div>
          <div className="sun">
            <img src="images/sunset 2.png" className="icon" alt="sun" />
          </div>
          <div className="sunset-time">Sunset: {props.data.sunset}</div>
        </div>
      </div>
    </div>
  );
}
