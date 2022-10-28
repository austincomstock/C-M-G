import React from "react";
import "./About.css";

import afterGravel1 from "../Images/afterGravel1.jpg";

export const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Gravel Driveways and Gravel Parking Strips</p>
      <img className="AboutImg" src={afterGravel1} alt="Gravel Parking Strip" />
    </div>
  );
};
