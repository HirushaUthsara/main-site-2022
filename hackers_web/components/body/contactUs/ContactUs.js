import React from "react";
import ContactButton from "./ContactButton";
import classes from "./ContactUs.module.css";
function ContactUs() {
  return (
    <React.Fragment>
      <div className={classes.ContactUs}>
        <h2 className={classes.topic}>Wanna know more?</h2>
        <ContactButton />
      </div>
    </React.Fragment>
  );
}

export default ContactUs;
