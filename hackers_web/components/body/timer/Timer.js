import React from "react";
import classes from "./Timer.module.css";
import "animate.css";
import Button from "./Button";
import TimerCounter from "./timerCounter/TimerCounter";

function Timer() {
  return (
    <div className={classes["timer-container"]}>
      <p
        className={`${classes["stay-tuned"]} animate__animated animate__fadeIn`}
      >
        STAY TUNED WITH HACKERS' CLUB
      </p>
      <h2
        className={`${classes["happenning-now"]} animate__animated animate__fadeIn`}
      >
        Happening Now!
      </h2>
      <div className={classes.timerContent}>
        <div className={classes["counter-text"]}>
          <h3>Developer Series Sessions</h3>
          <p className={classes["stay-tuned"]}>
            Introduction to some utilities that an engineer's must have
            knowledge about
          </p>
          <Button />
        </div>
        <TimerCounter />
      </div>
    </div>
  );
}

export default Timer;
