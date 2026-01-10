import { useContext } from "react";
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-store-list";

function Post({ post }) {
  if (!post) return null;
  const { deletePost } = useContext(PostList);

  return (
    <div className={styles.postCard}>
      <button className={styles.deleteBtn} onClick={() => deletePost(post.id)}>
        <MdDelete />
      </button>

      <div className={styles.postHeader}>
        <div className={styles.avatar}>{post.userId?.toString().charAt(0)}</div>

        <div>
          <h6 className={styles.username}>{post.userId}</h6>
          <p className={styles.time}>2h ago</p>
        </div>
      </div>

      <h5 className={styles.postTitle}>{post.title}</h5>

      <p className={styles.postBody}>{post.body}</p>

      <div className={styles.tags}>
        {post.tags?.map((tag, index) => (
          <span key={index} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className={styles.postFooter}>
        <span className={styles.reactions}>
          ❤️ {post.reactions.likes} likes
        </span>

        <div className={styles.actions}>
          <button>View</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
