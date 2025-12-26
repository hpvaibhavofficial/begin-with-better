import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    const newPost = action.payload;
    newPostList = [newPost, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (postTitle, postBody, reactions, userId, userName, tags) => {
    const action = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
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

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
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
