import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { smallItem } from "./styles";

const SmallItem = (props) => {
  const { children } = props;

  return <div className={smallItem}>{children}</div>;
};

SmallItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmallItem;
