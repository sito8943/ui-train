import React from "react";

// components
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import AccordionText from "../../components/AccordionText/AccordionText";
import MuseumNavbar from "../../components/Navbar/MuseumNavbar/MuseumNavbar";
import Mobile from "../../layouts/Mobile/Mobile";

// icons
import { BsFillStarFill } from "react-icons/bs";

// images
import img1 from "../../../../../assets/images/img1.jpg";

// styles
import {
  titleArea as imageCardTitleArea,
  vrStarIcon,
} from "../../components/Card/ImageCard/styles";
import { titleArea, titleCss, starSpan } from "./styles";

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
    </Mobile>
  );
};

export default Museums;
