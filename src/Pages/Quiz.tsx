import Centered from '../StyledComponents/Centered'
import QuizProvider from '../Contexts/QuizContext';
import QuestionsContainer from '../Components/QuestionsContainer';
import CheckAnswersButton from '../Components/CheckAnswersButton';


export default function Quiz() {


    return (
        <QuizProvider>
            <div className='px-5 py-14'>
                <QuestionsContainer />
                <Centered className='mt-10'>
                    <CheckAnswersButton />                    
                </Centered>
            </div>
        </QuizProvider>
  )
}
