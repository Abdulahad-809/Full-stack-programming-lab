"use client";

import { useState } from "react";

const cardData = [
  {
    title: "Student Record",
    text: "Name: Ali Ahmed",
    color: "bg-blue-50 border-blue-200 text-blue-900",
  },
  {
    title: "Course Detail",
    text: "Course: Full Stack Programming",
    color: "bg-green-50 border-green-200 text-green-900",
  },
  {
    title: "Lab Status",
    text: "Status: Task 2 in progress",
    color: "bg-amber-50 border-amber-200 text-amber-900",
  },
];

export default function DynamicCard() {
  const [index, setIndex] = useState(0);
  const currentCard = cardData[index];

  function showNextCard() {
    setIndex((currentIndex) => (currentIndex + 1) % cardData.length);
  }

  return (
    <div className={`rounded-lg border p-6 shadow-sm ${currentCard.color}`}>
      <h2 className="text-2xl font-bold">{currentCard.title}</h2>
      <p className="mt-3 text-lg">{currentCard.text}</p>
      <button
        type="button"
        onClick={showNextCard}
        className="mt-5 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Change Content
      </button>
    </div>
  );
}
