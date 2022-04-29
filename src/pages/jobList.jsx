import { JobListItem } from "../components/jobListItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./list.module.css";

export const JobList = ({ ids }) => {
  let params = useParams();
  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {
    setItemIds(ids.slice((params.page - 1) * 10, params.page * 10));
  }, [params.page, ids]);

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Job</h2>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <JobListItem id={id} pageNum={params.page} />
          </li>
        ))}
      </ol>
      <Pagination
        length={ids.length}
        pageSection={"Job"}
        pageNum={params.page}
      />
    </div>
  );
};
