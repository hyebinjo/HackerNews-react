import { Link } from "react-router-dom";
import { ArticleItem } from "../components/articleItem";
import { useEffect, useState } from "react";
import styles from "../css/section.module.css";

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
    <div>
      <h className={styles.menu}>
        <h1>News</h1>
        <h5 className={styles.categories} onClick={handleClick}>
          <span className={section === "top" ? styles.selected : ""}>
            POPULAR
          </span>
          <span className={section === "new" ? styles.selected : ""}>
            NEWEST
          </span>
        </h5>
      </h>
      <ol className={styles.items}>
        {ids.slice(0, 10).map((id) => (
          <li key={id}>
            <ArticleItem id={id} />
          </li>
        ))}
      </ol>
      <Link to={`/${category}`}> View More > </Link>
    </div>
  );
};
