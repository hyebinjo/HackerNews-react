import styles from "./firstComment.module.css";
import arrow from "../assets/turn-down-right.svg";
import useFetch from "../hooks/useFetch";

export const FirstComment = ({ id }) => {
  const item = useFetch(`item/${id}.json`);

  return (
    <div className={styles.comment_box}>
      <img className={styles.arrow} src={arrow} alt="reply-arrow" />
      <p
        className={styles.comment_content}
        dangerouslySetInnerHTML={{ __html: item.text }}
      ></p>
    </div>
  );
};
