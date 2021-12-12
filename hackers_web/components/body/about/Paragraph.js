import React from "react";
import classes from "./Paragraph.module.css";


function Paragraph(props) {
  return (
    <div className={classes["para-container"]}>
      <h4 className={classes.topic}>{props.title}</h4>
      <p className={classes.details}>{props.details}</p>
    </div>
  );
}

export default Paragraph;
