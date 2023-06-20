async function getWeather() {
  // weather api fetch
  const apiKeyForWeatherApi =
    "ada779d28emsh1844b9da4e66202p1f9abajsn59a7920f353e";
  const hostForWeatherApi = "weather-by-api-ninjas.p.rapidapi.com";
  const weatherLocationForFetching = "Delhi";
  const weatherUrl: string = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${weatherLocationForFetching}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKeyForWeatherApi,
      "X-RapidAPI-Host": hostForWeatherApi,
    },
  };
  const weather = await fetch(weatherUrl, options);
  if (!weather.ok) {
    throw new Error("Weather Fetching Failed!");
  }
  return weather.json();
}

export { getWeather };
