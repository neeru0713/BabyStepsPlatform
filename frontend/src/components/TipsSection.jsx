import React, { useState } from "react";

export default function TipsSection({ tips, onAddTip }) {
  const [tip, setTip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTip(tip);
    setTip("");
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">💡 Community Tips</h3>
      {tips?.map((t, index) => (
        <div key={index} className="border-b py-2">
          <p className="text-gray-800">{t.text}</p>
          <span className="text-sm text-gray-500">– {t.contributor}</span>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Add a tip..."
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          required
        />
        <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
          Submit Tip
        </button>
      </form>
    </div>
  );
}
