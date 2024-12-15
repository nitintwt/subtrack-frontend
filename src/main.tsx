import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import { NextUIProvider } from '@nextui-org/react'
import LoginBox from './components/Login/LoginBox.tsx'
import SignupBox from './components/Signup/SignupBox.tsx'
import ProcessingPage from './pages/ProcessingPage.tsx'
import Landing from './pages/Landing.tsx'
import AuthPageLayout from './AuthPageLayout.tsx'
import AuthLayout from './AuthLayout.tsx'


const router = createBrowserRouter([
  {
    path:"",
    element:<AuthPageLayout/>,
    children:[
      {
        path:"/register",
        element:<SignupBox/>
      },
      {
        path:"/login",
        element:<LoginBox/>
      }
    ]
  },
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Landing/>
      },
      {
        path:"/processing",
        element:<ProcessingPage/>
      },
      {
        path:'/dashboard',
        element:
        <AuthLayout>
          <Dashboard/>
        </AuthLayout>
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
