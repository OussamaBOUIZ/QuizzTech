import React from 'react'
import Button from '../StyledComponents/Button'

interface PropType {
  children: React.ReactNode, id: number, status: string,
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void)
}

export default function ChoiceButton({children, id, status, onClick }: PropType) {
  
  return (
    <Button 
      status={status} 
      onClick={(e) => onClick(e,id)}
      >
        {children}
      </Button>
  )
}
