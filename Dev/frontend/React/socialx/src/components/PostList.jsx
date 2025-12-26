import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-store-list";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(postListData);

  const onGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage handleOnClick={onGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;
