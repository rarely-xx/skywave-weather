import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};

export const getForecastByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}forecast`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};
