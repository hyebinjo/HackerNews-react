import styles from "./header.module.css";
import back from "../assets/left-arrow.svg";
import search from "../assets/search.svg";
import theme from "../assets/theme.svg";
import about from "../assets/about.svg";
import { useNavigate } from "react-router-dom";

export const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageHeader}>
      <img
        className={styles.back}
        src={back}
        alt="back-arrow"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h4 className={styles.h4}>HACKER NEWS</h4>
      <span className={styles.icons}>
        <img className={styles.icon} src={search} alt="" />
        <img className={styles.icon} src={theme} alt="" />
        <img className={styles.icon} src={about} alt="" />
      </span>
    </div>
  );
};
