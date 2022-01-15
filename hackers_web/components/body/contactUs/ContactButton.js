import React from "react";
import classes from "./ContactButton.module.css";

function ContactButton() {
  return (
    <div>
      <a className={`${classes['btn-grad']}` } href="/contact-us">Contact Us</a>
    </div>
  );
}

export default ContactButton;
