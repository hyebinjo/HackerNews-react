import { ShowItem } from "../components/showItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const ShowList = () => {
  const [pageNum, setPageNum] = useState(1);
  const [ids, setIds] = useState([]);
  const [itemIds, setItemIds] = useState([]);

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

  useEffect(() => {
    setItemIds(ids.slice((pageNum - 1) * 10, pageNum * 10));
  }, [pageNum, ids]);

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Show</h2>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <ShowItem id={id} />
          </li>
        ))}
      </ol>
      <Pagination length={ids.length} onClick={setPageNum} pageNum={pageNum} />
    </div>
  );
};
