import styles from "../css/Header.module.css";
import back from "../imgs/left-arrow.png";
import search from "../imgs/search.png";
import theme from "../imgs/theme.png";
import about from "../imgs/about.png";

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
