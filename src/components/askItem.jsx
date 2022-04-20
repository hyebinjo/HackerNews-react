import styles from "./askItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../assets/user-circle2.svg";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { FirstComment } from "./firstComment";

export const AskItem = ({ id }) => {
  const [item, setItem] = useState({});
  const [viewComment, setViewComment] = useState(false);

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

  const handleClick = () => {
    if (!viewComment) {
      setViewComment(true);
    } else {
      setViewComment(false);
    }
  };

  return (
    <div className={styles.item}>
      <strong className={styles.header}>
        <img className={styles.icon} src={userIcon} alt="user icon" /> {item.by}
      </strong>
      <Link to={`/item/${id}`}>
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
        <img
          src={viewComment ? minus : plus}
          alt="preview comment"
          onClick={handleClick}
        />
      </div>
      {item.kids && viewComment && <FirstComment id={item.kids[0]} />}
    </div>
  );
};
