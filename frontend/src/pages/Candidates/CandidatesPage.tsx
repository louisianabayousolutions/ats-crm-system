import React from "react";
import CandidateTable from "../../components/candidates/CandidateTable";

function CandidatesPage() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ marginBottom: "8px" }}>Candidates</h2>
        <p style={{ margin: 0, color: "#6b7280" }}>
          Manage and review candidate records.
        </p>
      </div>

      <CandidateTable />
    </div>
  );
}

export default CandidatesPage;