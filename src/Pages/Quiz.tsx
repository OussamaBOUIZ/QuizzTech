import { useEffect, useState } from 'react';
import Question from '../Components/Question'
import Button from '../StyledComponents/Button'
import Centered from '../StyledComponents/Centered'

const QuestionsAPI = [
      {
        question: "How would one say goodbye in Spanish?",
        choices: [{id: 1, value: "Adios"}, {id: 2, value:"Hola"}, {id: 3, value:"Au Revoir"}, {id: 4, value:"Salir"}],
        rightChoiceId: 1
      },
      {
        question: "How would one say goodbye in Spanish?",
        choices: [{id: 1, value: "Adios"}, {id: 2, value:"Hola"}, {id: 3, value:"Au Revoir"}, {id: 4, value:"Salir"}],
        rightChoiceId: 1
      },
      {
        question: "How would one say goodbye in Spanish?",
        choices: [{id: 1, value: "Adios"}, {id: 2, value:"Hola"}, {id: 3, value:"Au Revoir"}, {id: 4, value:"Salir"}],
        rightChoiceId: 1
      },
      {
        question: "How would one say goodbye in Spanish?",
        choices: [{id: 1, value: "Adios"}, {id: 2, value:"Hola"}, {id: 3, value:"Au Revoir"}, {id: 4, value:"Salir"}],
        rightChoiceId: 1
      }
]

export default function Quiz() {

    return (
        <div className='px-5 py-14 '>
            <div>
                {QuestionsAPI.map((questObj) => {
                    return <Question 
                            question={questObj.question} 
                            choices={questObj.choices}
                            />
                })}
            </div>
            <Centered className='mt-10'>
                <Button cta>Check answers</Button>
            </Centered>
        </div>
  )
}
