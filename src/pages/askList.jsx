import { AskItem } from "../components/askItem";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const AskList = () => {
  const [ids, setIds] = useState([]);

  const getIds = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/askstories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(), []);

  return (
    <>
      <h2 className={styles.title}>Ask</h2>
      <ol>
        {ids.map((id) => (
          <li key={id}>
            <AskItem id={id} />
          </li>
        ))}
      </ol>
    </>
  );
};
