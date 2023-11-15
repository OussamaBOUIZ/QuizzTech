import Button from "../StyledComponents/Button";
import { useQuizContext } from "../hooks/contextConsumer";

export default function CheckAnswersButton() {
    const {setCheckNow} = useQuizContext();

    function checkAnswers() {
        setCheckNow(true);
    }

    return (
        <Button cta onClick={checkAnswers}>Check answers</Button>
    )
}
