import React from "react";
import classes from "./Box.module.css";

function Box(props) {
  return <div className={classes.box} id={props.id}></div>;
}

export default Box;
