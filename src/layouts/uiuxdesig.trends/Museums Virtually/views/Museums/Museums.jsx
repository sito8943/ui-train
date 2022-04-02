import React from "react";

// components
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import AccordionText from "../../components/AccordionText/AccordionText";
import MuseumNavbar from "../../components/Navbar/MuseumNavbar/MuseumNavbar";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import Slideshow from "../../layouts/Slideshow/Slideshow";
import Mobile from "../../layouts/Mobile/Mobile";

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
import { titleArea, titleCss, starSpan } from "./styles";

const tabs = ["Exhibitions", "Highlights", "Guided Tours", "Artworks"];

const slideContent = [
  <ImageCard title="Louvre Museum Paris" src={img1} />,
  <ImageCard title="Louvre Museum Paris" src={img2} />,
  <ImageCard title="Louvre Museum Paris" src={img3} />,
];
const smallContent = [
  <h1>Hola</h1>,
  <h1>Mundo</h1>,
  <h1>Mom</h1>,
  <h1>Text</h1>,
];
const tabContent = [
  <Slideshow content={slideContent} noMargin={true} />,
  <Slideshow content={slideContent} noMargin={true} />,
  <Slideshow content={slideContent} noMargin={true} />,
];

const Museums = () => {
  return (
    <Mobile>
      <MuseumNavbar />
      <ImageCard title="Louvre Museum Paris" src={img1} stars={false} />

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
        <Slideshow small={true} content={smallContent} />
      </div>

      {/*<TabView tabs={tabs} content={tabContent} />*/}
      <Dock />
    </Mobile>
  );
};

export default Museums;
