import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import axios from "axios";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchClick = async () => {
    if (!searchCity.trim()) {
      setError("Please enter a city");
      return;
    }
    try {
      const API_KEY = "eb50a1048683032f45be3cca6a4ca5bd";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      if (response.data && response.data.name) {
        onSearch(response.data.name);
        setSearchCity("");
        setError("");
      } else {
        setError("City not found. Please check the spelling.");
      }
    } catch (error) {
      setError("Something went wrong. Try again later.");
    }
  };

  const handleCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const API_KEY = "eb50a1048683032f45be3cca6a4ca5bd";
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            if (response.data && response.data.name) {
              onSearch(response.data.name);
              setError("");
            } else {
              setError("Could not retrieve weather for your location.");
            }
          } catch (error) {
            setError("Could not fetch weather. Try again later.");
          }
        },
        () => {
          setError("Could not retrieve location. Try again.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <nav className="navbar">
      {/* 🌤️ Weather Title */}
      <div className="logo">
        <FilterDramaTwoToneIcon />
        <p>Weather</p>
      </div>

      {/* 🔍 Search Bar */}
      <div className="search-container">
        <TextField
          variant="outlined"
          placeholder="Search city e.g. 'London'"
          size="small"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          error={!!error}
          helperText={error}
          className={`search-input ${error ? "error" : ""}`} // ✅ Apply error class
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          className="search-btn"
        >
          Search
        </Button>
      </div>

      {/* 📍 Current Location */}
      <div className="current-location" onClick={handleCurrentLocation}>
        <GpsFixedIcon />
        <p>Current Location</p>
      </div>
    </nav>
  );
};

export default Navbar;
