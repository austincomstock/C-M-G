import React from "react";
import "./Estimates.css";

export const Estimates = () => {
  return (
    <div className="Estimates1">
      <h2>Estimates</h2>
      {/* FORM */}
      {/* Docs https://formsubmit.co/ */}
      <form
        id="EstimateForm"
        // action="https://formsubmit.co/theconstructionmanagementgroup@gmail.com"
        action="https://formsubmit.co/be14b487da6f52cf3a6563a4099a0616"
        method="POST"
      >
        <label className="EstimateLabel">
          <input type="text" placeholder="First Name" name="firstname" />
        </label>
        <label className="EstimateLabel">
          <input type="text" placeholder="Last Name" name="lastname" />
        </label>
        <label className="EstimateLabel">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </label>
        <label className="EstimateLabel">
          <input
            type="phone"
            placeholder="Phone Number"
            name="phone"
            required
          />
        </label>
        <label className="EstimateLabel">
          <input
            type="address"
            placeholder="Street Address (123 Main St.)"
            name="address"
            required
          />
        </label>
        <label className="EstimateLabel">
          <input
            type="zip code"
            placeholder="Zip Code"
            name="zip code"
            required
          />
        </label>
        <label className="EstimateLabel">
          <input
            type="text"
            placeholder="Tell Us About Your Project"
            name="project information"
            className="ProjectInfo"
          />
        </label>
        {/* Start of type="hidden" inputs */}
        <label className="EstimateLabel">
          <input
            type="hidden"
            name="_next"
            value="https://c-m-g.vercel.app/estimatesthankyou"
          />
        </label>
        <label className="EstimateLabel">
          <input type="hidden" name="_subject" value="New submission!" />
        </label>
        <label className="EstimateLabel">
          {/* Honeypot to avoid spam by fooling scrapers */}
          <input type="text" name="_honey" style={{ display: "none" }} />
        </label>
        {/* End of type="hidden" inputs */}
        <label className="EstimateLabel">
          <input
            type="submit"
            value="Get Estimate"
            className="EstimateInputSubmit"
          />
        </label>
      </form>
    </div>
  );
};
