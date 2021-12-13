import React from "react";
import classes from "./CounterElement.module.css";

function CounterElement(props) {
  return (
    <div className={classes["counter-element"]}>
      <div className={classes.count}>{props.count}</div>
      <div className={classes.details}>{props.detail}</div>
    </div>
  );
}

export default CounterElement;
