import { useRef, useState } from "react";
import styles from "./TodoHead.module.css";
import { IoAddCircle } from "react-icons/io5";

function TodoHead({ handleAddButton }) {
  const todoName = useRef("");
  const dueDate = useRef("");

  return (
    <>
      <h1 className="">Todo APP</h1>
      <form
        className={`row ${styles.vbRow}`}
        onSubmit={(e) => handleAddButton(todoName, dueDate, e)}
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
