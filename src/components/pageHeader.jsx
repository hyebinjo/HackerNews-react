import styles from "./header.module.css";
import back from "../assets/left-arrow.png";
import search from "../assets/search.png";
import theme from "../assets/theme.png";
import about from "../assets/about.png";

export const PageHeader = () => {
  return (
    <div className={styles.pageHeader}>
      <img className={styles.back} src={back} alt="back-arrow" />
      <h4 className={styles.h4}>HACKER NEWS</h4>
      <span className={styles.icons}>
        <img className={styles.icon} src={search} alt="" />
        <img className={styles.icon} src={theme} alt="" />
        <img className={styles.icon} src={about} alt="" />
      </span>
    </div>
  );
};
