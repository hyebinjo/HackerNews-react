import { NewsListItem } from "../components/newsListItem";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const NewsList = () => {
  const [ids, setIds] = useState([]);
  const [menu, setMenu] = useState("top");
  const [pageNum, setPageNum] = useState(1);
  const [itemIds, setItemIds] = useState([]);

  const getIds = async (menu) => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/${menu}stories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(menu), [menu]);

  useEffect(() => {
    setItemIds(ids.slice((pageNum - 1) * 10, pageNum * 10));
  }, [pageNum, ids]);

  const handleMenuClick = (e) => {
    if (e.target.textContent === "POPULAR") {
      setMenu("top");
      setPageNum(1);
    } else if (e.target.textContent === "NEWEST") {
      setMenu("new");
      setPageNum(1);
    }
    return;
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.menu}>
        <h2>News</h2>
        <div className={styles.categories} onClick={handleMenuClick}>
          <h5 className={menu === "top" ? styles.selected : ""}>POPULAR</h5>
          <h5 className={menu === "new" ? styles.selected : ""}>NEWEST</h5>
        </div>
      </div>
      <ol>
        {itemIds.map((id) => (
          <li key={id}>
            <NewsListItem id={id} />
          </li>
        ))}
      </ol>
      <Pagination
        length={ids.length}
        onClick={setPageNum}
        pageNum={pageNum}
        newsMenu={menu}
      />
    </div>
  );
};
