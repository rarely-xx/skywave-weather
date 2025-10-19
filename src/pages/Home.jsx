import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Loader from "../components/Loader";
import { getWeatherByCity, getForecastByCity } from "../services/weatherApi";

const Home = ({ onBackgroundChange }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) handleSearch(lastCity);
  }, []);

  const handleSearch = async (city) => {
    try {
      setError("");
      setLoading(true);
      const [weatherData, forecastData] = await Promise.all([
        getWeatherByCity(city),
        getForecastByCity(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      onBackgroundChange(weatherData.weather[0].main);
      localStorage.setItem("lastCity", city);
    } catch (err) {
      setWeather(null);
      setForecast(null);
      setError("City not found. Please try again.");
      onBackgroundChange(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">🌤️ Skywave Weather</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-300 mt-4">{error}</p>}
      {loading && <Loader />}
      {!loading && weather && <WeatherCard data={weather} />}
      {!loading && forecast && <ForecastCard forecast={forecast} />}
    </div>
  );
};

export default Home;
