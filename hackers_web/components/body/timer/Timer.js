import React from "react";
import classes from "./Timer.module.css";
import "animate.css";
import Button from "./Button";
import TimerCounter from "./timerCounter/TimerCounter";
import date from "date-and-time";

function Timer() {
  /*Months are count from 0-11 for Jan => 0 Dec => 11*/
  const endDate = new Date(
    2021,
    11,
    26,
    0,
    0,
    0
  ); /*year, month, day, hours, minutes, and seconds*/
  const now = new Date();
  let updatingDate = new Date();

  let days = parseInt(date.subtract(endDate, now).toDays());
  updatingDate = date.addDays(updatingDate, days);

  let hours = parseInt(date.subtract(endDate, updatingDate).toHours());
  updatingDate = date.addHours(updatingDate, hours);

  let minutes = parseInt(date.subtract(endDate, updatingDate).toMinutes());
  updatingDate = date.addMinutes(updatingDate, minutes);

  let seconds = parseInt(date.subtract(endDate, updatingDate).toSeconds());

  let hoursMinSecs = { days, hours, minutes, seconds };
  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    hoursMinSecs = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

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
        <TimerCounter hoursMinSecs={hoursMinSecs} />
      </div>
    </div>
  );
}

export default Timer;
