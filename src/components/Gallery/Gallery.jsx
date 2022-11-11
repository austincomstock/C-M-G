import React from "react";
import "./Gallery.css";

// Images
import afterGravel1 from "../Images/afterGravel1.jpg";
import fenceCrossland from "../Images/fence-crossland.jpg";

export const Gallery = () => {
  return (
    <div className="Gallery1">
      <h2>Gallery</h2>
      <div className="Gallery2">
        <img
          className="GalleryImg"
          src={afterGravel1}
          alt="Gravel Parking Strip"
        />
        <img
          className="GalleryImg"
          src={fenceCrossland}
          alt="Gravel Parking Strip"
        />
      </div>
    </div>
  );
};
