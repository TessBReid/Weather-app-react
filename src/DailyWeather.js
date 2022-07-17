import React from "react";

import "./DailyWeather.css";

export default function DailyWeather() {
  return (
    <div className="DailyWeather">
      <div className="row">
        <div className="col-4">
          <div className="today-temperature">
            <span className="temp">15</span>
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
          <div className="weather-description">Clear</div>
        </div>
        <div className="col-4">
          <div className="day-icon">SUN ICON</div>
          <div className="day-info">Feels Like:</div>
          <div className="humidity">Humidity:</div>
          <div className="wind">Wind:</div>
        </div>
        <div className="col-4">
          <div className="sun">SUNRISE ICON</div>
          <div className="sunrise-time">Sunrise:</div>
          <div className="sun">SUNSET ICON</div>
          <div className="sunset-time">Sunset:</div>
        </div>
      </div>
    </div>
  );
}
