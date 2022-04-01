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
  const { title, src } = props;
  return (
    <div>
      <ImageShimmer src={src} />
      <div>
        <h4>{title}</h4>
        <button>
          <BsBookmarkDash />
        </button>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageCard;
