import React from "react";

// icons
import { BsChevronLeft, BsBookmarkDash } from "react-icons/bs";

// styles
import { notificationCss, container } from "../styles";
import { museum } from "./styles";

function MuseumNavbar() {
  return (
    <div className={`${container} ${museum}`}>
      <button onClick={null} className={notificationCss}>
        <BsChevronLeft />
      </button>
      <button onClick={null} className={notificationCss}>
        <BsBookmarkDash />
      </button>
    </div>
  );
}

export default MuseumNavbar;
