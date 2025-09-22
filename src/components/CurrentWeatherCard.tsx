import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWeatherIcon, CurrentWeather } from "@/data/weather"; // Changed WeatherData to CurrentWeather
import { Droplet, Wind, Gauge, Sunrise, Sunset, Sun } from 'lucide-react'; // Added Sun import

interface CurrentWeatherCardProps {
  data: CurrentWeather; // Changed prop type to CurrentWeather
}

export default function CurrentWeatherCard({ data }: CurrentWeatherCardProps) {
  const WeatherIcon = getWeatherIcon(data.icon);

  return (
    <Card className="w-full max-w-md bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-lg rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {data.city}
        </CardTitle>
        {WeatherIcon && <WeatherIcon className="h-10 w-10 text-blue-500 dark:text-blue-400" />}
      </CardHeader>
      <CardContent>
        <div className="text-6xl font-extrabold text-gray-900 dark:text-gray-50 mb-2">
          {data.temperature}°{data.unit}
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{data.description}</p>

        <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-200">
          <div className="flex items-center space-x-2">
            <Droplet className="h-5 w-5 text-blue-400" />
            <span>Humidity: {data.humidity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-blue-400" />
            <span>Wind: {data.windSpeed} km/h</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-5 w-5 text-blue-400" />
            <span>Pressure: {data.pressure} hPa</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5 text-blue-400" /> {/* This Sun is now correctly imported */}
            <span>UV Index: {data.uvIndex}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sunrise className="h-5 w-5 text-yellow-500" />
            <span>Sunrise: {data.sunrise}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sunset className="h-5 w-5 text-orange-500" />
            <span>Sunset: {data.sunset}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}