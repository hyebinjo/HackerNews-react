import { useEffect, useState } from "react";
import styles from "./firstComment.module.css";
import arrow from "../assets/turn-down-right.svg";

export const FirstComment = ({ id }) => {
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
    <div className={styles.comment_box}>
      <img className={styles.arrow} src={arrow} alt="reply-arrow" />
      <p
        className={styles.comment_content}
        dangerouslySetInnerHTML={{ __html: item.text }}
      ></p>
    </div>
  );
};
