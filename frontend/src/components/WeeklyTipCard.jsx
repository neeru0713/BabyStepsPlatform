// components/WeeklyTipCard.jsx
import React from "react";

export default function WeeklyTipCard({ week }) {
  const tipsByWeek = {
    
        4: {
          title: "Confirming Pregnancy 🤰",
          content: "Take a test and consult your doctor to start prenatal care.",
        },
        8: {
          title: "Early Symptoms 🌱",
          content: "Morning sickness, fatigue, and cravings may kick in. Rest is key!",
        },
        12: {
          title: "First Trimester Wrap-up 🎉",
          content: "Your baby's vital organs are developing. Keep up prenatal vitamins.",
        },
        16: {
          title: "Feeling the First Kicks 👶",
          content:
            "This week, you might start feeling your baby’s movements. Try lying on your side after eating — it's the perfect moment to bond.",
        },
        20: {
          title: "Time for the Anatomy Scan 🧬",
          content:
            "Your detailed ultrasound is here! It checks on baby’s growth, organs, and development. Schedule it with your doctor if you haven't yet.",
        },
        24: {
          title: "Keep Moving 🏃‍♀️",
          content:
            "Gentle exercise like prenatal yoga helps circulation and reduces swelling.",
        },
        28: {
          title: "Third Trimester Starts 💪",
          content:
            "Plan your birth preferences and finalize your baby registry. You’re in the home stretch!",
        },
        32: {
          title: "Practice Contractions ⏱️",
          content:
            "Braxton Hicks might begin. They’re normal as your body prepares for labor.",
        },
        36: {
          title: "Ready the Hospital Bag 👜",
          content:
            "Pack essentials for baby and mom — you might go into labor anytime now.",
        },
        40: {
          title: "It’s Go Time! 👶",
          content:
            "Labor could begin soon. Keep your doctor’s contact ready and stay calm.",
        },
      }
      

  const tip = tipsByWeek[week] || {
    title: "Stay Healthy ❤️",
    content:
      "Keep up your hydration, nutrition, and sleep. Every week counts toward a healthy baby and a healthy you!",
  };

  return (
    <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-1">{tip.title}</h3>
      <p className="text-gray-700">{tip.content}</p>
    </div>
  );
}
