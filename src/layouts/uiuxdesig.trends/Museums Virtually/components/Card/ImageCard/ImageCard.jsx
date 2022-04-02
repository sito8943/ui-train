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
  const { title, noMarker, src } = props;

  const [toggle, setToggle] = useState(false);

  const toggleMarker = () => {
    setToggle(!toggle);
  };

  const backgroundImage = css({
    backgroundImage: `url(${src})`,
  });

  return (
    <div className={`${imageCardCss} ${backgroundImage}`}>
      {/*<ImageShimmer width={285} height={285} src={src} />*/}
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
        <hr className={vrHr} />
        <span className={starSpan}>
          4.5 <BsFillStarFill className={vrStarIcon} />
        </span>
      </div>
    </div>
  );
};

ImageCard.defaultProps = {
  noMarker: false,
  title: "",
};

ImageCard.propTypes = {
  noMarker: PropTypes.bool,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default ImageCard;
