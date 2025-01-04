import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import { ThemeProvider } from '@/components/theme-provider'

import Root from '@/pages/root'
import Landing from '@/pages/landing.tsx'
import Download from '@/pages/download'
import Documentation from '@/pages/documentation'
import OAuth from '@/pages/oauth'

import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="thunder-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/" element={<Root />}>
            <Route index element={<Landing />} />
            <Route path="download" element={<Download />} />
            <Route path="docs" element={<Documentation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
