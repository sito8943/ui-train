import React, { useState } from "react";

// prop-types
import PropTypes from "prop-types";

// icons
import { BsBookmarkDash, BsFillStarFill } from "react-icons/bs";

// emotion
import { css } from "@emotion/css";

// styles
import {
  titleArea,
  vrArea,
  vrButton,
  vrHr,
  starSpan,
  vrStarIcon,
  imageCardCss,
  markerButton,
  titleCss,
  markerShadow,
  cardShadow,
} from "./styles";

const ImageCard = (props) => {
  const {
    title,
    noMarker,
    noTitle,
    noButton,
    noStars,
    noShadow,
    src,
    width,
    height,
  } = props;

  const [toggle, setToggle] = useState(false);

  const toggleMarker = () => {
    setToggle(!toggle);
  };

  const backgroundImage = css({
    height,
    width,
    backgroundImage: `url(${src})`,
  });

  return (
    <div
      className={`${imageCardCss} ${backgroundImage} ${
        !noShadow ? cardShadow : ""
      }`}
    >
      <div className={titleArea}>
        {!noTitle && (
          <>
            <h4 className={titleCss}>{title}</h4>
            {!noMarker && (
              <button className={markerButton} onClick={() => toggleMarker()}>
                <BsBookmarkDash className={`${toggle ? markerShadow : ""}`} />
              </button>
            )}
          </>
        )}
      </div>

      {!noButton && (
        <div className={vrArea}>
          <button className={vrButton}>Watch in VR</button>
          {!noStars && (
            <>
              <hr className={vrHr} />
              <span className={starSpan}>
                4.5 <BsFillStarFill className={vrStarIcon} />
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

ImageCard.defaultProps = {
  // booleans
  noMarker: false,
  noTitle: false,
  noButton: false,
  noStars: false,
  noShadow: false,
  // numbers
  width: 285,
  height: 270,
  // strings
  title: "",
};

ImageCard.propTypes = {
  // booleans
  noMarker: PropTypes.bool,
  noTitle: PropTypes.bool,
  noButton: PropTypes.bool,
  noStars: PropTypes.bool,
  noShadow: PropTypes.bool,
  // numbers
  width: PropTypes.number,
  height: PropTypes.number,
  // strings
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default ImageCard;
