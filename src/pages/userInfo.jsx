import { useParams, useNavigate } from "react-router-dom";
import styles from "./userInfo.module.css";
import back from "../assets/left-arrow2.svg";
import user from "../assets/user-circle.svg";
import useFetch from "../hooks/useFetch";

export const UserInfo = () => {
  const params = useParams();
  const item = useFetch(`user/${params.id}.json`);
  const navigate = useNavigate();

  return (
    <div className={styles.userInfoPage}>
      <span className={styles.back}>
        <img
          src={back}
          alt="go back"
          className={styles.backArrow}
          onClick={() => {
            navigate(-1);
          }}
        />
        Go back
      </span>
      <div className={styles.userInfo}>
        <img src={user} alt="user image" className={styles.profileImage} />
        <h3>{item.id}</h3>
        <p
          dangerouslySetInnerHTML={{ __html: item.about }}
          className={styles.userText}
        ></p>
        <dl className={styles.userDetails}>
          <div className={styles.userDetailList}>
            <dt className={styles.userDataTerm}>karma :</dt>
            <dd className={styles.userData}>{item.karma}</dd>
          </div>
          <div className={styles.userDetailList}>
            <dt className={styles.userDataTerm}>submissions :</dt>
            <dd className={styles.userData}>
              {item.submitted && item.submitted.length}
            </dd>
          </div>
          <div className={styles.userDetailList}>
            <dt className={styles.userDataTerm}>created :</dt>
            <dd className={styles.userData}>
              {new Date(Number(item.created) * 1000).toLocaleDateString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
