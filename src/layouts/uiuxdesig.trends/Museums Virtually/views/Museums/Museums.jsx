import React from "react";

// components
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import MuseumNavbar from "../../components/Navbar/MuseumNavbar/MuseumNavbar";

// images
import img1 from "../../../../../assets/images/img1.jpg";

const Museums = () => {
  return (
    <div>
      <MuseumNavbar />
      <ImageCard title="Louvre Museum Paris" src={img1} />
    </div>
  );
};

export default Museums;
