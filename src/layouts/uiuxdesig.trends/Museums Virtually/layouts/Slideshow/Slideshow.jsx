import React from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// components
import Item from "./Item/Item";

const Slideshow = (props) => {
  const { content } = props;

  const slideshow = css({
    display: "flex",
    overflowX: "scroll",
  });

  return (
    <div className={slideshow} id="slideshow">
      {content.map((item, i) => (
        <Item index={i}>{item}</Item>
      ))}
    </div>
  );
};

Slideshow.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

export default Slideshow;