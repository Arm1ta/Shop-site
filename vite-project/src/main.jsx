import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthContextProvider from './context/AuthContextProvider'
import {RouterProvider} from 'react-router'
import { router } from './router/router'





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>

  </StrictMode>,
)
