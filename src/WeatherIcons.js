import React from "react";

export default function WeatherIcons(props) {
  return <img src={`/images/${props.iconCode}.png`} alt={props.alt} />;
}
