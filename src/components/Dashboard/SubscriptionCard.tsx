import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";
import { Bell, BellOff, Calendar, DollarSign, RefreshCw, SubscriptIcon, Tag , Trash2 } from 'lucide-react';
import { calculateRenewalDate } from "../../utils/calculateRenewalDate";
import { Toaster , toast } from 'sonner';
import { memo } from "react";

export const SubscriptionCard= memo(({ subscription}: {subscription:any}) => {
  const [cookies]= useCookies()
  const [isDeleted , setIsDeleted]= useState(false)
  const [isNotify , setisNotify] = useState(subscription.isNotification)

  const nextRenewalDate:any = calculateRenewalDate(subscription.lastRenewalDate , subscription.frequency)
  
  // took out the date part
  const formattedDate = nextRenewalDate?.toISOString()?.slice(0, 10)

  const handleStartNotification = async (id:string)=>{
    try {
      const handleStart = await axios.put(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/user/startNotification`, {
        subscriptionId:id
      })
      setisNotify(true)
      toast.success("Notification Started")
    } catch (error) {
      toast.error("Something went wrong.Try again")
    }
  }

  const handleStopNotification = async (id:string)=>{
    toast.error("Notification feature is under development.");
    try {
      const stop = await axios.put(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/user/stopNotification`, {
        subscriptionId:id
      })
      setisNotify(false)
      toast.success("Notification service stopped!")
    } catch (error) {
      toast.error("Something went wrong.Try again")
    }
  }

  const handleDelete = async (id:string)=>{
    try {
      await axios.delete(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/user/subscription?userId=${cookies.userData.id}&&subscriptionId=${id}`)
      setIsDeleted(true)
    } catch (error) {
      toast.success("Deleted Successfully")
    }
  }

  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {subscription.service}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500 capitalize">
                {subscription.category}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isNotify ? (
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={()=>handleStopNotification(subscription?.id)}
            >
                <Bell className="w-5 h-5 text-gray-400" />
            </button>
          ):(
            <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={()=>handleStartNotification(subscription?.id)}
          >
            <BellOff className="w-5 h-5 text-blue-500" />
          </button>
          )}
          <button
            onClick={()=> handleDelete(subscription?.id)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Delete subscription"
          >
            {isDeleted ? (<Trash2 className="w-5 h-5 text-gray-400" />):(<Trash2 className="w-5 h-5 text-red-600" />)}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-4 h-4 text-gray-400" />
          <div>
            <span className="font-medium">{subscription.amount}</span>
            <p className="text-xs text-gray-500 capitalize">{subscription.frequency}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-4 h-4 text-gray-400" />
          <div>
            <span>{subscription.lastRenewalDate}</span>
            <p className="text-xs text-gray-500">Last renewal</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className={`w-4 h-4 'text-orange-500' : 'text-gray-400'}`} />
          <div>
            <span className='text-orange-500 font-medium'>
              {formattedDate}
            </span>
            <p className="text-xs text-gray-500">Next renewal</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
})