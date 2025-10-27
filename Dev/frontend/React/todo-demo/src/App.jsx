import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHead from "./components/TodoHead";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const handleAddButton = (name, dueDate) => {
    if (!name.trim() || !dueDate) {
      alert("name and duedate are required.");
      return;
    }
    const obj = { name: name, dueDate: dueDate };
    let narr = [...arr, obj];
    setArr(narr);
  };

  const onDeleteClicked = (item) => {
    const newArr = arr.filter((x) => x.name != item);
    setArr(newArr);
  };

  const [arr, setArr] = useState([
    // { name: "Task - 1", dueDate: "10/09/2024" },
    // { name: "Task - 2", dueDate: "10/09/2024" },
  ]);

  return (
    <div className="todo-container">
      <div className="container">
        <TodoHead handleAddButton={handleAddButton} />
        {arr.length <= 0 ? <Welcome /> : ""}
        <TodoItems items={arr} onDeleteClicked={onDeleteClicked} />
      </div>
    </div>
  );
}

export default App;
