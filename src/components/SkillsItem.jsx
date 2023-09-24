import React from "react";
import styles from "../styles/modules/SkillsItem.module.scss";

function SkillsItem({ skillName }) {
  return <li className={styles.skillItem}>{skillName}</li>;
}

export default SkillsItem;
