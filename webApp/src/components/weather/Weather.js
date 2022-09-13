import React from "react";
// Components
import Greeting from "./Greeting";

// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Weather = () => {
  return (
    <StyledWeather>
      <Greeting />
    </StyledWeather>
  );
};

const StyledWeather = styled(motion.div)`
  background: url(https://img.wallpapersafari.com/desktop/1600/900/69/78/dXmNy9.jpg) center center/cover;
  // background-color: #8BC6EC;
  // background-image:
  //   linear-gradient(to top, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
  //   url('https://img.wallpapersafari.com/desktop/1600/900/69/78/dXmNy9.jpg');
  height: 70vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 75rem) {
    flex-direction: column;
  }
`;

export default Weather;
