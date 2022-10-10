import React from "react";
import classes from "./ContactButton.module.css";
import Link from 'next/link';

function ContactButton() {
  return (
    <div>
      {/*<Link href="/contact">*/}
      <a className={`${classes['btn-grad']}` } href="/contact">Contact Us</a>
      {/*</Link>*/}
    </div>
  );
}

export default ContactButton;
