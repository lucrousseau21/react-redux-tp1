import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  status: "done" | "notDone";
}

const initialState: Todo[] = [
  {
    id: 1,
    text: "Faire la lessive",
    status: "done",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: initialState,
    isEditing: null as Todo | null,
    currentEdit: null as Todo | null,
    currentTodo: "",
    isLoading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      // console.log(state, action);
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload,
        status: "notDone",
      });
      state.currentTodo = "";
      // console.log(state, action);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    startEditing: (state, action) => {
      state.isEditing = action.payload;
      state.currentEdit = { ...action.payload };
    },
    saveEdit: (state) => {
      if (state.currentEdit) {
        state.todos = state.todos.map((todo) =>
          todo.id === state.currentEdit?.id ? { ...todo, text: state.currentEdit.text } : todo
        );
        state.currentEdit = null; 
        state.isEditing = null;
      }
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = todo.status === "done" ? "notDone" : "done";
      }
    },
    setCurrentTodo: (state, action ) => {
      state.currentTodo = action.payload;
    },
    setCurrentEdit: (state, action) => {
      if (state.currentEdit) {
        state.currentEdit.text = action.payload;
      }
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    });
  },
});

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos", 
  async () => {
    const response = await fetch("https://dummyjson.com/todos")
    const jsonResponse = await response.json();

    return jsonResponse.todos.map((todo: any) => ({
      text: todo.todo,
      id: todo.id,
      status: todo.completed ? "done" : "notDone",
    })) as Todo[];
  }
);

export default todoSlice.reducer;

export const { addTodo, deleteTodo, saveEdit, toggleTodoStatus, startEditing, setCurrentTodo, setIsEditing, setCurrentEdit } = todoSlice.actions;