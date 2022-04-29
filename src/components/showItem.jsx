import styles from "./showItem.module.css";
import { Link } from "react-router-dom";
import userIcon from "../assets/user-circle2.svg";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";
import linkArrow from "../assets/link-arrow.svg";
import { convertTime } from "../utils";
import useFetch from "../hooks/useFetch";

export const ShowItem = ({ id, pageNum }) => {
  const item = useFetch(`item/${id}.json`);

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
      <span className={styles.time}>{convertTime(item.time)}</span>
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
