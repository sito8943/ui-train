// emotion
import { css } from "@emotion/css";

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
  cursor: "pointer",
  marginBottom: -20,
  "&:hover": {
    background: "#abaaaa",
  },
});

const vrButton = css({
  color: "aliceblue",
  fontWeight: 700,
  background: "none",
  border: "none",
  cursor: "pointer",
});

const vrHr = css({
  margin: "0 10px",
  height: "90%",
  borderColor: "#f0f8ff5e",
  cursor: "pointer",
});

const starSpan = css({
  color: "aliceblue",
  display: "flex",
  cursor: "pointer",
});

const vrStarIcon = css({
  marginLeft: "7px",
  cursor: "pointer",
});

const imageCardCss = css({
  height: 270,
  width: 285,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: 15,
  boxShadow: "0px 15px 50px -20px",
});

const markerButton = css({
  border: "none",
  color: "aliceblue",
  padding: 5,
  fontSize: 18,
  background: "#787676",
  cursor: "pointer",
  height: 29,
});

const titleCss = css({
  color: "aliceblue",
});

const markerShadow = css({
  boxShadow: "0 0 25px 0",
});

export {
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
};
