import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import ForecastCard from "@/components/ForecastCard";
import { mockWeatherDataForIndex, mockForecastDataForIndex } from "@/data/weather"; // Corrected imports
import { MadeWithApplaa } from "@/components/made-with-applaa";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Current Weather & Forecast
      </h1>

      <div className="w-full flex justify-center mb-12">
        <CurrentWeatherCard data={mockWeatherDataForIndex} />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {mockForecastDataForIndex.map((item, index) => (
          <ForecastCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Index;