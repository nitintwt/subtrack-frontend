import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";

function AuthLayout({children}:any) {
  const navigate = useNavigate()
  const [loader , setLoader]= useState(true)
  const cookies = useCookies()
  const userDbId = sessionStorage.getItem('userData')
  console.log(cookies)

  useEffect(()=>{
    if (!cookies?.[0]?.userData?.id){
      navigate("/")
    }
    setLoader(false)
  },[userDbId])
  
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout
