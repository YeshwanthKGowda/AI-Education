import React, { useState } from "react";

export default function StudentPage() {
  const [topic, setTopic] = useState("");
  const [learningPath, setLearningPath] = useState([]);

  const handleGeneratePath = async () => {
    if (!topic) {
      alert("Please enter a topic!");
      return;
    }

    // Simulate an AI-generated learning path
    const generatedPath = [
      `Introduction to ${topic}`,
      `${topic} Basics`,
      `Advanced ${topic} Concepts`,
      `Practical Applications of ${topic}`,
    ];
    setLearningPath(generatedPath);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Student Portal</h1>
      <p className="mb-4">Enter the topic you#39;d like to learn:</p>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border px-4 py-2 mb-4 rounded-md w-1/2"
        placeholder="e.g., Artificial Intelligence"
      />
      <button
        onClick={handleGeneratePath}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Generate Learning Path
      </button>
      <h2 className="text-2xl font-bold text-center mt-8">Your Learning Path</h2>
      <ul className="list-disc mt-4">
        {learningPath.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
