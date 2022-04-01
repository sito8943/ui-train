import React from "react";

// prop-types
import PropTypes from "prop-types";

// react-shimmer
import { Image, Breathing } from "react-shimmer";

const ImageShimmer = (props) => {
  const { src, width, height } = props;
  return (
    <Image src={src} fallback={<Breathing width={width} height={height} />} />
  );
};

ImageShimmer.defaultProps = {
  width: 400,
  height: 400,
};

ImageShimmer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageShimmer;
