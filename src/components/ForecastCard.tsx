import { Card, CardContent } from "@/components/ui/card";
import { getWeatherIcon, ForecastItem } from "@/data/weather";

interface ForecastCardProps {
  item: ForecastItem;
}

export default function ForecastCard({ item }: ForecastCardProps) {
  const WeatherIcon = getWeatherIcon(item.icon);

  return (
    <Card className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-md rounded-xl">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{item.date}</p>
      {WeatherIcon && <WeatherIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />}
      <p className="text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
        {item.temperature}°{item.unit}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.condition}</p>
    </Card>
  );
}