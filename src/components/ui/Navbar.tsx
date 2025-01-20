import { Link, useNavigate } from 'react-router-dom'
import {Link as NLink, Button} from "@nextui-org/react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import UserAvatar from './UserAvatar';

export default function Header() {
  const [cookies , removeCookie]:any = useCookies()
  const navigate = useNavigate()

  const handleLogout = async ()=>{
    try {
      await axios.post(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/auth/logout`, {userId:cookies?.userData?.id})
      removeCookie("userData")
      navigate("/")
    } catch (error) {
      console.log("Something went wrong" , error)
    }
  }
  return (
    <nav className="bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Subtrack
            </Link>
          </div>
          <div className="flex items-center">
            {cookies?.userData?.id ? <UserAvatar/>
            :  
            <>
            <Button variant="bordered" className="mr-2" color='primary'as={NLink} href='/auth/login'>
              Log in
            </Button>
            <Button color='primary' as={NLink} href='/auth/register'>
              Sign up
            </Button>
            </>}
          </div>
        </div>
      </div>
    </nav>
  )
}


