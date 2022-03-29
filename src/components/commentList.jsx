import { useEffect, useState } from "react";
import { Comment } from "./comment";

export const CommentList = ({ ids }) => {
  const [commentIds, setCommentIds] = useState([]);
  useEffect(() => setCommentIds(ids), [ids]);
  return (
    <div>
      {commentIds && commentIds.map((id) => <Comment key={id} id={id} />)}
    </div>
  );
};
