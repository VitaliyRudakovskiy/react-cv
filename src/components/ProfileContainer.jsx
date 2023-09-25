import React from "react";
import styles from "../styles/modules/ProfileContainer.module.scss";
import myPhoto from "../images/Portrait (square).jpg";
import Profile from "./Profile";

function ProfileContainer() {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.portrait} src={myPhoto} alt='My photo'></img>
      <div className={styles.nameContainer}>
        <Profile />
      </div>
    </div>
  );
}

export default ProfileContainer;
