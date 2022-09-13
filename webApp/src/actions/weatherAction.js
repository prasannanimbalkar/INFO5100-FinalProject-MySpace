import { byCityName } from "../api/weatherApi";

export const fetchWeather = (city) => async (dispatch) => {

  const weather = await fetch(byCityName(city), {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  
  const weatherData = await weather.json();
  dispatch({
    type: "FETCH_DATA",
    payload: {
      weatherInfo: weatherData,
    },
  });
};
