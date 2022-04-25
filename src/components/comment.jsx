import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CommentList } from "./commentList";
import styles from "./comment.module.css";
import arrow from "../assets/turn-down-right.svg";
import user from "../assets/user-circle.svg";

export const Comment = ({ id }) => {
  const [item, setItem] = useState({});
  const [comments, setComments] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const item = await response.json();
      setItem(item);
    } catch (error) {}
  };
  const handleClick = () => {
    if (!comments) {
      setComments(true);
    } else {
      setComments(false);
    }
  };

  useEffect(() => getData(), []);

  return (
    <>
      <div className={styles.comment_container}>
        <img className={styles.arrow} src={arrow} alt="reply-arrow" />
        <div className={styles.comment_box}>
          <Link to={`/user/${item.by}`}>
            <h5 className={styles.user}>
              <img
                className={styles.user_image}
                src={user}
                alt="comment user image"
              />
              {`${item.by}`}
            </h5>
          </Link>
          <p
            className={styles.comment_content}
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
          <span className={styles.time}>{`${item.time}`}</span>
          {item.kids && (
            <button className={styles.button} onClick={handleClick}>
              {comments ? "▲ Hide reply" : "▼ View reply"}
            </button>
          )}
        </div>
      </div>
      {comments && <CommentList ids={item.kids} />}
    </>
  );
};
