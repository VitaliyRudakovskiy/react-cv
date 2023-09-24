import React from "react";
import styles from "../styles/modules/LanguagesItem.module.scss";

function LanguagesItem({ imgLink, imgAlt, level }) {
  return (
    <li className={styles.languagesItem}>
      <img className={styles.languagesIcon} src={imgLink} alt={imgAlt} />
      <p className={styles.languagesText}>{level}</p>
    </li>
  );
}

export default LanguagesItem;
