import Button from '../StyledComponents/Button'
import Centered from '../StyledComponents/Centered'
import QuizProvider from '../Contexts/QuizContext';
import QuestionsContainer from '../Components/QuestionsContainer';

export default function Quiz() {

    return (
        <QuizProvider>
            <div className='px-5 py-14 '>
                <QuestionsContainer />
                <Centered className='mt-10'>
                    <Button cta>Check answers</Button>
                </Centered>
            </div>
        </QuizProvider>
  )
}
