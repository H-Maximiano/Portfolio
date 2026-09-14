import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Importando direto de 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './pages/Home/'
import Projects from './pages/Projects/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)