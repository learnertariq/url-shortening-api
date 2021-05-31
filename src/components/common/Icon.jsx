import React from "react";

function Icon({ icon }) {
  return (
    <div className="icon-container">
      <img className="icon" src={icon} alt="iconAltText" />
    </div>
  );
}

export default Icon;
