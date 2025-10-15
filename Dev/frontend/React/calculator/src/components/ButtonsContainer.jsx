import Button from "./Button";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ btns }) {
  return (
    <>
      <div className={styles.buttonsContainer}>
        {btns.map((btn) => (
          <Button key={btn} btn={btn} />
        ))}
      </div>
    </>
  );
}
export default ButtonsContainer;
