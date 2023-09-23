import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <body className='body'>
      <div className='container'>
        <div>
          <Navbar />
        </div>
      </div>
    </body>
  );
}

export default App;
