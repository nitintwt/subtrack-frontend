import Features from "../components/Landing/Features"
import Procedure from "../components/Landing/Procedure"
import Benefits from "../components/Landing/Benefits"
import Footer from "../components/Landing/Footer"
import {Link , Button} from "@nextui-org/react";
import { useCookies } from 'react-cookie';
import { useEffect } from "react";
import { useNavigate } from "react-router";


function Landing() {
  const [cookies]= useCookies()
  const navigate = useNavigate()
  console.log("lanfing cookies",cookies)

  useEffect(()=>{
    if(cookies?.userData?.id){
      navigate("/dashboard")
    }
  },[])
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Manage Your Subscriptions with Ease
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Subtrack uses AI-powered email integration to automatically detect and manage your subscriptions, saving you time and money.
          </p>
          <div className="mt-10">
            <Button size="lg" radius="md" className="text-blue-600 bg-white hover:bg-gray-100 font-bold" as={Link} href="/auth/register">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
      <Features/>
      <Procedure/>
      <Benefits/>
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take control of your subscriptions?</span>
            <span className="block text-blue-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button size="lg" radius="md" className=" font-bold text-blue-600 bg-white hover:bg-gray-100" as={Link} href="/auth/register">
                Get started
              </Button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Landing
