import { Link } from "react-router-dom";
import { NewsPreviewItem } from "../components/newsPreviewItem";
import { useState } from "react";
import styles from "./section.module.css";
import useFetch from "../hooks/useFetch";

export const NewsSection = () => {
  const [section, setSection] = useState("top");
  const ids = useFetch(`${section}stories.json`);

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
          <h5 className={section === "top" && styles.selected}>POPULAR</h5>
          <h5 className={section === "new" && styles.selected}>NEWEST</h5>
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
        to={section === "top" ? "/Top/1" : "/News/1"}
        className={styles.section_page_link}
      >
        View More &gt;
      </Link>
    </div>
  );
};
