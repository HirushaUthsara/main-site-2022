import React from "react";
import Body from "../components/body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";

function Home() {
  return (
    <React.Fragment>
      <head>
        <link rel="icon" href="/logo-2.png" />

        <title> Hackers' Club | University of Peradeniya</title>
      </head>
      <NavBar />
      <Body />
      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
        integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
        crossorigin="anonymous"
      ></script>
    </React.Fragment>
  );
}

export default Home;
