import {
  Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind, Droplet, Thermometer,
  type LucideIcon // Correctly import LucideIcon type
} from 'lucide-react';
import React from 'react';

// Define the type for a Lucide React component
export type WeatherIcon = LucideIcon;

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

export interface CurrentWeather {
  city: string;
  country: string;
  temperature: number;
  unit: 'C' | 'F'; // Added unit to CurrentWeather
  description: string;
  icon: string; // Corresponds to a key in the icons map
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  pressure: number;
  visibility: number;
  uvIndex: number; // Added uvIndex to CurrentWeather
  sunrise: string; // Added sunrise to CurrentWeather
  sunset: string; // Added sunset to CurrentWeather
}

export interface ForecastDay {
  date: string; // YYYY-MM-DD
  dayOfWeek: string;
  minTemp: number;
  maxTemp: number;
  unit: 'C' | 'F'; // Added unit to ForecastDay
  description: string;
  icon: string; // Corresponds to a key in the icons map
}

export interface CityWeather {
  current: CurrentWeather;
  forecast: ForecastDay[];
}

export const weatherData: CityWeather[] = [
  {
    current: {
      city: "New York",
      country: "USA",
      temperature: 22,
      unit: 'C',
      description: "Partly Cloudy",
      icon: "Cloud",
      humidity: 65,
      windSpeed: 15,
      feelsLike: 23,
      pressure: 1012,
      visibility: 10,
      uvIndex: 4,
      sunrise: "06:30 AM",
      sunset: "07:45 PM",
    },
    forecast: [
      { date: "2024-08-01", dayOfWeek: "Thu", minTemp: 18, maxTemp: 25, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
      { date: "2024-08-02", dayOfWeek: "Fri", minTemp: 19, maxTemp: 27, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-03", dayOfWeek: "Sat", minTemp: 20, maxTemp: 28, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-04", dayOfWeek: "Sun", minTemp: 17, maxTemp: 24, unit: 'C', description: "Light Rain", icon: "CloudRain" },
      { date: "2024-08-05", dayOfWeek: "Mon", minTemp: 16, maxTemp: 22, unit: 'C', description: "Cloudy", icon: "Cloud" },
    ],
  },
  {
    current: {
      city: "London",
      country: "UK",
      temperature: 18,
      unit: 'C',
      description: "Light Rain",
      icon: "CloudRain",
      humidity: 80,
      windSpeed: 20,
      feelsLike: 17,
      pressure: 1008,
      visibility: 8,
      uvIndex: 2,
      sunrise: "05:30 AM",
      sunset: "08:30 PM",
    },
    forecast: [
      { date: "2024-08-01", dayOfWeek: "Thu", minTemp: 15, maxTemp: 20, unit: 'C', description: "Light Rain", icon: "CloudRain" },
      { date: "2024-08-02", dayOfWeek: "Fri", minTemp: 16, maxTemp: 21, unit: 'C', description: "Cloudy", icon: "Cloud" },
      { date: "2024-08-03", dayOfWeek: "Sat", minTemp: 17, maxTemp: 23, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
      { date: "2024-08-04", dayOfWeek: "Sun", minTemp: 14, maxTemp: 19, unit: 'C', description: "Heavy Rain", icon: "CloudRain" },
      { date: "2024-08-05", dayOfWeek: "Mon", minTemp: 13, maxTemp: 18, unit: 'C', description: "Cloudy", icon: "Cloud" },
    ],
  },
  {
    current: {
      city: "Tokyo",
      country: "Japan",
      temperature: 30,
      unit: 'C',
      description: "Sunny",
      icon: "Sun",
      humidity: 70,
      windSpeed: 10,
      feelsLike: 32,
      pressure: 1010,
      visibility: 10,
      uvIndex: 7,
      sunrise: "05:00 AM",
      sunset: "07:00 PM",
    },
    forecast: [
      { date: "2024-08-01", dayOfWeek: "Thu", minTemp: 28, maxTemp: 33, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-02", dayOfWeek: "Fri", minTemp: 29, maxTemp: 34, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-03", dayOfWeek: "Sat", minTemp: 27, maxTemp: 32, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
      { date: "2024-08-04", dayOfWeek: "Sun", minTemp: 26, maxTemp: 30, unit: 'C', description: "Thunderstorms", icon: "CloudLightning" },
      { date: "2024-08-05", dayOfWeek: "Mon", minTemp: 25, maxTemp: 29, unit: 'C', description: "Light Rain", icon: "CloudRain" },
    ],
  },
  {
    current: {
      city: "Paris",
      country: "France",
      temperature: 25,
      unit: 'C',
      description: "Sunny",
      icon: "Sun",
      humidity: 60,
      windSpeed: 12,
      feelsLike: 26,
      pressure: 1015,
      visibility: 10,
      uvIndex: 6,
      sunrise: "06:00 AM",
      sunset: "09:00 PM",
    },
    forecast: [
      { date: "2024-08-01", dayOfWeek: "Thu", minTemp: 20, maxTemp: 27, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-02", dayOfWeek: "Fri", minTemp: 21, maxTemp: 28, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
      { date: "2024-08-03", dayOfWeek: "Sat", minTemp: 22, maxTemp: 29, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-04", dayOfWeek: "Sun", minTemp: 19, maxTemp: 25, unit: 'C', description: "Light Rain", icon: "CloudRain" },
      { date: "2024-08-05", dayOfWeek: "Mon", minTemp: 18, maxTemp: 24, unit: 'C', description: "Cloudy", icon: "Cloud" },
    ],
  },
  {
    current: {
      city: "Sydney",
      country: "Australia",
      temperature: 15,
      unit: 'C',
      description: "Cloudy",
      icon: "Cloud",
      humidity: 75,
      windSpeed: 25,
      feelsLike: 14,
      pressure: 1018,
      visibility: 9,
      uvIndex: 3,
      sunrise: "06:45 AM",
      sunset: "05:30 PM",
    },
    forecast: [
      { date: "2024-08-01", dayOfWeek: "Thu", minTemp: 12, maxTemp: 17, unit: 'C', description: "Cloudy", icon: "Cloud" },
      { date: "2024-08-02", dayOfWeek: "Fri", minTemp: 13, maxTemp: 18, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
      { date: "2024-08-03", dayOfWeek: "Sat", minTemp: 14, maxTemp: 19, unit: 'C', description: "Sunny", icon: "Sun" },
      { date: "2024-08-04", dayOfWeek: "Sun", minTemp: 11, maxTemp: 16, unit: 'C', description: "Light Rain", icon: "CloudRain" },
      { date: "2024-08-05", dayOfWeek: "Mon", minTemp: 10, maxTemp: 15, unit: 'C', description: "Cloudy", icon: "Cloud" },
    ],
  },
  {
    current: {
      city: "Dubai",
      country: "UAE",
      temperature: 40,
      unit: 'C',
      description: "Clear Sky",
      icon: "Sun",
      humidity: 30,
      windSpeed: 18,
      feelsLike: 45,
      pressure: 1005,
      visibility: 10,
      uvIndex: 9,
      sunrise: "05:40 AM",
      sunset: "07:10 PM",
    },
    forecast: [
      { date: "2024-08-01", dayOfWeek: "Thu", minTemp: 38, maxTemp: 43, unit: 'C', description: "Clear Sky", icon: "Sun" },
      { date: "2024-08-02", dayOfWeek: "Fri", minTemp: 39, maxTemp: 44, unit: 'C', description: "Clear Sky", icon: "Sun" },
      { date: "2024-08-03", dayOfWeek: "Sat", minTemp: 37, maxTemp: 42, unit: 'C', description: "Clear Sky", icon: "Sun" },
      { date: "2024-08-04", dayOfWeek: "Sun", minTemp: 36, maxTemp: 41, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
      { date: "2024-08-05", dayOfWeek: "Mon", minTemp: 35, maxTemp: 40, unit: 'C', description: "Clear Sky", icon: "Sun" },
    ],
  },
];

// Mock data for Index page (if needed, otherwise remove)
export const mockWeatherDataForIndex: CurrentWeather = {
  city: "San Francisco",
  country: "USA", // Added missing country property
  temperature: 18,
  unit: 'C',
  description: "Partly Cloudy",
  icon: "Cloud",
  humidity: 75,
  windSpeed: 15,
  feelsLike: 18,
  pressure: 1012,
  visibility: 10,
  uvIndex: 4,
  sunrise: "06:30 AM",
  sunset: "07:45 PM",
};

export const mockForecastDataForIndex: ForecastDay[] = [
  { date: "Mon", dayOfWeek: "Mon", minTemp: 15, maxTemp: 19, unit: 'C', description: "Cloudy", icon: "Cloud" },
  { date: "Tue", dayOfWeek: "Tue", minTemp: 17, maxTemp: 21, unit: 'C', description: "Sunny", icon: "Sun" },
  { date: "Wed", dayOfWeek: "Wed", minTemp: 13, maxTemp: 17, unit: 'C', description: "Rainy", icon: "CloudRain" },
  { date: "Thu", dayOfWeek: "Thu", minTemp: 14, maxTemp: 18, unit: 'C', description: "Partly Cloudy", icon: "Cloud" },
  { date: "Fri", dayOfWeek: "Fri", minTemp: 16, maxTemp: 20, unit: 'C', description: "Sunny", icon: "Sun" },
  { date: "Sat", dayOfWeek: "Sat", minTemp: 18, maxTemp: 22, unit: 'C', description: "Sunny", icon: "Sun" },
  { date: "Sun", dayOfWeek: "Sun", minTemp: 12, maxTemp: 16, unit: 'C', description: "Windy", icon: "Wind" },
];