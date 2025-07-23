//import { StrictMode } from 'react'
import './index.css'
//import App from './App.tsx'
//import { HelmetProvider } from 'react-helmet-async'
//import { PostHogProvider } from 'posthog-js/react'

/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={{
          api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
          defaults: "2025-05-24",
          capture_exceptions: true,
          debug: import.meta.env.MODE === "development",
          opt_out_capturing_by_default: true,
          disable_surveys: true,
        }}
      >
        <App />
      </PostHogProvider>
    </HelmetProvider>
  </StrictMode>
);
*/

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
