import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  // const [arr, setArr] = useState([
  //   { name: "Task - 1", dueDate: "10/09/2024" },
  //   { name: "Task - 2", dueDate: "10/09/2024" },
  // ]);

  const reduceTodoItems = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;

    if (action.type === "NEW_ITEM") {
      let todoName = action.payload.itemName;
      let duedate = action.payload.dueDate;

      if (!todoName.trim() || !duedate) {
        alert("name and duedate are required.");
        return;
      }
      const obj = { name: todoName, dueDate: duedate };
      newTodoItems = [...currTodoItems, obj];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(
        (x) => x.name != action.payload.itemName
      );
    }
    return newTodoItems;
  };

  const [arr, dispatchTodoItems] = useReducer(reduceTodoItems, []);

  const addNewItem = (name, dueDate, e) => {
    e.preventDefault();
    // let todoName = name.current.value;
    // let duedate = dueDate.current.value;

    // if (!todoName.trim() || !duedate) {
    //   alert("name and duedate are required.");
    //   return;
    // }
    // const obj = { name: todoName, dueDate: duedate };

    // setArr((currVal) => [...currVal, obj]);
    // name.current.value = "";
    // dueDate.current.value = "";
    const addItemaction = {
      type: "NEW_ITEM",
      payload: {
        itemName: name.current.value,
        dueDate: dueDate.current.value,
      },
    };
    dispatchTodoItems(addItemaction);
  };

  const deleteItem = (item) => {
    // const newArr = arr.filter((x) => x.name != item);
    // setArr(newArr);
    const deleteItemaction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: item,
      },
    };

    dispatchTodoItems(deleteItemaction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: arr,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
