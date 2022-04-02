// emotion
import { css } from "@emotion/css";

const titleArea = css({
  margin: "20px auto auto auto",
  width: "80%",
});

const smallItemContainer = css({
  display: "flex",
  flexDirection: "column",
});

const smallItemSpan = css({
  margin: "7px auto auto auto",
});

const starSpan = css({
  color: "#626262",
  display: "flex",
  cursor: "pointer",
});

const titleCss = css({
  color: "#1d1d1d",
});

export { starSpan, titleCss, titleArea, smallItemSpan, smallItemContainer };
