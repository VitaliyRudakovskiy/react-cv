import React from "react";
import styles from "../styles/modules/Profile.module.scss";

function Profile() {
  return (
    <section id='profile' className={styles.profileSection}>
      <h1 className={styles.name}>Vitaliy Rudakovskiy</h1>
      <p className={styles.developer}>Front-end developer</p>
    </section>
  );
}

export default Profile;
