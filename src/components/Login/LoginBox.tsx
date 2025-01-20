import { useState} from 'react';
import { Toaster, toast } from 'sonner';
import { Button} from '@nextui-org/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import { Link} from 'react-router-dom';

export default function LoginBox() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [cookies , setCookies]= useCookies()  

  const handleSubmit = async ()=>{
    try {
      const login = await axios.post(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/auth/login` , {
        email:email,
        password:password
      })
      setCookies("userData",{id:login?.data?.data?.id , email:login?.data?.data?.email , name:login?.data?.data?.name}, {path:"/"})
      if(login?.data?.data?.tokens) setCookies("token" , {token:true}, {path:"/"})
      toast.success("Login successfull")
      setTimeout(()=>{
        navigate("/dashboard")
      }, 1000)
    } catch (error:any) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
    <Card className="w-full max-w-md bg-black text-white border border-gray-800">
      <CardHeader className="space-y-1 grid justify-center">
        <h2 className="text-2xl font-bold text-center text-blue-500">Log in</h2>
        <p className="text-center text-gray-400">
          Enter your credentials to access your account
        </p>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-gray-300">Email</h3>
          <Input 
            id="email" 
            type="email" 
            radius='sm'
            variant='bordered'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-300">Password</h3>
          <Input 
            id="password" 
            type="password" 
            required 
            radius='sm'
            variant='bordered'
            className="bg-gray-900 border-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSubmit}>
          Log In
        </Button>
        <div className="text-sm text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
    <Toaster position='bottom-center'/>
  </div>
  )
}