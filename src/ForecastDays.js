import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDays(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="sun-icon">
        <WeatherIcons iconCode={props.data.weather[0].icon} />
      </div>
      <div>
        <span className="Forecast-high">{maxTemperature()} | </span>
        <span className="Forecast-low">{minTemperature()}</span>
      </div>
    </div>
  );
}
