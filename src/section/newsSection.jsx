import { Link } from "react-router-dom";
import { NewsPreviewItem } from "../components/newsPreviewItem";
import { useState, useEffect } from "react";
import styles from "./section.module.css";

export const NewsSection = ({ topIds, newIds }) => {
  const [ids, setIds] = useState(topIds);
  useEffect(() => setIds(topIds), [topIds]);

  const handleClick = (e) => {
    if (e.target.textContent === "POPULAR") {
      setIds(topIds);
    } else if (e.target.textContent === "NEWEST") {
      setIds(newIds);
    }
    return;
  };

  return (
    <div className={styles.section}>
      <div className={styles.menu}>
        <h1>News</h1>
        <div className={styles.categories} onClick={handleClick}>
          <h5 className={ids === topIds && styles.selected}>POPULAR</h5>
          <h5 className={ids === newIds && styles.selected}>NEWEST</h5>
        </div>
      </div>
      <ol className={styles.items}>
        {ids.slice(0, 10).map((id) => (
          <li key={id}>
            <NewsPreviewItem id={id} />
          </li>
        ))}
      </ol>
      <Link
        to={ids === topIds ? "/Top/1" : "/News/1"}
        className={styles.section_page_link}
      >
        View More &gt;
      </Link>
    </div>
  );
};
