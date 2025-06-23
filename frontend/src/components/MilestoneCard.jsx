import { FaEdit, FaTrashAlt, FaComments } from "react-icons/fa";
import React from "react";
export default function MilestoneCard({
  milestone,
  onEdit,
  onDelete,
  onViewTips,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">📍 {milestone.title}</h3>
        <span className="text-sm text-gray-500">
          {new Date(milestone.date).toDateString()}
        </span>
      </div>
      {milestone.notes && (
        <p className="text-gray-700 my-2">📝 {milestone.notes}</p>
      )}
      <div className="flex gap-4 mt-2">
        <button
          onClick={onViewTips}
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <FaComments /> View Tips
        </button>
        <button
          onClick={onEdit}
          className="text-yellow-600 flex items-center gap-1"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 flex items-center gap-1"
        >
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
}
