// import AirIcon from "@mui/icons-material/Air";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import InvertColorsIcon from "@mui/icons-material/InvertColors";
// import HighlightBox from "../../src/components/Highlightbox";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CompressIcon from '@mui/icons-material/Compress';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

// const TodayHighlights = ({ weatherData, airQualityData }) => {
//   const { main, wind, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi; // Accessing aqi from airQualityData.main
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1:
//         return "Good";
//       case 2:
//         return "Fair";
//       case 3:
//         return "Moderate";
//       case 4:
//         return "Poor";
//       case 5:
//         return "Very Poor";
//       default:
//         return "Unknown";
//     }
//   };

//   const highlights = [
//     { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
//     {
//       title: "Pressure",
//       value: `${main.pressure} hPa`,
//       Icon: CompressIcon,
//     },
//     {
//       title: "Visibility",
//       value: `${visibility / 1000} km`,
//       Icon:  VisibilityIcon,
//     },
//     {
//       title: "Feels Like",
//       value: `${main.feels_like}°C`,
//       Icon: DeviceThermostatIcon,
//     },
//   ];

//   return (
//     <div
//       style={{
//         backgroundColor: "#4B5563",
//         color: "white",
//         width: "840px",
//         borderRadius: "0.5rem",
//         padding: "30px",
//       }}
//     >
//       <div style={{ fontSize: "20px" }}>Today's Highlights</div>
//       <div
//         style={{
//           display: "flex",
//           gap: "18px",
//           flexWrap:"wrap",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "#374151",
//             color: "white",
//             padding: "1rem",
//             borderRadius: "0.5rem",
//             marginTop: "11px",
//             width: "370px",
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 fontSize: "22px",
//               }}
//             >
//               <p>Air Quality Index</p>
//               <div
//                 style={{
//                   marginTop: "1rem",
//                   fontSize: "16px",
//                   fontWeight: "700",
//                   backgroundColor: "green",
//                   height: "20px",
//                   width: "45px",
//                   borderRadius: "6px",
//                   alignItems: "center",
//                   display: "flex",
//                   justifyContent: "center",
//                   flexWrap:"wrap",
//                 }}
//               >
//                 {renderAirQualityDescription(airQualityIndex)}
//               </div>
//             </div>
//             <div>
//               <AirIcon style={{ fontSize: "35px" }} />
//               <div
//                 style={{
//                   marginTop: "1rem",
//                   display: "grid",
//                   gridTemplateColumns: "repeat(4, 1fr)",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <p style={{ fontWeight: "bold" }}>CO</p>
//                   <p>{co} µg/m³</p>
//                 </div>
//                 <div>
//                   <p style={{ fontWeight: "bold" }}>NO</p>
//                   <p>{no} µg/m³</p>
//                 </div>
//                 <div>
//                   <p style={{ fontWeight: "bold" }}>NO₂</p>
//                   <p>{no2} µg/m³</p>
//                 </div>
//                 <div>
//                   <p style={{ fontWeight: "bold" }}>O₃</p>
//                   <p>{o3} µg/m³</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             backgroundColor: "#374151",
//             color: "white",
//             padding: "1rem",
//             borderRadius: "0.5rem",
//             marginTop: "11px",
//             width: "385px",
//           }}
//         >
//           <div style={{ fontSize: "22px", }}>
//             <p>Sunrise And Sunset</p>
//             <div style={{ display: "flex", justifyContent: "space-between" ,padding:'10px', flexWrap:"wrap"}}>
//               <div>
//                 <WbSunnyIcon style={{ fontSize: "40px",marginLeft:'30px' }} />
//                 <p style={{ fontSize: "25px",marginLeft:'20px' }} >{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
//               </div>
//               <div>
//                 <NightsStayIcon style={{ fontSize: "40px",marginRight:'35px' }} />
//                 <p style={{ fontSize: "25px",marginRight:'50px' }} >{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           gap: "4px",
//           marginTop: "10px",
//           flexWrap:"wrap",
//         }}
//       >
//         {highlights.map((highlight, index) => (
//           <HighlightBox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//             Icon={highlight.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;

// import React from "react";
// import AirIcon from "@mui/icons-material/Air";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import InvertColorsIcon from "@mui/icons-material/InvertColors";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CompressIcon from '@mui/icons-material/Compress';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
// import HighlightBox from "../../src/components/Highlightbox";

// const TodayHighlights = ({ weatherData, airQualityData }) => {
//   const { main, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi;
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   // Air Quality Description Function
//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1: return "Good";
//       case 2: return "Fair";
//       case 3: return "Moderate";
//       case 4: return "Poor";
//       case 5: return "Very Poor";
//       default: return "Unknown";
//     }
//   };

//   // Highlights Data
//   const highlights = [
//     { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon, color: "#60A5FA" },
//     { title: "Pressure", value: `${main.pressure} hPa`, Icon: CompressIcon, color: "#9CA3AF" },
//     { title: "Visibility", value: `${visibility / 1000} km`, Icon: VisibilityIcon, color: "#FACC15" },
//     { title: "Feels Like", value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon, color: "#F87171" },
//   ];

