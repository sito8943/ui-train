import React from "react";

// prop-types
import PropTypes from "prop-types";

// components
import Item from "./Item/Item";
import SmallItem from "./SmallItem/SmallItem";

// styles
import { slideshow } from "./styles";

const Slideshow = (props) => {
  const { content, noMargin, small } = props;

  return (
    <div className={slideshow} id="slideshow">
      {content.map((item, i) => {
        return !small ? (
          <Item
            key={`item${i}`}
            noMargin={noMargin}
            index={i}
            total={content.length}
          >
            {item}
          </Item>
        ) : (
          <SmallItem
            key={`item${i}`}
            noMargin={noMargin}
            index={i}
            total={content.length}
          >
            {item}
          </SmallItem>
        );
      })}
    </div>
  );
};

Slideshow.defaultProps = {
  noMargin: false,
  small: false,
};

Slideshow.propTypes = {
  noMargin: PropTypes.bool,
  small: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.any),
};

export default Slideshow;
