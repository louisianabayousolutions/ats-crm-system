import React, { useEffect, useState } from "react";
import { getCandidates } from "../../services/candidateService";

type Candidate = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
};

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidates();
        setCandidates(data);
      } catch (err) {
        setError("Failed to load candidates.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>

      {loading && <p>Loading candidates...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border-b">Name</th>
                <th className="p-4 border-b">Email</th>
                <th className="p-4 border-b">Phone</th>
                <th className="p-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="p-4 border-b">{candidate.name}</td>
                  <td className="p-4 border-b">{candidate.email}</td>
                  <td className="p-4 border-b">{candidate.phone}</td>
                  <td className="p-4 border-b">{candidate.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CandidatesPage;