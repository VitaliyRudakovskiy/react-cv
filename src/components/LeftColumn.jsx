import React from "react";
import Contacts from "./Contacts";
import Languages from "./Languages";
import styles from "../styles/modules/LeftColumn.module.scss";
import myPhoto from "../images/Portrait (square).jpg";

function LeftColumn() {
  return (
    <div>
      <img className={styles.portrait} src={myPhoto} alt='My photo'></img>
      <Contacts />
      <Languages />
    </div>
  );
}

export default LeftColumn;
