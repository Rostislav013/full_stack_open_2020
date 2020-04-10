import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  console.log(api_key);
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country}`
      )
      .then((response) => {
        //console.log(response.data);
        const result = Object.keys(response.data).map(
          (element) => response.data[element]
        );
        console.log(result);
        setWeatherData(result);
        //console.log(weatherData);
      });
  }, []);

  return (
    <div>
      {weatherData.length === 3 ? (
        <div>
          <h1>Weather in {weatherData[1].name} </h1>
          <p>Teperature {weatherData[2].temperature} Celcius</p>
          <img src={weatherData[2].weather_icons} alt="weather icon" />
          <p>
            Wind {weatherData[2].wind_speed} mph directoin{" "}
            {weatherData[2].wind_dir}
          </p>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};
export default Weather;
