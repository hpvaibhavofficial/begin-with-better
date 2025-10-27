import styles from "./Button.module.css";
function Button({ btn, onClickHandle }) {
  return (
    <>
      <button className={styles.button} onClick={(e) => onClickHandle(e, btn)}>
        {btn}
      </button>
    </>
  );
}
export default Button;
