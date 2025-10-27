import { useState } from "react";
import styles from "./TodoHead.module.css";
import { IoAddCircle } from "react-icons/io5";

function TodoHead({ handleAddButton }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const onNewName = (e) => {
    setName(e.target.value);
  };

  const onNewDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <h1 className="">Todo APP</h1>
      <div className={`row ${styles.vbRow}`}>
        <div className="col-6">
          <input
            type="text"
            value={name}
            placeholder="Enter text here"
            onChange={(e) => onNewName(e)}
          />
        </div>
        <div className="col-4">
          <input type="date" value={date} onChange={onNewDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles.vbButton}`}
            onClick={(e) => handleAddButton(name, date)}
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoHead;
