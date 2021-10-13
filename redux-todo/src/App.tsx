import React, { useState } from 'react'
import { add, remove } from './reducers/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './reducers'

function App() {

  const dispatch = useDispatch()
  const result = useSelector(state => state)
  console.log(result)
  const [todoItem, setTodoItem] = useState('empty')

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    dispatch(add(todoItem))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>add todo</label>
        <input type="text" value={todoItem} onChange={handleChange}/>
        <button>add item</button>
      </form>
    </div>
  )
}

export default App
