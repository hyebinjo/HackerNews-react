import { Link } from "react-router-dom";
import { JobItem } from "../components/jobItem";
import { useEffect, useState } from "react";
import styles from "./section.module.css";

export const JobSection = () => {
  const [ids, setIds] = useState([]);

  const getIds = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/jobstories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(), []);

  return (
    <div className={styles.section}>
      <h2>Job</h2>
      <ol className={styles.items}>
        {ids.slice(0, 10).map((id) => (
          <li key={id}>
            <JobItem id={id} />
          </li>
        ))}
      </ol>
      <Link to={`/job`}> View More &gt; </Link>
    </div>
  );
};
