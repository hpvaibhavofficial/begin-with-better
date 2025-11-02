import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHead from "./components/TodoHead";
import TodoItems from "./components/TodoItems";
import { useReducer, useRef, useState } from "react";
import Welcome from "./components/Welcome";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./components/store/todo-items-store";
function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todo-container">
        <div className="container">
          <TodoHead />
          <Welcome />
          <TodoItems />
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
