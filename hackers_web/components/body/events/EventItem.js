import React from "react";
import classes from "./EventItem.module.css";
function EventItem(props) {
  const img = props.img;
  return (
    <a href="#" className={`${classes.anchor} ${classes.disable}`} onClick={e => e.preventDefault()}>
      <div className={`${classes["eventItem-container"]} ${classes[img]}`}>
        <div className={classes["img-container"]}>
          <div>
            <h4>{props.header}</h4>
            <p>{props.details}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default EventItem;
