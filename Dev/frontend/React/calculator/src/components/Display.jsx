import ButtonsContainer from "./ButtonsContainer";
import styles from "./Display.module.css";

function Display() {
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
        <input className={styles.display} type="text" />
        <ButtonsContainer btns={buttons} />
      </div>
    </>
  );
}
export default Display;
