// pages/AddMilestone.jsx
import MilestoneForm from "../components/MilestoneForm";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddMilestone() {
  const navigate = useNavigate();

  const handleSave = async (milestone) => {
    try {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      await axios.post(
        "https://babystepsplatform.onrender.com/api/milestones",
        milestone,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Milestone added successfully!");
      setTimeout(() => navigate("/"), 1500); // Give user a moment to see the toast
    } catch (err) {
      toast.error("Error saving milestone");
      console.error(err);
    }
  };

  return (
    <div className="py-10">
      <ToastContainer />
      <MilestoneForm onSubmit={handleSave} />
    </div>
  );
}
