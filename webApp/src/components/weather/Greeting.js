import React, { useEffect } from "react";

import {WeatherData} from "./weatherData";
import { CurrentWeather } from "./currentWeather";

import moment from "moment";

import { useSelector, useDispatch } from "react-redux";

// Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Greeting = () => {
  const { user } = useSelector((state) => state.auth);
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <WeatherGreeting>
      <GreetingData>
        <>
          {user && (
            <>
              <h3>Welcome,</h3>
              <h1>{Capitalize(user.data.name)}</h1>
            </>
          )}
        </>

        <h3>{moment().format("LT")}</h3>
      </GreetingData>

      <CurrentWeather>
      </CurrentWeather>
      
      <WeatherData>
      </WeatherData>

    </WeatherGreeting>
  );
};

const WeatherGreeting = styled(motion.div)`
  h2 {
    color: #ffffff;
  }
  h3 {
    color: #f7f7f7;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4vh 7vw;
  flex-wrap: wrap;
`;

const GreetingData = styled(motion.div)`
  font-size: 3vw;
  color: #fff;

  h3 {
    font-size: 2.7vw;
  }
  @media (max-width: 48rem) {
    font-size: 1.5rem;

    h3 {
      font-size: 1.3rem;
    }
  }
`;


export default Greeting;
