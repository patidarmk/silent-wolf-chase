import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Header from './components/Header'; // Import the Header component
import WeatherDashboardPage from './pages/WeatherDashboardPage'; // Import the WeatherDashboardPage
import AboutPage from './pages/About'; // Import the AboutPage
import ContactPage from './pages/Contact'; // Import the ContactPage
import NotFound from './pages/NotFound'; // Import the NotFound page

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* The Header is now part of the individual pages or a layout component if desired */}
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create weather dashboard route
const weatherRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/weather',
  component: WeatherDashboardPage,
})

// Create about page route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

// Create contact page route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

// Create a 404 Not Found route
const notFoundRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '*', // Catch-all route for 404
  component: NotFound,
});


// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  weatherRoute,
  aboutRoute,
  contactRoute,
  notFoundRoute, // Add the 404 route
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;