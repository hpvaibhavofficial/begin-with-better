import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHead from "./components/TodoHead";
import TodoItems from "./components/TodoItems";
import { useRef, useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const handleAddButton = (name, dueDate, e) => {
    e.preventDefault();
    let todoName = name.current.value;
    let duedate = dueDate.current.value;

    if (!todoName.trim() || !duedate) {
      alert("name and duedate are required.");
      return;
    }
    const obj = { name: todoName, dueDate: duedate };
    let narr = [...arr, obj];
    setArr(narr);
    name.current.value = "";
    dueDate.current.value = "";
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
