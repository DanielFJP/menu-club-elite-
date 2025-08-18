import { StrictMode } from 'react'
import "./index.css";
import { createRoot } from 'react-dom/client'
import { App } from './app'
import "bootstrap/dist/css/bootstrap.min.css";





createRoot(document.getElementById('root')).render(
  <App/>
)
