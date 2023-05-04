import React, { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import "./App.css";
import Title from "./Components/Title";

const App = () => {
  const [query, setQuery] = useState("");
  const [err, setErr] = useState(false);
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery("");
      } catch {
        setErr(true);
      }
    }
  };
  console.log("hahasan", err);
  return (
    <div className="main-container">
      <Title />
      <input
        type="text"
        className="search"
        placeholder="جستجو..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
