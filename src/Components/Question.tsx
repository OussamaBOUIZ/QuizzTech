import ChoiceButton from './ChoiceButton';

interface QuestionProps {
  question: string,
  choices: {
    id: number,
    value: string,
    status: string
  }[]
}

export default function Question({question, choices}: QuestionProps) {

  return (
    <figure className='border-b-2 border-lightGrey pb-6 mb-8'>
        <p className='text-xl text-darkBlue font-bold mb-4'>{question}</p>
        <div className="flex ga-4 justify-between">
            {choices.map((choice)=> <ChoiceButton id={choice.id} status={choice.status}>{choice.value}</ChoiceButton>)}
        </div>
    </figure>
  )
}
