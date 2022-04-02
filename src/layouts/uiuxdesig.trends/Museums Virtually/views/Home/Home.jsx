import React from "react";

import { css } from "@emotion/css";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import Slideshow from "../../layouts/Slideshow/Slideshow";

// images
import img1 from "../../../../../assets/images/img1.jpg";
import img2 from "../../../../../assets/images/img2.jpg";
import img3 from "../../../../../assets/images/img3.jpg";

// styles
import "./style.css";
import { SeenProvider } from "../../context/SeenContext";

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
    boxShadow: "55px 20px 88px 15px #00000070",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 50px",
  });

  const titleArea = css({
    width: "100%",
    marginLeft: 50,
  });

  const titleCss = css({
    width: "69%",
  });

  const spanTitle = css({
    color: "#bdbbbb",
  });

  return (
    <div className={containerCss}>
      <SeenProvider>
        <Navbar />
        <div className={titleArea}>
          <h2 className={titleCss}>
            Visit your most favorite{" "}
            <span className={spanTitle}>Museums Virtually</span>
          </h2>
        </div>

        <Search />
        <TabView tabs={tabs} content={tabContent} />
        <Dock />
      </SeenProvider>
    </div>
  );
}

export default Home;
