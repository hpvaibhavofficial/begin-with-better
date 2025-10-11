import { TodoItem } from "./TodoItem";
import styles from "./TodoItems.module.css";
function TodoItems({ items }) {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item, i) => (
        <TodoItem key={i} tname={item.name} tdate={item.dueDate} />
      ))}
    </div>
  );
}
export default TodoItems;
