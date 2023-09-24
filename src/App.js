import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <div>
          <Navbar />
          <main className='main-container'>
            <LeftColumn />
            <RightColumn />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
