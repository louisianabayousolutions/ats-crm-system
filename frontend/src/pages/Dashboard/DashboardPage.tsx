import React from "react";
import StatsCard from "../../components/dashboard/StatsCard";

function DashboardPage() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ marginBottom: "8px" }}>Dashboard</h2>
        <p style={{ margin: 0, color: "#6b7280" }}>
          Overview of your recruiting activity.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <StatsCard title="Total Candidates" value="128" />
        <StatsCard title="Open Jobs" value="14" />
        <StatsCard title="Interviews This Week" value="9" />
      </div>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Recent Activity</h3>
        <ul style={{ paddingLeft: "20px", color: "#374151" }}>
          <li>Jane Doe moved to Screening</li>
          <li>New Frontend Developer job posted</li>
          <li>Michael Smith scheduled for interview</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;