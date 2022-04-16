import styles from "./newsPreviewItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import score from "../assets/score.png";
import comment from "../assets/comment.png";

export const NewsPreviewItem = ({ id, news }) => {
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
      {item.url ? <button>github.com</button> : <button>hackernews.com</button>}
      {item.url ? (
        <a href={`${item.url}`}>
          <h4>{item.title}</h4>
        </a>
      ) : (
        <Link to={`/item/${id}`}>
          <h4>{item.title}</h4>
        </Link>
      )}
      <strong>By {item.by}</strong>
      <div className={styles.footer}>
        <span>{item.time}</span>
        <strong className={styles.footer__info}>
          <img src={score} alt="score" />
          {item.score}
          <Link to={`/item/${id}`}>
            <img src={comment} alt="comment" />
            {item.descendants}
          </Link>
        </strong>
      </div>
    </div>
  );
};
