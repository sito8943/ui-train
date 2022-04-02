import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import {
  smallItem,
  middleSmallCss,
  startSmallCss,
  endSmallCss,
} from "./styles";

const SmallItem = (props) => {
  const { children, index, total } = props;

  return (
    <div
      className={`${smallItem} ${index !== 0 && middleSmallCss} ${
        index === 0 && index < total - 1 && startSmallCss
      }`}
    >
      {children}
    </div>
  );
};

SmallItem.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default SmallItem;
