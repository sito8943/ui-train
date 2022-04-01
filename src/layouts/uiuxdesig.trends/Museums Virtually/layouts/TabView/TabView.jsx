import React, { useState } from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// components
import Tab from "./Tab/Tab";

// styles
import "./style.css";

const TabView = (props) => {
  const { tabs, content } = props;

  const [active, setActive] = useState(0);

  const tabsContainerCss = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    overflow: "auto",
  });

  const tabContainer = css({
    width: "85%",
  });

  return (
    <div className={tabContainer}>
      <div className={`${tabsContainerCss} tab-container`}>
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
      <div>{content[active]}</div>
    </div>
  );
};

TabView.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TabView;
