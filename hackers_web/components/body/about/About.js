import React from "react";
import Paragraph from "./Paragraph";
import classes from "./About.module.css";
import 'animate.css';

const para_1 =
  "Hackers' club provides an amazing opportunity for the undergraduate students of the University of Peradeniya to hack and innovate in Engineering's way. It aims to improve the coding skills, problem-solving skills, and soft skills of the undergraduates. Everyone who is interested in innovation, programming, competition can become a member of Hackers' Club, irrespective of their Faculty or the Department.";

const para_2 =
  "Hackers' Club was initiated by a group of Computer Engineering undergraduates in 2015 with the aim of providing support for academics and to provide an opportunity for the undergraduates to participate in hackathons and other Computer Engineering related competitions around the world.";
function About() {
  return (
    <React.Fragment>
      <h1 className={`${classes.topic} animate__animated animate__fadeInDown`} >About Hackers' Club</h1>
      <div className={classes["paragraph-container"]}>
        <div className={classes.para}>
          <Paragraph title="Who are we?" details={para_1} />
        </div>
        <div className={classes.para}>
          <Paragraph title="Our History" details={para_2} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
