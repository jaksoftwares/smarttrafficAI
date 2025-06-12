'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

// OpenWeatherMap icon URL helper
const getWeatherIconUrl = (icon: string) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

// Types
type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type CurrentWeatherData = {
  name: string;
  sys: { country: string };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: WeatherCondition[];
  wind: { speed: number };
  coord: { lat: number; lon: number };
};

type ForecastDay = {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: WeatherCondition[];
};

type ForecastData = {
  daily: ForecastDay[];
};

export default function WeatherPage() {
  const [city, setCity] = useState('Nairobi');
  // const [city, setCity] = useState<string>('Nairobi');
  const [query, setQuery] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Replace with your OpenWeatherMap API key
  const API_KEY = '49cadfa4ac30ba38ba79bfa70d244582';

  // Fetch current weather by city name
  const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch current weather
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&units=metric&appid=${API_KEY}`
      );
      if (!currentRes.ok) throw new Error('City not found');
      const currentData: CurrentWeatherData = await currentRes.json();

      // Fetch One Call API forecast using lat/lon
      const { lat, lon } = currentData.coord;
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
      );
      if (!forecastRes.ok) throw new Error('Failed to load forecast');
      const forecastData: ForecastData = await forecastRes.json();

      setCurrentWeather(currentData);
      setForecast(forecastData.daily.slice(1, 6)); // next 5 days
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('An unknown error occurred');
      setCurrentWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load and when city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // Handle search
  const handleSearch = () => {
    if (query.trim()) {
      setCity(query.trim());
      setQuery('');
    }
  };

  // Format date helper
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (

    
    <div className="p-6 space-y-6 min-h-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>

      {/* Search Bar */}
      <div className="flex gap-4 max-w-md">
        <Input
          placeholder="Enter city name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-grow"
          aria-label="City name"
        />
        <Button onClick={handleSearch} disabled={loading}>
          Search
        </Button>
      </div>

      {/* Loading & Error */}
      {loading && <p className="text-gray-300">Loading weather data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Current Weather */}
      {currentWeather && (
        <Card className="p-6 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-700 to-cyan-600">
          <div className="flex items-center gap-4">
            <Image
              src={getWeatherIconUrl(currentWeather.weather[0].icon)}
              alt={currentWeather.weather[0].description}
              width={80}
              height={80}
              priority={true}
            />
            <div>
              <h2 className="text-4xl font-bold">{Math.round(currentWeather.main.temp)}°C</h2>
              <p className="capitalize">{currentWeather.weather[0].description}</p>
              <p className="mt-1 text-sm opacity-80">
                {currentWeather.name}, {currentWeather.sys.country}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-4 sm:mt-0">
            <div>
              <p className="text-sm opacity-70">Humidity</p>
              <p>{currentWeather.main.humidity}%</p>
            </div>
            <div>
              <p className="text-sm opacity-70">Wind Speed</p>
              <p>{currentWeather.wind.speed} m/s</p>
            </div>
            <div>
              <p className="text-sm opacity-70">Min Temp</p>
              <p>{Math.round(currentWeather.main.temp_min)}°C</p>
            </div>
            <div>
              <p className="text-sm opacity-70">Max Temp</p>
              <p>{Math.round(currentWeather.main.temp_max)}°C</p>
            </div>
          </div>
        </Card>
      )}

      {/* 5-Day Forecast */}
      {forecast.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">5-Day Forecast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {forecast.map((day) => (
              <Card
                key={day.dt}
                className="text-center p-4 bg-gradient-to-t from-gray-800 to-gray-700"
              >
                <p className="font-semibold mb-2">{formatDate(day.dt)}</p>
                <Image
                  src={getWeatherIconUrl(day.weather[0].icon)}
                  alt={day.weather[0].description}
                  width={50}
                  height={50}
                  className="mx-auto"
                  loading="lazy"
                />
                <p className="capitalize">{day.weather[0].description}</p>
                <p className="mt-2">
                  <span className="font-bold">{Math.round(day.temp.max)}°C</span> /{' '}
                  {Math.round(day.temp.min)}°C
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
