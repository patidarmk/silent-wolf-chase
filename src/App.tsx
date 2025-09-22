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
import NotFound from "./pages/NotFound";
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import WeatherDashboardPage from './pages/WeatherDashboardPage'; // Import the new dashboard page

const queryClient = new QueryClient();

// Create root route with a layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout> {/* Layout component wraps the Outlet */}
          <Outlet />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound, // Set NotFound component for the root route
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create Weather Dashboard route
const weatherDashboardRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: WeatherDashboardPage,
})

// Create About route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create Contact route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  weatherDashboardRoute,
  aboutRoute,
  contactRoute,
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