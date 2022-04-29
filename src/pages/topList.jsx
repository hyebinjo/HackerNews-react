import { NewsListItem } from "../components/newsListItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./list.module.css";

export const TopList = ({ ids }) => {
  let params = useParams();
  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {
    setItemIds(ids.slice((params.page - 1) * 10, params.page * 10));
  }, [params.page, ids]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.menu}>
        <h2>News</h2>
        <div className={styles.categories}>
          <h5 className={styles.selected}>POPULAR</h5>
          <Link to={"/News/1"}>
            <h5 className={styles.unselected}>NEWEST</h5>
          </Link>
        </div>
      </div>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <NewsListItem id={id} pageNum={params.page} />
          </li>
        ))}
      </ol>
      <Pagination
        length={ids.length}
        pageSection={"Top"}
        pageNum={params.page}
      />
    </div>
  );
};
