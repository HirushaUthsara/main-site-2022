import React from "react";
import classes from "./Events.module.css";
import EventItem from "./EventItem";
import EventHeader from "./EventHeader";

const header1 = "Pre-DATATHON";
const details1 = "GET THE EXPERIENCE BEFORE THE SHOW";
const header2 = "Pre-CODERS";
const details2 = "EXCITING CODING EXPERIENCE BEFORE THE BIG BATTLE";
const header3 = "Competitive Programmimg Sessions";
const details3 = "SHARP YOUR CODING SKILLS";
const header4 = "Developer Series Sessions";
const details4 = "INTRODUCTION TO NEW DEVELOPER TOOLS";
const header5 = "WARZONE";
const details5 = "FPS GAMING EXPERIENCE";

function Events() {
  return (
    <React.Fragment>
      <EventHeader />
      <div className={classes["events-container"]}>
        {/*<EventItem header={header1} details={details1} img="datathonImg"/>*/}
        <EventItem header={header2} details={details2} img="codersImg"/>
        <EventItem header={header3} details={details3} img="compititiveProgrammingImg"/>
        <EventItem header={header4} details={details4} img="developerSessionsImg"/>
        <EventItem header={header5} details={details5} img="warzoneImg"/>
      </div>
    </React.Fragment>
  );
}

export default Events;
