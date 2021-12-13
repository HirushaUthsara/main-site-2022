import React from "react";
import About from './about/About';
import Timer from './timer/Timer';
import Box from "./box/Box";
import FAQ from "./questions/FAQ";
function Body() {
  return (
    <React.Fragment>
      <About />
      <Box />
      <Timer />
      <Box/>
      <FAQ/>
    </React.Fragment>
  );
}

export default Body;
