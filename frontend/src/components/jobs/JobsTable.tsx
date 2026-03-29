import React from "react";

const jobs = [
  {
    id: 1,
    title: "Senior Recruiter",
    department: "Talent Acquisition",
    location: "Remote",
    status: "Open",
  },
  {
    id: 2,
    title: "Account Executive",
    department: "Sales",
    location: "Houston, TX",
    status: "Interviewing",
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "New Orleans, LA",
    status: "Open",
  },
];

function JobsTable() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Open Jobs</h3>

      <table style={{ width: "100%", marginTop: "16px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Department</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.department}</td>
              <td>{job.location}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobsTable;