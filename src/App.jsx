import { useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [activeDiv, setActiveDiv] = useState({
    home: true,
    menu: false,
    contact: false,
  });

  const renderDiv = (clickedItem) => {
    setActiveDiv({
      home: clickedItem === 'home',
      menu: clickedItem === 'menu',
      contact: clickedItem === 'contact'
    })
  }

  const renderDivButtons = (e) => {
    setActiveDiv({
      home: e.target.value === 'home',
      menu: e.target.value === 'menu',
      contact: e.target.value === 'contact'
    })
  }

  return (
    <>
      <Navbar onClick={renderDiv} />
      {activeDiv.home && <Home onClick={renderDivButtons} />}
      {activeDiv.menu && <Menu />}
      {activeDiv.contact && <Contact />}
    </>
  );
}

export default App;
