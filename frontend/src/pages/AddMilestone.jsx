// pages/AddMilestone.jsx
import MilestoneForm from "../components/MilestoneForm";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddMilestone() {
  const navigate = useNavigate();

  const handleSave = async (milestone) => {
    try {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      await axios.post("http://localhost:8080/api/milestones", milestone, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
    } catch (err) {
      alert("Error saving milestone");
      console.error(err);
    }
  };

  return (
    <div className="py-10">
      <MilestoneForm onSubmit={handleSave} />
    </div>
  );
}
