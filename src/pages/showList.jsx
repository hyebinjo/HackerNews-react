import { ShowItem } from "../components/showItem";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const ShowList = () => {
  const [ids, setIds] = useState([]);

  const getIds = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/showstories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(), []);

  return (
    <>
      <h2 className={styles.title}>Show</h2>
      <ol>
        {ids.map((id) => (
          <li key={id}>
            <ShowItem id={id} />
          </li>
        ))}
      </ol>
    </>
  );
};
