import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { Button } from '@nextui-org/react';
import {Trash2 } from 'lucide-react'

interface Subscription {
  subscription_name: string;
  amount: string;
  frequency: string;
  renewal_date: string;
}


function SubscriptionsTable({ subscriptions }: { subscriptions: Subscription[] }) {
  console.log("table" , subscriptions)

  const handleDelete = async ()=>{

  }


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
            <div>Action</div>
          </div>
          {subscriptions.map((sub: any) => (
            <div key={sub?.subscription_name} className="grid grid-cols-5 gap-4 items-center text-sm py-2 border-b last:border-b-0">
              <div className="truncate">{sub?.subscription_name || "na"}</div>
              <div>{sub?.amount || "NA"}</div>
              <div>
                {sub?.frequency || "NA"}
              </div>
              <div>{sub?.renewal_date || "na"}</div>
              <div>
                <form >
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
  </Card>
    
  )
}

export default SubscriptionsTable
