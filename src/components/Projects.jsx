import React from "react";
import TitleWrapper from "./TitleWrapper";
import Project from "./Project";
import todolist from "../images/Todolist_demo.png";
import tenzies from "../images/Tenzies_demo.png";
import momentum from "../images/Momentum_demo.png";
import plants from "../images/Plants_demo.png";
import shelter from "../images/Shelter_demo.png";

function Projects() {
  return (
    <section id='projects' style={{ marginBottom: "1rem" }}>
      <TitleWrapper title='Projects' />
      <Project name='My Todo List' description='todoList' imgLink={todolist} />
      <Project name='Tenzies' description='tenzies' imgLink={tenzies} />
      <Project name='Momentum' description='momentum' imgLink={momentum} />
      <Project name='Plants' description='plants' imgLink={plants} />
      <Project name='Shelter' description='shelter' imgLink={shelter} />
    </section>
  );
}

export default Projects;
