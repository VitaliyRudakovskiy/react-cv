import React from "react";
import TitleWrapper from "./TitleWrapper";
import SkillsItem from "./SkillsItem";
import styles from "../styles/modules/Skills.module.scss";

function Skills() {
  return (
    <section id='skills'>
      <TitleWrapper title='Skills' />
      <ul className={styles.skillsList}>
        <SkillsItem skillName='React.js' />
        <SkillsItem skillName='Redux' />
        <SkillsItem skillName='HTML' />
        <SkillsItem skillName='CSS' />
        <SkillsItem skillName='JavaScript' />
        <SkillsItem skillName='Git, GitHub' />
        <SkillsItem skillName='C#, C++ (OOP, WinForms)' />
        <SkillsItem skillName='MySQL (basic knowledge)' />
      </ul>
    </section>
  );
}

export default Skills;
