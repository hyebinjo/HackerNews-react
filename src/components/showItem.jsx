import styles from "./showItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../assets/user-circle2.svg";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";
import linkArrow from "../assets/link-arrow.svg";

export const ShowItem = ({ id, pageNum }) => {
  const [item, setItem] = useState({});

  const getData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const item = await response.json();
      setItem(item);
    } catch (error) {}
  };

  useEffect(() => getData(), []);

  return (
    <div className={styles.item}>
      <Link to={`/user/${item.by}`}>
        <strong className={styles.header}>
          <img className={styles.icon} src={userIcon} alt="user icon" />{" "}
          {item.by}
        </strong>
      </Link>
      <Link to={`/Show/${pageNum}/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: item.text }}
        ></p>
      </Link>
      <span className={styles.time}>{item.time}</span>
      <div className={styles.footer}>
        <strong className={styles.footer__info}>
          <img className={styles.scoreIcon} src={score} alt="score" />
          {item.score}
          <img className={styles.commentIcon} src={comment} alt="comment" />
          {item.descendants}
        </strong>
        {item.url ? (
          <a href={`${item.url}`}>
            <img src={linkArrow} alt="go to link" />
          </a>
        ) : (
          <Link to={`/Show/${pageNum}/${id}`}>
            <img src={linkArrow} alt="go to link" />
          </Link>
        )}
      </div>
    </div>
  );
};
