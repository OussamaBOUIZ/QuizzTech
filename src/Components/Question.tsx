import {  useEffect, useState } from 'react';
import { Choice, QuestionType } from '../interfaces';
import ChoiceButton from './ChoiceButton';
import { handleChoiceClick, updatingRestChoiceStatus, updatingSelectedChoiceStatus } from '../Helpers/HandleEventUtils';
import useEffectOnUpdate from '../hooks/useEffectOnUpdate';
import { getSelectedChoicesIds } from '../Helpers/getSelectedChoicesIds';



export default function Question({questionItem}: {questionItem: QuestionType}) {

  const [choices, setChoices] = useState<Choice[]>(questionItem.choices);
  const [selectedChoicesIds, setSelectedChoicesIds] = useState<number[]>([]);

  console.log("selectedChoicesIds", selectedChoicesIds);

  useEffectOnUpdate(() => {
    setSelectedChoicesIds(getSelectedChoicesIds(choices))
  }, [choices]);

  return (
    <figure className='border-b-2 border-lightGrey pb-6 mb-8'>
        <p className='text-xl text-darkBlue font-bold mb-4'>{questionItem.content}</p>
        <div className="flex ga-4 justify-between">
            {choices.map((choice)=> <ChoiceButton 
                        id={choice.id} 
                        key={choice.id}
                        status={choice.status}
                        onClick={handleChoiceClick}
                        setter={setChoices}
                        notOnlyMe={questionItem.multiChoices}
                        >{choice.value}
                        </ChoiceButton>
                        )}
        </div>
    </figure>
  )
}
