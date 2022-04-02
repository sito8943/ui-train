import React from "react";

// prop-types
import PropTypes from "prop-types";

// components
import Item from "./Item/Item";

// context
import { useSeen } from "../../context/SeenContext";

// styles
import { container, slideshow, span } from "./styles";

const Slideshow = (props) => {
  const { content } = props;

  const { setSeenState } = useSeen();

  return (
    <div className={container}>
      <div className={slideshow} id="slideshow">
        {content.map((item, i) => (
          <Item key={`item${i}`} index={i}>
            {item}
          </Item>
        ))}
      </div>
      <span className={span} onClick={() => setSeenState({ type: "toggle" })}>
        Show all
      </span>
    </div>
  );
};

Slideshow.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

export default Slideshow;
