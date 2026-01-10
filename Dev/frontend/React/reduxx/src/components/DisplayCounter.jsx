import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <center>
      <h2>Counter Value : {counter}</h2>
    </center>
  );
};
export default DisplayCounter;
