import React from "react";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="bg-white/20 backdrop-blur-md mt-6 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-xl capitalize">{weather[0].description}</p>

      <div className="flex justify-center items-center mt-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20"
        />
        <h3 className="text-4xl font-bold">{Math.round(main.temp)}°C</h3>
      </div>

      <div className="mt-4 space-y-1 text-sm">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
