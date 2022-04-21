import { Link } from "react-router-dom";
import { AskItem } from "../components/askItem";
import { useEffect, useState } from "react";
import styles from "./section.module.css";

export const AskSection = () => {
  const [ids, setIds] = useState([]);

  const getIds = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/askstories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(), []);

  return (
    <div className={styles.section}>
      <h2>Ask</h2>
      <ol>
        {ids.slice(0, 2).map((id) => (
          <li key={id}>
            <AskItem id={id} />
          </li>
        ))}
      </ol>
      <Link to={`/Ask`} className={styles.section_page_link}>
        View More &gt;
      </Link>
    </div>
  );
};
