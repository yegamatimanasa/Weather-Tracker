import React from "react";


// Define the props type for the HighlightBox component


const HighlightBox = ({ title, value, Icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#374151",
        color: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        width: "180px",
        height: "80px",
      }}
    >
      <div>
        <div style={{ fontSize: "18px" }}>{title}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap:"wrap",
          }}
        >
          <Icon style={{ fontSize: "25px" }} />
          <p style={{ fontSize: "20px" }}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBox;

// import React from "react";

// const HighlightBox = ({ title, value, Icon, color = "#9CA3AF" }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#fff",
//         color: "#333", // ✅ Ensure text is visible
//         padding: "1rem",
//         borderRadius: "12px",
//         width: "180px",
//         height: "90px",
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
//         {title || "No Data"} {/* ✅ Prevent undefined text */}
//       </p>
//       <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//         <Icon style={{ fontSize: "30px", color: color }} />
//         <p style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
//           {value || "N/A"} {/* ✅ Prevent undefined values */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HighlightBox;
