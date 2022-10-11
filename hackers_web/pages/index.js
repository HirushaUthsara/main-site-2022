import React from "react";
import Body from "../components/body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import {config} from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title> Hackers&apos; Club | University of Peradeniya</title>
        <meta name="description" content="hackers club" />
        <link rel="icon" href="logo-2.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;900&family=Raleway:wght@800&display=swap" rel="stylesheet" />
      </Head>

      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
