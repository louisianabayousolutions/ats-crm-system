import React from "react";

const candidates = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@email.com",
    phone: "(555) 111-2222",
    status: "Screening",
    source: "Website"
  },
  {
    id: 2,
    name: "Michael Smith",
    email: "michael.smith@email.com",
    phone: "(555) 333-4444",
    status: "Interview",
    source: "LinkedIn"
  },
  {
    id: 3,
    name: "Ashley Johnson",
    email: "ashley.j@email.com",
    phone: "(555) 777-8888",
    status: "Submitted",
    source: "Referral"
  }
];

function CandidateTable() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
      }}
    >
      <h3 style={{ marginTop: 0 }}>Candidate List</h3>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Phone</th>
            <th style={{ padding: "12px" }}>Status</th>
            <th style={{ padding: "12px" }}>Source</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
              <td style={{ padding: "12px" }}>{candidate.name}</td>
              <td style={{ padding: "12px" }}>{candidate.email}</td>
              <td style={{ padding: "12px" }}>{candidate.phone}</td>
              <td style={{ padding: "12px" }}>{candidate.status}</td>
              <td style={{ padding: "12px" }}>{candidate.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateTable;