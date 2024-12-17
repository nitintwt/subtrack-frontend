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
        <CardHeader>Subscription Details</CardHeader>
      </CardHeader>
      <CardBody>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn>Service</TableColumn>
              <TableColumn>Amount</TableColumn>
              <TableColumn>Frequency</TableColumn>
              <TableColumn>Next Billing Date</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions?.map((sub) => (
            <TableRow key={sub?.subscription_name}>
              <TableCell>{sub?.subscription_name || "na"}</TableCell>
              <TableCell>{sub?.amount || "NA"}</TableCell>
              <TableCell>{sub?.frequency || "NA"}</TableCell>
              <TableCell>{sub?.renewal_date || "na"}</TableCell>
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
