import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  status: "done" | "notDone";
}

const initialState: Todo[] = [
  {
    id: 1,
    text: "Faire la lessive",
    status: "notDone",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action);
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        status: action.payload.status,
      });
      console.log(state, action);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
