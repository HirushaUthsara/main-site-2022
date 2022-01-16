import React from "react";
import Body from "../components/body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Head from "next/head";

import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/logo-2.png" />

        <title> Hackers' Club | University of Peradeniya</title>
      </Head>

      <NavBar />
      <Body />
      <Footer />
      
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
        integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
        crossOrigin="anonymous"
      ></script>
    </React.Fragment>
  );
}

export default Home;
