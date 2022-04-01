import React, { useState } from "react";

// emotion
import { css } from "@emotion/css";

// icons
import { BsBookmarkDash, BsHouse, BsPerson, BsWhatsapp } from "react-icons/bs";

const Dock = () => {
  const [active, setActive] = useState(1);

  const containerCss = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "85%",
  });

  const buttonCss = css({
    border: "none",
    color: "#9d9999",
    padding: 10,
    fontSize: 18,
    background: "none",
    cursor: "pointer",
    height: 37,
  });

  const activeButton = css({
    background: "#dddbdb !important",
  });

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
