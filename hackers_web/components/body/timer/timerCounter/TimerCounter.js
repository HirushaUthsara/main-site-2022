import React from "react";
import CounterElement from "./CounterElement";
import classes from "./TimerCounter.module.css";

function TimerCounter() {
  return (
    <div className={classes["timer-container"]}>
      <CounterElement count="0" detail="Days" />
      <CounterElement count="0" detail="Hours" />
      <CounterElement count="0" detail="Minuits" />
      <CounterElement count="0" detail="Seconds" />
      <div className={classes.dates}>
        <div>
          <p><strong>Start:</strong></p>
          <p>3 November, 2020 </p>
        </div>
        <div>
          <p><strong>End:</strong></p>
          <p>6 December, 2020</p>
        </div>
      </div>
    </div>
  );
}

export default TimerCounter;
