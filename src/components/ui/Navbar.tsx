import { Link } from 'react-router-dom'
import {Link as NLink, Button} from "@nextui-org/react";

export default function Header() {
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
            <Button variant="bordered" className="mr-2" color='primary'as={NLink} href='/login'>
              Log in
            </Button>
            <Button color='primary' as={NLink} href='/register'>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}


