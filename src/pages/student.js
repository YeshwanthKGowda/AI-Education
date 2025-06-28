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
    <div className="min-h-screen bg-[linear-gradient(to_right,#f3f4f6,#e7ebf0)] p-8">
      <header className="header">
        <h1>Student Portal</h1>
      </header>
      <main className="flex flex-col items-center justify-center mt-8">
        <div className="card w-full max-w-md">
          <p className="text-lg font-semibold mb-4">Enter the topic you’d like to learn:</p>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input"
            placeholder="e.g., Artificial Intelligence"
          />
          <button
            onClick={handleGenerateSubtopics}
            className="button w-full"
          >
            {loading ? "Generating..." : "Generate Subtopics"}
          </button>
        </div>
        {subtopics.length > 0 && (
          <div className="card w-full max-w-2xl mt-8">
            <h2 className="text-xl font-bold mb-4">Subtopics to Cover</h2>
            <ul className="list-disc list-inside">
              {subtopics.map((subtopic, index) => (
                <li key={index} className="text-gray-800 mb-2">{subtopic}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <footer className="footer mt-8">
        <p>&copy; 2025 AI-Education. All rights reserved.</p>
      </footer>
    </div>
  );
}
