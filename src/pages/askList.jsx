import { AskItem } from "../components/askItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./list.module.css";

export const AskList = ({ ids }) => {
  let params = useParams();
  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {
    setItemIds(ids.slice((params.page - 1) * 10, params.page * 10));
  }, [params.page, ids]);

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Ask</h2>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <AskItem id={id} pageNum={params.page} />
          </li>
        ))}
      </ol>
      <Pagination
        length={ids.length}
        pageSection={"Ask"}
        pageNum={params.page}
      />
    </div>
  );
};
