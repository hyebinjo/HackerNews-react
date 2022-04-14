import styles from "./header.module.css";
import logo from "../assets/Logo.png";
import search from "../assets/search.png";
import theme from "../assets/theme.png";
import about from "../assets/about.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h4 className={styles.h4}>
        <img className={styles.logo} src={logo} alt="hacker news" />
        HACKER NEWS
      </h4>
      <span className={styles.icons}>
        <img className={styles.icon} src={search} alt="" />
        <img className={styles.icon} src={theme} alt="" />
        <img className={styles.icon} src={about} alt="" />
      </span>
    </div>
  );
};
