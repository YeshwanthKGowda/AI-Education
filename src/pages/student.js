import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Add your API key to `.env.local`
  })
);

export default function StudentPage() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState(4); // Default to 4 weeks
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateRoadmap = async () => {
    if (!topic || !duration) {
      alert("Please enter both the topic and duration!");
      return;
    }

    setLoading(true);
    try {
      // Use OpenAI to generate subtopics
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate a structured learning roadmap for the topic "${topic}" in ${duration} weeks. Include prerequisites, basics, and advanced concepts.`,
        max_tokens: 200,
        temperature: 0.7,
      });

      const subtopics = response.data.choices[0].text
        .trim()
        .split("\n")
        .filter((line) => line); // Split the response into lines and remove empty lines

      // Distribute subtopics over the specified duration
      const topicsPerWeek = Math.ceil(subtopics.length / duration);
      const distributedRoadmap = [];
      for (let i = 0; i < duration; i++) {
        distributedRoadmap.push({
          week: `Week ${i + 1}`,
          topics: subtopics.slice(i * topicsPerWeek, (i + 1) * topicsPerWeek),
        });
      }

      setRoadmap(distributedRoadmap);
    } catch (error) {
      console.error("Error generating roadmap:", error);
      alert("Failed to generate the roadmap. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-5xl font-bold text-center text-purple-700 mb-8">Student Portal</h1>
      <div className="flex flex-col items-center">
        <p className="text-lg mb-4 text-gray-800">
          Enter the topic you’d like to learn and the duration in weeks:
        </p>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-2/3 mb-4 focus:ring focus:ring-purple-300"
          placeholder="e.g., Artificial Intelligence"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-2/3 mb-4 focus:ring focus:ring-purple-300"
          placeholder="Duration (in weeks)"
        />
        <button
          onClick={handleGenerateRoadmap}
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
        >
          {loading ? "Generating..." : "Generate Roadmap"}
        </button>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Learning Roadmap</h2>
        {roadmap.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-bold text-purple-700">{item.week}</h3>
            <ul className="list-disc pl-6 mt-2">
              {item.topics.map((topic, idx) => (
                <li key={idx} className="text-gray-700">{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
