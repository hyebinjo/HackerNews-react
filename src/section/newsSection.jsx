import { Link } from "react-router-dom";
import { NewsPreviewItem } from "../components/newsPreviewItem";
import { useEffect, useState } from "react";
import styles from "./section.module.css";

export const NewsSection = ({ category }) => {
  const [ids, setIds] = useState([]);
  const [section, setSection] = useState(category);

  const getIds = async (menu) => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/${section}stories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(section), [section]);

  const handleClick = (e) => {
    if (e.target.textContent === "POPULAR") {
      setSection("top");
    } else if (e.target.textContent === "NEWEST") {
      setSection("new");
    }
    return;
  };

  return (
    <div className={styles.section}>
      <div className={styles.menu}>
        <h1>News</h1>
        <div className={styles.categories} onClick={handleClick}>
          <h5 className={section === "top" ? styles.selected : ""}>POPULAR</h5>
          <h5 className={section === "new" ? styles.selected : ""}>NEWEST</h5>
        </div>
      </div>
      <ol className={styles.items}>
        {ids.slice(0, 10).map((id) => (
          <li key={id}>
            <NewsPreviewItem id={id} news={true} />
          </li>
        ))}
      </ol>
      <Link to={`/${category}`}> View More > </Link>
    </div>
  );
};
