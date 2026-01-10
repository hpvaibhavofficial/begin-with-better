import { useContext, useRef, useState } from "react";
import styles from "./CreatePost.module.css";
import { PostList } from "../store/post-store-list";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const userIdElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: parseInt(reactionsElement.current.value),
    };
    const userId = userIdElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });

    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    userIdElement.current.value = "";
    tagsElement.current.value = "";

    console.log("Post added");
  };
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            id="title"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.label}>
            Post Body
          </label>
          <textarea
            id="body"
            ref={postBodyElement}
            rows="3"
            className={styles.textarea}
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="reactions" className={styles.label}>
            Reactions
          </label>
          <input
            type="number"
            ref={reactionsElement}
            id="reactions"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="userId" className={styles.label}>
            User ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            id="userId"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tags" className={styles.label}>
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            id="tags"
            className={styles.input}
          />
        </div>

        <button className={styles.button} type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
