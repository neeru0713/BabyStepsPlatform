import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShareMilestoneModal({ milestoneId, onClose }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      const res = await axios.get(
        "https://babystepsplatform.onrender.com/api/users/all",
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
      `https://babystepsplatform.onrender.com/api/milestones/${milestoneId}/share`,
      { userId: selectedUser },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("Milestone shared successfully");
    onClose();
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-lg font-bold mb-4">Share Milestone</h2>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select a user</option>
          {users?.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name || user.email}
            </option>
          ))}
        </select>
        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={!selectedUser}
            onClick={handleShare}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
    