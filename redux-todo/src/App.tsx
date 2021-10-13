import React, { useState, useEffect } from 'react'
import { add, remove, toggle } from './reducers/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './reducers'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const dispatch = useDispatch()
  const [todoItem, setTodoItem] = useState('')

  const result = useSelector((state: RootState) =>
    state.todos.todo
  )


  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    const newTodoItem = {
      id: uuidv4(),
      todo: todoItem,
      isFinished: false,
    }
    console.log(uuidv4())
    dispatch(add(newTodoItem))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value)
  }

  const removeTodoItem = (todoId: string) => {
    dispatch(remove(todoId))
  }

  const toggleTodoItem = (todoId: string) => {
    dispatch(toggle(todoId))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>add todo</label>
        <input type="text" value={todoItem} onChange={handleChange}/>
        <button>add item</button>
      </form>
      <div>
        {result.map(item =>
        <div key={item.id}>
          <span>{item.todo}</span>
          <span>{item.isFinished ? 'true' : 'false'}</span>
          <button onClick={() => removeTodoItem(item.id)}>remove</button>
          <button onClick={() => toggleTodoItem(item.id)}>toggle</button>
        </div>
          )}
      </div>
    </div>
  )
}

export default App

