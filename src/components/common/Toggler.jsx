import React from "react";

function Toggler({clicked, onClick}) {
  const items3 = [...Array(3)];

  function getClasses() {
    let classes = "clickable toggler"
    return clicked ? `${classes} toggler-clicked` : classes;
  }

  return (
    <span className={getClasses()} onClick={onClick}>
      {items3.map((item, index) => (
        <span className={`toggler__bar bar-${index + 1}`}></span>
      ))}
    </span>
  );
}

export default Toggler;
