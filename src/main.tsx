import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
