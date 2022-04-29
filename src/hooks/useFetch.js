import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/${url}`)
      .then((res) => res.json())
      .then((resJson) => setData(resJson));
  }, [url]);

  return data;
}

export default useFetch;
