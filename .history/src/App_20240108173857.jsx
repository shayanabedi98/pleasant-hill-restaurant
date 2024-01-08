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

  const bookAgain = () => {
    window.location.reload()
    setActiveDiv({
      home: false,
      menu: false,
      contact: true,
    })
  }

  const renderDiv = (clickedItem) => {
    setActiveDiv({
      home: clickedItem === 'home',
      menu: clickedItem === 'menu',
      contact: clickedItem === 'contact'
    })
  }

  return (
    <>
      <Navbar onClick={renderDiv} />
      {activeDiv.home && <Home />}
      {activeDiv.menu && <Menu />}
      {activeDiv.contact && <Contact onClick={onclick} />}
    </>
  );
}

export default App;
