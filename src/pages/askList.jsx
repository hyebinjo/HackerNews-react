import { AskItem } from "../components/askItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const AskList = () => {
  const [pageNum, setPageNum] = useState(1);
  const [ids, setIds] = useState([]);
  const [itemIds, setItemIds] = useState([]);

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

  useEffect(() => {
    setItemIds(ids.slice((pageNum - 1) * 10, pageNum * 10));
  }, [pageNum, ids]);

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Ask</h2>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <AskItem id={id} />
          </li>
        ))}
      </ol>
      <Pagination length={ids.length} onClick={setPageNum} pageNum={pageNum} />
    </div>
  );
};
