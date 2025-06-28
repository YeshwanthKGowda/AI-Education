import { useState } from 'react';
import LearningPath from '@/components/LearningPath';

const StudentPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async () => {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: '12345' }),
    });
    const data = await response.json();
    setRecommendations(data.recommendations);
  };

  return (
    <div>
      <h1>Student Portal</h1>
      <button onClick={fetchRecommendations}>Get Learning Path</button>
      <LearningPath recommendations={recommendations} />
    </div>
  );
};

export default StudentPage;
