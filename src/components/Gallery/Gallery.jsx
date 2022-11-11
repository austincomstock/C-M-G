import React from "react";
import "./Gallery.css";

// Images
import afterGravel1 from "../Images/afterGravel1.jpg";
import afterGravel2 from "../Images/afterGravel2.jpg";
import fenceCrossland from "../Images/fence-crossland.jpg";
import fenceGreen from "../Images/fence-green.jpg";
import miniXFrenchDrain from "../Images/minix-frenchdrain.jpg";
import miniXTrampoline from "../Images/minix-trampoline.jpg";
import miniXTreeStump from "../Images/minix-treestump.jpg";
import rollOffDumpster from "../Images/rolloff-dumpster.jpg";
import sodRemoval from "../Images/sod-removal.jpg";

export const Gallery = () => {
  return (
    <div className="Gallery1">
      <h2>Gallery</h2>
      <div className="Gallery2">
        <img
          className="GalleryImg"
          src={afterGravel1}
          alt="Gravel Parking Area"
        />
        <img
          className="GalleryImg"
          src={afterGravel2}
          alt="Gravel Parking Strip"
        />
        <img className="GalleryImg" src={fenceCrossland} alt="Cedar Fence" />
        <img className="GalleryImg" src={fenceGreen} alt="Fence Mid Build" />
        <img
          className="GalleryImg"
          src={miniXFrenchDrain}
          alt="Mini Excavator French Drain"
        />
        <img
          className="GalleryImg"
          src={miniXTrampoline}
          alt="Mini Excavator In Ground Trampoline"
        />
        <img
          className="GalleryImg"
          src={miniXTreeStump}
          alt="Mini Excavator Tree Stump"
        />
        <img
          className="GalleryImg"
          src={rollOffDumpster}
          alt="Roll Off Dumpster"
        />
        <img className="GalleryImg" src={sodRemoval} alt="Roll Off Dumpster" />
      </div>
    </div>
  );
};
