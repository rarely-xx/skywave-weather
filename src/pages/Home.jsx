import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { getWeatherByCity } from "../services/weatherApi";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">🌤️ Skywave Weather</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-300 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default Home;
