import React from "react";

export default function MilestoneTimeline({ milestones }) {
  return (
    <div className="relative border-l border-gray-300 pl-6">
      {milestones
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((m) => (
          <div key={m._id} className="mb-10 relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{m.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date(m.date).toLocaleDateString()}
              </p>
              {m.notes && (
                <p className="mt-2 text-gray-700 text-sm">{m.notes}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
