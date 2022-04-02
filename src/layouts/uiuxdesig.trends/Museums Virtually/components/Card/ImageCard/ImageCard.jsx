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
} from "./styles";

const ImageCard = (props) => {
  const { title, noMarker, src, stars } = props;

  const [toggle, setToggle] = useState(false);

  const toggleMarker = () => {
    setToggle(!toggle);
  };

  const backgroundImage = css({
    backgroundImage: `url(${src})`,
  });

  return (
    <div className={`${imageCardCss} ${backgroundImage}`}>
      <div className={titleArea}>
        <h4 className={titleCss}>{title}</h4>
        {!noMarker && (
          <button className={markerButton} onClick={() => toggleMarker()}>
            <BsBookmarkDash className={`${toggle ? markerShadow : ""}`} />
          </button>
        )}
      </div>
      <div className={vrArea}>
        <button className={vrButton}>Watch in VR</button>
        {stars && (
          <>
            <hr className={vrHr} />
            <span className={starSpan}>
              4.5 <BsFillStarFill className={vrStarIcon} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

ImageCard.defaultProps = {
  noMarker: false,
  stars: true,
  title: "",
};

ImageCard.propTypes = {
  noMarker: PropTypes.bool,
  stars: PropTypes.bool,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default ImageCard;
