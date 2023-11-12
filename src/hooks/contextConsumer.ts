import { useContext } from "react"
import { QuizContext } from "../Contexts/QuizContext"


export const useQuizContext = () => {
    return useContext(QuizContext)
}