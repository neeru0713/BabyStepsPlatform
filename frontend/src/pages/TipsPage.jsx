import TipsSection from "../components/TipsSection";
import React from "react";
export default function TipsPage({ milestone, tips, onAddTip }) {
  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Tips for: {milestone.title}</h2>
      <TipsSection tips={tips} onAddTip={onAddTip} />
    </div>
  );
}
