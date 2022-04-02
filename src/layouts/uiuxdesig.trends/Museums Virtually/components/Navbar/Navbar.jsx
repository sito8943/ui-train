import React from "react";

// icons
import {
  BsList,
  BsBell,
  BsChevronDown,
  BsChevronLeft,
  BsBookmarkDash,
} from "react-icons/bs";

// context
import { useSeen } from "../../context/SeenContext";

// styles
import {
  container,
  drawerButton,
  textListCss,
  notificationCss,
  spanCss,
} from "./styles";

const Navbar = () => {
  const { seenState, setSeenState } = useSeen();

  return (
    <div className={container}>
      {!seenState.seen ? (
        <>
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
        </>
      ) : (
        <>
          <button
            onClick={() => setSeenState({ type: "toggle" })}
            className={notificationCss}
          >
            <BsChevronLeft />
          </button>
          <button onClick={null} className={notificationCss}>
            <BsBookmarkDash />
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
