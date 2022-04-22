import { useState, useEffect } from "react";
import styles from "./pagination.module.css";
import leftArrow from "../assets/prev-page-arrow.svg";
import rightArrow from "../assets/next-page-arrow.svg";

export const Pagination = ({ length, onClick, pageNum }) => {
  const [pageLength, setPageLength] = useState(0);
  const [startPage, setStartPage] = useState(1);

  useEffect(() => setPageLength(Math.ceil(length / 10)), [length]);

  const handlePageNumClick = (e) =>
    e.target.textContent && onClick(e.target.textContent);
  const handlePrevClick = () => setStartPage(startPage - 5);
  const handleNextClick = () => setStartPage(startPage + 5);

  return (
    <div className={styles.pagination}>
      {startPage > 1 ? (
        <button onClick={handlePrevClick} className={styles.button}>
          <img src={leftArrow} alt="prev" />
        </button>
      ) : (
        <button className={styles.button}>
          <img src={leftArrow} alt="prev" />
        </button>
      )}
      <ol className={styles.pageNumbers}>
        {new Array(5).fill("").map((_, i) => (
          <li
            selected={true}
            onClick={handlePageNumClick}
            key={startPage + i}
            className={`${styles.pageNumber} ${
              pageNum == startPage + i && styles.selected
            }`}
          >
            {startPage + i <= pageLength && startPage + i}
          </li>
        ))}
      </ol>
      {startPage + 4 < pageLength ? (
        <button onClick={handleNextClick} className={styles.button}>
          <img src={rightArrow} alt="next" />
        </button>
      ) : (
        <button className={styles.button}>
          <img src={rightArrow} alt="next" />
        </button>
      )}
    </div>
  );
};
