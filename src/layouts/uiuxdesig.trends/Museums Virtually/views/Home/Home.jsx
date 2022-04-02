import React from "react";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import Slideshow from "../../layouts/Slideshow/Slideshow";
import Mobile from "../../layouts/Mobile/Mobile";

// images
import img1 from "../../../../../assets/images/img1.jpg";
import img2 from "../../../../../assets/images/img2.jpg";
import img3 from "../../../../../assets/images/img3.jpg";

// styles
import "./style.css";
import { span, titleArea, titleCss, spanTitle } from "./styles";

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
  return (
    <Mobile>
      <Navbar />
      <div className={titleArea}>
        <h2 className={titleCss}>
          Visit your most favorite{" "}
          <span className={spanTitle}>Museums Virtually</span>
        </h2>
      </div>

      <Search />
      <TabView tabs={tabs} content={tabContent} />
      <span className={span} onClick={null}>
        Show all
      </span>
      <Dock />
    </Mobile>
  );
}

export default Home;
