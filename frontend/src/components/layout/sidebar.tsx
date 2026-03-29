import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#111827",
        color: "#fff",
        padding: "20px",
        minHeight: "100vh"
      }}
    >
      <h2>ATS CRM</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
          Dashboard
        </Link>
        <Link to="/candidates" style={{ color: "#fff", textDecoration: "none" }}>
          Candidates
        </Link>
        <Link to="/jobs" style={{ color: "#fff", textDecoration: "none" }}>
          Jobs
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;