// emotion
import { css } from "@emotion/css";

const buttonTextCss = css({
  minWidth: 100,
  border: "none",
  color: "#9d9999",
  padding: 10,
  fontSize: 15,
  background: "none",
  cursor: "pointer",
});

const activeButton = css({
  background: "#e9e5e5 !important",
});

export { buttonTextCss, activeButton };
