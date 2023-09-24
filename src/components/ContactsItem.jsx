import React from "react";
import styles from "../styles/modules/ContactsItem.module.scss";

function ContactsItem({ imgLink, appName, link, account }) {
  return (
    <li className={styles.contactsItem}>
      <img
        className={styles.contactsIcon}
        src={imgLink}
        alt={`${appName} icon`}
      />
      <a className={styles.contactsLink} href={link}>
        {account}
      </a>
    </li>
  );
}

export default ContactsItem;
