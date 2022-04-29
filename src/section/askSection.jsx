import { Link } from "react-router-dom";
import { AskItem } from "../components/askItem";
import styles from "./section.module.css";
import useFetch from "../hooks/useFetch";

export const AskSection = () => {
  const ids = useFetch(`askstories.json`);

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
      <Link to={`/Ask/1`} className={styles.section_page_link}>
        View More &gt;
      </Link>
    </div>
  );
};
