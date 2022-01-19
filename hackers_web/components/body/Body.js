import React from "react";
import About from "./about/About";
import Timer from "./timer/Timer";
import Box from "./box/Box";
import FAQ from "./questions/FAQ";
import Events from "./events/Events";
import ContactUs from "./contactUs/ContactUs";
import Cover from "./cover/Cover";

function Body() {
  return (
    <React.Fragment>
      <Cover />
      <Box id="About" top="0px" />
      <About />
      <Box id="Live_Now" top="0px" />
      <Timer />
      <Box id="Events" top="0px" />
      <Events />
      <Box id="FAQ" top="0px" />
      <FAQ />
      <Box id="ContactUs" top="0px" />
      <ContactUs />
    </React.Fragment>
  );
}

export default Body;
