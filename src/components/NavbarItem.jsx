import React from "react";
import styles from "../styles/modules/NavbarItem.module.scss";

function NavbarItem({ href, name }) {
  return (
    <li className={styles.navbarItem}>
      <a className={styles.link} href={`#${href}`}>
        {name}
      </a>
    </li>
  );
}

export default NavbarItem;
