import React from "react";
import MenuList from "./MenuList";
import Appetizers from "./Appetizers";
import Entrees from "./Entrees";
import Desserts from "./Desserts";
import Drinks from "./Drinks";

const Menu = () => {
  return (
    <div>
      <Appetizers array={MenuList} />
      <Entrees array={MenuList} />
      <Desserts array={MenuList} />
      <Drinks array={MenuList} />
    </div>
  );
};

export default Menu;
