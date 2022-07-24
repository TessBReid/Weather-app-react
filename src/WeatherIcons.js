import React from "react";

export default function WeatherIcons(props) {
  let codeIcon = {
    "01d": "Clear Sky",
    "01n": "Clear Sky",
    "02d": "few clouds",
    "02n": "few clouds",
    "03d": "scattered clouds",
    "03n": "scattered clouds",
    "04d": "broken clouds",
    "04n": "broken clouds",
    "09d": "shower rain",
    "09n": "shower rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "thunderstorm",
    "11n": "thunderstorm",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  return (
    <div>
      <img src="images/02d.png" alt={props.alt} />
      <img src={codeIcon[props.iconCode]} alt={props.alt} />
    </div>
  );
}
