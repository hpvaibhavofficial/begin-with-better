import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { TodoItemsContext } from "./store/todo-items-store";

function TodoItem({ tname = "John Doe", tdate = "12/10/2025" }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={`row ${styles.vbRow}`}>
      <div className="col-6">{tname}</div>
      <div className="col-4">{tdate}</div>
      <div className="col-2">
        <button
          type="button"
          className={`btn btn-danger ${styles.vbButton}`}
          onClick={() => deleteItem(tname)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export { TodoItem };
