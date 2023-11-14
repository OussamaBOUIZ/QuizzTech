import React, { SetStateAction } from 'react'
import Button from '../StyledComponents/Button'
import { Choice } from '../interfaces'

interface PropType {
  children: React.ReactNode, id: number, status: string,
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
    id: number, setter: React.Dispatch<SetStateAction<Choice[]>>, notOnlyMe: boolean) => void),
  setter: React.Dispatch<SetStateAction<Choice[]>>,
  notOnlyMe: boolean,
}

export default function ChoiceButton({children, id, status, onClick, setter, notOnlyMe }: PropType) {
  
  return (
    <Button 
      status={status} 
      onClick={(e) => onClick(e,id, setter, notOnlyMe)}
      >
        {children}
      </Button>
  )
}
