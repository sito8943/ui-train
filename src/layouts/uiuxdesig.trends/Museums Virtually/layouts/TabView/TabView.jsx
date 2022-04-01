import React, { useState } from "react";

// emotion
import { css } from "@emotion/css";

// components
import Tab from "./Tab/Tab";

// styles
import "./style.css";

const tabs = ["Popular", "For You", "India", "China", "Japan"];

const TabView = () => {
  const [active, setActive] = useState(1);

  const containerCss = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    overflow: "auto",
  });

  return (
    <div>
      <div className={`${containerCss} tab-container`}>
        {tabs.map((item, i) => (
          <Tab
            index={i}
            active={active === i ? true : false}
            key={`tab${i}`}
            text={item}
            action={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabView;
