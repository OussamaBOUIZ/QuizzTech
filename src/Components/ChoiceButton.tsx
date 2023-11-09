import React, { useState } from 'react'
import Button from '../StyledComponents/Button'

export default function ChoiceButton({children}: {children: React.ReactNode}) {
    const [status, setStatus] = useState("unselected");
  return (
    <Button status={status}>{children}</Button>
  )
}
