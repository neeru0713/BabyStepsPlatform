import React,{ useState } from "react";

export default function MilestoneForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [date, setDate] = useState(initialData.date || "");
  const [notes, setNotes] = useState(initialData.notes || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, notes });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">
        {initialData._id ? "Edit" : "Add"} Milestone
      </h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-3"
        placeholder="Milestone Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        className="w-full p-2 border rounded mb-3"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Notes (optional)"
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save
      </button>
    </form>
  );
}
