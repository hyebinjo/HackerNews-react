import { Link } from "react-router-dom";
import { JobPreviewItem } from "../components/jobPreviewItem";
import styles from "./section.module.css";
import useFetch from "../hooks/useFetch";

export const JobSection = () => {
  const ids = useFetch(`jobstories.json`);

  return (
    <div className={styles.section}>
      <h2>Job</h2>
      <ol className={styles.items}>
        {ids.slice(0, 10).map((id) => (
          <li key={id}>
            <JobPreviewItem id={id} />
          </li>
        ))}
      </ol>
      <Link to={`/Job/1`} className={styles.section_page_link}>
        View More &gt;
      </Link>
    </div>
  );
};
