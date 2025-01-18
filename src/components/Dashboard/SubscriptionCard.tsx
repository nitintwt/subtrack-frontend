
import { Bell, BellOff, Calendar, DollarSign, RefreshCw, Tag } from 'lucide-react';
import { calculateRenewalDate } from "../../utils/calculateRenewalDate";


export function SubscriptionCard({ subscription , handleToggleNotification}: {subscription:any , handleToggleNotification:any}) {
    const nextRenewalDate:any = calculateRenewalDate(subscription.lastRenewalDate , subscription.frequency)
    console.log("next", nextRenewalDate)
  
    // took out the date part
    const formattedDate = nextRenewalDate?.toISOString()?.slice(0, 10);

  return (
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
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={handleToggleNotification}
        >
          {subscription.isNotification ? (
            <Bell className="w-5 h-5 text-gray-400" />
          ) : (
            <BellOff className="w-5 h-5 text-blue-500" />
          )}
        </button>
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
  );
}