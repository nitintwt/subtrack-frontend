import { useEffect, useState, useSyncExternalStore } from 'react'
import Button from '../components/ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'

export default function Dashboard() {
  const [cookies]= useCookies()
  const [isProcessing , setIsProcessing]= useState(false)
  const navigate = useNavigate()
  console.log("cookies" , cookies)

  useEffect(()=>{
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const fetchUserDetails = async ()=>{
      try {
        const user = await axios.get(`/api/v1/user/userDetails?userId=${cookies?.userData.id}`)
        if(!user?.data?.tokens && code){
          const createGoogleTokens = await axios.post(`/api/v1/user/googleLogin?code=${code}`, {userId: cookies.userData.id})
          console.log( "Token created",createGoogleTokens )
        }
        query.delete("code")
        navigate(window.location.pathname, { replace: true });
      } catch (error:any) {
        console.log("Something went wrong fetching user data" , error)
      }
    }
    if (code) fetchUserDetails()
  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          {!isProcessing ? (
            <>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Welcome to SubTrack
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Easily track and manage all your subscriptions from your Gmail account.
              </p>
              <div className="mt-8">
                <Button >
                  <Link to="/api/v1/user/googleOAuth">Login</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
              <p className="text-xl font-semibold text-gray-700">
                Processing your email data... Please wait.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}