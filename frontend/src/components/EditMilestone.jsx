import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MilestoneForm from "../components/MilestoneForm";

export default function EditMilestone() {
  const { id } = useParams();
  const [milestone, setMilestone] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMilestone = async () => {
      const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
      const res = await axios.get(
        `http://localhost:8080/api/milestones/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMilestone({
        ...res.data,
        date: res.data.date?.split("T")[0],
      });
    };

    fetchMilestone();
  }, [id]);

  const handleSave = async (updatedMilestone) => {
    const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
    await axios.put(
      `http://localhost:8080/api/milestones/${id}`,
      updatedMilestone,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    navigate("/");
  };

  if (!milestone) return <div>Loading...</div>;

  return (
    <div className="py-10">
      <MilestoneForm initialData={milestone} onSubmit={handleSave} />
    </div>
  );
}
