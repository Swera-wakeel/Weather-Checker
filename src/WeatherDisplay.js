// src/components/WeatherDisplay.js
import React from 'react';
import './App.css';

const WeatherDisplay = ({ weather }) => {
  const { name, main, weather: weatherData } = weather;
  const temperature = main.temp;
  const description = weatherData[0].description;
  const icon = weatherData[0].icon;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
    </div>
  );
};

export default WeatherDisplay;
