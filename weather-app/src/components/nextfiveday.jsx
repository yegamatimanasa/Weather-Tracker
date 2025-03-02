import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ✅ Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FiveDayForecast = ({ forecastData }) => {
  // ✅ Extract one forecast per day
  const getUniqueDailyForecasts = (list) => {
    const dailyData = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Extract YYYY-MM-DD
      if (!dailyData[date]) {
        dailyData[date] = item; // Store the first occurrence of each day
      }
    });
    return Object.values(dailyData).slice(0, 5); // Get 5 unique days
  };

  const filteredForecast = getUniqueDailyForecasts(forecastData.list);

  // ✅ Extract Data
  const labels = filteredForecast.map((item) =>
    new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" }).format(
      new Date(item.dt_txt)
    )
  );

  const temperatures = filteredForecast.map((item) =>
    Math.round(item.main.temp)
  );
  const humidity = filteredForecast.map((item) => item.main.humidity);
  const windSpeed = filteredForecast.map((item) => item.wind.speed);
  const weatherConditions = filteredForecast.map(
    (item) => item.weather[0].description
  );
  const weatherIcons = filteredForecast.map((item) => item.weather[0].icon);

  // ✅ Chart Data
  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "rgb(255, 193, 7)",
        backgroundColor: "rgba(253, 37, 4, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(255, 193, 7)",
        pointRadius: 6,
      },
    ],
  };

  // ✅ Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        title: { display: true, text: "Temperature (°C)", color: "orange" },
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  return (
    <div className="forecast-container">
      {/* 🌤️ Weather Data Table */}
      <div className="weather-data">
        {labels.map((date, index) => (
          <div key={index} className="weather-card">
            <p className="date-label">{date}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcons[index]}@2x.png`}
              alt="Weather icon"
              className="weather-icon"
            />
            <p className="weather-condition">{weatherConditions[index]}</p>
            <p className="wind-humidity">💨 {windSpeed[index]} m/s</p>
            <p className="wind-humidity">💧 {humidity[index]}%</p>
          </div>
        ))}
      </div>

      {/* 📈 Temperature Trend Chart */}
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default FiveDayForecast;
