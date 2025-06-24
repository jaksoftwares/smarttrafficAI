"use client";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useState, useEffect } from "react";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "49cadfa4ac30ba38ba79bfa70d244582";

interface TopbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const cityControlCenters: Record<string, string[]> = {
  Nairobi: ["Westlands", "CBD", "Karen", "Eastlands", "Embakasi"],
  Mombasa: ["Nyali", "Likoni", "Kisauni", "Tudor", "Changamwe"],
  Kisumu: ["Milimani", "Nyalenda", "Kondele", "Kisian", "Mamboleo"],
};

const Topbar = ({ darkMode, toggleDarkMode }: TopbarProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [weather, setWeather] = useState<string>("Loading...");
  const [temperature, setTemperature] = useState<number | null>(null);

  const [selectedCity, setSelectedCity] = useState<string>("Nairobi");
  const [selectedControlCenter, setSelectedControlCenter] = useState<string>("Westlands");

  const getCurrentTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString()); // includes hours, minutes, and seconds
  };

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data.weather[0].description);
      setTemperature(data.main.temp);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setWeather("Unable to fetch weather");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentTime, 1000); // Update every second
    getCurrentTime();
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  const handleCityChange = (newCity: string) => {
    if (newCity !== selectedCity) {
      const confirmCityChange = window.confirm(
        `Are you sure you want to switch to ${newCity}? This will reset the control center.`
      );
      if (confirmCityChange) {
        setSelectedCity(newCity);
        const defaultCenter = cityControlCenters[newCity][0];
        setSelectedControlCenter(defaultCenter);
        alert(`Please select the control center for ${newCity}`);
      }
    }
  };

  const handleControlCenterChange = (newCenter: string) => {
    if (newCenter !== selectedControlCenter) {
      const confirmChange = window.confirm(
        `Are you sure you want to switch to control center: ${newCenter}? This may affect current operations.`
      );
      if (confirmChange) {
        setSelectedControlCenter(newCenter);
      }
    }
  };

  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
      {/* Left: City and Control Center Dropdowns */}
      <div className="flex items-center space-x-4">
        <select
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white px-4 py-2 rounded-md"
          value={selectedCity}
          onChange={(e) => handleCityChange(e.target.value)}
        >
          {Object.keys(cityControlCenters).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white px-4 py-2 rounded-md"
          value={selectedControlCenter}
          onChange={(e) => handleControlCenterChange(e.target.value)}
        >
          {cityControlCenters[selectedCity].map((center) => (
            <option key={center} value={center}>
              {center}
            </option>
          ))}
        </select>
      </div>

      {/* Center: City, Center, and Real-Time Clock */}
      <div className="text-md font-semibold text-gray-800 dark:text-white text-center">
        <div>
          City: <span className="text-blue-600 dark:text-blue-400">{selectedCity}</span> | Control Center:{" "}
          <span className="text-green-600 dark:text-green-400">{selectedControlCenter}</span>
        </div>
        <div className="text-sm mt-1 text-gray-600 dark:text-gray-300">{currentTime}</div>
      </div>

      {/* Right: Weather + Theme Toggle */}
      <div className="flex items-center space-x-4">
        <div className="text-gray-700 dark:text-white">
          {temperature !== null && <span>{weather} - {temperature}°C</span>}
        </div>

        <button onClick={toggleDarkMode} className="text-xl text-gray-700 dark:text-white">
          {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
