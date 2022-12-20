import React from "react";

import "./Button_option.css";
function Button(prop) {
  return (
    <div className="Button_container">
      <div>{prop.image}</div>
      <div>{prop.text}</div>
    </div>
  );
}

export default Button;

// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
