import React from "react";
import About from "./about/About";
import Timer from "./timer/Timer";
import Box from "./box/Box";
import FAQ from "./questions/FAQ";
import Events from "./events/Events";
import ContactUs from "./contactUs/ContactUs";

function Body() {
  return (
    <React.Fragment>
      <About />
      <Box />
      <Timer />
      <Box />
      <Events />
      <Box />
      <FAQ />
      <Box />
      <ContactUs />
    </React.Fragment>
  );
}

export default Body;
