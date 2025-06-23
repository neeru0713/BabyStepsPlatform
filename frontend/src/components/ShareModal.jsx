
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShareModal({ milestoneId, onClose }) {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      const res = await axios.get(
        "https://babystepsplatform.onrender.com/api/users/others",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleShare = async () => {
    const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
    await axios.post(
      `https://babystepsplatform.onrender.com/milestones/share/${milestoneId}`,
      { userId: selectedUserId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    onClose();
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="font-bold mb-2">Share Milestone</h2>
      <select
        className="border p-2 w-full"
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">Select user</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name} ({u.email})
          </option>
        ))}
      </select>
      <button
        onClick={handleShare}
        className="mt-3 bg-blue-600 text-white px-4 py-1 rounded"
      >
        Share
      </button>
    </div>
  );
}
