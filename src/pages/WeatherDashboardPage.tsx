import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CurrentWeatherCard from '@/components/CurrentWeatherCard';
import ForecastCard from '@/components/ForecastCard';
import { weatherData, CityWeather, ForecastDay } from '@/data/weather';
import { showSuccess, showError } from '@/utils/toast';

export default function WeatherDashboardPage() {
  const [currentCity, setCurrentCity] = useState<string>("New York");
  const [weather, setWeather] = useState<CityWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeatherData(currentCity);
  }, [currentCity]);

  const fetchWeatherData = (city: string) => {
    setLoading(true);
    setError(null);
    // Simulate API call delay
    setTimeout(() => {
      const foundWeather = weatherData.find(
        (data) => data.current.city.toLowerCase() === city.toLowerCase()
      );

      if (foundWeather) {
        setWeather(foundWeather);
        showSuccess(`Weather for ${city} loaded successfully!`);
      } else {
        setWeather(null);
        setError(`Weather data not found for "${city}". Please try another city.`);
        showError(`Weather data not found for "${city}".`);
      }
      setLoading(false);
    }, 1000); // 1 second delay
  };

  const handleSearch = (location: string) => {
    setCurrentCity(location);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Weather Dashboard
      </h1>

      <SearchBar onSearch={handleSearch} initialLocation={currentCity} />

      {loading && (
        <div className="mt-8 text-lg text-gray-700 dark:text-gray-300">Loading weather data...</div>
      )}

      {error && (
        <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg dark:bg-red-900/30 dark:border-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {!loading && !error && weather && (
        <div className="w-full flex flex-col items-center mt-8 space-y-8">
          <CurrentWeatherCard data={weather.current} />

          <section className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              5-Day Forecast
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {weather.forecast.map((day: ForecastDay, index: number) => (
                <ForecastCard key={index} item={day} />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}