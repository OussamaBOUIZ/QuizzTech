import Question from "./Question"
import { useQuizContext } from "../hooks/contextConsumer"


export default function QuestionsContainer() {

  const {questions} = useQuizContext();
  console.log("questions", questions)
  return (
        <div>
          {questions.map((questObj, index) => {
                return <Question 
                        key={index}
                        question={questObj.content} 
                        choices={questObj.choices}
                        />
                      })}
        </div>
  )
}
