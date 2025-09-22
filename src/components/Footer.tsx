import { MadeWithApplaa } from "@/components/made-with-applaa";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-white/90 backdrop-blur-xl dark:bg-gray-900/90 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} WeatherApp. All rights reserved.</p>
        <MadeWithApplaa />
      </div>
    </footer>
  );
}