// emotion
import { css } from "@emotion/css";

const searchCss = css({
  background: "none",
  padding: "3px 0px 0 15px",
  border: "none",
  color: "#626262",
  fontSize: 20,
  cursor: "pointer",
});

const inputCss = css({
  border: "none",
  padding: 15,
  color: "#626262",
  background: "none",
  fontSize: "15px 15px 15px 5px",
});

const filterButtonCss = css({
  background: "#a19d9d",
  color: "aliceblue",
  border: "none",
  padding: "14px 15px",
  borderRadius: 5,
  fontSize: "15px",
  cursor: "pointer",
});

const containerCss = css({
  background: "#e9e5e5",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "85%",
});

export { searchCss, inputCss, filterButtonCss, containerCss };
