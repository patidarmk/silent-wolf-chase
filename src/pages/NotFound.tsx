import { useLocation, Link } from "@tanstack/react-router";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-800">
      <div className="text-center p-8 bg-white/80 backdrop-blur-md dark:bg-gray-800/80 rounded-xl shadow-lg">
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">404</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">Oops! Page not found</p>
        <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;