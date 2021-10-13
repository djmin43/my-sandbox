import { useState, useEffect } from 'react'
import './App.css'
import colorData from '../static/json/color-data.json'
import ColorList from './components/ColorList'
import StarRating from './components/StarRating'

function App() {
  const [colors, setColors] = useState(colorData)
  const [name, setName] = useState('jay')

  const onRemoveColor = (id: string) => {
    const newColors = colors.filter(color => color.id !== id)
    setColors(newColors)
  }

  useEffect(() =>{
    // console.log('---begin---')
    setName('new')
    console.log(name)
    // console.log('----end----')
  }
  , [])
  
  return (
    <div className="App">
      <button onClick={() => setName('click')}>
        {name}
      </button>
      <ColorList
        onRemoveColor={onRemoveColor}
        colors={colors}
      />

    </div>
  )
}

export default App
  