import React, { useState, useEffect } from "react";
import CounterElement from "./CounterElement";
import classes from "./TimerCounter.module.css";
import {endDate } from "../Timer";


function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function TimerCounter(props) {
  const { days, hours, minutes, seconds } = props.hoursMinSecs;
  const [[dys, hrs, mins, secs], setTime] = useState([
    days,
    hours,
    minutes,
    seconds,
  ]);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const reset = () => {
    setTime([0, 0, 0, 0]);
    setCountdownFinished(true);
  };

  useEffect(() => {
    const tick = () => {
      if (days === 0 && hrs === 0 && mins === 0 && secs === 0) {
        reset();
      } else if (hrs === 0 && mins === 0 && secs === 0) {
        setTime([days - 1, 23, 59, 59]);
      } else if (mins === 0 && secs === 0) {
        setTime([days, hrs - 1, 59, 59]);
      } else if (secs === 0) {
        setTime([days, hrs, mins - 1, 59]);
      } else {
        setTime([days, hrs, mins, secs - 1]);
      }
    };

    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);

  }, [days, dys, hrs, mins, secs]);

  if (countdownFinished) {
    return (
        <div  className={`${classes["webBanner"]} ${classes["timer-container"]} `}>
          <p style={{
            fontSize: '1em',
            margin: '0em 1em 0em 1em',
          }}>
            For upcoming events, stay tuned with HACKERS' CLUB!
          </p>

        </div>

    );
  }

  let Changed;
  return (
      <div className={classes["timer-container"]}>
        <CounterElement count={days.toString()} detail="Days"/>
        <CounterElement count={hrs.toString()} detail="Hours"/>
        <CounterElement count={mins.toString()} detail="Minutes"/>
        <CounterElement count={secs.toString()} detail="Seconds"/>
        <div className={classes.dates}>
          <div>
            <p>
              <strong>Happening on :</strong>
            </p>
            <p>{formatDate(endDate)}</p>
            {/* Changed hard code value  */}
          </div>
          {/*<div>*/}
          {/*  <p>*/}
          {/*    <strong>End:</strong>*/}
          {/*  </p>*/}
          {/*  <p>6 December, 2020</p>*/}
          {/*</div>*/}
          {/* Ending day's unpredictable   */}

        </div>
      </div>
  );
}

export default TimerCounter;


