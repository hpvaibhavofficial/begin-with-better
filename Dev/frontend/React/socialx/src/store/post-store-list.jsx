import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {};

const PostListProvider = ({ children }) => {
  const addItem = () => {};
  const deleteItem = () => {};

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider value={{ postList, addItem, deleteItem }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
