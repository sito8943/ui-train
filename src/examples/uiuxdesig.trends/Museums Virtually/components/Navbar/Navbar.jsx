import React from "react";

// icons
import { BsList, BsBell, BsChevronDown } from "react-icons/bs";

// styles
import {
  container,
  drawerButton,
  textListCss,
  notificationCss,
  spanCss,
} from "./styles";

const Navbar = () => {
  return (
    <div className={container}>
      <button onClick={null} className={drawerButton}>
        <BsList />
      </button>
      <button onClick={null} className={textListCss}>
        Europe
        <span className={spanCss}>
          <BsChevronDown />
        </span>
      </button>
      <button onClick={null} className={notificationCss}>
        <BsBell />
      </button>
    </div>
  );
};

export default Navbar;
