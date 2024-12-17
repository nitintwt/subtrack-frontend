import { useEffect, useState, useSyncExternalStore } from 'react'
import TotalCard from '../components/Dashboard/TotalCard';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Button , Link as Nlink } from '@nextui-org/react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Processing from './Processing';
import SubscriptionsTable from '../components/Dashboard/SubscriptionsTable';


export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState([])
  const [cookies , setCookies]= useCookies()
  const [isToken , setIsToken]= useState(false)
  const [isProcessing , setIsProcessing]= useState(false)
  const navigate = useNavigate()
  console.log("dashboard",cookies)

  useEffect(()=>{
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const createToken = async ()=>{
      try {
        const createGoogleTokens = await axios.post(`/api/v1/user/googleLogin?code=${code}`, {userId: cookies.userData.id})
        setCookies("token" ,{token:true} )
        query.delete("code")
        navigate(window.location.pathname, { replace: true });
      } catch (error:any) {
        console.log("Something went wrong fetching user data" , error)
      }
    }
    if (code) createToken()
  },[])


  const getSubscriptions = async ()=>{
    setIsProcessing(true)
    try {
      const response = await axios.get(`/api/v1/user/subscriptionsData?userId=${cookies.userData.id}`)
      const subscriptions = JSON.parse(response?.data?.data)
      console.log(subscriptions)
      setSubscriptions(subscriptions)
      setIsProcessing(false)
    } catch (error:any) {
      console.log("Something went wrong while fetching emails" , error)
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 py-12">
      {isProcessing ? (
        <Processing/>
      ) :(
        subscriptions.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            <TotalCard title='otal Subscriptions' amount={10}/>
            <SubscriptionsTable subscriptions={subscriptions}/>
          </div>
          ):(
            cookies.token ? (
              <Card className='m-3'>
                  <CardHeader>Fetch Your Subsciptions</CardHeader>
                <CardBody>
                  <p className="text-gray-600 mb-4">
                    Click this button to securely connect to your email and analyze receipts or invoices from the past year using AI powered extraction.
                    SubTrack will identify subscription details such as service names, billing amounts, renewal dates, and frequencies (monthly or yearly). 
                    Rest assured, no data other than subscription related information is saved to the database, and your information is securely processed.
                  </p>
                  <Button onClick={getSubscriptions} color='primary'>
                    Fetch Subscriptions
                  </Button>
                </CardBody>
              </Card>
            ):(
            <Card className='m-3'>
                <CardHeader>Connect Your Email</CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                Click this button to securely log in with your Google account and grant SubTrack permission to access your Gmail.
                This is required to fetch subscription related emails and extract key details. 
                Your data is handled securely, and only subscription related information is processed.
                </p>
                <Button as={Nlink} href='/api/v1/user/googleOAuth' color='primary'>
                  Connect Your email
                </Button>
              </CardBody>
            </Card>
            ))
      )}
    </div>
  )
}

