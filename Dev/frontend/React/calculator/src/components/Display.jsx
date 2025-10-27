import { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import styles from "./Display.module.css";

function Display() {
  const [displayVal, setDisplayVal] = useState("");
  const onClickHandle = (e, btn) => {
    try {
      if (btn === "=") {
        const res = eval(displayVal);
        setDisplayVal(res);
      } else if (btn === "C") {
        setDisplayVal("");
      } else {
        setDisplayVal(displayVal + btn);
      }
    } catch (error) {
      setDisplayVal("Error");
      console.error("Invalid expression:", error);
    }
  };

  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className={styles.calculator}>
        <input className={styles.display} type="text" value={displayVal} />
        <ButtonsContainer btns={buttons} onClickHandle={onClickHandle} />
      </div>
    </>
  );
}
export default Display;
