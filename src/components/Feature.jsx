import React from "react";
import Icon from "./common/Icon";

function Feature({icon, heading, details}) {
  return (
    <div className="feature">
      <Icon icon={icon} />
      <h3 className="feature__heading">{heading}</h3>
      <p className="feature__details">
        {details} </p>
    </div>
  );
}

export default Feature;
