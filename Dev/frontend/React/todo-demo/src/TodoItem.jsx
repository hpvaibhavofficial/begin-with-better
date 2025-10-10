function TodoItem({ tname = "John Doe", tdate = "12/10/2025" }) {
  return (
    <div className="container">
      <div className="row vb-row">
        <div className="col-6">{tname}</div>
        <div className="col-4">{tdate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger vb-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { TodoItem };
