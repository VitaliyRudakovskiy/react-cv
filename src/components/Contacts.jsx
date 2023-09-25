import React from "react";
import styles from "../styles/modules/Contacts.module.scss";
import ContactsItem from "./ContactsItem";
import discord from "../images/Discord_icon.png";
import github from "../images/Github_icon.png";
import gmail from "../images/Gmail_icon.png";
import linkedIn from "../images/LinkedIn_icon.png";
import telegeram from "../images/Telegram_icon.png";
import phone from "../images/Telephone_icon.png";
import TitleWrapper from "./TitleWrapper";

function Contacts() {
  return (
    <section id='contacts' className={styles.contactsSection}>
      <TitleWrapper title='Contacts' />
      <ul className={styles.contactsList}>
        <ContactsItem
          imgLink={discord}
          appName='Discord'
          link='https://discordapp.com/users/422412665747669012'
          account='SkorpiON_4Eg'
        />
        <ContactsItem
          imgLink={github}
          appName='Github'
          link='https://github.com/VitaliyRudakovskiy'
          account='VitaliyRudakovskiy'
        />
        <ContactsItem
          imgLink={linkedIn}
          appName='LinkedIn'
          link='https://www.linkedin.com/in/vitaliy-rudakovskiy-808a9328b/'
          account='Vitaliy Rudakovskiy'
          target='_blank'
        />
        <ContactsItem
          imgLink={telegeram}
          appName='Telegram'
          link='https://t.me/v_rudakovskiy'
          account='@v_rudakovskiy'
        />
        <ContactsItem
          imgLink={gmail}
          appName='Gmail'
          link='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTMXvlxXjWstwfsrWJmXJxSHVqrwpprVGrpgrmmLNxPDmBCcVnFMsKTwnxXGLWKSlxMCXq'
          account='vitalikrud03@gmail.com'
        />
        <ContactsItem
          imgLink={phone}
          appName='Phone'
          link='tel:+375299057232'
          account='+375 (29) 905-72-32'
        />
      </ul>
    </section>
  );
}

export default Contacts;
