import {
  Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind, Droplet, Thermometer,
  type LucideProps
} from 'lucide-react';
import React from 'react';

// Define the type for a Lucide React component
export type LucideIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

// Map weather conditions to Lucide icons
const icons: { [key: string]: LucideIcon } = {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplet, // For humidity
  Thermometer // For temperature
};

export function getWeatherIcon(iconName: string): LucideIcon | undefined {
  return icons[iconName];
}

export interface WeatherData {
  city: string;
  temperature: number;
  unit: 'C' | 'F';
  condition: string;
  icon: string; // Corresponds to a key in the icons map
  humidity: number;
  windSpeed: number;
  pressure: number;
  uvIndex: number;
  sunrise: string;
  sunset: string;
}

export interface ForecastItem {
  date: string; // e.g., "Mon"
  temperature: number;
  unit: 'C' | 'F';
  condition: string;
  icon: string; // Corresponds to a key in the icons map
}

export const mockWeatherData: WeatherData = {
  city: "San Francisco",
  temperature: 18,
  unit: 'C',
  condition: "Partly Cloudy",
  icon: "Cloud",
  humidity: 75,
  windSpeed: 15,
  pressure: 1012,
  uvIndex: 4,
  sunrise: "06:30 AM",
  sunset: "07:45 PM",
};

export const mockForecastData: ForecastItem[] = [
  { date: "Mon", temperature: 19, unit: 'C', condition: "Cloudy", icon: "Cloud" },
  { date: "Tue", temperature: 21, unit: 'C', condition: "Sunny", icon: "Sun" },
  { date: "Wed", temperature: 17, unit: 'C', condition: "Rainy", icon: "CloudRain" },
  { date: "Thu", temperature: 18, unit: 'C', condition: "Partly Cloudy", icon: "Cloud" },
  { date: "Fri", temperature: 20, unit: 'C', condition: "Sunny", icon: "Sun" },
  { date: "Sat", temperature: 22, unit: 'C', condition: "Sunny", icon: "Sun" },
  { date: "Sun", temperature: 16, unit: 'C', condition: "Windy", icon: "Wind" },
];