import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoState = {
  todo: todoItem[]
}

type todoItem = {
  id: string,
  todo: string,
  isFinished: boolean,
}

const initialState: TodoState = {
  todo: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action: PayloadAction<todoItem>) {
      state.todo.push(action.payload)
    },
    remove(state, action) {
      const result = state.todo.filter((item: todoItem) => item.id !== action.payload)
      state.todo = result
    },
    toggle(state, action) {
      const selectedIndex = state.todo.findIndex(item => item.id === action.payload)
      state.todo[selectedIndex].isFinished = !state.todo[selectedIndex].isFinished
    },
  }
})

export const { add, remove, toggle } = todoSlice.actions
export default todoSlice.reducer
