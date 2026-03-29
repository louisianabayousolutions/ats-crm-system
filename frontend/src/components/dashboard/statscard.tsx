import React from "react";

type StatsCardProps = {
  title: string;
  value: string;
};

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>{title}</p>
      <h3 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>{value}</h3>
    </div>
  );
}

export default StatsCard;