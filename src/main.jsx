import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Adventure from './Components/Adventure.jsx'
import ContextProvider from './Context/ContextProvider.jsx'

const router = createBrowserRouter([
  {path:'/',Component: Home,
    children:([
      {index:true,
        loader:()=>fetch('eco-adventure.json'),
        Component:Adventure}
    ])
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>,
)
