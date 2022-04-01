import React from "react";

import { css } from "@emotion/css";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import ImageCard from "../../components/Card/ImageCard/ImageCard";

// images
import img1 from "../../../../../assets/images/img1.jpg";
import img2 from "../../../../../assets/images/img2.jpg";
import img3 from "../../../../../assets/images/img3.jpg";
import Slideshow from "../../layouts/Slideshow/Slideshow";

const tabs = ["Popular", "For You", "India", "China", "Japan"];

const slideContent = [
  <ImageCard title="Louvre Museum Paris" src={img1} />,
  <ImageCard title="Louvre Museum Paris" src={img2} />,
  <ImageCard title="Louvre Museum Paris" src={img3} />,
];
const tabContent = [
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
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
      <TabView tabs={tabs} content={tabContent} />
      <Dock />
    </div>
  );
}

export default Home;
