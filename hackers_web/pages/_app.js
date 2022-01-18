/*
Do not change this file
*/

import NavBar from "../components/navbar/Navbar";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />

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
    </>
  );
}

export default MyApp;
