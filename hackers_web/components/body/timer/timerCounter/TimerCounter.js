import React, { useState, useEffect } from "react";
import CounterElement from "./CounterElement";
import classes from "./TimerCounter.module.css";

function TimerCounter(props) {
  const { days, hours, minutes, seconds } = props.hoursMinSecs;
  const [[dys, hrs, mins, secs], setTime] = useState([
    days,
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (days === 0 && hrs === 0 && mins === 0 && secs === 0) reset();
    else if (hrs === 0 && mins === 0 && secs === 0) {
      setTime([days - 1, 23, 59, 59]);
    } else if (mins === 0 && secs === 0) {
      setTime([days, hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([days, hrs, mins - 1, 59]);
    } else {
      setTime([days, hrs, mins, secs - 1]);
    }
  };

  const reset = () => setTime([0, 0, 0, 0]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  }, [dys, hrs, mins, secs]);

  return (
    <div className={classes["timer-container"]}>
      <CounterElement count="0" detail="Days" />
      <CounterElement count={hrs.toString()} detail="Hours" />
      <CounterElement count={mins.toString()} detail="Minuits" />
      <CounterElement count={secs.toString()} detail="Seconds" />
      <div className={classes.dates}>
        <div>
          <p>
            <strong>Start:</strong>
          </p>
          <p>3 November, 2020 </p>
        </div>
        <div>
          <p>
            <strong>End:</strong>
          </p>
          <p>6 December, 2020</p>
        </div>
      </div>
    </div>
  );
}

export default TimerCounter;
