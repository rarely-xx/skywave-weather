import React from "react";
import { motion } from "framer-motion";

const ForecastCard = ({ forecast }) => {
  const grouped = forecast.list.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  const dailyData = Object.keys(grouped).slice(0, 5).map((date) => {
    const dayData = grouped[date][4] || grouped[date][0];
    return {
      date,
      temp: Math.round(dayData.main.temp),
      icon: dayData.weather[0].icon,
      desc: dayData.weather[0].description,
    };
  });

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dailyData.map((day, index) => (
          <motion.div
            key={day.date}
            className="bg-white/20 backdrop-blur-md rounded-xl p-3 flex flex-col items-center text-center shadow-md hover:bg-white/30 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-sm font-semibold">{new Date(day.date).toDateString().slice(0, 10)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg font-bold">{day.temp}°C</p>
            <p className="capitalize text-sm">{day.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
