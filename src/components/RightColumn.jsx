import React from "react";
import styles from "../styles/modules/RightColumn.module.scss";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

function RightColumn() {
  return (
    <div className={styles.rightColumn}>
      <Profile />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default RightColumn;
