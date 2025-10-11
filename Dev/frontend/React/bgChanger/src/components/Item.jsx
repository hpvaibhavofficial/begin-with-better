import styles from "./Item.module.css";

function Item({ fooditem }) {
  console.log("Loaded styles:", styles);
  return (
    <li className={`${styles["vb-item"]}`}>
      <span className={styles["vb-span"]}>{fooditem}</span>
    </li>
  );
}

export default Item;
