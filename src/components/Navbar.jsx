import React from "react";
import NavbarItem from "./NavbarItem";
import styles from "../styles/modules/Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <NavbarItem name='Contacts' href='contacts' />
        <NavbarItem name='About me' href='about-me' />
        <NavbarItem name='Skills' href='skills' />
        <NavbarItem name='Projects' href='projects' />
        <NavbarItem name='Education' href='education' />
        <NavbarItem name='Languages' href='languages' />
      </ul>
    </nav>
  );
}

export default Navbar;
