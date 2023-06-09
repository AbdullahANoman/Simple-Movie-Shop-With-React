import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './Components/MovieCard/MovieCard'
import LoadData from './Components/LoadData/LoadData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoadData></LoadData>
    </div>
  )
}

export default App
