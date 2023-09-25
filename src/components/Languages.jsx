import React from "react";
import styles from "../styles/modules/Languages.module.scss";
import LanguagesItem from "./LanguagesItem";
import russianFlag from "../images/Russia.png";
import britishFlag from "../images/Britain.png";
import frenchFlag from "../images/France.png";
import TitleWrapper from "./TitleWrapper";

function Languages() {
  return (
    <section id='languages' className={styles.languagesSection}>
      <TitleWrapper title='Languages' />
      <ul className={styles.languagesList}>
        <LanguagesItem
          imgLink={russianFlag}
          imgAlt='russian flag'
          level='Russian - native speaker'
        />
        <LanguagesItem
          imgLink={britishFlag}
          imgAlt='british flag'
          level='English - B2'
        />
        <LanguagesItem
          imgLink={frenchFlag}
          imgAlt='french flag'
          level='French - A1'
        />
      </ul>
    </section>
  );
}

export default Languages;
