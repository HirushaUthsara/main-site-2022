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
      <Box id="About" />
      <About />
      <Box id="Live_Now" />
      <Timer />
      <Box id="Events" />
      <Events />
      <Box id="FAQ" />
      <FAQ />
      <Box id="ContactUs" />
      <ContactUs />
    </React.Fragment>
  );
}

export default Body;
