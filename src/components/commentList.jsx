import { useEffect, useState } from "react";
import { Comment } from "./comment";
import styles from "./commentList.module.css";

export const CommentList = ({ ids }) => {
  const [commentIds, setCommentIds] = useState([]);
  useEffect(() => setCommentIds(ids), [ids]);
  return (
    <div className={styles.comments}>
      {commentIds && commentIds.map((id) => <Comment key={id} id={id} />)}
    </div>
  );
};
