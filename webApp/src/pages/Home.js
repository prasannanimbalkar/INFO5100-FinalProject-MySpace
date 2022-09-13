import React, { useEffect } from "react";

// Import components
import Weather from "../components/weather/Weather";
import News from "../components/NewsApp";

const Home = () => {
  return (
    <div>
      <Weather />
      <News />
    </div>
  );
};

export default Home;
