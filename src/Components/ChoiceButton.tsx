import React, { useEffect, useState } from 'react'
import Button from '../StyledComponents/Button'

export default function ChoiceButton({children, id}: {children: React.ReactNode, id: number}) {
    const [status, setStatus] = useState("unselected");
    useEffect(() => {
      console.log("status", status)
    }
      , [status]);
  return (
    <Button 
      status={status} 
      onClick={()=> {
        setStatus((prevStatus) => prevStatus === "selected" ? "unselected": "selected");
        console.log("id : ", id);
      }}
      >
        {children}
      </Button>
  )
}
