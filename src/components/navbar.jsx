import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import news from "../assets/newsIcon.svg";
import show from "../assets/showIcon.svg";
import home from "../assets/homeIcon.svg";
import ask from "../assets/askIcon.svg";
import job from "../assets/jobIcon.svg";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={"./News/top/1"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={news} alt="news" />
          News
        </button>
      </Link>
      <Link to={"./Show/1"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={show} alt="show" />
          Show
        </button>
      </Link>
      <Link to={"./"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={home} alt="home" />
          Home
        </button>
      </Link>
      <Link to={"./Ask/1"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={ask} alt="ask" />
          Ask
        </button>
      </Link>
      <Link to={"./Job/1"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={job} alt="job" />
          Job
        </button>
      </Link>
    </nav>
  );
};
