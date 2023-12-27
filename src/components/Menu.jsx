import React from "react";
import MenuList from "./MenuList";
import Appetizers from "./Appetizers";
import Entrees from "./Entrees";
import Desserts from "./Desserts";
import Drinks from "./Drinks";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <p className="menu-top-p">Embark on a culinary journey with The Pleasant Hill's menu, featuring a sophisticated blend of classic favorites and innovative creations, perfectly paired with our exclusive selection of wines and cocktails.</p>
      <Appetizers array={MenuList} />
      <Entrees array={MenuList} />
      <Desserts array={MenuList} />
      <Drinks array={MenuList} />
    </div>
  );
};

export default Menu;
