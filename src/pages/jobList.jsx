import { JobListItem } from "../components/jobListItem";
import { useEffect, useState } from "react";
import styles from "./list.module.css";

export const JobList = () => {
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
    <>
      <h2 className={styles.title}>Job</h2>
      <ol>
        {ids.map((id) => (
          <li key={id}>
            <JobListItem id={id} />
          </li>
        ))}
      </ol>
    </>
  );
};
