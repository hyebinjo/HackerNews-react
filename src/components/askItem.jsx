import styles from "./askItem.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import userIcon from "../assets/user-circle2.svg";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { FirstComment } from "./firstComment";
import { convertTime } from "../utils";
import useFetch from "../hooks/useFetch";

export const AskItem = ({ id, pageNum }) => {
  const item = useFetch(`item/${id}.json`);
  const [viewComment, setViewComment] = useState(false);

  const handleClick = () => {
    if (!viewComment) {
      setViewComment(true);
    } else {
      setViewComment(false);
    }
  };

  return (
    <div className={styles.item}>
      <Link to={`/user/${item.by}`}>
        <strong className={styles.header}>
          <img className={styles.icon} src={userIcon} alt="user icon" />{" "}
          {item.by}
        </strong>
      </Link>
      <Link to={`/Ask/${pageNum}/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: item.text }}
        ></p>
      </Link>
      <span className={styles.time}>{convertTime(item.time)}</span>
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
