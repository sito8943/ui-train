import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { item, middleCss, odd, even, startCss } from "./styles";

const Item = (props) => {
  const { index, children } = props;

  return (
    <div
      className={`${item} ${index !== 0 ? middleCss : startCss} ${
        index % 2 === 0 ? even : odd
      }`}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Item;
