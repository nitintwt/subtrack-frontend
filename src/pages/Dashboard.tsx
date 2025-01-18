import { useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Search, Filter, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { useCookies } from 'react-cookie'
import Processing from './Processing';
import { GmailConnect } from '../components/GmailConnect';
import { FetchSubscriptions } from '../components/FetchSubscriptions';
import { Toaster , toast } from 'sonner';
import { SubscriptionCard } from '../components/Dashboard/SubscriptionCard';

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState([])
  const [cookies , setCookies]= useCookies()
  const [isProcessing , setIsProcessing]= useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate()

  useEffect(()=>{
    if(!cookies?.userData?.id){
      navigate("/")
    }
  },[])

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
        console.log("Something went wrong fetching user data")
      }
    }
    if (code) createToken()
  },[])

  useEffect(()=>{
    const fethcSubsciptions = async ()=>{
      const response = await axios.get(`/api/v1/user/userDetails?userId=${cookies?.userData.id}`)
      setSubscriptions(response.data.data.subscriptions)
    }
    fethcSubsciptions()
  },[])

  const getSubscriptions = async ()=>{
    setIsProcessing(true)
    try {
      const response = await axios.get(`/api/v1/user/subscriptions?userId=${cookies.userData.id}`)
      setSubscriptions(response.data.data)
      setIsProcessing(false)
    } catch (error:any) {
      setIsProcessing(false)
      toast.error("Something went wrong. Try again")
    }
  }

  const filteredSubscriptions = subscriptions
  ?.filter((sub:any) => sub.service.toLowerCase().includes(searchTerm.toLowerCase()))
  ?.filter((sub:any) => selectedCategory === 'all' || sub.category === selectedCategory)

const totalMonthly = subscriptions?.reduce((acc:any, sub:any) => {
  if (sub.frequency === 'monthly') return acc+Number(sub.amount)
}, 0)

const categories = ['all', ...new Set(subscriptions?.map((sub:any) => sub.category))]

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
      {isProcessing ? (
        <Processing/>
      ) :(
        subscriptions?.length > 0 ? (
          <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Monthly Spending</p>
                  <h3 className="text-2xl font-bold text-gray-900">{totalMonthly}</h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Subscriptions</p>
                  <h3 className="text-2xl font-bold text-gray-900">{subscriptions?.length}</h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Upcoming Renewals</p>
                  <h3 className="text-2xl font-bold text-gray-900">{5}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search subscriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSubscriptions.map((subscription:any) => (
              <SubscriptionCard
                key={subscription.id}
                subscription={subscription}
              />
            ))}
            {filteredSubscriptions?.length === 0 && (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-500">No subscriptions found matching your criteria.</p>
              </div>
            )}
          </div>
        </>
          ):(
            cookies.token ? (
              <FetchSubscriptions getSubscriptions={getSubscriptions}/>
            ):(
              <GmailConnect/>
            ))
      )}
    </div>
     <Toaster position="bottom-center" />
    </div>
  )
}

