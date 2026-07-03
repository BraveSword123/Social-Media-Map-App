import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.tsx'
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.tsx'

/* createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */ 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<App/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  </StrictMode>,
) 