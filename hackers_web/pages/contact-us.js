import React from "react";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import ContactBody from "../components/contactBody/contactBody";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/logo-2.png" />

        <title> Hackers' Club | University of Peradeniya</title>
      </Head>
      <ContactBody />
      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;
