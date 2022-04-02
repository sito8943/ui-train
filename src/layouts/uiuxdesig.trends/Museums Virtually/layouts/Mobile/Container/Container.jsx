import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { mobileContainer } from "./style";

const Container = (props) => {
  const { children } = props;
  return <div className={mobileContainer}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
