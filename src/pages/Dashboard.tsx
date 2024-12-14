import { useState, useMemo } from 'react'
import TotalCard from '../components/Dashboard/TotalCard';
import SubscriptionCard from '../components/Dashboard/SubscriptionCard';
import {Calendar, DollarSign } from 'lucide-react'
import { div } from 'framer-motion/client';

interface Subscription {
  id: string
  name: string
  amount: number
  renewalDate: Date
  type: 'monthly' | 'yearly'
  notificationActive: boolean
}

const mockSubscriptions: Subscription[] = [
  { id: '1', name: 'Netflix', amount: 15.99, renewalDate: new Date('2024-05-15'), type: 'monthly', notificationActive: false },
  { id: '2', name: 'Spotify', amount: 9.99, renewalDate: new Date('2024-04-30'), type: 'monthly', notificationActive: true },
  { id: '3', name: 'Amazon Prime', amount: 119, renewalDate: new Date('2025-01-01'), type: 'yearly', notificationActive: false },
  { id: '4', name: 'Adobe Creative Cloud', amount: 52.99, renewalDate: new Date('2024-06-10'), type: 'monthly', notificationActive: true },
  { id: '5', name: 'Microsoft 365', amount: 69.99, renewalDate: new Date('2025-03-15'), type: 'yearly', notificationActive: false },
]


export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions)

  const handleNotificationToggle = (id: string) => {
    setSubscriptions(prevSubscriptions =>
      prevSubscriptions.map(sub =>
        sub.id === id ? { ...sub, notificationActive: !sub.notificationActive } : sub
      )
    )
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <TotalCard title="Monthly Total" amount={244} />
          <TotalCard title="Yearly Total" amount={1993}  />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map(subscription => (
            <SubscriptionCard 
              key={subscription.id} 
              subscription={subscription} 
              onNotificationToggle={handleNotificationToggle}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

