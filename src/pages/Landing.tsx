
import Procedure from "../components/Landing/Procedure"
import Benefits from "../components/Landing/Benefits"
import {Link , Button} from "@nextui-org/react";
import { useCookies } from 'react-cookie';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import Dashboard from "../components/Landing/Dashboard";
import Notifications from "../components/Landing/Notifications";
import Testimonials from "../components/Landing/Testimonials";
import Pricing from "../components/Landing/Pricing";
import Footer from "../components/Landing/Footer";


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
    <div className="font-sans bg-white text-gray-800">
    <Hero />
    <Features />
    <Dashboard />
    <Notifications />
    <Testimonials />
    <Pricing />
    <Footer />
  </div>

  )
}

export default Landing
