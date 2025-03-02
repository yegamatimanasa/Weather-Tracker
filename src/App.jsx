import React, { useState, useEffect } from "react";
import Navbar from "../src/components/navbar";
import MainWeatherCard from "../src/components/mainweathercard";
import FiveDayForecast from "./components/nextfiveday";
import TodayHighlights from "../src/components/todayhighlights";
import VideoBackground from "../src/components/AnimatedBackgrounds"; // ✅ Import Video Background
import "./App.css";
import axios from "axios";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState("clear"); // ✅ Track weather condition

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchAirQualityData = (lat, lon) => {
    const API_KEY = "eb50a1048683032f45be3cca6a4ca5bd";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((response) => {
        if (response.data.list && response.data.list.length > 0) {
          console.log("Air Quality Data:", response.data.list[0]); // ✅ Debug log
          setAirQualityData(response.data.list[0]);
        } else {
          console.error(
            "Air Quality Data not found in API response",
            response.data
          );
        }
      })
      .catch((error) =>
        console.error("Error fetching the air quality data:", error)
      );
  };

  const fetchWeatherData = (city) => {
    const API_KEY = "eb50a1048683032f45be3cca6a4ca5bd";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.weather && data.weather[0] && data.weather[0].main) {
          setWeatherCondition(data.weather[0].main.toLowerCase()); // ✅ Ensure valid condition
          console.log(
            "Updated Weather Condition:",
            data.weather[0].main.toLowerCase()
          ); // ✅ Debug log
        } else {
          console.error("Weather condition not found in API response", data);
        }
        setWeatherData(data);
        fetchAirQualityData(data.coord.lat, data.coord.lon);

        // ✅ Fetch the 5-day forecast correctly
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
          )
          .then((response) => {
            console.log("5-Day Forecast API Response:", response.data); // ✅ Debugging log
            if (response.data.list) {
              setFiveDayForecast(response.data); // ✅ Ensure correct data is stored
            } else {
              console.error("Forecast data is missing list:", response.data);
            }
          })
          .catch((error) =>
            console.error("Error fetching 5-day forecast data:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching the weather data:", error)
      );
  };

  return (
    <div className="weather-dashboard">
      {/* ✅ Video Background - Keeps it fixed in the background */}
      <VideoBackground weatherCondition={weatherCondition} />

      {/* ✅ Navbar - Make sure it's placed above the video */}
      <Navbar onSearch={fetchWeatherData} />

      {/* ✅ Main Weather Content */}
      {weatherData && (
        <>
          <div className="weather-content">
            <MainWeatherCard weatherData={weatherData} />
            <TodayHighlights
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>

          {/* ✅ 5-Day Forecast Section - Ensure it's visible */}
          <div className="forecast-container">
            <h2>5-Day Weather Forecast</h2>
            {fiveDayForecast && (
              <FiveDayForecast forecastData={fiveDayForecast} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
