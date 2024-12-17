import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { Users } from 'lucide-react'

function TotalCard({ title, amount }: { title: string; amount: number }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardHeader className="text-sm font-medium">{title}</CardHeader>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardBody>
        <div className="text-2xl font-bold">{amount}</div>
      </CardBody>
    </Card>
  )
}

export default TotalCard