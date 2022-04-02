import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { item, middleCss, odd, even, startCss, endCss } from "./styles";

const Item = (props) => {
  const { index, children, total } = props;

  return (
    <div
      className={`${item} ${index !== 0 && middleCss} ${
        index === 0 && index < total - 1 && startCss
      } 
      ${index === total - 1 && endCss} ${index % 2 === 0 ? even : odd}`}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Item;
