import React from "react";
import Footer from "../components/footer/Footer";
import ContactBody from "../components/contactBody/contactBody";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

function Contact() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/logo-2.png" />

        <title> Hackers&apos; Club | University of Peradeniya</title>
      </Head>
      <ContactBody />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