//   return (
//     <div
//       style={{
//         backgroundColor: "rgba(255, 255, 255, 0.1)", // Glassmorphism Effect
//         backdropFilter: "blur(10px)",
//         color: "white",
//         width: "90%",
//         maxWidth: "1200px",
//         borderRadius: "12px",
//         padding: "25px",
//         margin: "auto",
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <h2 style={{ fontSize: "22px", marginBottom: "15px", textAlign: "center", fontWeight: "bold" }}>
//         Today's Highlights
//       </h2>

//       {/* Air Quality & Sunrise/Sunset Section */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "15px", justifyContent: "center" }}>

//         {/* Air Quality Card */}
//         <div
//           style={{
//             backgroundColor: "#374151",
//             padding: "20px",
//             borderRadius: "12px",
//             transition: "transform 0.2s",
//           }}
//           onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
//           onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
//         >
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "18px" }}>
//             <p>Air Quality Index</p>
//             <div
//               style={{
//                 backgroundColor: airQualityIndex <= 2 ? "green" : airQualityIndex === 3 ? "orange" : "red",
//                 color: "white",
//                 padding: "5px 10px",
//                 borderRadius: "6px",
//                 fontWeight: "bold",
//               }}
//             >
//               {renderAirQualityDescription(airQualityIndex)}
//             </div>
//           </div>
//           <AirIcon style={{ fontSize: "40px", color: "#60A5FA", marginBottom: "10px" }} />
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
//             {[{ label: "CO", value: co }, { label: "NO", value: no }, { label: "NO₂", value: no2 }, { label: "O₃", value: o3 }]
//               .map((item, index) => (
//                 <div key={index} style={{ textAlign: "center" }}>
//                   <p style={{ fontWeight: "bold", fontSize: "14px" }}>{item.label}</p>
//                   <p style={{ fontSize: "14px" }}>{item.value} µg/m³</p>
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Sunrise & Sunset Card */}
//         <div
//           style={{
//             backgroundColor: "#374151",
//             padding: "20px",
//             borderRadius: "12px",
//             textAlign: "center",
//             transition: "transform 0.2s",
//           }}
//           onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
//           onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
//         >
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>Sunrise & Sunset</p>
//           <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
//             <div>
//               <WbSunnyIcon style={{ fontSize: "40px", color: "#FACC15" }} />
//               <p style={{ fontSize: "22px", fontWeight: "bold" }}>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
//             </div>
//             <div>
//               <NightsStayIcon style={{ fontSize: "40px", color: "#9CA3AF" }} />
//               <p style={{ fontSize: "22px", fontWeight: "bold" }}>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Highlights */}
//       <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
//         {highlights.map((highlight, index) => (
//           <HighlightBox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//             Icon={highlight.Icon}
//             color={highlight.color}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;

import React from "react";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import HighlightBox from "../../src/components/Highlightbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  // Function for Air Quality Description
  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const highlights = [
    { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    { title: "Pressure", value: `${main.pressure} hPa`, Icon: CompressIcon },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
      Icon: VisibilityIcon,
    },
    {
      title: "Feels Like",
      value: `${main.feels_like}°C`,
      Icon: DeviceThermostatIcon,
    },
  ];

  return (
    <div className="highlights-container">
      <h2 className="highlights-title">Today's Highlights</h2>

      {/* 🌍 Grid Layout - Responsive */}
      <div className="highlights-grid">
        {/* 🔹 Air Quality Index Card */}
        <div className="air-quality-card">
          {/* Header Section */}
          <div className="air-quality-header">
            <p>Air Quality Index</p>
            <span className={`aqi-badge aqi-${airQualityIndex}`}>
              {renderAirQualityDescription(airQualityIndex)}
            </span>
          </div>

          {/* Air Icon */}
          <AirIcon className="highlight-icon" />

          {/* Air Quality Data */}
          <div className="aqi-details">
            {[
              { label: "CO", value: co },
              { label: "NO", value: no },
              { label: "NO₂", value: no2 },
              { label: "O₃", value: o3 },
            ].map((item, index) => (
              <div key={index} className="aqi-box">
                <p className="aqi-label">{item.label}</p>
                <p className="aqi-value">{item.value} µg/m³</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Sunrise & Sunset Card */}
        <div className="highlight-card sunrise-card">
          <p className="highlight-title">Sunrise & Sunset</p>
          <div className="sun-details">
            <div>
              <WbSunnyIcon className="highlight-icon" />
              <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div>
              <NightsStayIcon className="highlight-icon" />
              <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Additional Highlights */}
      <div className="extra-highlights">
        {highlights.map((highlight, index) => (
          <HighlightBox
            key={index}
            title={highlight.title}
            value={highlight.value}
            Icon={highlight.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TodayHighlights;
