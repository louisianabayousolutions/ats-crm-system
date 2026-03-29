import React from "react";

function Navbar() {
  return (
    <header
      style={{
        height: "70px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        padding: "0 20px"
      }}
    >
      <h1 style={{ fontSize: "20px", margin: 0 }}>Recruiting Dashboard</h1>
    </header>
  );
}

export default Navbar;