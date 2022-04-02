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

  const container = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
  });

  const span = css({
    color: "#9f9d9d",
    marginTop: -20,
    cursor: "pointer",
  });

  return (
    <div className={container}>
      <div className={slideshow} id="slideshow">
        {content.map((item, i) => (
          <Item key={`item${i}`} index={i}>
            {item}
          </Item>
        ))}
      </div>
      <span className={span}>Show all</span>
    </div>
  );
};

Slideshow.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

export default Slideshow;
