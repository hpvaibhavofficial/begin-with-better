import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHead from "./components/TodoHead";
import TodoItems from "./components/TodoItems";

function App() {
  const arr = [
    { name: "Task - 1", dueDate: "10/09/2024" },
    { name: "Task - 2", dueDate: "10/09/2024" },
  ];

  return (
    <div className="todo-container">
      <div className="container">
        <TodoHead />
        <TodoItems items={arr} />
      </div>
    </div>
  );
}

export default App;
