import { Fragment } from "react/jsx-runtime"
import { Button } from '@nextui-org/react';
import {Trash2 , BellRing } from 'lucide-react'
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";

function SubscriptionRow({sub}:any) {
  const [cookies]= useCookies()
  const [isDeleted , setIsDeleted]= useState(false)

  const handleDelete = async (id:string)=>{
    try {
      await axios.delete(`/api/v1/user/deleteSubscription?userId=${cookies.userData.id}&&subscriptionId=${id}`)
      setIsDeleted(true)
    } catch (error) {
      console.log("Something went wrong " , error)
    }
  }

  return (
    <Fragment>
      <div className="truncate">{sub?.service || "na"}</div>
        <div>{sub?.amount || "NA"}</div>
        <div>
          {sub?.frequency || "NA"}
        </div>
        <div>{sub?.renewalDate || "na"}</div>
        <div>
          <form >
            {isDeleted ? (
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4 text-gray-500" />
            </Button>
            ):(
              <>
            <Button className="m-1" variant="ghost" size="sm" onClick={()=> handleDelete(sub.id)}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
            <Button variant="ghost" size="sm">
              <BellRing className="h-4 w-4 text-green-500"/>
            </Button>
            </>
            )}
          </form>
        </div>
    </Fragment>
  )
}

export default SubscriptionRow
