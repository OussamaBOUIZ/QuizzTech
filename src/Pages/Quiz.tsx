import React from 'react'
import Question from '../Components/Question'
import Button from '../StyledComponents/Button'
import Centered from '../StyledComponents/Centered'

export default function Quiz() {
  return (
        <div className='px-5 py-14 '>
            <div>
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
            <Centered>
                <Button cta>Check answers</Button>
            </Centered>
        </div>
  )
}
