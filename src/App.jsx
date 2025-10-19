import React, { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [bgClass, setBgClass] = useState("from-sky-400 via-blue-600 to-blue-900");

  // Receive weather condition from Home
  const handleBackgroundChange = (condition) => {
    if (!condition) {
      setBgClass("from-sky-400 via-blue-600 to-blue-900");
      return;
    }

    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes("clear")) setBgClass("from-yellow-300 via-orange-400 to-red-500");
    else if (conditionLower.includes("cloud")) setBgClass("from-gray-400 via-gray-600 to-gray-800");
    else if (conditionLower.includes("rain")) setBgClass("from-blue-500 via-blue-700 to-gray-800");
    else if (conditionLower.includes("snow")) setBgClass("from-blue-200 via-blue-300 to-white");
    else setBgClass("from-sky-400 via-blue-600 to-blue-900");
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgClass} flex items-center justify-center text-white transition-all duration-700`}>
      <Home onBackgroundChange={handleBackgroundChange} />
    </div>
  );
};

export default App;
