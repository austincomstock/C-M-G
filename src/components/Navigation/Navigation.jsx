import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="Navigation1">
      {/* <h3>Navigation</h3> */}
      <nav>
        <ul className="NavigationUL">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/estimates">Estimates</Link>
          </li>
          <li>
            <Link to="/servicearea">Service Area</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
