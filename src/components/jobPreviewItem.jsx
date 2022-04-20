import styles from "./jobPreviewItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import linkArrow from "../assets/link-arrow.svg";

export const JobPreviewItem = ({ id, news }) => {
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
      {item.url ? (
        <button className={styles.button}>github.com</button>
      ) : (
        <button className={styles.button}>hackernews.com</button>
      )}
      <Link to={`/item/${id}`}>
        <h4 className={styles.title}>{item.title}</h4>
      </Link>
      <strong>By {item.by}</strong>
      <div className={styles.footer}>
        <span className={styles.time}>{item.time}</span>
        {item.url ? (
          <a href={`${item.url}`}>
            <img src={linkArrow} alt="go to link" />
          </a>
        ) : (
          <Link to={`/item/${id}`}>
            <img src={linkArrow} alt="go to link" />
          </Link>
        )}
      </div>
    </div>
  );
};
