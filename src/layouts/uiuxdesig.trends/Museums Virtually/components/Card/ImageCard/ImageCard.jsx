import React, { useState } from "react";

// prop-types
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// icons
import { BsBookmarkDash, BsFillStarFill } from "react-icons/bs";

// components
import ImageShimmer from "../../../../../../components/ImageShimmer/ImageShimmer";

// style
import "./style.css";

const ImageCard = (props) => {
  const { title, noMarker, src } = props;

  const titleArea = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    zIndex: 1,
  });

  const vrArea = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#9b9999",
    padding: "0 10px",
    borderRadius: 5,
    zIndex: 1,
    height: 42,
  });

  const vrButton = css({
    color: "aliceblue",
    fontWeight: 700,
    background: "none",
    border: "none",
  });

  const vrHr = css({
    margin: "0 10px",
    height: "90%",
    borderColor: "#f0f8ff5e",
  });

  const starSpan = css({
    color: "aliceblue",
    display: "flex",
  });

  const vrStarIcon = css({
    marginLeft: "7px",
  });

  const imageCardCss = css({
    height: 285,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const markerButton = css({
    border: "none",
    color: "aliceblue",
    padding: 10,
    fontSize: 18,
    background: "#bdbbbb",
    cursor: "pointer",
    height: 37,
  });

  return (
    <div className={`${imageCardCss} image-card`}>
      <ImageShimmer width={285} height={285} src={src} />
      <div className={titleArea}>
        <h4>{title}</h4>
        {!noMarker && (
          <button className={markerButton}>
            <BsBookmarkDash />
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
