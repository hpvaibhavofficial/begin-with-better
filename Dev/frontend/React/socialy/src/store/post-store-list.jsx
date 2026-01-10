import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    const newPost = action.payload.post;
    newPostList = [newPost, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [fetching, setfetching] = useState(false);
  const addPost = (post) => {
    console.log("Got response from server ", post);

    const action = {
      type: "ADD_POST",
      payload: {
        post,
      },
    };
    dispatchPostList(action);
  };

  const deletePost = (postId) => {
    const action = {
      type: "DELETE_ITEM",
      payload: {
        postId,
      },
    };
    dispatchPostList(action);
  };

  const addInitialPosts = (posts) => {
    const action = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    };
    dispatchPostList(action);
  };
  // useEffect(() => {
  //   setfetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setfetching(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
