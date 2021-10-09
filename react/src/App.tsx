import { ReactElement, useState } from 'react'
import './App.css'
import StarRating from './comps/StarRating'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: "lightblue"}}
        onDoubleClick={(e: React.ChangeEvent<HTMLInputElement>) => alert("double click")}
      />
    </div>
  )
}

export default App
  