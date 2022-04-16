import styles from "./articleItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const ArticleItem = ({ id }) => {
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
    <div className={styles.article}>
      <span className={styles.header}>by {item.by}</span>
      <h4>{item.title}</h4>
      {/* <p>{item.text}</p> */}
      <div className={styles.footer}>
        scroe: {item.score}{" "}
        <Link to={`/item/${id}`}>comment: {item.descendants}</Link>
        {item.url ? (
          <a href={`${item.url}`}>
            <button> -&gt; </button>
          </a>
        ) : (
          <Link to={`/item/${id}`}>
            <button> -&gt; </button>
          </Link>
        )}
      </div>
    </div>
  );
};
