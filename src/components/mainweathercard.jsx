import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Hot weather icon
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Cold weather icon
import CloudIcon from "@mui/icons-material/Cloud"; // Moderate weather icon
import "../App.css";
const MainWeatherCard = ({ weatherData }) => {
  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "City not available";
  const countryName = weatherData?.sys?.country || "Country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return (
        <WbSunnyIcon className="weather-icon" style={{ color: "orange" }} />
      );
    } else if (temperatureCelsius < 10) {
      return <AcUnitIcon className="weather-icon" style={{ color: "blue" }} />;
    } else {
      return <CloudIcon className="weather-icon" style={{ color: "gray" }} />;
    }
  };

  return (
    <div className="main-weather-card">
      <div className="weather-now">Now</div>
      <div className="weather-temp">
        {temperatureCelsius}°C {renderTemperatureIcon()}
      </div>
      <div className="weather-description">{weatherDescription}</div>
      <div className="weather-details">
        <div>
          <CalendarMonthIcon />
          {currentDate}
        </div>
        <div>
          <LocationOnIcon />
          {cityName}, {countryName}
        </div>
      </div>
    </div>
  );
};

export default MainWeatherCard;
