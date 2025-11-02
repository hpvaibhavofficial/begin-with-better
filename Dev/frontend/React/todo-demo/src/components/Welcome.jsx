import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const Welcome = () => {
  const { items } = useContext(TodoItemsContext);
  return items.length === 0 && <center>Welcome and write </center>;
};
export default Welcome;
