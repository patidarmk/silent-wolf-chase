import Header from './Header';
import Footer from './Footer';
import { Outlet } from '@tanstack/react-router';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}