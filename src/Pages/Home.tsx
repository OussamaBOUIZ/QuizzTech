import Button from "../Components/Button";
import Centered from "../Components/Centered";

export default function Home() {
  return (
    <Centered className="h-screen">
        <article className="bg-red-300 text-center">
            <h1 className="text-2xl text-darkBlue font-bold mb-1">QuizzTech</h1>
            <p className="text-darkBlue mb-4">Some description if needed</p>
            <Button cta>Start Quizz</Button>
        </article>
    </Centered>
  )
}
