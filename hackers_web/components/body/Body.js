import React from "react";
import About from "./about/About";
import Timer from "./timer/Timer";
import Box from "./box/Box";
import FAQ from "./questions/FAQ";
import Events from "./events/Events";
import ContactUs from "./contactUs/ContactUs";
import Cover from "./cover/Cover";
import useWindowSize from "../navbar/WindowSize";
function Body() {
  const size = useWindowSize();
  const FAQ_top = "0";
  const About_top = "-65px";

  if (size.width >= 960) {
    FAQ_top = "-130px";
  }
  if (size.width >= 1300) {
    About_top = "0px";
  }

  return (
    <React.Fragment>
      <Cover />
      <Box id="About" top={About_top} />
      <About />
      <Box id="Live_Now" top="0px" />
      <Timer />
      <Box id="Events" top="0px" />
      <Events />
      <Box id="FAQ" top={FAQ_top} />
      <FAQ />
      <Box id="ContactUs" top="0px" />
      <ContactUs />
    </React.Fragment>
  );
}

export default Body;
