import styles from "./jobItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import rightArrow from "../assets/right-arrow.svg";

export const JobItem = ({ id, news }) => {
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
      <h4 className={styles.title}>{item.title}</h4>
      <div className={styles.footer}>
        <span className={styles.time}>{item.time}</span>
        {item.url ? (
          <a href={`${item.url}`}>
            <img src={rightArrow} alt="go to link" />
          </a>
        ) : (
          <Link to={`/item/${id}`}>
            <img src={rightArrow} alt="go to link" />
          </Link>
        )}
      </div>
    </div>
  );
};
