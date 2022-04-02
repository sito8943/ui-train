import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { containerCss } from "./styles";

const Mobile = (props) => {
  const { children } = props;
  return <div className={containerCss}>{children}</div>;
};

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mobile;
