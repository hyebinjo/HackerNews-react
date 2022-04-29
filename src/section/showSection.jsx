import { Link } from "react-router-dom";
import { ShowItem } from "../components/showItem";
import styles from "./section.module.css";

export const ShowSection = ({ ids }) => {
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
      <Link to={`/Show/1`} className={styles.section_page_link}>
        View More &gt;
      </Link>
    </div>
  );
};
