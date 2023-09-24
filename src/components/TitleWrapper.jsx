import React from "react";
import styles from "../styles/modules/TitleWrapper.module.scss";

function TitleWrapper({ title }) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default TitleWrapper;
