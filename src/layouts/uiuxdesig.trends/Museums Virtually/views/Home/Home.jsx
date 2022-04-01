import React from "react";

import { css } from "@emotion/css";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";

function Home() {
  const containerCss = css({
    width: 320,
    height: 640,
    padding: "10px 20px",
    background: "#f5f3f3",
    boxShadow: "12px 9px 24px -9px",
  });

  const spanTitle = css({
    color: "#bdbbbb",
  });

  return (
    <div className={containerCss}>
      <Navbar />
      <h1>
        Visit your most favorite{" "}
        <span className={spanTitle}>Museums Virtually</span>
      </h1>
      <Search />
      <Dock />
    </div>
  );
}

export default Home;
