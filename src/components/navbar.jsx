import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import news from "../imgs/newsIcon.png";
import show from "../imgs/showIcon.png";
import home from "../imgs/homeIcon.png";
import ask from "../imgs/askIcon.png";
import job from "../imgs/jobIcon.png";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={"./top"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={news} alt="news" />
          News
        </button>
      </Link>
      <Link to={"./show"} style={{ textDecoration: "none" }}>
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
      <Link to={"./ask"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={ask} alt="ask" />
          Ask
        </button>
      </Link>
      <Link to={"./job"} style={{ textDecoration: "none" }}>
        <button className={styles.navbarBtn}>
          <img src={job} alt="job" />
          Job
        </button>
      </Link>
    </nav>
  );
};
