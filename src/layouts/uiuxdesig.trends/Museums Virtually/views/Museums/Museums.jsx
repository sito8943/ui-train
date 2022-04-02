import React from "react";

// components
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import AccordionText from "../../components/AccordionText/AccordionText";
import MuseumNavbar from "../../components/Navbar/MuseumNavbar/MuseumNavbar";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import Slideshow from "../../layouts/Slideshow/Slideshow";
import Mobile from "../../layouts/Mobile/Mobile";
import Container from "../../layouts/Mobile/Container/Container";

// images
import img1 from "../../../../../assets/images/img1.jpg";
import img2 from "../../../../../assets/images/img2.jpg";
import img3 from "../../../../../assets/images/img3.jpg";

// icons
import { BsFillStarFill } from "react-icons/bs";

// styles
import {
  titleArea as imageCardTitleArea,
  vrStarIcon,
} from "../../components/Card/ImageCard/styles";
import {
  titleArea,
  titleCss,
  starSpan,
  smallItemSpan,
  smallItemContainer,
} from "./styles";

const tabs = ["Exhibitions", "Highlights", "Guided Tours", "Artworks"];

const slideContent = [
  <ImageCard noTitle src={img1} />,
  <ImageCard noTitle src={img2} />,
  <ImageCard noTitle src={img3} />,
];

const smallContent = [
  <div className={smallItemContainer}>
    <ImageCard noTitle noButton noShadow src={img1} width={130} height={100} />
    <span className={smallItemSpan}>History of Louvre</span>
  </div>,
  <div className={smallItemContainer}>
    <ImageCard noTitle noButton noShadow src={img2} width={130} height={100} />
    <span className={smallItemSpan}>Recent Additions</span>
  </div>,
  <div className={smallItemContainer}>
    <ImageCard noTitle noButton noShadow src={img3} width={130} height={100} />
    <span className={smallItemSpan}>About the Museum</span>
  </div>,
];
const tabContent = [
  <Slideshow content={slideContent} noMargin />,
  <Slideshow content={slideContent} noMargin />,
  <Slideshow content={slideContent} noMargin />,
];

const Museums = () => {
  return (
    <Mobile>
      <MuseumNavbar />
      <Container>
        <ImageCard noTitle src={img1} noStars />

        <div className={`${titleArea} ${imageCardTitleArea}`}>
          <h4 className={titleCss}>Louvre Museum, Paris</h4>
          <span className={starSpan}>
            4.5 <BsFillStarFill className={vrStarIcon} />
          </span>
        </div>
        <AccordionText
          text={
            "The Louvre, of the Louvre Museum, is the world's most-visited museum. The museum is open today from 9:00 AM to 6:00 PM"
          }
        />
        <div>
          <Slideshow small content={smallContent} />
        </div>
        <TabView tabs={tabs} content={tabContent} />
      </Container>
      <Dock />
    </Mobile>
  );
};

export default Museums;
