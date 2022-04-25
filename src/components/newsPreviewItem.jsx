import styles from "./newsPreviewItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";

export const NewsPreviewItem = ({ id }) => {
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
    <div className={styles.news}>
      {item.url ? (
        <button className={styles.button}>github.com</button>
      ) : (
        <button className={styles.button}>hackernews.com</button>
      )}
      <Link to={`/News/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
      </Link>
      <Link to={`/user/${item.by}`}>
        <strong>By {item.by}</strong>
      </Link>
      <div className={styles.footer}>
        <span className={styles.time}>{item.time}</span>
        <strong className={styles.footer__info}>
          <img className={styles.footer__img} src={score} alt="score" />
          {item.score}
          <img className={styles.footer__img} src={comment} alt="comment" />
          {item.descendants}
        </strong>
      </div>
    </div>
  );
};
