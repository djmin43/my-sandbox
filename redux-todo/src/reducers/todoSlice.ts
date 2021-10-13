import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoState = {
  todo: string[]
}

const initialState: TodoState = {
  todo: ['initial']
}


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      state.todo.push(action.payload)
    },
    remove(state, action) {
      
    }
  }
})

export const { add, remove } = todoSlice.actions
export default todoSlice.reducer
