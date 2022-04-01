import React from "react";

// emotion
import { css } from "@emotion/css";

// components
import Tab from "./Tab/Tab";

const tabs = ["Popular", "For You", "India", "China", "Japan"];

const TabView = () => {
  const containerCss = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  });

  return (
    <div>
      <div className={containerCss}>
        {tabs.map((item, i) => (
          <Tab index={i} key={`tab${i}`} text={item} />
        ))}
      </div>
    </div>
  );
};

export default TabView;
