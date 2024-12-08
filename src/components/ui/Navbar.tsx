import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        <Mail className="h-8 w-8 text-blue-500 mr-3" />
        <h1 className="text-xl font-semibold text-gray-900">SubTrack – Your Subscription Tracker</h1>
      </div>
      <Link to='/register'className='text-black'>Signup</Link>
    </header>
  )
}


