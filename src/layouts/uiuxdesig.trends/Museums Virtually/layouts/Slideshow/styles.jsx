// emotion
import { css } from "@emotion/css";

const slideshow = css({
  display: "flex",
  overflowX: "scroll",
});

const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const span = css({
  color: "#9f9d9d",
  marginTop: -20,
  cursor: "pointer",
});

export { slideshow, container, span };
