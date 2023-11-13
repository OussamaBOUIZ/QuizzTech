import { SetStateAction, createContext, useEffect, useState } from "react"
import { QuestionType } from "../interfaces";
import questionApi from '../API/questionApi.json'

interface ContextType {
    questions: QuestionType[],
    setQuestions: React.Dispatch<SetStateAction<QuestionType[]>>
}

const QuizContext = createContext<ContextType>({} as ContextType)

export default function QuizProvider({children}: {children: React.ReactNode}) {
  console.log("render");
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => setQuestions(questionApi));
  
  return (
    <QuizContext.Provider value={{
      questions, setQuestions
      }}>
        {children}
    </QuizContext.Provider>
  )
}

export {QuizContext};
