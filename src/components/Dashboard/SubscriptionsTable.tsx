import {Card, CardHeader, CardBody} from "@nextui-org/card";
import SubscriptionRow from "./SubscriptionRow";

interface Subscription {
  service: string;
  amount: string;
  frequency: string;
  renewalDate: string;
}

function SubscriptionsTable({ subscriptions }: { subscriptions: Subscription[] }) {

  return (
    <Card>
      <CardHeader>
        Subscription Details
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4 font-semibold text-sm">
            <div>Email</div>
            <div>Plan</div>
            <div>Status</div>
            <div>Next Billing Date</div>
            <div className="lg:ml-8">Action</div>
          </div>
          {subscriptions.map((sub: any) => (
            <div key={sub.service} className="grid grid-cols-5 gap-4 items-center text-sm py-2 border-b last:border-b-0">
              <SubscriptionRow sub={sub}/>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
    
  )
}

export default SubscriptionsTable
