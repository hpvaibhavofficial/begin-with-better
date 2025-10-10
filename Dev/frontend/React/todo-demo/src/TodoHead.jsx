function TodoHead() {
  return (
    <>
      <h1>Todo APP</h1>
      <div className="container">
        <div className="row vb-row">
          <div className="col-6">
            <input type="text" placeholder="Enter text here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success vb-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoHead;
