import React from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

const Item = (props) => {
  const { index, children } = props;

  const item = css({});

  const even = css({
    marginTop: 10,
  });

  const odd = css({
    marginBottom: 10,
  });

  return (
    <div className={`${item} ${index % 2 === 0 ? even : odd}`}>{children}</div>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Item;
