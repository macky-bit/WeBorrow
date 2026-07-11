import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import LogIn from './login/LogIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogIn />
  </StrictMode>,
)
