import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoItem } from "./TodoItem";
import TodoHead from "./TodoHead";

function App() {
  return (
    <>
      <center className="todo-container">
        <div className="container">
          <TodoHead />
          <div className="item">
            <TodoItem />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
