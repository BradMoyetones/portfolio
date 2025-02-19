// Supports weights 100-900
import '@fontsource-variable/onest';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router'
import { ThemeProvider } from './components/theme-provider';
import TopBarProgress from './components/TopBarProgress';
import Particles from './components/Particles';
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopBarProgress />
    <Particles />
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <SpeedInsights/>
  </StrictMode>,
)
