import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import ProfileContainer from "./components/ProfileContainer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Languages from "./components/Languages";
import Burger from "./components/Burger";

const minWindowBurgerSize = 600; //screen width when burger menu appears

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenSize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };
    window.addEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className='body'>
      <div className='container'>
        {screenWidth > minWindowBurgerSize ? <Navbar /> : <Burger />}
        <ProfileContainer />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <div className='footer-container'>
          <Contacts />
          <Languages />
        </div>
      </div>
    </div>
  );
}

export default App;
