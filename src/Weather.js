import React from "react";
import Forcast from "./Forcast";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Hello From Weather</h1>
      <p>This is my weather app that I have made with SheCodes.</p>
      <Forcast />
    </div>
  );
}
