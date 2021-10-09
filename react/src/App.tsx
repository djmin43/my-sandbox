import { useState } from 'react'
import './App.css'
import colorData from '../static/json/color-data.json'
import ColorList from './components/ColorList'
import StarRating from './components/StarRating'

function App() {
  const [colors] = useState(colorData)
  
  return (
    <div className="App">
      <ColorList 
        colors={colors}
      />
    </div>
  )
}

export default App
  