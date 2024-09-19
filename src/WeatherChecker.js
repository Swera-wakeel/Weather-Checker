import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

const WeatherChecker = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const apiKey = '9db2e9a690f49c7533d64dd229cfc6ea'; 
      const response = await axios.get(  `https://api.openweathermap.org/data/2.5/`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-checker">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Check Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default WeatherChecker;
