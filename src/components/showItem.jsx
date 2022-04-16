import styles from "./showItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../assets/user-circle2.svg";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";

export const ShowItem = ({ id }) => {
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
      <strong className={styles.header}>
        <img className={styles.icon} src={userIcon} alt="user icon" /> {item.by}
      </strong>
      {item.url ? (
        <a href={`${item.url}`}>
          <h4 className={styles.title}>{item.title}</h4>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
        </a>
      ) : (
        <Link to={`/item/${id}`}>
          <h4 className={styles.title}>{item.title}</h4>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
        </Link>
      )}
      <span className={styles.time}>{item.time}</span>
      <div className={styles.footer}>
        <strong className={styles.footer__info}>
          <img className={styles.footer__img} src={score} alt="score" />
          {item.score}
          <Link to={`/item/${id}`}>
            <img className={styles.footer__img} src={comment} alt="comment" />
            {item.descendants}
          </Link>
        </strong>
      </div>
    </div>
  );
};
