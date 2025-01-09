// import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import {
  addTodo,
  deleteTodo,
  saveEdit,
  startEditing,
  toggleTodoStatus,
  setCurrentTodo,
  setCurrentEdit,
  fetchTodos,
  Todo,
} from "./store/todoSlice";

// interface Todo {
//   id: number;
//   text: string;
//   status: "done" | "notDone";
// }

// interface RootState {
//   todoReducer: Todo[];
//   currentTodo: string;
// }

// const initialState: Todo[] = [
//   {
//     id: 1,
//     text: "Faire la lessive",
//     status: "notDone",
//   },
// ];

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const currentTodo = useSelector(
    (state: RootState) => state.todos.currentTodo
  );
  const isEditing = useSelector((state: RootState) => state.todos.isEditing);
  const currentEdit = useSelector(
    (state: RootState) => state.todos.currentEdit
  );
  const isLoading = useSelector((state: RootState) => state.todos.isLoading);

  const dispatch = useDispatch<typeof store.dispatch>();

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

      <div className="app-container">
        <h1>Todo List</h1>

        {isLoading && <p>Loading...</p>}

        {!isLoading && (
          <button className="button-fetch" onClick={() => dispatch(fetchTodos())}>Fetch todos</button>
        )}

        <div className="todo-input">
          <input
            type="text"
            placeholder="Ajouter une tâche" 
            value={currentTodo ?? ""} 
            onChange={(e) => dispatch(setCurrentTodo(e.target.value))} 
          />
          <button onClick={() => dispatch(addTodo(currentTodo))}>
            Ajouter
          </button>
        </div>

        <div className="todo-list">
          {todos.map((todo: Todo) => (
            <div key={todo.id} className={`todo-item ${todo.status}`}>
              {isEditing && currentEdit?.id === todo.id ? (
                <div className="edit-section">
                  <input
                    type="text"
                    value={currentEdit.text}
                    onChange={(e) =>
                      dispatch(
                        setCurrentEdit({ ...currentEdit, text: e.target.value })
                      )
                    }
                  />
                  <button onClick={() => dispatch(saveEdit())}>Valider</button>
                </div>
              ) : (
                <>
                  <p className="todo-text">{todo.text}</p>
                  <div className="todo-actions">
                    <button onClick={() => dispatch(toggleTodoStatus(todo.id))}>
                      {todo.status === "done" ? "Non fait" : "Fait"}
                    </button>
                    <button onClick={() => dispatch(startEditing(todo))}>
                      Editer
                    </button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>
                      Supprimer
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
