import React from "react";

import { css } from "@emotion/css";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import ImageCard from "../../components/Card/ImageCard/ImageCard";

const tabs = ["Popular", "For You", "India", "China", "Japan"];
const content = [
  <ImageCard
    title="Louvre Museum Paris"
    src="http://localhost:3000/static/media/curved0.9855535d.jpg"
  />,
  <ImageCard
    title="Louvre Museum Paris"
    src="http://localhost:3000/static/media/home-decor-1.05e218fd.jpg"
  />,
  <ImageCard
    title="Louvre Museum Paris"
    src="http://localhost:3000/static/media/home-decor-2.b4e5397c.jpg"
  />,
];

function Home() {
  const containerCss = css({
    width: 350,
    height: 675,
    padding: "10px 0",
    background: "#f5f3f3",
    boxShadow: "12px 9px 24px -9px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const spanTitle = css({
    color: "#bdbbbb",
  });

  return (
    <div className={containerCss}>
      <Navbar />
      <h1 style={{ width: "85%" }}>
        Visit your most favorite{" "}
        <span className={spanTitle}>Museums Virtually</span>
      </h1>
      <Search />
      <TabView tabs={tabs} content={content} />
      <Dock />
    </div>
  );
}

export default Home;
