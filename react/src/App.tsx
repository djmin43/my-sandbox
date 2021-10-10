import { useState } from 'react'
import './App.css'
import colorData from '../static/json/color-data.json'
import ColorList from './components/ColorList'
import StarRating from './components/StarRating'

function App() {
  const [colors, setColors] = useState(colorData)

  const onRemoveColor = (id: string) => {
    const newColors = colors.filter(color => color.id !== id)
    setColors(newColors)
  }
  return (
    <div className="App">
      <ColorList
        onRemoveColor={onRemoveColor}
        colors={colors}
      />
    </div>
  )
}

export default App
  