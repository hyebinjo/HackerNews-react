import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommentList } from "../components/commentList";
import { PageHeader } from "../components/pageHeader";

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
      <main>
        <h>Ask</h>
        <posting>
          <span>
            {item.by} {item.time}
          </span>
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
          <span>{item.score}</span>
          <span>{item.descendants}</span>
          <CommentList ids={item.kids} />
        </posting>
      </main>
    </>
  );
};
