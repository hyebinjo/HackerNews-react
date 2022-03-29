import { useEffect, useState } from "react";

export const Comment = ({ id }) => {
  const [item, setItem] = useState({});

  const getData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const item = await response.json();
      setItem(item);
    } catch (error) {}
  };

  useEffect(() => getData(), []);

  return (
    <div>
      <span>{`${item.by}  ${item.time}`}</span>
      <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
    </div>
  );
};
