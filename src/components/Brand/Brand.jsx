import React from "react";
import "./Brand.css";
import cmgLogo from "../Images/cmgLogo.jpg";

export const Brand = () => {
  return (
    <div className="Brand1">
      <img src={cmgLogo} className="BrandLogo" alt="logo" />
      {/* <h1>Construction Management Group</h1> */}
    </div>
  );
};
