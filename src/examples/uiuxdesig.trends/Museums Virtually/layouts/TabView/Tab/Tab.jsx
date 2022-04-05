import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { buttonTextCss, activeButton } from "./styles";

const Tab = (props) => {
  const { index, text, action, active } = props;

  return (
    <button
      id={`t${index}`}
      onClick={action}
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
