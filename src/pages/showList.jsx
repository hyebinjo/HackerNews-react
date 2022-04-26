import { ShowItem } from "../components/showItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./list.module.css";

export const ShowList = () => {
  let params = useParams();
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
    setItemIds(ids.slice((params.page - 1) * 10, params.page * 10));
  }, [params.page, ids]);

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Show</h2>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <ShowItem id={id} pageNum={params.page} />
          </li>
        ))}
      </ol>
      <Pagination
        length={ids.length}
        pageSection={"Show"}
        pageNum={params.page}
      />
    </div>
  );
};
