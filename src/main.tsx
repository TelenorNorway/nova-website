import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.tsx'

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes, basename: import.meta.env.BASE_URL },
  // function to have custom setups
  ({ router, routes, isClient, initialState }) => {
    // do something.
  }
);
