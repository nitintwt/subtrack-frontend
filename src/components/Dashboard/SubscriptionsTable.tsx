import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { Button } from '@nextui-org/react';
import {Trash2 } from 'lucide-react'

interface Subscription {
  serviceName: string;
  amount: string;
  frequency: string;
  nextBillingDate: string | Date;
}


function SubscriptionsTable({ subscriptions }: { subscriptions: Subscription[] }) {

  const handleDelete = async ()=>{

  }


  return (
    <Card>
      <CardHeader>
        <CardHeader>Subscription Details</CardHeader>
      </CardHeader>
      <CardBody>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn>Email</TableColumn>
              <TableColumn>Plan</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Next Billing Date</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((sub:any) => (
              <TableRow key={sub.email}>
                <TableCell>{sub.email}</TableCell>
                <TableCell>{sub.plan}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    sub.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {sub.status}
                  </span>
                </TableCell>
                <TableCell>{sub.nextBillingDate}</TableCell>
                <TableCell>
                    <Button variant="ghost" size="sm" onClick={handleDelete}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
    
  )
}

export default SubscriptionsTable
