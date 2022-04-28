import styles from "./jobListItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import linkArrow from "../assets/link-arrow.svg";
import { convertTime } from "../utils";

export const JobListItem = ({ id, pageNum }) => {
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
