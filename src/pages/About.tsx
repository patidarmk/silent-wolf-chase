import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Info, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-[calc(100vh-120px)] py-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About WeatherApp
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-100">
              <Info className="mr-3 h-6 w-6 text-blue-500" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            Our mission is to provide accurate, real-time weather information and forecasts in a beautifully designed and user-friendly application. We believe that staying informed about the weather should be simple and enjoyable.
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-100">
              <Lightbulb className="mr-3 h-6 w-6 text-purple-500" /> Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            We envision a world where everyone has instant access to reliable weather data, empowering them to plan their days effectively and safely. We continuously innovate to bring the most advanced weather insights to your fingertips.
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-100">
              <Users className="mr-3 h-6 w-6 text-green-500" /> Our Team
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            We are a passionate team of developers, designers, and meteorology enthusiasts dedicated to creating the best weather experience. Our diverse backgrounds contribute to a robust and innovative product.
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">Our Commitment</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          At WeatherApp, we are committed to accuracy, privacy, and user satisfaction. We use state-of-the-art data sources and adhere to strict privacy policies to ensure your data is safe and your weather information is always precise. We are constantly listening to user feedback to improve and evolve our application.
        </p>
      </div>
    </div>
  );
}