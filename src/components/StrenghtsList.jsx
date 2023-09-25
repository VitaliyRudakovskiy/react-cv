import React from "react";
import styles from "../styles/modules/StrengthsList.module.scss";

function StrenghtsList() {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p className={styles.strenghtsTitle}>
        My strengths that can help at work:
      </p>
      <ul className={styles.strenghtsList}>
        <li className={styles.strenghtsItem}>Ability to learn quickly</li>
        <li className={styles.strenghtsItem}>High concentration</li>
        <li className={styles.strenghtsItem}>Craving for new knowledge</li>
        <li className={styles.strenghtsItem}>Like working in a team</li>
      </ul>
    </div>
  );
}

export default StrenghtsList;
