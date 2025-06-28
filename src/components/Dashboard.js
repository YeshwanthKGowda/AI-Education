import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((data) => setAnalytics(data));
  }, []);

  if (!analytics) return <div>Loading...</div>;

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <p>Total Users: {analytics.totalUsers}</p>
      <p>Active Users: {analytics.activeUsers}</p>
      {/* Add more charts/visuals */}
    </div>
  );
};

export default Dashboard;
