import React, { useState } from "react";

// icons
import { BsBookmarkDash, BsHouse, BsPerson, BsWhatsapp } from "react-icons/bs";

// styles
import { containerCss, buttonCss, activeButton } from "./styles";

const Dock = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={containerCss}>
      <button
        id="d1"
        onClick={() => setActive(1)}
        className={`${buttonCss} ${active === 1 ? activeButton : ""}`}
      >
        <BsHouse />
      </button>
      <button
        id="d1"
        onClick={() => setActive(2)}
        className={`${buttonCss} ${active === 2 ? activeButton : ""}`}
      >
        <BsWhatsapp />
      </button>
      <button
        id="d1"
        onClick={() => setActive(3)}
        className={`${buttonCss} ${active === 3 ? activeButton : ""}`}
      >
        <BsBookmarkDash />
      </button>
      <button
        id="d1"
        onClick={() => setActive(4)}
        className={`${buttonCss} ${active === 4 ? activeButton : ""}`}
      >
        <BsPerson />
      </button>
    </div>
  );
};

export default Dock;
