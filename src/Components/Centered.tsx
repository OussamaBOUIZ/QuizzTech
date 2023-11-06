import react from 'react'
import styled from 'styled-components'

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function Centered({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <CenteredDiv className={className}>
        {children}
    </CenteredDiv>
  )
}
