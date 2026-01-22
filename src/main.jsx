import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Adventure from './Components/Adventure.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
import AdventureDetail from './Pages/AdventureDetail.jsx'
import ExpertMeet from './Pages/ExpertMeet.jsx'
import SignUp from './Pages/SignUp.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import SignIn from './Pages/SignIn.jsx'
import UserProfile from './Pages/UserProfile.jsx'

const router = createBrowserRouter([
  {path:'/',Component: Home,
    children:([
      {index:true,
        Component:Adventure}
    ])
  },
  {path:`adventure_detail/:id`,
    loader:({params}) => {
      return params.id
    },
    element:<PrivateRoute><AdventureDetail></AdventureDetail></PrivateRoute>},
     {
    path: "/expert-meet",
    element: <ExpertMeet />
  },
  {path:'sign_in',Component: SignIn},
  {path:'sign_up',Component: SignUp},
  {path:'profile',Component: UserProfile}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>,
)
