import React, { useState } from 'react'
import ChoiceButton from './ChoiceButton';

const QuestionAPI = {
  question: "How would one say goodbye in Spanish?",
  choises: ["Adios", "Hola", "Au Revoir", "Salir"]
}

export default function Question() {
  const [status, setStatus] = useState("unselected");
  return (
    <figure className='border-b-2 border-border pb-6 mb-8 '>
        <p className='text-xl text-darkBlue font-bold mb-4'>{QuestionAPI.question}</p>
        <div className="flex ga-4 justify-between">
            {QuestionAPI.choises.map((choice)=> <ChoiceButton>{choice}</ChoiceButton>)}
        </div>
    </figure>
  )
}
