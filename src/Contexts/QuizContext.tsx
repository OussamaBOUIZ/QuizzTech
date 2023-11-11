import { SetStateAction, createContext, useState } from "react"
import { useQuestions } from "../hooks/useQuestions";
import { QuestionType } from "../interfaces";

interface ContextType {
    setQuestions: React.Dispatch<SetStateAction<QuestionType[] | undefined>>
}

const QuizContext = createContext<ContextType>({} as ContextType)

export default function QuizProvider({children}: {children: React.ReactNode}) {
  
  const [questions, setQuestions] = useQuestions();

  return (
    <QuizContext.Provider value={{questions, setQuestions}}>
        {children}
    </QuizContext.Provider>
  )
}
