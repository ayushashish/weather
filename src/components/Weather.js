import React, { Fragment } from "react";
import FetchData from "../hooks/fetchData";
import "./Weather.css";
import Card from "./Card";

const Weather = () => {
  const { data } = FetchData();
  console.log(data);
  if (data.main !== undefined) {
    return (
      <Fragment>
        <div className="city">
          <h3>{`${data.name}`}</h3>
        </div>
        <div className="weather-elements">
          <Card
            attribute="Temperature"
            value={`${data.main.temp}ºC`}
            idName="temperature"
          />
          <Card
            attribute="Feels like"
            value={`${data.main.feels_like}ºC`}
            idName="feels-like"
          />
          <Card
            attribute="Humidity"
            value={`${data.main.humidity}%`}
            idName="humidity"
          />
          <Card
            attribute="Description"
            value={`${data.weather[0].main}`}
            idName="description"
          />
        </div>
      </Fragment>
    );
  } else {
    return (
      <div>
        <h5>Loading Data...</h5>
      </div>
    );
  }
};

export default Weather;
