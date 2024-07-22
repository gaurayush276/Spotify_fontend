import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { PlayerContextProvider } from '../context/player.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <PlayerContextProvider>
     <App />
   </PlayerContextProvider>
   
 
)
