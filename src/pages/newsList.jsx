import { ArticleItem } from "../components/articleItem";
import { useEffect, useState } from "react";

export const NewsList = ({ category }) => {
  const [ids, setIds] = useState([]);
  const [menu, setMenu] = useState(category);

  const getIds = async (menu) => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/${menu}stories.json`
      );
      const ids = await response.json();
      setIds(ids);
    } catch (error) {}
  };

  useEffect(() => getIds(menu), [menu]);

  const handleClick = (e) => {
    if (e.target.className === "top") {
      setMenu("top");
    } else if (e.target.className === "new") {
      setMenu("new");
    }
    return;
  };

  return (
    <div className="page">
      <h2>News</h2>
      <h5 onClick={handleClick}>
        <span className="top">popular</span>
        <span className="new">newest</span>
      </h5>
      <ol>
        {ids.map((id) => (
          <li key={id}>
            <ArticleItem id={id} />
          </li>
        ))}
      </ol>
    </div>
  );
};
