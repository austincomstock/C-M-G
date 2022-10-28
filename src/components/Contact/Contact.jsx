import React from "react";

// REACT-ICONS IMPORTS
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Contact us today via email, social and phone. You can also schdule an
        appointment.
      </p>
      <ul className="ContactConnectUL">
        <li>
          <a
            href="https://www.facebook.com/cmgexcavation"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsFacebook /> Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cmg_excavation_/"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsInstagram /> Instagram
          </a>
        </li>
        <li>
          <BsTelephone /> 800-000-000
        </li>
        <li>
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
