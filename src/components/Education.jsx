import React from "react";
import TitleWrapper from "./TitleWrapper";
import styles from "../styles/modules/Education.module.scss";

function Education() {
  return (
    <section id='education'>
      <TitleWrapper title='Education' />
      <div className={styles.educationContent}>
        <div className={styles.universityContainer}>
          <h3 className={styles.title}>University</h3>
          <p>Belarusian State University of Informatics and Radioelectronics</p>
          <p>Faculty of Computer-Aided Design</p>
        </div>
        <div className={styles.coursesContainer}>
          <h3 className={styles.title}>Courses</h3>
          <ul className={styles.coursesList}>
            <li>#SimpleCode C++</li>
            <li>#SimpleCode C#</li>
            <li>Rolling Scopes School JS/FE 2022Q4</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
