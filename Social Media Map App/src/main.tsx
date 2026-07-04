import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.tsx'
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<App/>}></Route>
        <Route path="/createaccount" element={<CreateAccount/>}></Route>
      </Routes>
    </Router>
  </StrictMode>,
) 