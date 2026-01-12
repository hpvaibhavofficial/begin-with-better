import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const obj = useSelector((store) => store.counterr);
  const counter = obj.counterVal;
  return (
    <center>
      <h2>Counter Value : {counter}</h2>
    </center>
  );
};
export default DisplayCounter;
