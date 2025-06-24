import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TipsPage() {
  const { id } = useParams();
  const [milestone, setMilestone] = useState(null);
  const [tips, setTips] = useState([]);
  const [newTip, setNewTip] = useState("");

  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const milestoneRes = await axios.get(
          `https://babystepsplatform.onrender.com/api/milestones/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMilestone(milestoneRes.data);
        const tipsRes = await axios.get(
          `https://babystepsplatform.onrender.com/api/tips/${id}`
        );
        setTips(tipsRes.data);
      } catch (err) {
        console.error("Error loading data", err);
      }
    };
    fetchData();
  }, [id]);

  const handleAddTip = async () => {
    if (!newTip.trim()) return;
    try {
      const res = await axios.post(
        `https://babystepsplatform.onrender.com/tips/${id}`,
        { text: newTip },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTips([...tips, res.data]);
      setNewTip("");
    } catch (err) {
      console.error("Error adding tip", err);
    }
  };

  if (!milestone) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">🍼 {milestone.title}</h2>
      <p className="text-gray-600">{new Date(milestone.date).toDateString()}</p>
      <p className="mt-2 text-gray-700">{milestone.notes}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">💡 Community Tips</h3>
        {tips?.map((tip, i) => (
          <div key={i} className="bg-gray-100 rounded p-3 mb-2">
            {tip.text}
          </div>
        ))}

        <div className="mt-4">
          <textarea
            value={newTip}
            onChange={(e) => setNewTip(e.target.value)}
            placeholder="Add your tip..."
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleAddTip}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Tip
          </button>
        </div>
      </div>
    </div>
  );
}
