import React from "react";
import classes from "./Button.module.css";

function Button() {
  return (
    <div>
      <a className={`${classes['btn-grad']}`}>Go To Site</a>
    </div>
  );
}

export default Button;
