import styles from "./jobListItem.module.css";
import { Link } from "react-router-dom";
import linkArrow from "../assets/link-arrow.svg";
import { convertTime, showUrl } from "../utils";
import useFetch from "../hooks/useFetch";

export const JobListItem = ({ id, pageNum }) => {
  const item = useFetch(`item/${id}.json`);

  return (
    <div className={styles.news}>
      {item.url ? (
        <button className={styles.button}>{showUrl(item.url)}</button>
      ) : (
        <button className={styles.button}>hackernews.com</button>
      )}
      <Link to={`/Job/${pageNum}/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: item.text }}
        ></p>
      </Link>
      <div className={styles.footer}>
        <strong>
          <Link to={`/user/${item.by}`}>By {item.by + ` • `}</Link>
          <span className={styles.time}>{convertTime(item.time)}</span>
        </strong>
        {item.url ? (
          <a href={`${item.url}`}>
            <img src={linkArrow} alt="link arrow" />
          </a>
        ) : (
          <Link to={`/Job/${pageNum}/${id}`}>
            <img src={linkArrow} alt="link arrow" />
          </Link>
        )}
      </div>
    </div>
  );
};
