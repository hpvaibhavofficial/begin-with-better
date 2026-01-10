import { useContext, useRef, useState } from "react";
import styles from "./CreatePost.module.css";
import { PostList } from "../store/post-store-list";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Create a New Post</h2>

      <Form method="POST">
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Post Title
          </label>
          <input type="text" name="title" id="title" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.label}>
            Post Body
          </label>
          <textarea
            id="body"
            name="body"
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
            name="reactions"
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
            name="userId"
            id="userId"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tags" className={styles.label}>
            Tags
          </label>
          <input type="text" name="tags" id="tags" className={styles.input} />
        </div>

        <button className={styles.button} type="submit">
          Add Post
        </button>
      </Form>
    </div>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);

  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
