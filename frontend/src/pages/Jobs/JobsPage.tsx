import React from "react";
import JobsTable from "../../components/jobs/JobsTable";

function JobsPage() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ marginBottom: "8px" }}>Jobs</h2>
        <p style={{ margin: 0, color: "#6b7280" }}>
          Manage active job openings and requisitions.
        </p>
      </div>

      <JobsTable />
    </div>
  );
}

export default JobsPage;