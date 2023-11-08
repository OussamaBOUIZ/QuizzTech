import React from 'react'
import Question from '../Components/Question'
import Button from '../Components/Button'
import Centered from '../Components/Centered'

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
