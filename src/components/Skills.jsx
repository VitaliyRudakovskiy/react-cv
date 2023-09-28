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
        <SkillsItem skillName='CSS, SCSS, Tailwindcss ' />
        <SkillsItem skillName='JavaScript, Node.js' />
        <SkillsItem skillName='Git, GitHub' />
        <SkillsItem skillName='C#, C++ (OOP, WinForms)' />
        <SkillsItem skillName='MySQL, MSSQL' />
      </ul>
    </section>
  );
}

export default Skills;
