import React, { useState, useEffect } from 'react';
import DailyWeather from './DailyWeather'



function Weather() {
  const [weatherData, setWeatherData] = useState();

  async function getWeather() {
        const url =
          "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Cincinnati&days=3";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "cc95c5ec40msh3a922f0274ab9bdp14553ajsnc9173b7303b5",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        };

        fetch(url, options)
          .then((res) => res.json())
          .then((res) => {
            setWeatherData(res);
            console.log(res);
          })
          .catch((err) => console.log(err));
  }

  useEffect(() => {
    getWeather();
  }, []);

  if (weatherData) console.log(weatherData.forecast.forecastday);
  // const entries = Object.entries(weatherData);

  // entries.forEach(([key, value]) => {
  //   console.log(`${key}: ${value}`);
  // })
  return (
    <div className="container new-middle">
      <div className="container">
        <div className="row">
          {weatherData ? (
            weatherData.forecast.forecastday.map((weatherData, i) => {
              return (
                <DailyWeather
                  key={i}
                  dateNum={weatherData.date}
                  dayIcon={weatherData.day.condition.icon}
                  tempHigh={weatherData.day.maxtemp_f}
                  tempLow={weatherData.day.mintemp_f}
                />
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>

  );
}

export default Weather;




