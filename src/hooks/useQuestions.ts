import { useState } from "react";
import questionApi from '../API/questionApi.json'
import { QuestionType } from "../interfaces";

export const useQuestions = () => {
    const [questions, setQuestions] = useState<QuestionType[]>();

    setQuestions(questionApi)
    return [questions, setQuestions];
}