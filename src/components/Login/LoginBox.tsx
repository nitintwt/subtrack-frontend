import { useState} from 'react';
import { Toaster, toast } from 'sonner';
import { Button} from '@nextui-org/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function LoginBox() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [cookies , setCookies]= useCookies()
  console.log("cookies", cookies)
  

  const handleSubmit = async ()=>{
    try {
      const login = await axios.post("/api/v1/auth/login" , {
        email:email,
        password:password
      })
      console.log("login" , login)
      setCookies("userData",{id:login?.data?.data?.id , email:login?.data?.data?.email , name:login?.data?.data?.name}, {path:"/"})
      if(login?.data?.data?.tokens) setCookies("token" , {token:true}, {path:"/"})
      toast.success("Login successfull")
      setTimeout(()=>{
        navigate("/dashboard")
      }, 1000)
    } catch (error:any) {
      console.log("Something went wrong while login" , error)
      toast.error(error?.response?.data?.data)
    }
  }

  return (
    <div className="flex min-h-[100dvh]  justify-center bg-gray-950 px-4 py-12 ">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-50 ">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400 ">
            Enter your email and password to log in to your account.
          </p>
        </div>
        <div>
          <h2
            className="block text-sm font-medium text-gray-300 "
          >
            Email address
          </h2>
          <div className="mt-1">
            <input
              autoComplete="email"
              className="block w-full appearance-none rounded-md border text-white border-gray-700 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  bg-gray-950 "
              id="email"
              name="email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h2
            className="block text-sm font-medium text-gray-300 "
          >
            Password
          </h2>
          <div className="mt-1">
            <input
              autoComplete="current-password"
              className="block w-full appearance-none rounded-md border text-white border-gray-700 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  bg-gray-950 "
              id="password"
              name="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          color="primary"
          size="lg"
          variant="shadow"
          className=" w-full"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}