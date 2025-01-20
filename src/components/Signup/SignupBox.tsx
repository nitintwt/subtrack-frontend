import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { Button } from '@nextui-org/button';
import axios from 'axios';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";


export default function SignupBox() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate()

  const handleSubmit = async ()=>{
    try {
      const register = await axios.post(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/auth/register` , {
        name:name,
        email:email,
        password:password
      })
      toast.success("User registered successfully")
      setTimeout(()=>{
        navigate("/auth/login")
      }, 1000)
    } catch (error:any) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
    <Card className="w-full max-w-md bg-black text-white border border-gray-800">
      <CardHeader className="space-y-1 grid justify-center">
        <h2 className="text-2xl font-bold text-center text-blue-500">Sign up</h2>
        <p className="text-center text-gray-400 ">
          Create an account to start booking slots
        </p>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-gray-300">Name</h3>
          <Input 
            id="name" 
            radius='sm'
            variant='bordered'
            required 
            className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-300">Email</h3>
          <Input 
            id="email" 
            type="email"
            radius='sm' 
            variant='bordered'
            required 
            className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-300">Password</h3>
          <Input 
            id="password" 
            type="password" 
            radius='sm'
            variant='bordered'
            required 
            className="bg-gray-900 border-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSubmit}>
          Sign Up
        </Button>
        <div className="text-sm text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </div>
      </CardFooter>
    </Card>
    <Toaster position='bottom-center'/>
  </div>
  );
}
