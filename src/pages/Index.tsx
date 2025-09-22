import { MadeWithApplaa } from "@/components/made-with-applaa";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CloudSun } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-950">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200/50 dark:bg-gray-800/70 dark:border-gray-700/50">
          <CloudSun className="h-24 w-24 text-blue-600 dark:text-blue-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-50 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to WeatherApp
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your go-to source for accurate and up-to-date weather forecasts.
            Plan your day with confidence!
          </p>
          <Link to="/weather">
            <Button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800">
              Explore Weather Dashboard
            </Button>
          </Link>
        </div>
      </main>
      <MadeWithApplaa />
    </div>
  );
};

export default Index;