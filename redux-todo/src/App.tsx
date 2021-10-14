import React, { ReactElement, useState } from 'react'
import { add, remove, toggle } from './reducers/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './reducers'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'

const Container = styled.div`
  padding: 50px;
  text-align: center;
`

const TodoItemText = styled.span<{isFinished: boolean}>`
  font-size: calc(5px + 5vw);
  color: ${({isFinished}) => isFinished ? 'green' : 'red'};
  animation: pop 1s ease-in-out;

  @keyframes pop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

function App() {

  const dispatch = useDispatch()
  const [todoItem, setTodoItem] = useState('')

  const result = useSelector((state: RootState) => state.todos.todo)

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    console.log(uuidv4())
    const newTodoItem = {
      id: uuidv4(),
      todo: todoItem,
      isFinished: false,
    }
    dispatch(add(newTodoItem))
    setTodoItem('')
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
    <Container>
      <form onSubmit={handleSubmit}>
        <label>할 일을 적어주세요:</label>
        <input type="text" value={todoItem} onChange={handleChange}/>
        <button>추가</button>
      </form>
      <div>
        {result.map((item, index) =>
        <div key={item.id} onClick={() => toggleTodoItem(item.id)}>
          <span>{index + 1}.</span>
          <TodoItemText isFinished={item.isFinished}>{item.todo}</TodoItemText>
          <button onClick={() => removeTodoItem(item.id)}>remove</button>
        </div>
          )}
      </div>
    </Container>
  )
}

export default App

