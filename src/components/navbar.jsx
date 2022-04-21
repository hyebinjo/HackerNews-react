import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import news from "../assets/newsIcon.png";
import show from "../assets/showIcon.png";
import home from "../assets/homeIcon.png";
import ask from "../assets/askIcon.png";
import job from "../assets/jobIcon.png";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={"./News"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={news} alt="news" />
          News
        </button>
      </Link>
      <Link to={"./Show"} style={{ textDecoration: "none" }}>
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
      <Link to={"./Ask"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={ask} alt="ask" />
          Ask
        </button>
      </Link>
      <Link to={"./Job"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={job} alt="job" />
          Job
        </button>
      </Link>
    </nav>
  );
};
