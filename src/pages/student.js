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
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-5xl font-bold text-center text-purple-700 mb-8">Student Portal</h1>
      <div className="flex flex-col items-center">
        <p className="text-lg mb-4 text-gray-800">
          Enter the topic you’d like to learn:
        </p>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-2/3 mb-4 focus:ring focus:ring-purple-300"
          placeholder="e.g., Artificial Intelligence"
        />
        <button
          onClick={handleGenerateSubtopics}
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
        >
          {loading ? "Generating..." : "Generate Subtopics"}
        </button>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Subtopics to Learn
        </h2>
        {subtopics.length > 0 ? (
          <ul className="list-disc mx-auto w-2/3 text-gray-700">
            {subtopics.map((subtopic, index) => (
              <li key={index} className="mb-2">
                {subtopic}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">
            No subtopics generated yet.
          </p>
        )}
      </div>
    </div>
  );
}
