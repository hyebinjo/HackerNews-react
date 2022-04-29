import styles from "./jobPreviewItem.module.css";
import { Link } from "react-router-dom";
import linkArrow from "../assets/link-arrow.svg";
import { convertTime, showUrl } from "../utils";
import useFetch from "../hooks/useFetch";

export const JobPreviewItem = ({ id }) => {
  const item = useFetch(`item/${id}.json`);

  return (
    <div className={styles.item}>
      {item.url ? (
        <button className={styles.button}>{showUrl(item.url)}</button>
      ) : (
        <button className={styles.button}>hackernews.com</button>
      )}
      <Link to={`/Job/1/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
      </Link>
      <Link to={`/user/${item.by}`}>
        <strong>By {item.by}</strong>
      </Link>
      <div className={styles.footer}>
        <span className={styles.time}>{convertTime(item.time)}</span>
        {item.url ? (
          <a href={`${item.url}`}>
            <img src={linkArrow} alt="go to link" />
          </a>
        ) : (
          <Link to={`/Job/1/${id}`}>
            <img src={linkArrow} alt="go to link" />
          </Link>
        )}
      </div>
    </div>
  );
};
