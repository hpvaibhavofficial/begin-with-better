import Button from "./Button";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ btns, onClickHandle }) {
  return (
    <>
      <div className={styles.buttonsContainer}>
        {btns.map((btn) => (
          <Button key={btn} btn={btn} onClickHandle={onClickHandle} />
        ))}
      </div>
    </>
  );
}
export default ButtonsContainer;
