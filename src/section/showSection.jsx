import { Link, Routes, Route } from "react-router-dom";
import { ArticleItem } from "../components/articleItem";
import { useEffect, useState } from "react";
import styles from "./section.module.css";

export const ShowSection = () => {
  const [ids, setIds] = useState([]);

  const getIds = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/showstories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(), []);

  return (
    <div className={styles.section}>
      <h2>Show</h2>
      <Routes>
        <Route
          path="/"
          element={
            <ol>
              {ids.slice(0, 2).map((id) => (
                <li key={id}>
                  <ArticleItem id={id} />
                </li>
              ))}
            </ol>
          }
        ></Route>
      </Routes>
      <Link to={`/show`}> View More > </Link>
    </div>
  );
};
