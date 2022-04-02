import React from "react";

// prop-types
import PropTypes from "prop-types";

// components
import Item from "./Item/Item";

// styles
import { container, slideshow, span } from "./styles";

const Slideshow = (props) => {
  const { content } = props;

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
