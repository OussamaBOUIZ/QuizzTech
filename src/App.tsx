import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'



export default function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="quiz" element={<Quiz/>} />
        </Routes>
      </BrowserRouter>
    )
}
