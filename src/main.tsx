import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import { NextUIProvider } from '@nextui-org/react'
import LoginBox from './components/Login/LoginBox.tsx'
import SignupBox from './components/Signup/SignupBox.tsx'


const router = createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/register",
        element:<SignupBox/>
      },
      {
        path:"/login",
        element:<LoginBox/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}/>  
    </NextUIProvider>  
  </StrictMode>,
)
