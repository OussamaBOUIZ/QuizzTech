import styled from 'styled-components'
import Button from './Components/Button'
import './App.css'

const Centered = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function App() {

    return (
    <Centered>
        <div className='flex flex-col gap-4 items-center'>
          <Button cta>Start Quizz</Button>
          <Button cta>Check answers</Button>
          <Button cta>Play again</Button>
          <Button status='unselected'>Start Quizz</Button>
          <Button status='correct'>Adios</Button>
          <Button status='uncorrect'>Start Quizz</Button>
          <Button status='selected'>Hola</Button>
        </div>
    </Centered>
    )
}
