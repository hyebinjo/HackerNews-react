import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const UserInfo = () => {
  let params = useParams();
  const [item, setItem] = useState({});

  const getData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${params.id}.json`
      );
      const item = await response.json();
      setItem(item);
    } catch (error) {}
  };

  useEffect(() => getData(), []);

  return (
    <>
      <header>해커뉴스 </header>
      <span>Go back</span>
      <div>
        <h2>{`${item.id}`}</h2>
        <strong>{`${item.karma} karma`}</strong>
        <p></p>
      </div>
    </>
  );
};
