import {  useEffect, useState } from 'react';
import { Choice, QuestionType } from '../interfaces';
import ChoiceButton from './ChoiceButton';
import { handleChoiceClick, updatingRestChoiceStatus, updatingSelectedChoiceStatus } from '../Helpers/HandleEventUtils';
import useEffectOnUpdate from '../hooks/useEffectOnUpdate';
import { getSelectedChoicesIds } from '../Helpers/getSelectedChoicesIds';
import { useQuizContext } from '../hooks/contextConsumer';



export default function Question({questionItem}: {questionItem: QuestionType}) {

  const [choices, setChoices] = useState<Choice[]>(questionItem.choices);
  const [rightIds, setRightIds] = useState<number[]>(questionItem.rightIds);
  const [selectedChoicesIds, setSelectedChoicesIds] = useState<number[]>([]);
  const {checkNow} = useQuizContext();
  // console.log("selectedChoicesIds", selectedChoicesIds);


  useEffectOnUpdate(() => {
    setSelectedChoicesIds(getSelectedChoicesIds(choices))
  }, [choices]);

  function checkAnswers() {
    if (!checkNow)
      return;
    console.log("checking....")
    console.log("checkNow", checkNow);
    setChoices((prevChoices) => {
      const evaluatedChoices: Choice[] = prevChoices;
      for (let i = 0; i < selectedChoicesIds.length; i++) {
        if (rightIds.includes(selectedChoicesIds[i])) {
          evaluatedChoices[selectedChoicesIds[i] - 1].status = "correct";
        } else {
          evaluatedChoices[selectedChoicesIds[i] - 1].status = "uncorrect"
        }
      }
      console.log("evaluatedChoices", evaluatedChoices);
      return evaluatedChoices;
    })
  }
  
  console.log("choices", choices)
  useEffectOnUpdate(checkAnswers, [checkNow]);



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
