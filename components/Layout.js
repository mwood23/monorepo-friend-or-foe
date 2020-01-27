// example Layout.js
import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "5%"
    }}
  >
    {children}
  </div>
);
