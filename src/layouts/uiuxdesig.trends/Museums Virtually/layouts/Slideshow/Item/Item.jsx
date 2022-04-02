import React from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

const Item = (props) => {
  const { index, children } = props;

  const item = css({
    height: 310,
  });

  const even = css({
    marginTop: 10,
  });

  const odd = css({
    marginBottom: 10,
  });

  const startCss = css({
    marginRight: 10,
  });

  const middleCss = css({
    margin: "0 10px",
  });

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
