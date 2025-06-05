"use client";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"; // Icons for dark/light mode toggle
import { useState, useEffect } from "react";

// Weather API URL (you can replace it with your actual weather API endpoint)
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key

interface TopbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  selectedRegion: string;
}

const Topbar = ({ darkMode, toggleDarkMode, selectedRegion }: TopbarProps) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [weather, setWeather] = useState<string>('Loading...');
  const [temperature, setTemperature] = useState<number | null>(null);

  // Function to get current time
  const getCurrentTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  // Fetch weather based on selected region
  const fetchWeather = async (region: string) => {
    try {
      const response = await fetch(`${WEATHER_API_URL}?q=${region}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data.weather[0].description);
      setTemperature(data.main.temp);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setWeather("Unable to fetch weather");
    }
  };

  useEffect(() => {
    // Update the time every minute
    const intervalId = setInterval(getCurrentTime, 60000);
    getCurrentTime(); // Set time immediately
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  useEffect(() => {
    // Fetch weather when selected region changes
    fetchWeather(selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
      {/* Left: Region Drop Down */}
      <div className="flex items-center space-x-4">
        <select
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white px-4 py-2 rounded-md"
          value={selectedRegion}
          onChange={(e) => fetchWeather(e.target.value)} // Update weather based on selected region
        >
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
        </select>
      </div>

      {/* Center: Time Display */}
      <div className="text-lg text-gray-700 dark:text-white">
        {currentTime}
      </div>

      {/* Right: Weather and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <div className="text-gray-700 dark:text-white">
          {temperature !== null && (
            <span>{weather} - {temperature}°C</span>
          )}
        </div>

        <button
          onClick={toggleDarkMode}
          className="text-xl text-gray-700 dark:text-white"
        >
          {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
