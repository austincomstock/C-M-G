import React from "react";
import "./Estimates.css";

export const Estimates = () => {
  return (
    <div className="Estimates1">
      <h2>Estimates</h2>
      {/* FORM */}
      <form id="EstimateForm" method="GET">
        <label className="EstimateLabel">
          First Name: <input type="text" name="firstname" />
        </label>
        <label className="EstimateLabel">
          Last Name: <input type="text" name="lastname" />
        </label>
        <label className="EstimateLabel">
          Email: <input type="email" name="email" required />
        </label>
        <label className="EstimateLabel">
          Phone Number: <input type="phone" name="phone" required />
        </label>
        <label className="EstimateLabel">
          Street Address {"(123 Main St.)"}:
          <input type="address" name="address" required />
        </label>
        <label className="EstimateLabel">
          Zip Code: <input type="zip code" name="zip code" required />
        </label>
        <label className="EstimateLabel">
          Tell Us About Your Project:
          <input type="text" name="project information" />
        </label>
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
