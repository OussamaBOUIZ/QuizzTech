import Question from "./Question"
import { useQuizContext } from "../hooks/contextConsumer"


export default function QuestionsContainer() {

  const {questions} = useQuizContext();
  
  return (
        <div>
          {questions.map((questObj, index) => {
                return <Question 
                        key={index}
                        questionItem={questObj}
                        />
                      })}
        </div>
  )
}
