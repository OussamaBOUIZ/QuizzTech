import ChoiceButton from './ChoiceButton';
interface choiceObj {
  id: number,
  value: string
}

interface PropType {
  question: string,
  choices: choiceObj[]
}

export default function Question({question, choices}: PropType) {

  return (
    <figure className='border-b-2 border-lightGrey pb-6 mb-8'>
        <p className='text-xl text-darkBlue font-bold mb-4'>{question}</p>
        <div className="flex ga-4 justify-between">
            {choices.map((choice)=> <ChoiceButton id={choice.id}>{choice.value}</ChoiceButton>)}
        </div>
    </figure>
  )
}
