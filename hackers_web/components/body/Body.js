import React from "react";
import About from './about/About';
import Timer from './timer/Timer';
import Box from "./box/Box";
function Body() {
  return (
    <React.Fragment>
      <About />
      <Box />
      <Timer />
    </React.Fragment>
  );
}

export default Body;
