import React from "react";
import classes from "./PlayButton.module.css";
import { BsFillPlayBtnFill } from "react-icons/bs";

function PlayButton() {
  return (
    <div className={classes["btn-container"]}>
      <a className={`${classes["btn-grad"]}`} href="https://www.youtube.com/watch?v=-iZl9ovWpX4&ab_channel=Hackers%27ClubUOP" target="blank">
        Intro <span className={classes.icon}><BsFillPlayBtnFill/></span>
      </a>
    </div>
  );
}

export default PlayButton;
