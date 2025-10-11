import styles from "./TodoHead.module.css";

function TodoHead() {
  return (
    <>
      <h1 className="">Todo APP</h1>
      <div className={`row ${styles.vbRow}`}>
        <div className="col-6">
          <input type="text" placeholder="Enter text here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles.vbButton}`}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoHead;
