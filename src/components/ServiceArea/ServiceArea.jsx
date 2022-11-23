import React from "react";
import "./ServiceArea.css";
import cmgServiceArea from "../Images/cmg-service-area.jpg";

export const ServiceArea = () => {
  return (
    <div className="ServiceArea1">
      <h2>Service Area</h2>
      <p>
        The Construction Management Group proudly services the Salt Lake County
        area.
      </p>
      <img
        src={cmgServiceArea}
        className="cmgServiceAreaImage"
        alt="service area map"
      />
    </div>
  );
};
