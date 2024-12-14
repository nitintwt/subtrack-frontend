import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { SlCalender } from "react-icons/sl";

function TotalCard({ title, amount }: { title: string; amount: number }) {
  return (
    <Card className="bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardHeader className="text-sm font-medium text-black">{title}</CardHeader>
        <SlCalender/>
      </CardHeader>
      <CardBody>
        <div className="text-3xl font-bold text-blue-600">${amount.toFixed(2)}</div>
      </CardBody>
    </Card>
  )
}

export default TotalCard