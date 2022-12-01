import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="Navigation1">
      <nav>
        <ul className="NavigationUL">
          <li>
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navLink">
              About
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="navLink">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/estimates" className="navLink">
              Estimates
            </Link>
          </li>
          <li>
            <Link to="/servicearea" className="navLink">
              Service Area
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
