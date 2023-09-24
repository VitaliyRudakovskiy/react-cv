import React from "react";
import styles from "../styles/modules/Project.module.scss";

const projectLinks = {
  todoList: "https://vitaliyrudakovskiy.github.io/react-to-do-list/",
  tenzies: "https://vitaliyrudakovskiy.github.io/react_tenzies/",
  momentum: "https://vitaliyrudakovskiy.github.io/momentum/",
  plants: "https://vitaliyrudakovskiy.github.io/RSS-Plants/",
  shelter: "https://vitaliyrudakovskiy.github.io/RSS-Shelter/",
};

const descriptionVariants = {
  todoList:
    "This is my one of the most complicated projects. It's written in ReactJS using Redux toolkit to control states. All data is saved in local storage. It also has nice animations of blocks appearing via Framer Motion tool.",
  tenzies:
    "This project is a game, where you should roll and block squares until they are not similar. It was also made with ReactJS and it was one one of my first React projects.",
  momentum:
    "Momentum is a clone of popular Google browser extension. It includes time, quotes, weather, different wallpapers, music players and som settings. It was written using JS, including API data and some CSS styles.",
  plants:
    "Plants was my first project on Rolling Scopes School courses. We just started to learn basics of HTML, CSS and JS, so the project was fully made via them. It also has adaptive design to phones and tablets.",
  shelter:
    "Shelter was my second project on Rolling Scopes School courses. It was a bit more complicated than Plants and also was multipaged. There I also tried making slider and modal windows.",
};

function Project({ name, description, imgLink }) {
  return (
    <div className={styles.projectContainer}>
      <a
        className={styles.projectTitle}
        href={projectLinks[`${description}`]}
        target='_blank'>
        {name}
      </a>
      <div className={styles.projectInfo}>
        <p className={styles.projectDescription}>
          {descriptionVariants[description]}
        </p>
        <img className={styles.projectImage} src={imgLink} alt='project demo' />
      </div>
    </div>
  );
}

export default Project;
