import React from "react";

// components
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import MuseumNavbar from "../../components/Navbar/MuseumNavbar/MuseumNavbar";
import Mobile from "../../layouts/Mobile/Mobile";

// images
import img1 from "../../../../../assets/images/img1.jpg";

const Museums = () => {
  return (
    <Mobile>
      <MuseumNavbar />
      <ImageCard title="Louvre Museum Paris" src={img1} />
    </Mobile>
  );
};

export default Museums;
