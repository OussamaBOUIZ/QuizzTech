import { SetStateAction, createContext, useEffect, useState } from "react"
import { QuestionType } from "../interfaces";
import questionApi from '../API/questionApi.json'

interface ContextType {
    questions: QuestionType[],
    setQuestions: React.Dispatch<SetStateAction<QuestionType[]>>,
    setCheckNow: React.Dispatch<SetStateAction<boolean>>,
    checkNow:boolean
}

const QuizContext = createContext<ContextType>({} as ContextType)

export default function QuizProvider({children}: {children: React.ReactNode}) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [checkNow, setCheckNow] = useState(false);
  
  useEffect(() => setQuestions(questionApi));
  
  return (
    <QuizContext.Provider value={{
      questions, setQuestions,
      checkNow, setCheckNow
      }}>
        {children}
    </QuizContext.Provider>
  )
}

export {QuizContext};
