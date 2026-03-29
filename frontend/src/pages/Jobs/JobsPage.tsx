import React, { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  status: string;
};

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        setError("Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b">Department</th>
                <th className="p-4 border-b">Location</th>
                <th className="p-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="p-4 border-b">{job.title}</td>
                  <td className="p-4 border-b">{job.department}</td>
                  <td className="p-4 border-b">{job.location}</td>
                  <td className="p-4 border-b">{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobsPage;