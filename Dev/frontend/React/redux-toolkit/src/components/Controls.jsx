import { useDispatch } from "react-redux";

import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const Controls = () => {
  const dispatch = useDispatch();
  const addVal = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddition = () => {
    dispatch(counterActions.addition(Number(addVal.current.value)));
    addVal.current.value = "";
  };

  const handleSubstraction = () => {
    dispatch(counterActions.subtraction(Number(addVal.current.value)));
    addVal.current.value = "";
  };

  const handleToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <div className="col-lg-6 mx-auto">
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <button
          onClick={handleIncrement}
          className="btn btn-primary btn-lg px-4"
        >
          Increment
        </button>

        <button onClick={handleDecrement} className="btn btn-info btn-lg px-4">
          Decrement
        </button>
        <button onClick={handleToggle} className="btn btn-warning">
          Privacy Toggle
        </button>

        <div className="w-100"></div>

        <div className="d-flex gap-2 align-items-center">
          <input
            type="number"
            className="form-control"
            placeholder="Enter a number"
            ref={addVal}
            style={{ width: "150px" }}
          />

          <button onClick={handleAddition} className="btn btn-danger">
            Add
          </button>
          <button onClick={handleSubstraction} className="btn btn-danger">
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
