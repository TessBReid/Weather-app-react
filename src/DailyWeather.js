import React from "react";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";
import FormatDate from "./FormatDate";

import "./DailyWeather.css";

export default function DailyWeather(props) {
  function formateDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  return (
    <div className="DailyWeather">
      <div className="row">
        <div className="col-4">
          <div className="today-temperature">
            <WeatherTemp conversion={props.data.temperature} />
          </div>
          <FormatDate date={props.data.date} />
          <div className="weather-description text-capitalize">
            {props.data.description}
          </div>
        </div>
        <div className="col-4">
          <div className="dayIcon">
            <WeatherIcons
              iconCode={props.data.icon}
              alt={props.data.description}
            />
          </div>

          <div className="day-info">
            Feels Like: {Math.round(props.data.feelsLike)}°
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
          <div className="sunrise-time">
            Sunrise: {formateDate(props.data.sunrise)}
          </div>
          <div className="sun">
            <img src="images/sunset 2.png" className="icon" alt="sun" />
          </div>
          <div className="sunset-time">
            Sunset: {formateDate(props.data.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
}
