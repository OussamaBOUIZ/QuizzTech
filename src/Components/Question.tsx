import { useEffect, useState } from 'react';
import { QuestionType } from '../interfaces';
import ChoiceButton from './ChoiceButton';

interface Choice 
  {id: number, value: string, status: string}


export default function Question({questionItem}: {questionItem: QuestionType}) {

  const [choices, setChoices] = useState<Choice[]>(questionItem.choices);

  function handleChoiceClick (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) {
    console.log("id", id)
    if (questionItem.multiChoices) {
      setChoices(prevChoices => {
        const updatedChoices: Choice[] = [];
        for (let i = 0; i < prevChoices.length; i++) {
          console.log("id", id)
          if (id === prevChoices[i].id) {
            updatedChoices[i] = {...prevChoices[i], status: "selected"};
          } else {
            updatedChoices[i] = prevChoices[i];
          }
        }
        return updatedChoices;
      })
    } else {
      setChoices(prevChoices => {
        const updatedChoices: Choice[] = [];
        for (let i = 0; i < prevChoices.length; i++) {

          if (id === prevChoices[i].id) {
            updatedChoices[i] = {...prevChoices[i], status: "selected"};
          } else {
            updatedChoices[i] = {...prevChoices[i], status: "unselected"};
          }
        }
        return updatedChoices;
      })
    }
  }

  useEffect(()=> console.log("choices: ", choices), [choices]);

  return (
    <figure className='border-b-2 border-lightGrey pb-6 mb-8'>
        <p className='text-xl text-darkBlue font-bold mb-4'>{questionItem.content}</p>
        <div className="flex ga-4 justify-between">
            {choices.map((choice)=> <ChoiceButton 
                        id={choice.id} 
                        status={choice.status}
                        onClick={handleChoiceClick}
                        >{choice.value}
                        </ChoiceButton>
                        )}
        </div>
    </figure>
  )
}
