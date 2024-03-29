import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/about-me.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
