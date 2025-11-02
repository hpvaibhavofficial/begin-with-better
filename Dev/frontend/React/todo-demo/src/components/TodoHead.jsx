import { useContext, useRef } from "react";
import styles from "./TodoHead.module.css";
import { IoAddCircle } from "react-icons/io5";
import { TodoItemsContext } from "./store/todo-items-store";

function TodoHead() {
  const todoName = useRef("");
  const dueDate = useRef("");
  const { addNewItem } = useContext(TodoItemsContext);
  return (
    <>
      <h1 className="">Todo APP</h1>
      <form
        className={`row ${styles.vbRow}`}
        onSubmit={(e) => addNewItem(todoName, dueDate, e)}
      >
        <div className="col-6">
          <input type="text" ref={todoName} placeholder="Enter text here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${styles.vbButton}`}>
            <IoAddCircle />
          </button>
        </div>
      </form>
    </>
  );
}
export default TodoHead;
