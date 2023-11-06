import Button from "../Components/Button";
import Centered from "../Components/Centered";

export default function Home() {
  return (
    <Centered className="h-screen">
        <article>
            <h1 className="text-2xl ">QuizzTech</h1>
            <p>Some description if needed</p>
            <Button cta>Start Quizz</Button>
        </article>
    </Centered>
  )
}
