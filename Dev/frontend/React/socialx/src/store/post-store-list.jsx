import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {};

const PostListProvider = ({ children }) => {
  const addItem = () => {};
  const deleteItem = () => {};

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addItem, deleteItem }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Winter Kasol Trip Combo",
    body: "Trip to Hills 3 Day 2 Night trip to Kasol Valley. Day Wise schedule is available on website. Click to Visit and register.",
    reactions: 2,
    userId: "user-1",
    tags: ["travel", "greenhillproductions", "kasolvalley"],
    name: "King Hills Travels",
  },
  {
    id: 2,
    title: "The Art of Baking",
    body: "Join our baking workshop to learn the secrets of perfect pastries and breads. Suitable for all skill levels. Limited seats available!",
    reactions: 5,
    userId: "user-2",
    tags: ["baking", "workshop", "pastries"],
    name: "Nescafe Copy",
  },
];

export default PostListProvider;
