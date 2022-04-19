import { Link } from "react-router-dom";
import { ShowItem } from "../components/showItem";
import { useEffect, useState } from "react";
import styles from "./section.module.css";

export const ShowSection = () => {
  const [ids, setIds] = useState([]);

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

  return (
    <div className={styles.section}>
      <h2>Show</h2>
      <ol>
        {ids.slice(0, 2).map((id) => (
          <li key={id}>
            <ShowItem id={id} />
          </li>
        ))}
      </ol>
      <Link to={`/show`} className={styles.section_page_link}>
        View More &gt;
      </Link>
    </div>
  );
};
