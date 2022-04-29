import styles from "./newsPreviewItem.module.css";
import { Link } from "react-router-dom";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";
import { convertTime, showUrl } from "../utils";
import useFetch from "../hooks/useFetch";

export const NewsPreviewItem = ({ id }) => {
  const item = useFetch(`item/${id}.json`);

  return (
    <div className={styles.news}>
      {item.url ? (
        <button className={styles.button}>{showUrl(item.url)}</button>
      ) : (
        <button className={styles.button}>hackernews.com</button>
      )}
      <Link to={`/News/1/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
      </Link>
      <Link to={`/user/${item.by}`}>
        <strong>By {item.by}</strong>
      </Link>
      <div className={styles.footer}>
        <span className={styles.time}>{convertTime(item.time)}</span>
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
