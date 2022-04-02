import React from "react";

// prop-types
import PropTypes from "prop-types";

// components
import Item from "./Item/Item";

// styles
import { slideshow } from "./styles";

const Slideshow = (props) => {
  const { content } = props;

  return (
    <div className={slideshow} id="slideshow">
      {content.map((item, i) => (
        <Item key={`item${i}`} index={i} total={content.length}>
          {item}
        </Item>
      ))}
    </div>
  );
};

Slideshow.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

export default Slideshow;
