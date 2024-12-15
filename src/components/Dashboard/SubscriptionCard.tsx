import { Bell, BellOff } from 'lucide-react'
import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { TiCreditCard } from "react-icons/ti";
import {Chip} from "@nextui-org/chip";

interface Subscription {
  id: string
  name: string
  amount: number
  renewalDate: Date
  type: 'monthly' | 'yearly'
  notificationActive: boolean
}

function SubscriptionCard({ subscription, onNotificationToggle }: { subscription: Subscription, onNotificationToggle: (id: string) => void }) {
  return (
    <Card className="bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardHeader className="text-lg font-semibold text-black flex items-center">
            <TiCreditCard className="w-7 h-7 mr-2 text-blue-600" />
            {subscription.name}
          </CardHeader>
        </div>
      </CardHeader>
      <CardBody className="pt-2 pl-6">
        <p className="text-2xl font-bold text-blue-600">${subscription.amount.toFixed(2)}</p>
        <Chip className="bg-blue-100 text-blue-600 px-2  text-sm font-medium mt-1 mb-1" >
              monthly
          </Chip>
        <p className="text-sm text-gray-600">
          Renews on {subscription.renewalDate.toLocaleDateString()}
        </p>
      </CardBody>
      <CardFooter className='pl-5'>
        <Button 
          
          className={`w-full transition-colors duration-300 ${subscription.notificationActive ? 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          onClick={() => onNotificationToggle(subscription.id)}
        >
          {subscription.notificationActive ? (
            <>
              <BellOff className="mr-2 h-4 w-4" />
              Disable Notifications
            </>
          ) : (
            <>
              <Bell className="mr-2 h-4 w-4" />
              Enable Notifications
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SubscriptionCard