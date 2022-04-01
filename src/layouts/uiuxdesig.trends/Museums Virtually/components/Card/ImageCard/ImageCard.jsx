import React, { useState } from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// icons
import { BsBookmarkDash, BsFillStarFill } from "react-icons/bs";

// components
import ImageShimmer from "../../../../../../components/ImageShimmer/ImageShimmer";

const ImageCard = (props) => {
  const { title, noMarker, src } = props;

  const imageCss = css({});

  const titleArea = css({});

  const vrArea = css({});

  const imageCardCss = css({});

  return (
    <div className={imageCardCss}>
      <ImageShimmer className={imageCss} src={src} />
      <div className={titleArea}>
        <h4>{title}</h4>
        <button>
          <BsBookmarkDash />
        </button>
      </div>
      <div className={vrArea}>
        <button>Watch in VR</button>
        <hr />
        <span>
          4.5 <BsFillStarFill />
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
