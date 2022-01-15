import React from "react";
import classes from "./Cover.module.css";
import PlayButton from "./PlayButton";
import 'animate.css';

function Cover() {
  return (
    <div className={`${classes["cover-container"]}`} id="Home">
      <div className="animate__animated animate__pulse">
      <h1>Hackers' Club</h1>
      <h1 >University of Peradeniya</h1>
      <p>Imagine and Innovate... Welcome to the world of Ones & Zeros</p>
      <PlayButton />
      </div>
    </div>
  );
}

export default Cover;
