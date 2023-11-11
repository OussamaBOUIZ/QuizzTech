import React, { useEffect, useState } from 'react'
import Button from '../StyledComponents/Button'


interface PropType {
  children: React.ReactNode, id: number, status: string;
}

export default function ChoiceButton({children, id, status}: PropType) {
  
  return (
    <Button 
      status={status} 
      onClick={()=> {
        console.log("id : ", id);
      }}
      >
        {children}
      </Button>
  )
}
