import React from "react";
import "./Contact.css";

// REACT-ICONS IMPORTS
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="Contact1">
      {/* <h2>Contact</h2>
      <p>Contact us today via email, social and phone.</p> */}
      <ul className="ContactUL">
        <li className="ContactLI">
          <a
            href="tel:800-000-000"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsTelephone /> 800-000-000
          </a>
        </li>
        <li className="ContactLI">
          <a
            href="https://www.facebook.com/cmgexcavation"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsFacebook /> Facebook
          </a>
        </li>
        <li className="ContactLI">
          <a
            href="https://www.instagram.com/cmg_excavation_/"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsInstagram /> Instagram
          </a>
        </li>
        <li className="ContactLI">
          <a
            href="mailto:theconstructionmanagementgroup@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <MdOutlineMail /> Email
          </a>
        </li>
      </ul>
    </div>
  );
};
