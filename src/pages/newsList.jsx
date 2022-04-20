import { NewsListItem } from "../components/newsListItem";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const NewsList = ({ category }) => {
  const [ids, setIds] = useState([]);
  const [menu, setMenu] = useState(category);

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

  const handleClick = (e) => {
    if (e.target.textContent === "POPULAR") {
      setMenu("top");
    } else if (e.target.textContent === "NEWEST") {
      setMenu("new");
    }
    return;
  };

  return (
    <>
      <div className={styles.menu}>
        <h2>News</h2>
        <div className={styles.categories} onClick={handleClick}>
          <h5 className={menu === "top" ? styles.selected : ""}>POPULAR</h5>
          <h5 className={menu === "new" ? styles.selected : ""}>NEWEST</h5>
        </div>
      </div>
      <ol>
        {ids.map((id) => (
          <li key={id}>
            <NewsListItem id={id} />
          </li>
        ))}
      </ol>
    </>
  );
};
