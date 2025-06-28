import React, { useState } from "react";

export default function StudentPage() {
  const [topic, setTopic] = useState("");
  const [subtopics, setSubtopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const predefinedTopics = {
    "Artificial Intelligence": [
      "Basics of Artificial Intelligence",
      "Machine Learning Overview",
      "Deep Learning Fundamentals",
      "Applications of AI in Real Life",
    ],
    "Web Development": [
      "HTML & CSS Basics",
      "JavaScript Essentials",
      "Frontend Frameworks (React, Vue)",
      "Backend Technologies (Node.js, Django)",
    ],
    "Data Science": [
      "Data Analysis Basics",
      "Statistics and Probability",
      "Machine Learning Algorithms",
      "Data Visualization Tools",
    ],
  };

  const handleGenerateSubtopics = () => {
    if (!topic) {
      alert("Please enter a topic!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const subtopicsList = predefinedTopics[topic] || [
        `Introduction to ${topic}`,
        `Key Concepts in ${topic}`,
        `Applications of ${topic}`,
        `Advanced Topics in ${topic}`,
      ];
      setSubtopics(subtopicsList);
      setLoading(false);
    }, 1000); // Simulate processing delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-8 text-white">
      <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
        Student Learning Portal
      </h1>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 text-gray-800">
        <p className="text-lg mb-4 font-semibold">
          Enter the topic you’d like to learn:
        </p>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="e.g., Artificial Intelligence"
        />
        <button
          onClick={handleGenerateSubtopics}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md font-bold shadow-lg hover:scale-105 transform transition-transform"
        >
          {loading ? "Generating..." : "Generate Subtopics"}
        </button>
      </div>
      <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Subtopics to Cover
        </h2>
        {subtopics.length > 0 ? (
          <ul className="bg-white rounded-lg shadow-lg p-6 text-gray-800 list-disc list-inside">
            {subtopics.map((subtopic, index) => (
              <li key={index} className="mb-2 text-lg">
                {subtopic}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-white opacity-80">
            No subtopics generated yet.
          </p>
        )}
      </div>
    </div>
  );
}
