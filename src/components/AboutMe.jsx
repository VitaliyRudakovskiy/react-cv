import React from "react";
import TitleWrapper from "./TitleWrapper";
import StrenghtsList from "./StrenghtsList";

function AboutMe() {
  return (
    <section id='about-me'>
      <TitleWrapper title='About me' />
      <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
        I am a 20 years old student from Belarus. The studying seems to be
        simple and I have the desire to gain some useful experience in my
        leasure time. The ability to create user interfaces using modern
        libraries and frameworks gives me great pleasure. Now I am looking
        forward to join a progressive organization to practice all my skills and
        improve knowledge by working on real projects.
      </p>
      <StrenghtsList />
    </section>
  );
}

export default AboutMe;
