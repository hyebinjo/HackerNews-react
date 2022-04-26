import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommentList } from "../components/commentList";
import { PageHeader } from "../components/pageHeader";
import styles from "./article.module.css";
import userIcon from "../assets/user-circle2.svg";
import score from "../assets/score.svg";
import comment from "../assets/comment.svg";
import linkArrow from "../assets/link-arrow.svg";

export const Article = () => {
  let params = useParams();
  const [item, setItem] = useState({});

  const getData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${params.id}.json`
      );
      const item = await response.json();
      setItem(item);
    } catch (error) {}
  };

  useEffect(() => getData(), []);

  return (
    <>
      <PageHeader />
      <div className={styles.articlePage}>
        <h2 className={styles.title}>{params.section}</h2>
        <div className={styles.article}>
          <Link to={`/user/${item.by}`}>
            <strong className={styles.header}>
              <img className={styles.icon} src={userIcon} alt="user icon" />{" "}
              {item.by}
            </strong>
          </Link>
          <h4 className={styles.article__title}>{item.title}</h4>
          {item.text && (
            <p
              className={styles.article__text}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></p>
          )}
          <span className={styles.time}>{item.time}</span>
          <div className={styles.footer}>
            <strong className={styles.footer__info}>
              <img className={styles.scoreIcon} src={score} alt="score" />
              {item.score}
              <img className={styles.commentIcon} src={comment} alt="comment" />
              {item.descendants}
            </strong>
            {item.url && (
              <a href={`${item.url}`}>
                <img src={linkArrow} alt="go to link" />
              </a>
            )}
          </div>
          <CommentList ids={item.kids} />
        </div>
      </div>
    </>
  );
};
