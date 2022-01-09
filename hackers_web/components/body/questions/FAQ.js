import React from "react";
import { Accordion } from "react-bootstrap";
import classes from "./FAQ.module.css";
import QA_Pair from "./QA_Pair";

function FAQ() {
  const header1 = <p className={classes.header}>WHAT ARE OUR OBJECTIVES?</p>;
  const body1 = (
    <p className={classes.body}>
      1). Improve the computer Engineering Skills of the Undergraduates of
      Faculty of Engineering, University of Peradeniya
      <br />
      <br />
      2). Build a platform to share the Engineering Knowledge of the
      Undergraduates by doing multi-diciplinary projects
      <br />
      <br />
      3). Organizing workshops and sessions for Undergraduates to train for
      local and international competitions and events. (GSoc,IEEEXtream,ACES
      Coders etc)
      <br />
      <br />
      4). Provide the Technical and Computer Engineering support for the events
      organized by the department of Computers Engineering and other societies
      of the University to make them successful.
      <br />
      <br />
      5). Gain an industrial recognition for the members of the club
    </p>
  );

  const header2 = <p className={classes.header}>WHAT WE DO?</p>;
  const body2 = (
    <p className={classes.body}>
      Our primary target is to help Students to build their qualities which are
      related to the IT field and expected by the industry
      <br />
      <br />
      to achieve that we join hands with ACES and conduct "Pre-DATATHON",
      "Pre-CODERS" competitions and events to make students ready to make their
      move in the grand event.
      <br />
      <br />
      Furthermore we host Developer Series sessions and Competitive Programming
      sessions to give primary knowledge that students need to have as a
      competitive future employee in IT sector. Also we Conduct workshops in
      collaboration with leading companies in the industry which helps
      undergraduates to experience the real deal.
      <br />
      <br />
      We do not limit to all technical stuff. We organize an intra faculty FPS
      gaming competition "WARZONE" which brings students together and have fun
      while fighting for the victory.
    </p>
  );
  const header3 =<p className={classes.header}>HOW TO REACH US?</p>;
  const body3 = <p className={classes.body}>hackersclub@eng.pdn.ac.lk</p>;
  return (
    <React.Fragment>
      <h2 className={classes.topic} >Have a Question?</h2>
      <div className={classes["accordion-container"]}>
        <Accordion defaultActiveKey="0">
          <QA_Pair eventkey="0" header={header1} body={body1} />
          <QA_Pair eventkey="1" header={header2} body={body2} />
          <QA_Pair eventkey="3" header={header3} body={body3} />
        </Accordion>
      </div>
    </React.Fragment>
  );
}

export default FAQ;
