import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleAddition = () => {
    dispatch({ type: "ADDITION", payload: 5 });
  };

  return (
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Increment
        </button>

        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          Decrement
        </button>
        <button
          onClick={handleAddition}
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          Addition
        </button>
      </div>
    </div>
  );
};
export default Controls;
