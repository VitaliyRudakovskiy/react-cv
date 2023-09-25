import React, { useState } from "react";
import styles from "../styles/modules/Burger.module.scss";

function Burger() {
  const [burgerOpened, setBurgerOpened] = useState(false);

  const toggleBurger = () => {
    setBurgerOpened(!burgerOpened);
  };

  return (
    <div className={styles.burgerContainer}>
      <div
        className={styles.burgerIcon}
        onClick={toggleBurger}
        onKeyDown={toggleBurger}>
        <div
          className={styles.burgerLine}
          style={{ transform: burgerOpened ? "rotate(45deg)" : "rotate(0)" }}
        />
        <div
          className={styles.burgerLine}
          style={{
            transform: burgerOpened ? "translateX(100%)" : "translateX(0)",
            opacity: burgerOpened ? 0 : 1,
          }}
        />
        <div
          className={styles.burgerLine}
          style={{ transform: burgerOpened ? "rotate(-45deg)" : "rotate(0)" }}
        />
        <ul
          className={styles.links}
          style={{ display: burgerOpened ? "flex" : "none" }}>
          <a href='#about-me'>About me</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#education'>Education</a>
          <a href='#contacts'>Contacts</a>
          <a href='#languages'>Languages</a>
        </ul>
      </div>
    </div>
  );
}

export default Burger;
