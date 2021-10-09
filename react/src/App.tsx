import { useState } from 'react'
import './App.css'
import StarRating from './comps/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StarRating />
    </div>
  )
}

export default App
