import React from "react";
import "./Card.css";
import "../svgs/weather_description.svg";

const Card = (props) => {
  const { attribute, value, idName } = props;
  return (
    <div className="card" id={idName}>
      <h3>{attribute}</h3>
      <h4>{value}</h4>
    </div>
  );
};

export default Card;
