import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { text } from "stream/consumers";
import { addTodo, deleteTodo } from "./store/todoSlice";

interface Todo {
  id: number;
  text: string;
  status: "done" | "notDone";
}

interface RootState {
  todoReducer: Todo[];
  currentTodo: string;
}

const initialState: Todo[] = [
  {
    id: 1,
    text: "Faire la lessive",
    status: "notDone",
  },
];

function App() {
  const todos = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();

  // const [todos, setTodos] = useState(initialState);
  // const [currentTodo, setCurrentTodo] = useState("");

  // console.log(currentTodo);
  // console.log(todos[0].text);

  // function deleteTodo(id: number) {
  //   let newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // }

  // function completeTodo(id: number) {
  //   // console.log(todos.id)
  //   let newTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.status = todo.status === "done" ? "notDone" : "done";
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // }

  // function editTodo(id: number) {
  //   let newTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.status = todo.status === "done" ? "notDone" : "done";
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // }

  // function addTodo(text: string) {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: todos.length + 1,
  //       text: text,
  //       status: "notDone",
  //     },
  //   ]);
  // }

  // let editMode: boolean = false;

  // function setEditMode() {
  //   console.log("editMode");
  //   editMode = true;
  //   console.log(editMode);
  // }

  return (
    <>
      {/* {todos.map((todo) => (
        <div key={todo.id} className="divTodo">
          <p
            key={todo.id}
            className={todo.status === "done" ? "completed" : "not-completed"}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.text}
          </p>
          <a onClick={() => deleteTodo(todo.id)}>supprimer</a>
          <a onClick={() => setEditMode()}>edit</a> */}
      {/* <input
            className={editMode === true ? "" : "editModeoff"}
            onChange={(elem) => setCurrentTodo(elem.target.value)}
          />
          <button
            className={editMode === true ? "" : "editModeoff"}
            onClick={() => editTodo(currentTodo)}
          >
            Valider
          </button> */}
      {/* </div>
      ))}
      <input onChange={(elem) => setCurrentTodo(elem.target.value)} />
      <button onClick={() => addTodo(currentTodo)}>Valider</button> */}
      <div>
        <h1>TodoList</h1>
        <button
          onClick={() =>
            dispatch(addTodo({
              id: todos.length + 1,
              text: "New todo",
              status: "notDone",
            }))}> Call to reducer add</button>
            <button onClick={() => dispatch(deleteTodo({
              id: todos.length - 1,
            }))}>Call to reducer delete</button>
      </div>
    </>
  );
}

export default App;
