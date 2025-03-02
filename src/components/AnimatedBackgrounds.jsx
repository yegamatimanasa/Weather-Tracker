import React, { useState, useEffect } from "react";

const VideoBackground = ({ weatherCondition }) => {
  const [videoError, setVideoError] = useState(false);
  const [videoSupported, setVideoSupported] = useState(true);
  useEffect(() => {
    // Test if Safari blocks video
    const video = document.createElement("video");
    if (!video.canPlayType("video/mp4")) {
      setVideoSupported(false); //  Fallback to background color
    }
  }, []);

  // Get the appropriate video source
  const getVideoSource = () => {
    if (!weatherCondition) return "/clearSky.mp4";
    switch (weatherCondition.toLowerCase()) {
      case "clear":
        return "/clearSky.mp4";
      case "clouds":
        return "/cloudy.mp4";
      case "rain":
        return "/rain.mp4";
      case "snow":
        return "/snow.mp4";
      case "fog":
        return "/fog.mp4";
      default:
        return "/clearSky.mp4";
    }
  };

  // Get fallback background color
  const getBackgroundColor = () => {
    switch (weatherCondition.toLowerCase()) {
      case "clear":
        return "#FFD700"; // Gold (Sunny)
      case "clouds":
        return "#B0C4DE"; // LightSteelBlue (Cloudy)
      case "rain":
        return "#708090"; // SlateGray (Rainy)
      case "snow":
        return "#ADD8E6"; // LightBlue (Snowy)
      case "fog":
        return "#778899"; // DarkGray (Foggy)
      default:
        return "#87CEFA"; // SkyBlue (Default)
    }
  };

  return (
    <div
      className="video-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: videoError ? getBackgroundColor() : "transparent", // Fallback color
        zIndex: -1,
      }}
    >
      {!videoError && (
        <video
          key={getVideoSource()}
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
          onError={() => setVideoError(true)} // Handle video errors
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={getVideoSource()} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
