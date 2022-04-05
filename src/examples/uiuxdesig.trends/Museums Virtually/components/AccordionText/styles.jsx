// emotion
import { css } from "@emotion/css";

const accordionCss = css({
  width: "80%",
  margin: "auto",
  transition: "all 200ms ease",
});

const pCss = css({
  marginTop: -5,
  lineHeight: "30px",
  fontSize: 15,
  color: "#9f9d9d",
});

const readMoreSpan = css({
  fontWeight: "600",
  color: "#545252",
});

export { readMoreSpan, accordionCss, pCss };
