import React, { useEffect, useState } from "react";
import axios from "axios";
import MilestoneCard from "../components/MilestoneCard";
import MilestoneTimeline from "../components/MilestoneTimeline";
import ShareModal from "../components/ShareModal"; // Make sure this exists
import { useNavigate } from "react-router-dom";
// import { calculatePregnancyWeek } from "../utils/pregnancyUtils";
import WeeklyTipCard from "../components/WeeklyTipCard";

export default function UserMilestoneDashboard() {
  const [milestones, setMilestones] = useState([]);
  const [view, setView] = useState("grid");
  const [showModal, setShowModal] = useState(false);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState(null);
  const navigate = useNavigate();
  const currentWeek = 16;

  const openShareModal = (milestone) => {
    setSelectedMilestoneId(milestone._id);
    setShowModal(true);
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
  //     const res = await axios.get("https://babystepsplatform.onrender.com/api/users", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, []);

  const fetchUserMilestones = async () => {
    try {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      const res = await axios.get(
        "https://babystepsplatform.onrender.com/api/milestones",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.error("Failed to fetch milestones:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this milestone?"
    );
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      await axios.delete(
        `https://babystepsplatform.onrender.com/api/milestones/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMilestones((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    const getMilestones = async () => {
      try {
        const data = await fetchUserMilestones();
        setMilestones(data);
      } catch (err) {
        console.error(err);
      }
    };

    getMilestones();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Weekly Tip</h2>
        <WeeklyTipCard week={currentWeek} />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Milestones</h1>
        <button
          onClick={() => setView(view === "grid" ? "timeline" : "grid")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Switch to {view === "grid" ? "Timeline View" : "Grid View"}
        </button>
      </div>

      {showModal && (
        <ShareModal
          milestoneId={selectedMilestoneId}
          onClose={() => setShowModal(false)}
        />
      )}

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {milestones.map((m) => (
            <MilestoneCard
              key={m._id}
              milestone={m}
              onEdit={() => navigate(`/milestone/${m._id}/edit`)}
              onDelete={() => handleDelete(m._id)}
              onViewTips={() => navigate(`/milestone/${m._id}/tips`)}
              onShare={() => openShareModal(m)} // Use correct prop name
            />
          ))}
        </div>
      ) : (
        <MilestoneTimeline milestones={milestones} />
      )}
    </div>
  );
};
