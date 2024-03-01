import React, { useState, useEffect } from "react";
import classes from "./Timer.module.css";
import TimerCounter from "./timerCounter/TimerCounter";
import date from "date-and-time";

function Timer() {
  const endDate = new Date(2024, 2, 2, 18, 0, 0); // year, month, day, hours, minutes, and seconds
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

  const [timerFinished, setTimerFinished] = useState(false);
  

  useEffect(() => {
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      setTimerFinished(true);
    }
  }, [days, hours, minutes, seconds]);

  {/*const [twoHoursPassed, setTwoHoursPassed] = useState(false);

  useEffect(() => {
    const twoHourTimeout = setTimeout(() => {
      setTwoHoursPassed(true);
    }, 1 * 60 * 1000); // 2 hours in milliseconds

    return () => clearTimeout(twoHourTimeout);
  }, []);

  if (twoHoursPassed && timerFinished) {
    // Hide the entire component after two hours or when the timer is finished
    return null;
  }*/}

  return (
    <div className={classes["timer-container"]}>
      <p className={`${classes["stay-tuned"]} animate__animated animate__fadeIn`}>
        STAY TUNED WITH HACKERS&apos; CLUB
      </p>
      <h2 className={`${classes["happening-now"]} animate__animated animate__fadeIn`}>
        Competitive Programming Session 01
      </h2>

      {timerFinished ? (
        <div className={classes.timerContent}>
          <h3 className={`${classes["happenning-now"]} animate__animated animate__fadeIn`}>
            Happening Now!
          </h3>
        </div>
      ) : (
        <div className={classes.timerContent}>
          <TimerCounter hoursMinSecs={hoursMinSecs} />
        </div>
      )}
    </div>
  );
}

export default Timer;
