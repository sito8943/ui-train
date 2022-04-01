import React from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

const Tab = (props) => {
  const { index, text, action, active } = props;

  const buttonTextCss = css({
    minWidth: 100,
    border: "none",
    color: "#9d9999",
    padding: 10,
    fontSize: 15,
    background: "none",
    cursor: "pointer",
  });

  const activeButton = css({
    background: "#dddbdb !important",
  });

  return (
    <button
      id={`t${index}`}
      action={action}
      className={`${buttonTextCss} ${active ? activeButton : ""}`}
    >
      {text}
    </button>
  );
};

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Tab;
